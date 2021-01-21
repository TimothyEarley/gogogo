package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import de.earley.gogogo.net.MoveNetFormat
import de.earley.gogogo.net.StateNetFormat

//TODO deduplicate

private val database: Map<State, Move> by lazy {
	save.lines().windowed(2, 2).map { (state, move) ->
		StateNetFormat.decode(state) to MoveNetFormat.decode(move)
	}.toMap()
}

class HumanPlusAI(fallback: Evaluation): PlayerController {
	override val name: String = "Human+"

	private val fallbackAI = AI(fallback)

	override suspend fun getMove(
		lastMove: Move?,
		state: State,
		fromSelectCallback: (Point?) -> Unit
	): Pair<Move, List<Line>?> {
		//TODO add detection for flipped states and extract the move that way
		val dbMove = database.asSequence().find { (savedState, move) ->
			state == savedState || (state.isSimilar(savedState) && state.canMove(move))
		}
		return if (dbMove != null) {
			dbMove.value to null
		} else {
			fallbackAI.getMove(lastMove, state, fromSelectCallback)
		}
	}

}