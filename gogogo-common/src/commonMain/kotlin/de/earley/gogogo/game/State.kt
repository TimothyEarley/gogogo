package de.earley.gogogo.game

import de.earley.gogogo.game.grid.*
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.InvocationKind
import kotlin.contracts.contract
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
    fun isEligibleToMove(from: Point): Boolean
    val possibleMoves: List<Move>
//    val grid: GameGrid // should only be used for reading!
    fun longHashCode(): Long

    fun onEach(f : (Point, Player) -> Unit): Unit

    // can be slow
    fun deepCopy(): State


    // mutators
    fun move(move: Move): MoveResult
    fun undo()
    fun canUndo(): Boolean

    fun renderText(): String

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

        fun create(playersTurn: Player, lastPushed: Point?, grid: GameGrid): State = MutableState(playersTurn, lastPushed, grid)
    }
}

// : MutableMap<Int, List<Move>> = mutableMapOf()

// a mutable implementation of State
data class MutableState(
    override var playersTurn: Player,
    override var lastPushed: Point?,
    val grid: GameGrid,
) : State {

    override var victor: Player? = null

    private val history: ArrayDeque<Command> = ArrayDeque()

    private var currentPossibleMoves: List<Move>? = null

    override val possibleMoves: List<Move>
        get() = currentPossibleMoves ?:  calculatePossibleMoves()
//        possibleMovesCache.getOrPut(longHashCode()) {
//            calculatePossibleMoves().toList()
//        }.also {
//            currentPossibleMoves = it
//        }

    private fun calculatePossibleMoves(): List<Move> = buildList {
        grid.onEach { p, player ->
            if (player == playersTurn && isEligibleToMove(p)) {
                p.left().takeIf { findMoveError(it) == null }?.let { add(it) }
                p.right().takeIf { findMoveError(it) == null }?.let { add(it) }
                p.up().takeIf { findMoveError(it) == null }?.let { add(it) }
                p.down().takeIf { findMoveError(it) == null }?.let { add(it) }
            }
        }
    }

    override fun move(move: Move): MoveResult {
        if (move !in possibleMoves) {
            return findMoveError(move) ?: run {
                // if null we made a mistake in possible moves
                throw Exception(
                    """
The move is valid, but not in possible moves. This is bad!
Move: $move
Possible Moves: $possibleMoves
Players turn: $playersTurn
Last pushed: $lastPushed
Grid:
${grid.renderText()}
"""
                )
            }
        }

        val next = nextOver(move.from, move.to)
        val pushing = grid[move.to] != null && next.isInBounds()

        val command = MoveCommand(pushing, move, next, lastPushed, grid[move.to])

        command.executeCommand(this)
        history.addLast(command)

        updateAfterMove()

//        val old = coliisionChecks.put(hashCode(), this.deepCopy() as MutableState)
//        require (old == null || old == this) {
//            """
//                Hash collision
//                old: $old, ${old.hashCode()}
//                this: $this, ${this.hashCode()}
//                with long hash:
//                old: ${old?.longHashCode()}
//                this: ${this.longHashCode()}
//                }
//            """.trimIndent()
//        }

        return MoveResult.Success
    }

    private fun updateAfterMove() {
        currentPossibleMoves = null // reset possible moves
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
        for (y in 0 until GAME_HEIGHT) {
            if (grid[0, y] == Player.Red) return Player.Red
            if (grid[GAME_WIDTH - 1, y] == Player.Blue) return Player.Blue
        }

        return null
    }

    override fun canUndo(): Boolean = history.isNotEmpty()
    override fun renderText(): String = grid.renderText()

    override fun undo() {
        require(canUndo()) { "Cannot undo!" }
        val last = history.removeLast()
        last.undoCommand(this)
        updateAfterMove()
    }

    //HOTSPOT
    override fun isEligibleToMove(from: Point): Boolean {
        return lastPushed != from && playersTurn == grid[from]
    }

    override fun tokenAt(p: Point): Player? = grid[p]

    override fun deepCopy(): State = MutableState(
        playersTurn = playersTurn,
        lastPushed = lastPushed,
        grid = grid.deepCopy()
    )

    /*
     Has to unique since it is used as an identifier (Zobrist hash)
     */
    @Deprecated("This seems to have many collisions, so use longHashCode",
        ReplaceWith("longHashCode()"))
    override fun hashCode(): Int {
        return longHashCode().hashCode()
    }

    /**
     * Separate the grid hash and our data to avoid collisions.
     * The assumption is that the grid zobrist hash is good.
     */
    override fun longHashCode(): Long {
        // the default value cannot be 0 because otherwise (0, 0) and null have the same hashcode
        // and it cannot be negative or we have too many bits set to 1
        val myDataHash =
             ((lastPushed?.hashCode() ?: -1) shl 3).or(playersTurn.ordinal)
        return (grid.hashCode().toLong() shl 32).or(myDataHash.toLong().and(0xffffffffL))
    }

    override fun onEach(f: (Point, Player) -> Unit) = grid.onEach(f)

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as MutableState

        if (playersTurn != other.playersTurn) return false
        if (lastPushed != other.lastPushed) return false
        if (grid != other.grid) return false

        return true
    }

    private data class MoveCommand(
        private val pushing : Boolean,
        val move: Move,
        private val next: Point,
        private val oldPushed: Point?,
        private val oldTo: Player?
    ) : Command {
        override fun executeCommand(state: MutableState) = with(state) {
            if (pushing) {
                grid[next] = grid[move.to]
                lastPushed = next
            } else {
                lastPushed = null
            }
            grid[move.to] = grid[move.from]
            grid[move.from] = null
            playersTurn = playersTurn.next()
        }

        override fun undoCommand(state: MutableState) = with(state) {
            if (pushing) {
                grid[next] = null // can only push one, so that must have been empty
            }
            lastPushed = oldPushed
            grid[move.from] = grid[move.to]
            grid[move.to] = oldTo
            playersTurn = playersTurn.next()
        }
    }
}

//HOTSPOT - SLOW
fun State.findMoveError(m: Move): MoveResult.Error? = when {
    playersTurn != tokenAt(m.from) -> MoveResult.Error.NotPlayersPiece
    lastPushed == m.from -> MoveResult.Error.WasPushed
    !m.to.isInBounds() -> MoveResult.Error.CannotMoveOfBoard
    !isAdjacent(m.from, m.to) -> MoveResult.Error.NotAdjacent
    /* SLOW */ !canPush(m.from, m.to) -> MoveResult.Error.CannotPush
    // TODO detect repeats
    // /* SLOW */ isRepeatedMove(m.from, m.to) -> MoveResult.Error.RepeatedMove
    else -> null
}

private fun State.canPush(from: Point, to: Point): Boolean {
    val next = nextOver(from, to)
    return tokenAt(to) == null ||
            !next.isInBounds()
            || tokenAt(next) == null
}

private interface Command {
    fun executeCommand(state: MutableState)
    fun undoCommand(state: MutableState)
}

fun nextOver(from: Point, to: Point) = Point(
    x = from.x + 2 * (to.x - from.x), // works, but only because dx==1, dy==1
    y = from.y + 2 * (to.y - from.y)
)

private fun isAdjacent(from: Point, to: Point): Boolean {
    val dx = abs(from.x - to.x)
    val dy = abs(from.y - to.y)
    return (dx == 1 && dy == 0) || (dx == 0 && dy == 1)
}

@OptIn(ExperimentalContracts::class)
inline fun <T> State.withMove(move: Move, block: () -> T): T {
    contract { callsInPlace(block, InvocationKind.EXACTLY_ONCE) }
    val result = move(move)
    require(result is MoveResult.Success) {
        "Tried to perform an illegal move. Got: $result"
    }
    try {
        return block()
    } finally {
        undo()
    }
}