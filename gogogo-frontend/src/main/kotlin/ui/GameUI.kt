package de.earley.gogogo.ui


import controller.GamePresenter
import de.earley.gogogo.Log
import de.earley.gogogo.game.Game
import de.earley.gogogo.game.Player
import de.earley.gogogo.game.Point
import de.earley.gogogo.game.grid.Grid
import kotlinx.coroutines.*
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.table
import kotlinx.html.td
import kotlinx.html.tr
import org.w3c.dom.*
import kotlinx.browser.document
import kotlinx.browser.window
import kotlin.coroutines.CoroutineContext
import kotlinx.dom.clear

fun Player.asClass(): String = toString().toLowerCase()

enum class GameMode {
	Local, Online
}

private var name: String? = null

class GameUI private constructor(
	private val table: HTMLTableElement,
	private val menu: MenuUI,
	private val mode: GameMode
): CoroutineScope {

	companion object {
		fun open(rootDiv: HTMLTableElement, menu: MenuUI, mode: GameMode): GameUI {
			//TODO not needed
//			rootDiv.clear()
			return GameUI(rootDiv, menu, mode)
		}
	}

	//TODO cancel on exit
	override val coroutineContext: CoroutineContext
		get() = Dispatchers.Default + Job()

	private val blueController: HTMLSelectElement = document.get("blue-controller")
	private val redController: HTMLSelectElement = document.get("red-controller")
	private val turnIndicator: HTMLParagraphElement = document.get("turn-indicator")
	private val undo: HTMLButtonElement = document.get("btn-undo")
	private val restart = document.get<HTMLButtonElement>("btn-restart")
	private val localControls = document.get<HTMLDivElement>("local-controls")
	private val serverControls = document.get<HTMLDivElement>("server-controls")
	private val ownPlayer = document.get<HTMLParagraphElement>("server-own-player")
	private val spinner = document.get<HTMLDivElement>("connect-spinner")


	private val eventListeners = EventListenerCollection()

	private val presenter = GamePresenter(this, mode)

	val uiGrid = UIGrid(table)

	init {
		launch {
			setupSelects()
			registerEventListeners()
			checkGameMode()
			delay(10)
			presenter.start()
		}
	}

	private fun setupSelects() {
		redController.clear()
		blueController.clear()
		controllerTypesAsString().forEach {
			redController.addOption(it)
			blueController.addOption(it)
		}
		blueController.selectedIndex = 0
		redController.selectedIndex = 3
	}

	fun updateUI(game: Game, selected: Point?) {
		uiGrid.setClasses(game,selected)

		turnIndicator.innerText = presenter.turnText()

		undo.disabled = ! presenter.canUndo()
	}

	private fun checkGameMode() {
		when (mode) {
			GameMode.Local -> {
				localControls.unhide()
				serverControls.hide()
				spinner.hide()
			}
			GameMode.Online -> {
				localControls.hide()
				serverControls.unhide()
				spinner.unhide()
			}
		}
	}

	private fun registerEventListeners() {
		uiGrid.onClick(eventListeners, presenter::handleClick)

		eventListeners += restart.onClick {
			launch { presenter.restart() }
		}

		eventListeners += undo.onClick {
			presenter.undo()
		}

		eventListeners += document.get<HTMLButtonElement>("btn-exit-game").onClick {
			exitGame()
		}

		eventListeners += blueController.onChange {
			presenter.changeBlueController()
		}

		eventListeners += redController.onChange {
			presenter.changeRedController()
		}
	}

	private fun exitGame() {

		eventListeners.close()

		presenter.exitGame()

		// return to menu
		menu.closeGame()

	}

	fun showOwnPlayer(player: Player, opponent: String) {
		// we have a connection, so stop showing the spinner
		spinner.hide()
		ownPlayer.innerText = "You are playing as $player against $opponent"
	}

	fun getName(): String {
		if (name != null) return name!!
		while (true) {
			val response = window.prompt("Please enter your name")
			if (response != null) return response.also {
				name = it
			}
		}
	}

	fun getController(player: Player): String = when (player) {
		Player.Blue -> blueController.value
		Player.Red -> redController.value
	}.also {
		Log.debug { "Queried value for $player is $it" }
	}

}