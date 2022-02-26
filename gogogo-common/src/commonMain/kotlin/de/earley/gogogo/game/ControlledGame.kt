package de.earley.gogogo.game

import de.earley.gogogo.game.grid.Point
import kotlinx.coroutines.*

/**
 * A game with two [PlayerController] playing it.
 * Handles getting the input and passing it to [Game]
 */
class ControlledGame(
	private var redController: PlayerController,
	private var blueController: PlayerController,
	private val uiHook: UIHook,
	state: State = State.initial()
) : Game(state) {

	private lateinit var scope: CoroutineScope
	private var moveJob: Job? = null
	var lastMove: Move? = null

	val activeController: PlayerController
		get() = when (player) {
				Player.Blue -> blueController
				Player.Red -> redController
			}

	private suspend fun doMove() {
		val (move, lines) = getMove()

		when (val result = move(move)) {
			is MoveResult.Error -> {
				println("Move result: ${result.msg}")
				// continue with game (nothing has changed)
			}
			MoveResult.Success -> {
				lastMove = move
				uiHook.onMove(move, lines)
			}
		}
	}

	private suspend fun getMove() : MoveResponse {
		// it might fail (player clicked an invalid square), so retry
		while (true) {

			// reset selection
			uiHook.onSelect(null)

			// create job
			val job = Job()
			moveJob = job

			try {
				return withContext(scope.coroutineContext + job) {
					activeController.getMove(lastMove, state, uiHook::onSelect)
				}
			} catch(_: CancellationException) {
				// seems like the controller was swapped/state reset, try again with new one
			}
		}
	}

	fun CoroutineScope.start(): Job {
		scope = this
		return launch {
			while (isActive && !isOver()) {
				doMove()
			}
			uiHook.onGameEnd()
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

	fun stop() {
		scope.cancel()
	}

}

interface UIHook {
	fun onSelect(point: Point?)
	fun onGameEnd()
	suspend fun onMove(move: Move, lines: List<Line>?)
}