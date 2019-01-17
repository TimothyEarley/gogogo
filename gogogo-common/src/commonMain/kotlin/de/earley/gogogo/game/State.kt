package de.earley.gogogo.game

import de.earley.gogogo.game.grid.GameGrid
import de.earley.gogogo.game.grid.*
import kotlinx.serialization.Serializable
import kotlin.math.abs

@Serializable
data class State(
	val playersTurn: Player = Player.Blue,
	val lastPushed: Point? = null,
	val grid: GameGrid = standardStartGrid
) {

	val victor: Player? = isVictory()


	fun move(from: Point, to: Point): State? {
		if (!canMoveTo(from, to)) return null

		val next = nextOver(from ,to)
		val pushing = grid[to] != null

		val pushed = if (pushing) next else null

		val newGrid = grid.copy {
			if (pushing) replace(next, grid[to])
			replace(to, grid[from])
			replace(from, null)
		}



		// create next state
		return State(
			playersTurn = playersTurn.next(),
			lastPushed = pushed,
			grid = newGrid.toGameGrid()
		)

	}

	private fun canMoveTo(from: Point, to: Point) =
		isEligibleToMove(from) && isAdjacent(from, to) && canPush(from, to)


	fun isEligibleToMove(p: Point): Boolean {
		return playersTurn == grid[p] && lastPushed != p
	}


	private fun canPush(from: Point, to: Point): Boolean {
		return grid[to] == null || grid[nextOver(from, to)] == null
	}

	private fun isVictory(): Player? {
		grid.forEach { x, _, player ->
			if (player != null) {
				val reachedEnd = when (player) {
					Player.Blue -> x == WIDTH-1
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