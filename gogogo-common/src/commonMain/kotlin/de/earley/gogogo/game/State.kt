package de.earley.gogogo.game

import de.earley.gogogo.game.grid.GameGrid
import de.earley.gogogo.game.grid.*
import kotlinx.serialization.Serializable
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

@Serializable
data class State(
	val playersTurn: Player,
	val lastPushed: Point?,
	val grid: GameGrid,
	// memory
	val prev: State?, // DO NOT INTRODUCE CYCLES
	val lastMove: Move?
) {

	companion object {
		val inital = State(
			playersTurn = Player.Blue,
			lastPushed = null,
			grid = standardStartGrid,
			prev = null,
			lastMove = null
		)
	}

	val victor: Player? = isVictory()


	fun move(from: Point, to: Point): MoveResult {
		findMoveError(from, to)?.let {
			return it
		}

		val next = nextOver(from ,to)
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
			prev = this,
			lastMove = Move(from, to)
		))

	}

	private fun findMoveError(from: Point, to: Point): MoveResult.Error? = when {
		playersTurn != grid[from] -> MoveResult.Error.NotPlayersPiece
		lastPushed == from -> MoveResult.Error.WasPushed
		! grid.validPosition(to.x, to.y) -> MoveResult.Error.CannotMoveOfBoard
		! isAdjacent(from, to) -> MoveResult.Error.NotAdjacent
		! canPush(from, to) -> MoveResult.Error.CannotPush
		isRepeatedMove(from, to) -> MoveResult.Error.RepeatedMove
		else -> null
	}

	fun isEligibleToMove(p: Point): Boolean {
		return playersTurn == grid[p] && lastPushed != p
	}


	private fun canPush(from: Point, to: Point): Boolean {
		return grid[to] == null || grid[nextOver(from, to)] == null
	}

	private fun isRepeatedMove(from: Point, to: Point): Boolean {
		// rule: if in the same situation the same move was done, it is illegal

		// check if the same move was made four moves ago
		val threeMovesAgo = applyN(3, State::prev) ?: return false
		if (threeMovesAgo.lastMove != Move(from, to)) return false

		// check the state four moves ago

		val fourMovesAgo = applyN(4, State::prev) ?: return false

		// we do a sort of equals here, but only on the relevant parts
		if (fourMovesAgo.lastPushed != lastPushed) return false
		if (fourMovesAgo.grid != grid) return false
		// playersTurn is equals because "4" moves ago

		return true
	}

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

		//pushed or moved last piece off board
		if (countActiveTokens() <= 0) {
			// we cannot move, and so lose
			return lastPlayer
		}

		return null
	}

	private fun countActiveTokens(): Int = grid
		.getAllFor(playersTurn)
		.filter(this@State::isEligibleToMove).size

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

private tailrec fun <T> T.applyN(n: Int, next: (T) -> T?): T? = when(n) {
	0 -> this
	else -> next(this)?.applyN(n - 1, next)
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