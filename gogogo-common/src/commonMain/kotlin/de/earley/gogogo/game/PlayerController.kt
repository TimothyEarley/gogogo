package de.earley.gogogo.game

import de.earley.gogogo.game.grid.Point

data class Line(
	val evaluation : Int,
	val moves : List<Move>
) {
	// TODO perf
	fun prependAndInvert(move: Move): Line = Line(- evaluation, listOf(move) + moves)
}

interface PlayerController {
	val name: String // for debug

	/**
	 * Return the move this controller chooses for the given state
	 * The callback can be used to show which points are selected (null being unselect)
	 *
	 * Can also return the lines it is thinking along
	 */
	suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Pair<Move, List<Line>?>
}