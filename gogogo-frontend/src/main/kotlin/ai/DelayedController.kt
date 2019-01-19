package de.earley.gogogo.ai

import de.earley.gogogo.game.Move
import de.earley.gogogo.game.PlayerController
import de.earley.gogogo.game.Point
import de.earley.gogogo.game.State
import kotlinx.coroutines.delay

// add a delay before the selection
class DelayedController(private val pc: PlayerController) : PlayerController {
	override val name: String = "UI AI"

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Move {
		val move = pc.getMove(lastMove, state, fromSelectCallback)
		fromSelectCallback(move.from)
		delay(1000)
		return move
	}


}


fun PlayerController.withUIAwareness(): PlayerController {
	return DelayedController(this)
}
