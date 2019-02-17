package de.earley.gogogo.game

import kotlinx.coroutines.*

class ControlledGame(
	private var redController: PlayerController,
	private var blueController: PlayerController,
	private val uiHook: UIHook
) : Game() {

	private lateinit var scope: CoroutineScope
	private var moveJob: Job? = null
	var lastMove: Move? = null

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
				move = withContext(scope.coroutineContext + job) {
					activeController.getMove(lastMove, state, uiHook::onSelect)
				}
			} catch(_: CancellationException) {
				// seems like the controller was swapped/state reset, try again with new one
			}
		}

		val moved = move(move.from, move.to)

		if (!moved) throw IllegalStateException("move was not valid")

		lastMove = move
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

	override fun undo() {
		super.undo()
		// after the undo we need to reset the controller
		resetMoveAwait()
	}

}

interface UIHook {

	fun onSelect(point: Point?)
	fun onGameEnd()
	suspend fun onMove(move: Move)
}