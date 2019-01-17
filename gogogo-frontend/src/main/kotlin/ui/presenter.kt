package de.earley.gogogo.ui

import de.earley.gogogo.ai.AI
import de.earley.gogogo.ai.withUIAwareness
import de.earley.gogogo.game.*
import de.earley.gogogo.net.NetworkController
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLTableCellElement
import kotlin.dom.removeClass

class Presenter(
	private val gameUI: GameUI
) : UIHook {

	private var selected: Point? = null
	private var game: ControlledGame = createGame()

	val gameWidth: Int get() = game.grid.width
	val gameHeight: Int get() = game.grid.height

	fun setClasses(element: HTMLTableCellElement, x: Int, y: Int) = with(element) {
		removeClass("token-blue", "token-red", "clickable", "can-move", "selected")
		game.grid[x, y]?.let { token ->
			classList.add("token-${token.asClass()}", "clickable")
		}

		if (!game.isOver() && game.isEligibleToMove(Point(x, y))) {
			classList.add("can-move")
		}

		if (selected != null && x == selected?.x && y == selected?.y) {
			classList.add("selected")
		}

	}

	fun turnText(): String = if (game.isOver()) {
		"${game.victor} has won!"
	} else {
		"${game.player}'s turn"
	}

	fun restart() {
		game = createGame()
		gameUI.updateUI()
	}

	fun handleClick(x: Int, y: Int) {
		if (game.isOver()) return

		val c = game.activeController
		if (c is HumanController) {
			c.supplyClick(Point(x, y))
		}
	}

	override fun onSelect(point: Point?) {
		if (point == null) {
			unselect()
		} else {
			selected = point
			gameUI.cells[point.x, point.y]!!.classList.add("game-cell-selected")
		}
	}

	override fun onGameEnd() {
		unselect()
	}

	override suspend fun onMove(move: Move) {
		unselect()
		gameUI.updateUI()
		// for some reason the UI is not properly updated unless we allow some yield tile
		delay(100)
	}

	private fun createGame(): ControlledGame {
		return ControlledGame(
			getController(Player.Red),
			getController(Player.Blue),
			this
		).also {
			startGame(it)
		}

	}

	private fun startGame(game: ControlledGame) = with(game) {
		// add job to cancel
		GlobalScope.launch {
			start()
		}
	}

	private fun unselect() {
		selected?.let { sel ->
			gameUI.cells[sel.x, sel.y]!!.classList.remove("game-cell-selected")
		}
		selected = null
	}

	fun undo() {
		game.undo()
		unselect()
		gameUI.updateUI()
	}

	//TODO multiplayer
	fun canUndo(): Boolean = game.canUndo()

	fun setRedAI(active: Boolean) {
		game.switchRed(getController(Player.Red))
	}

	fun setBlueAI(active: Boolean) {
		game.switchBlue(getController(Player.Blue))
	}

	private fun getController(player: Player): PlayerController =
		if (gameUI.isAI(player)) NetworkController().withUIAwareness() else HumanController()


}