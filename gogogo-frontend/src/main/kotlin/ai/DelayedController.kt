package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import kotlinx.coroutines.delay

// add a delay before the selection
private class DelayedController(private val pc: PlayerController) : PlayerController {
	override val name: String = "UI AI"

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Pair<Move, List<Line>?> {
		val move = pc.getMove(lastMove, state, fromSelectCallback)
		fromSelectCallback(move.first.from)
		delay(1000)
		return move
	}

}

fun PlayerController.withUIAwareness(): PlayerController = when (this) {
	is DelayedController -> this
	else -> DelayedController(this)
}
