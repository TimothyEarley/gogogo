package de.earley.gogogo.ui


import controller.GamePresenter
import de.earley.gogogo.Log
import de.earley.gogogo.controller.controllerAsString
import de.earley.gogogo.game.Game
import de.earley.gogogo.game.Line
import de.earley.gogogo.game.Player
import de.earley.gogogo.game.grid.Point
import de.earley.gogogo.game.grid.toLetterName
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.*
import kotlinx.dom.addClass
import kotlinx.dom.clear
import kotlinx.dom.removeClass
import kotlinx.html.dom.create
import kotlinx.html.js.li
import org.w3c.dom.*
import kotlin.coroutines.CoroutineContext
import kotlin.text.Typography.nbsp

fun Player.asClass(): String = toString().lowercase()

enum class GameMode {
	Local, Online
}

private var name: String? = null

class GameUI private constructor(
	table: HTMLTableElement,
	private val menu: MenuUI,
	private val mode: GameMode
): CoroutineScope {

	companion object {
		fun open(rootDiv: HTMLTableElement, menu: MenuUI, mode: GameMode): GameUI {
			return GameUI(rootDiv, menu, mode)
		}
	}

	private val job = Job()
	override val coroutineContext: CoroutineContext = Dispatchers.Default + job

	private val blueController: HTMLSelectElement = document.get("blue-controller")
	private val redController: HTMLSelectElement = document.get("red-controller")
	private val turnIndicator: HTMLParagraphElement = document.get("turn-indicator")
	private val undo: HTMLButtonElement = document.get("btn-undo")
	private val restart = document.get<HTMLButtonElement>("btn-restart")
	private val localControls = document.get<HTMLDivElement>("local-controls")
	private val serverControls = document.get<HTMLDivElement>("server-controls")
	private val ownPlayer = document.get<HTMLParagraphElement>("server-own-player")
	private val spinner = document.get<HTMLDivElement>("connect-spinner")
	private val sidebar = document.get<HTMLDivElement>("sidebar")
	private val linesList = document.get<HTMLUListElement>("lines")


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
		controllerAsString().forEach {
			redController.addOption(it)
			blueController.addOption(it)
		}
		blueController.selectedIndex = 0
		redController.selectedIndex = 0
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

		job.cancel()

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

	fun updateLines(lines: List<Line>) {
		linesList.clear()
		lines.forEach {
			linesList.appendChild(
				document.create.li {
					val moveString = it.moves.joinToString(",  ") {
						"${it.from.toLetterName()}${nbsp}⇢${nbsp}${it.to.toLetterName()}"
					}
					val evalText = if (it.movesToWin != null) {
						"${it.evaluation}#${it.movesToWin} - ${it.winner}"
					} else {
						val sign = when {
							it.evaluation > 0 -> "+"
							else -> "" // negative numbers already have a minus
						}
						"$sign${it.evaluation}"
					}
					+"$evalText: $moveString"
				}
			)
		}

		if (lines.isNotEmpty()) {
			sidebar.removeClass("hidden")
		} else {
			sidebar.addClass("hidden")
		}
	}

}