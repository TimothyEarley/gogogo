package de.earley.gogogo.ui

import de.earley.gogogo.ai.AI
import de.earley.gogogo.ai.withUIAwareness
import de.earley.gogogo.game.*
import de.earley.gogogo.net.Matchmaking
import de.earley.gogogo.net.NetworkController
import de.earley.gogogo.net.PlayerInfo
import kotlinx.coroutines.*
import org.w3c.dom.HTMLTableCellElement
import kotlin.coroutines.CoroutineContext
import kotlin.dom.removeClass

class GamePresenter(
	private val gameUI: GameUI,
	private val mode: GameMode
) : UIHook {

	private var selected: Point? = null
	private lateinit var game: ControlledGame

	suspend fun start() {
		restart()
	}

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

	suspend fun restart() {
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
		// inform other player in multiplayer scenario
		if (mode == GameMode.Online) {
			(game.activeController as? NetworkController)?.sendVictory(game.lastMove!!)
		}
		unselect()
	}

	override suspend fun onMove(move: Move) {
		unselect()
		gameUI.updateUI()
		// for some reason the UI is not properly updated unless we allow some yield tile
		delay(100)
	}

	private suspend fun createGame(): ControlledGame {

		return if (mode == GameMode.Online) {
			// setup connection
			//TODO name
			val matchmaking = Matchmaking(PlayerInfo(gameUI.getName()))
			val info = matchmaking.findMatch()
			println("Playing against ${info.other.name} as ${info.player}")
			// get player side
			val red = if (info.player == Player.Red) HumanController() else matchmaking.opponent.withUIAwareness()
			val blue = if (info.player == Player.Blue) HumanController() else matchmaking.opponent.withUIAwareness()

			gameUI.showOwnPlayer(info.player, info.other.name)

			ControlledGame(red, blue, this)

		} else {
			ControlledGame(
				getLocalController(Player.Red),
				getLocalController(Player.Blue),
				this
			)
		}.also {
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
		require(mode == GameMode.Local) { "Only allowed in local play!" }
		game.undo()
		unselect()
		gameUI.updateUI()
	}

	//TODO multiplayer
	fun canUndo(): Boolean = game.canUndo()

	fun setRedAI(active: Boolean) {
		game.switchRed(getLocalController(Player.Red))
	}

	fun setBlueAI(active: Boolean) {
		game.switchBlue(getLocalController(Player.Blue))
	}

	private fun getLocalController(player: Player): PlayerController =
				if (gameUI.isAI(player)) AI().withUIAwareness()
				else HumanController()
}