package de.earley.gogogo.game

data class Move(val from: Point, val to: Point) {
	override fun toString() = "($from -> $to)"
}

data class Line(
	val evaluation : Int,
	val moves : List<Move>
) {
	fun prepend(move : Move) = Line(
		evaluation,
		listOf(move) + moves // TODO is that efficient?
	)
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