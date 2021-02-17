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
    }
}

interface State {

    // state

    val playersTurn: Player
    val victor: Player?
    fun tokenAt(p: Point): Player?
    val lastPushed: Point?

    // helpers

    fun tokensFor(player: Player) : List<Point>
    fun isEligibleToMove(from: Point): Boolean
    val possibleMoves : List<Move>

    // mutators
    fun move(move: Move): MoveResult
    fun undoMove(move: Move): MoveResult

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
    // TODO history to detect repeats
) : State {

    override var victor: Player? = null


    // store all current possible and illegal moves
    override val possibleMoves : MutableList<Move> = mutableListOf()

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

        possibleMoves.clear()
        possibleMoves.addAll(newMoves)
    }

    override fun move(move: Move): MoveResult {
        if (move !in possibleMoves) {
            return findMoveError(move)!! // if null we made a mistake in possible moves
        }

        val pushing = grid[move.to] != null

        if (pushing) {
            val next = nextOver(move.from, move.to)
            // check if we are pushing outside the play area
            if (grid.isInGrid(next.x, next.y)) {
                grid[next] = grid[move.to]
                lastPushed = next
            }
        } else {
            lastPushed = null
        }

        grid[move.to] = grid[move.from]
        grid[move.from] = null

        playersTurn = playersTurn.next()

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

        // assume possibleMoves is up to date
        if (possibleMoves.isEmpty()) {
            return playersTurn.next()
        }

        // we need to check for both players, since one could push an opponent into the goal
        if (grid.tokensFor(Player.Red).any { it.x == 0 }) return Player.Red
        if (grid.tokensFor(Player.Blue).any { it.x == GAME_WIDTH - 1 }) return Player.Blue

        return null
    }

    override fun undoMove(move: Move): MoveResult {
        // lastPushed is tricky
        TODO()
    }

    //HOTSPOT - SLOW
    private fun findMoveError(m : Move): MoveResult.Error? = when {
        playersTurn != grid[m.from] -> MoveResult.Error.NotPlayersPiece
        lastPushed == m.from -> MoveResult.Error.WasPushed
        !grid.isInGrid(m.to.x, m.to.y) -> MoveResult.Error.CannotMoveOfBoard
        !isAdjacent(m.from, m.to) -> MoveResult.Error.NotAdjacent
        /* SLOW */ !canPush(m.from, m.to) -> MoveResult.Error.CannotPush
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

private fun nextOver(from: Point, to: Point) = Point(
    x = from.x + 2 * (to.x - from.x), // works, but only because dx==1, dy==1
    y = from.y + 2 * (to.y - from.y)
)

private fun isAdjacent(from: Point, to: Point): Boolean {
    val dx = abs(from.x - to.x)
    val dy = abs(from.y - to.y)
    return (dx == 1 && dy == 0) || (dx == 0 && dy == 1)
}