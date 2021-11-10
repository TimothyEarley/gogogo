package de.earley.gogogo.ai

import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Point
import kotlinx.coroutines.delay

// add a delay before the selection
private class DelayedController(private val pc: PlayerController) : PlayerController {
	override val name: String = "UI: ${pc.name}"

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): MoveResponse {
		val move = pc.getMove(lastMove, state, fromSelectCallback)
		fromSelectCallback(move.move.from)
		delay(300)
		return move
	}

}

fun PlayerController.withUIAwareness(): PlayerController = when (this) {
	is DelayedController -> this
	else -> DelayedController(this)
}
