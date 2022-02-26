package controller

import de.earley.gogogo.Log
import de.earley.gogogo.ai.withUIAwareness
import de.earley.gogogo.controller.HumanController
import de.earley.gogogo.controller.toController
import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Point
import de.earley.gogogo.net.MatchInfo
import de.earley.gogogo.net.Matchmaking
import de.earley.gogogo.net.PlayerInfo
import de.earley.gogogo.ui.GameMode
import de.earley.gogogo.ui.GameUI
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

class GamePresenter(
	private val gameUI: GameUI,
	private val mode: GameMode
) : UIHook {

	private var selected: Point? = null
	private var game: ControlledGame? = null

	// multi player
	private var matchmaking: Matchmaking? = null
	private var matchinfo: MatchInfo? = null

	suspend fun start() {
		restart()
	}

	fun turnText(): String = when {
		game == null -> "No Game"
		game!!.isOver() -> {
			"${game!!.victor} has won!"
		}
		else -> {
			"${game!!.player}'s turn"
		}
	}

	suspend fun restart() {
		game?.stop()
		game = createGame()
		gameUI.updateUI(game!!, selected)
	}

	fun handleClick(x: Int, y: Int) {
		if (game == null || game!!.isOver()) return

		val c = game!!.activeController
		if (c is HumanController) {
			c.supplyClick(Point(x, y))
		}
	}

	override fun onSelect(point: Point?) {
		if (point == null) {
			unselect()
		} else {
			selected = point
			gameUI.uiGrid[point].classList.add("game-cell-selected")
		}
	}

	override fun onGameEnd() {
		// inform other player in multiplayer scenario (but only if we won)
		if (mode == GameMode.Online && game?.victor == matchinfo?.player) {
			Log.debug { "Sending victory to opponent" }
			matchmaking?.opponent?.sendVictory(game!!.lastMove!!)
		}
		unselect()
	}

	override suspend fun onMove(move: Move, lines: List<Line>?) {
		unselect()
		gameUI.updateUI(game!!, selected)
		gameUI.updateLines((lines ?: emptyList()).sortedByDescending { it.evaluation })

		// for some reason the UI is not properly updated unless we allow some yield time
		delay(100)
	}

	private suspend fun createGame(): ControlledGame {

		return if (mode == GameMode.Online) {
			// setup connection
			val matchmaking = Matchmaking(PlayerInfo(gameUI.getName()))
			this.matchmaking = matchmaking
			val info = matchmaking.findMatch()
			matchinfo = info
			Log.debug { "Playing against ${info.other.name} as ${info.player}" }
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
		// launch in the scope of the game screen
		gameUI.launch {
			start()
		}
	}

	private fun unselect() {
		selected?.let { sel ->
			gameUI.uiGrid[sel].classList.remove("game-cell-selected")
		}
		selected = null
	}

	fun undo() {
		if (game == null) return
		require(mode == GameMode.Local) { "Only allowed in local play!" }
		game!!.undo()
		unselect()
		gameUI.updateUI(game!!, selected)
	}

	//TODO multiplayer
	fun canUndo(): Boolean = game?.canUndo() ?: false

	fun changeRedController() {
		require(mode == GameMode.Local) { "Only allowed in local play!" }
		game?.switchRed(getLocalController(Player.Red))
	}

	fun changeBlueController() {
		require(mode == GameMode.Local) { "Only allowed in local play!" }
		game?.switchBlue(getLocalController(Player.Blue))
	}

	private fun getLocalController(player: Player): PlayerController =
		gameUI.getController(player).toController()

	fun exitGame() {
		matchmaking?.disconnect()
	}
}