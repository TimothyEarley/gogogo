package de.earley.gogogo.game

import de.earley.gogogo.game.grid.*
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

    // mutators
    fun move(move: Move): MoveResult
    fun undo()
    fun canUndo(): Boolean

    companion object {
        fun initial(): State = MutableState(
            playersTurn = Player.Blue,
            lastPushed = null,
            grid = GameGrid.create(GAME_WIDTH, GAME_HEIGHT) { x, _ ->
                when (x) {
                    0 -> Player.Blue
                    GAME_WIDTH - 1 -> Player.Red
                    else -> null
                }
            }
        )
    }
}

// a mutable implementation of State
private data class MutableState(
    override var playersTurn: Player,
    override var lastPushed: Point?,
    private val grid: GameGrid,
) : State {

    override var victor: Player? = null

    private val history: ArrayDeque<Command> = ArrayDeque()

    override val possibleMoves: List<Move>
        get() = _possibleMoves.toList() // copy the list
    private val _possibleMoves: MutableList<Move> = mutableListOf()

    init {
        recalculatePossibleMoves()
    }


    private fun recalculatePossibleMoves() {
        val newMoves = grid.tokensFor(playersTurn)
            .asSequence()
            .filter { isEligibleToMove(it) }
            .flatMap {
                sequenceOf(it.left(), it.right(), it.up(), it.down())
            }
            .filter { findMoveError(it) == null }

        _possibleMoves.clear()
        _possibleMoves.addAll(newMoves)
    }

    override fun move(move: Move): MoveResult {
        if (move !in _possibleMoves) {
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

        //TODO maybe instead just figure out which moves should be deleted and which added
        // for this we would need to store all possible moves by both players
        recalculatePossibleMoves()
        victor = isVictory()

        // create next state
        return MoveResult.Success
    }

    private fun isVictory(): Player? {
        // victory conditions:
        // - opponent has no legal moves
        // - reach the end of the board

        // assume _possibleMoves is up to date
        if (_possibleMoves.isEmpty()) {
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
        recalculatePossibleMoves()
        victor = isVictory()
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