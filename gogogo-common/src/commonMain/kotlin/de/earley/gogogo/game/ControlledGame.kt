package de.earley.gogogo.game

import kotlinx.coroutines.*
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext

class ControlledGame(
	private var redController: PlayerController,
	private var blueController: PlayerController,
	private val uiHook: UIHook
) : Game() {

	lateinit var scope: CoroutineScope
	var moveJob: Job? = null

	val activeController: PlayerController
		get() = when (player) {
				Player.Blue -> blueController
				Player.Red -> redController
			}

	private suspend fun doMove(): Boolean {

		var move: Move? = null

		while (move == null) {

			// reset selection
			uiHook.onSelect(null)

			// create job
			val job = Job()
			moveJob = job

			try {
				move = scope.async(job) {
					activeController.getMove(state, uiHook::onSelect)
				}.await()
			} catch(_: CancellationException) {
				// seems like the controller was swapped, try again with new one
			}
		}

		val moved = move(move.from, move.to)

		if (!moved) throw IllegalStateException("move was not valid")

		uiHook.onMove(move)

		return !isOver()
	}

	private suspend fun gameLoop() {
		while (doMove()) {}
		uiHook.onGameEnd()
	}

	fun CoroutineScope.start() {
		scope = this
		launch {
			gameLoop()
		}
	}

	fun switchRed(controller: PlayerController) {
		println("Switching red to ${controller.name}")
		redController = controller
		resetMoveAwait()
	}

	fun switchBlue(controller: PlayerController) {
		println("Switching blue to ${controller.name}")
		blueController = controller
		resetMoveAwait()
	}

	private fun resetMoveAwait() {
		scope.launch {
			moveJob?.cancelAndJoin()
		}
	}

}

interface UIHook {

	fun onSelect(point: Point?)
	fun onGameEnd()
	suspend fun onMove(move: Move)
}