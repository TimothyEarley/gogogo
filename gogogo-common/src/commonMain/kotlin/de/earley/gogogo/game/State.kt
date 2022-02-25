package de.earley.gogogo.game

import de.earley.gogogo.game.grid.*
import io.github.reactivecircus.cache4k.Cache
import kotlin.math.abs

sealed class MoveResult {
    object Success : MoveResult()
    sealed class Error(val msg: String) : MoveResult() {
        object NotPlayersPiece : Error("You can only move your own pieces")
        object WasPushed : Error("You cannot move a pushed piece")
        object NotAdjacent : Error("You can only move to an adjacent square")
        object CannotPush : Error("You cannot push more than one piece")

        // object RepeatedMove : Error("You cannot repeat a move made four moves ago")
        object CannotMoveOfBoard : Error("You cannot repeat a move made four moves ago")

        override fun toString(): String = msg
    }
}

interface State {

    // state

    val playersTurn: Player
    val victor: Player?
    fun tokenAt(p: Point): Player?
    val lastPushed: Point?

    // helpers

    fun tokensFor(player: Player): List<Point>
    fun isEligibleToMove(from: Point): Boolean
    val possibleMoves: List<Move>

    // can be slow
    fun deepCopy(): State


    // mutators
    fun move(move: Move): MoveResult
    fun undo()
    fun canUndo(): Boolean

    companion object {
        fun initial(): State = MutableState(
            playersTurn = Player.Blue,
            lastPushed = null,
            grid = GameGrid.create { x, _ ->
                when (x) {
                    0 -> Player.Blue
                    GAME_WIDTH - 1 -> Player.Red
                    else -> null
                }
            }
        )
    }
}

private val possibleMovesCache = Cache.Builder()
    .maximumCacheSize(1000)
    .build<Int, List<Move>>()

private fun <Key : Any, Value : Any> Cache<Key, Value>.getOrPut(key: Key, defaultValue: () -> Value): Value {
    return get(key) ?: defaultValue.invoke().also {
        put(key, it)
    }
}


// : MutableMap<Int, List<Move>> = mutableMapOf()

// a mutable implementation of State
private data class MutableState(
    override var playersTurn: Player,
    override var lastPushed: Point?,
    private val grid: GameGrid,
) : State {

    override var victor: Player? = null

    private val history: ArrayDeque<Command> = ArrayDeque()

    override val possibleMoves: List<Move>
        get() = possibleMovesCache.getOrPut(hashCode()) {
            calculatePossibleMoves().toList()
        }

    private fun calculatePossibleMoves(): Sequence<Move> {
        return grid.tokensFor(playersTurn)
            .asSequence()
            .filter { isEligibleToMove(it) }
            .flatMap {
                sequenceOf(it.left(), it.right(), it.up(), it.down())
            }
            .filter { findMoveError(it) == null }
    }

    override fun move(move: Move): MoveResult {
        if (move !in possibleMoves) {
            return findMoveError(move)!! // if null we made a mistake in possible moves
        }

        val next = nextOver(move.from, move.to)
        val pushing = grid[move.to] != null && grid.isInGrid(next.x, next.y)

        val oldTo = grid[move.to]
        val oldPushed = lastPushed

        val command = Command(
            {
                if (pushing) {
                    grid[next] = grid[move.to]
                    lastPushed = next
                } else {
                    lastPushed = null
                }
                grid[move.to] = grid[move.from]
                grid[move.from] = null
                playersTurn = playersTurn.next()
            },
            {
                if (pushing) {
                    grid[next] = null // can only push one, so that must have been empty
                }
                lastPushed = oldPushed
                grid[move.from] = grid[move.to]
                grid[move.to] = oldTo
                playersTurn = playersTurn.next()
            }
        )

        command.apply(this)
        history.addLast(command)

        updateAfterMove()

        // create next state
        return MoveResult.Success
    }

    private fun updateAfterMove() {
        victor = isVictory()
    }

    private fun isVictory(): Player? {
        // victory conditions:
        // - opponent has no legal moves
        // - reach the end of the board

        // assume possibleMoves is up-to-date
        if (possibleMoves.isEmpty()) {
            return playersTurn.next()
        }

        // we need to check for both players, since one could push an opponent into the goal
        if (grid.tokensFor(Player.Red).any { it.x == 0 }) return Player.Red
        if (grid.tokensFor(Player.Blue).any { it.x == GAME_WIDTH - 1 }) return Player.Blue

        return null
    }

    override fun canUndo(): Boolean = history.isNotEmpty()

    override fun undo() {
        require(canUndo()) { "Cannot undo!" }
        val last = history.removeLast()
        last.undo(this)
        updateAfterMove()
    }

    //HOTSPOT - SLOW
    private fun findMoveError(m: Move): MoveResult.Error? = when {
        playersTurn != grid[m.from] -> MoveResult.Error.NotPlayersPiece
        lastPushed == m.from -> MoveResult.Error.WasPushed
        !grid.isInGrid(m.to.x, m.to.y) -> MoveResult.Error.CannotMoveOfBoard
        !isAdjacent(m.from, m.to) -> MoveResult.Error.NotAdjacent
        /* SLOW */ !canPush(m.from, m.to) -> MoveResult.Error.CannotPush
        // TODO detect repeats
        // /* SLOW */ isRepeatedMove(m.from, m.to) -> MoveResult.Error.RepeatedMove
        else -> null
    }

    //HOTSPOT
    override fun isEligibleToMove(from: Point): Boolean {
        return lastPushed != from && playersTurn == grid[from]
    }


    private fun canPush(from: Point, to: Point): Boolean {
        val next = nextOver(from, to)
        return grid[to] == null || !grid.isInGrid(next.x, next.y) || grid[next] == null
    }

    override fun tokensFor(player: Player): List<Point> {
        return grid.tokensFor(player)
    }

    override fun tokenAt(p: Point): Player? = grid[p]

    override fun deepCopy(): State = MutableState(
        playersTurn = playersTurn,
        lastPushed = lastPushed,
        grid = grid.deepCopy()
    )


    override fun hashCode(): Int {
        // -1 because otherwise (0, 0) and null have the same hashcode
        return grid.hashCode()
            .times(31).plus(lastPushed?.hashCode() ?: -1)
            .times(31).plus(playersTurn.hashCode())
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as MutableState

        if (playersTurn != other.playersTurn) return false
        if (lastPushed != other.lastPushed) return false
        if (grid != other.grid) return false

        return true
    }

}

private data class Command(
    val apply: MutableState.() -> Unit,
    val undo: MutableState.() -> Unit
)

private fun nextOver(from: Point, to: Point) = Point(
    x = from.x + 2 * (to.x - from.x), // works, but only because dx==1, dy==1
    y = from.y + 2 * (to.y - from.y)
)

private fun isAdjacent(from: Point, to: Point): Boolean {
    val dx = abs(from.x - to.x)
    val dy = abs(from.y - to.y)
    return (dx == 1 && dy == 0) || (dx == 0 && dy == 1)
}