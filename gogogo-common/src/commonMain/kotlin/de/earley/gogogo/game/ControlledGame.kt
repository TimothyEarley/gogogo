package de.earley.gogogo.game

import kotlinx.coroutines.*
import kotlin.coroutines.coroutineContext

class ControlledGame(
	private var redController: PlayerController,
	private var blueController: PlayerController,
	private val uiHook: UIHook,
	state: State = State.inital
) : Game(state) {

	private lateinit var scope: CoroutineScope
	private var moveJob: Job? = null
	var lastMove: Move? = null

	val activeController: PlayerController
		get() = when (player) {
				Player.Blue -> blueController
				Player.Red -> redController
			}

	private suspend fun doMove(): Boolean {
		val (move, lines) = getMove()

		val moved = move(move.from, move.to)

		if (!moved) throw IllegalStateException("move was not valid")

		lastMove = move
		uiHook.onMove(move, lines)

		return !isOver()
	}

	private suspend fun getMove() : Pair<Move, List<Line>?> {
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
			while (isActive && doMove()) {}
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

}

interface UIHook {

	fun onSelect(point: Point?)
	fun onGameEnd()
	suspend fun onMove(move: Move, lines : List<Line>?)
}