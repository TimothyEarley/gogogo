package de.earley.gogogo.game

import de.earley.gogogo.ai.MoveToState
import de.earley.gogogo.game.grid.GameGrid
import de.earley.gogogo.game.grid.*
import kotlin.math.abs

sealed class MoveResult {
	data class Success(val state: State): MoveResult()
	sealed class Error(val msg: String): MoveResult() {
		object NotPlayersPiece : Error("You can only move your own pieces")
		object WasPushed : Error("You cannot move a pushed piece")
		object NotAdjacent : Error("You can only move to an adjacent square")
		object CannotPush : Error("You cannot push more than one piece")
		object RepeatedMove : Error("You cannot repeat a move made four moves ago")
		object CannotMoveOfBoard : Error("You cannot repeat a move made four moves ago")
	}
}

/**
 * Core information of a state used in checking for repeated moves
 */
data class StateInformation(
	val grid : GameGrid,
	val lastPushed: Point?,
	val lastMove : Move?
)
private const val KEEP_SIZE = 4

data class State(
	val playersTurn: Player,
	val lastPushed: Point?,
	val grid: GameGrid,
	// keep truncated to last KEEP_SIZE
	// index 0 is the last move, index 1 the one before that etc.
	val prev : List<StateInformation>,
	val lastMove: Move?
	// possible performance improvement: keep track of tokens for each player.
	) {

	companion object {
		val initial = State(
			playersTurn = Player.Blue,
			lastPushed = null,
			grid = standardStartGrid,
			prev = emptyList(),
			lastMove = null
		)
	}

	val victor: Player? by lazy { isVictory() }

	val possibleMoves : List<MoveToState> by lazy {
		findAllMoves().toList()
	}

	fun move(from: Point, to: Point): MoveResult {
		findMoveError(from, to)?.let {
			return it
		}

		val next = nextOver(from, to)
		val pushing = grid[to] != null

		val pushed = if (pushing) next else null

		val newGrid = grid.copy {
			if (pushing) set(next, grid[to])
			set(to, grid[from])
			set(from, null)
		} as GameGrid


		// create next state
		return MoveResult.Success(State(
			playersTurn = playersTurn.next(),
			lastPushed = pushed,
			grid = newGrid,
			prev = if (this.prev.size >= KEEP_SIZE) this.prev.drop(1) else this.prev + this.asStateInformation(),
			lastMove = Move(from, to)
		))

	}

	private fun asStateInformation() = StateInformation(
		grid = this.grid,
		lastPushed = this.lastPushed,
		lastMove = this.lastMove
	)

	//HOTSPOT - SLOW
	private fun findMoveError(from: Point, to: Point): MoveResult.Error? = when {
		playersTurn != grid[from] -> MoveResult.Error.NotPlayersPiece
		lastPushed == from -> MoveResult.Error.WasPushed
		! grid.isInGrid(to.x, to.y) -> MoveResult.Error.CannotMoveOfBoard
		! isAdjacent(from, to) -> MoveResult.Error.NotAdjacent
		/* SLOW */ ! canPush(from, to) -> MoveResult.Error.CannotPush
		/* SLOW */ isRepeatedMove(from, to) -> MoveResult.Error.RepeatedMove
		else -> null
	}

	//HOTSPOT
	fun isEligibleToMove(p: Point): Boolean {
		return lastPushed != p && playersTurn == grid[p]
	}


	private fun canPush(from: Point, to: Point): Boolean {
		return grid[to] == null || grid[nextOver(from, to)] == null
	}

	private fun isRepeatedMove(from: Point, to: Point): Boolean {
		// rule: if in the same situation four moves ago the same move was done, it is illegal
		require(KEEP_SIZE == 4)
		// TODO find a rule that prevents a longer sequence of repetition that performs well

		if (prev.size < 4) return false

		// check if the same move was made four moves ago
		val threeMovesAgo = prev[2]
		if (threeMovesAgo.lastMove != Move(from, to)) return false

		// check the state four moves ago

		val fourMovesAgo = prev[3]

		if (fourMovesAgo.lastPushed != lastPushed) return false
		if (fourMovesAgo.grid != grid) return false
		// playersTurn is equals because "4" moves ago

		return true
	}

	//HOTSPOT - relatively slow
	private fun isVictory(): Player? {

		// if no move are present, then no victory is possible
		if (lastMove == null) return null

		val lastPlayer = playersTurn.next()

		// red simple move to end zone
		if (lastPlayer == Player.Red && lastMove.to.x == 0) return Player.Red

		// blue simple move to end zone
		if (lastPlayer == Player.Blue && lastMove.to.x == GAME_WIDTH-1) return Player.Blue

		if (lastPushed != null) {
			// push piece to end zone
			if (lastPushed.x == 0 && grid[lastPushed] == Player.Red) return Player.Red
			if (lastPushed.x == GAME_WIDTH - 1 && grid[lastPushed] == Player.Blue) return Player.Blue
		}

		// check if we can move
		// TODO a fast way to compute if there are any legal moves
		if (! findAllMoves().iterator().hasNext()) {
			return lastPlayer
		}

		return null
	}

	fun isSimilar(other: State): Boolean =
		playersTurn == other.playersTurn &&  lastPushed == other.lastPushed && grid == other.grid

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


fun State.debugString(): String {
	val sb = StringBuilder()

	fun line() {
		sb.append("  |")
		for (i in 0 until GAME_WIDTH * 2 - 1) {
			if (i % 2 == 0) sb.append(i/2) else sb.append("-")
		}
		sb.appendln("|")
	}

	sb.appendln()
	sb.appendln("Player: $playersTurn")
	sb.appendln("LastPushed: $lastPushed")
	sb.appendln("Victor: $victor")
	line()
	for (y in 0 until GAME_HEIGHT) {
		sb.append("$y |")
		for (x in 0 until GAME_WIDTH) {
			sb.append(grid[x, y]?.name?.get(0) ?: " ")
			sb.append("|")
		}
		sb.appendln(" $y")
	}
	line()
	return sb.toString()
}

fun State.move(move: Move) = move(move.from, move.to)
fun State.canMove(move: Move) = move(move) is MoveResult.Success


private fun StringBuilder.appendln(s: String = "") {
	append(s).append("\n")
}

//TODO check if we can speed this up
private fun State.findAllMoves(): Sequence<MoveToState> = sequence {
	fun tryMove(from: Point, to: Point): MoveToState? {
		val next = move(from, to)
		return if (next is MoveResult.Success)
			MoveToState(Move(from, to), next.state)
		else
			null
	}

	grid.getAllFor(playersTurn)
		.filter { isEligibleToMove(it) }
		.forEach { from ->
			tryMove(from, from.left())?.let { yield(it) }
			tryMove(from, from.right())?.let { yield(it) }
			tryMove(from, from.up())?.let { yield(it) }
			tryMove(from, from.down())?.let { yield(it) }
		}
}