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
			if (pushing) replace(next, grid[to])
			replace(to, grid[from])
			replace(from, null)
		}


		// create next state
		return MoveResult.Success(State(
			playersTurn = playersTurn.next(),
			lastPushed = pushed,
			grid = newGrid.toGameGrid(),
			prev = this,
			lastMove = Move(from, to)
		))

	}

	private fun findMoveError(from: Point, to: Point): MoveResult.Error? = when {
		playersTurn != grid[from] -> MoveResult.Error.NotPlayersPiece
		lastPushed == from -> MoveResult.Error.WasPushed
		! isAdjacent(from, to) -> MoveResult.Error.NotAdjacent
		! canPush(from, to) -> MoveResult.Error.CannotPush
		isRepeatedMove(from, to) -> MoveResult.Error.RepeatedMove
		else -> null
	}

	//TODO rework function
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
		grid.forEach { x, _, player ->
			if (player != null) {
				val reachedEnd = when (player) {
					Player.Blue -> x == GAME_WIDTH-1
					Player.Red -> x == 0
				}
				if (reachedEnd) return player
			}
		}

		if (countActiveTokens() <= 0) {
			// cannot move, lose
			return playersTurn.next()
		}

		return null
	}

	private fun countActiveTokens(): Int = grid.sumBy { x, y, _->
		if (isEligibleToMove(Point(x, y))) 1 else 0
	}

}

fun nextOver(from: Point, to: Point) = Point(
	x = from.x + 2 * (to.x - from.x), // works, but only because dx==1, dy==1
	y = from.y + 2 * (to.y - from.y)
)


fun isAdjacent(from: Point, to: Point): Boolean {
	val dx = abs(from.x - to.x)
	val dy = abs(from.y - to.y)
	return (dx == 1 && dy == 0) || (dx == 0 && dy == 1)
}

private tailrec fun <T> T.applyN(n: Int, next: (T) -> T?): T? = when(n) {
	0 -> this
	else -> next(this)?.applyN(n - 1, next)
}