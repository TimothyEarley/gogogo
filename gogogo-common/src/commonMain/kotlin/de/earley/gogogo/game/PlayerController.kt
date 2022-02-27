package de.earley.gogogo.game

import de.earley.gogogo.game.grid.Point

private val lineComparator = compareBy(Line::evaluation, Line::movesToWin)

data class Line(
	val evaluation : Int,
	val movesToWin : Int?,
	val winner : Player?,
	val moves : List<Move>
) : Comparable<Line> {
	// TODO perf
	fun prependAndInvert(move: Move): Line = Line(- evaluation, movesToWin?.let { it + 1 }, winner, listOf(move) + moves)

	override fun compareTo(other: Line): Int = lineComparator.compare(this, other)

	companion object {
		fun fromMove(move: Move, evaluation: Int) = Line(evaluation, null, null, listOf(move))
	}
}

data class MoveResponse(
	val move : Move,
	val lines : List<Line>? // the lines considered or null if none considered
)

interface PlayerController {
	val name: String // for debug

	/**
	 * Return the move this controller chooses for the given state
	 * The callback can be used to show which points are selected (null being unselect)
	 *
	 * Can also return the lines it is thinking along
	 */
	suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): MoveResponse
}