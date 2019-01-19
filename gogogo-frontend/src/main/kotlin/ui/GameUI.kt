package de.earley.gogogo.ui


import de.earley.gogogo.game.GAME_HEIGHT
import de.earley.gogogo.game.GAME_WIDTH
import de.earley.gogogo.game.Player
import de.earley.gogogo.game.grid.Grid
import de.earley.gogogo.game.grid.forEach
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.table
import kotlinx.html.td
import kotlinx.html.tr
import org.w3c.dom.*
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.browser.window
import kotlin.coroutines.CoroutineContext
import kotlin.dom.clear

fun Player.asClass(): String = toString().toLowerCase()

enum class GameMode {
	Local, Online
}

private var name: String? = null

class GameUI private constructor(
	private val rootDiv: HTMLDivElement,
	private val menu: MenuUI,
	private val mode: GameMode
): CoroutineScope {

	companion object {
		fun open(rootDiv: HTMLDivElement, menu: MenuUI, mode: GameMode): GameUI {
			rootDiv.clear()
			return GameUI(rootDiv, menu, mode)
		}
	}

	//TODO cancel on exit
	override val coroutineContext: CoroutineContext
		get() = Dispatchers.Default + Job()

	private val aiCheckboxBlue: HTMLInputElement = document.get("ai-blue-check")
	private val aiCheckboxRed: HTMLInputElement = document.get("ai-red-check")
	private val turnIndicator: HTMLParagraphElement = document.get("turn-indicator")
	private val undo: HTMLButtonElement = document.get("btn-undo")
	private val restart = document.get<HTMLButtonElement>("btn-restart")
	private val localControls = document.get<HTMLDivElement>("local-controls")
	private val serverControls = document.get<HTMLDivElement>("server-controls")
	private val onwPlayer = document.get<HTMLParagraphElement>("server-own-player")

	private val eventListeners: MutableList<Pair<HTMLElement, (Event) -> Unit>> = ArrayList()

	private val presenter = GamePresenter(this, mode)
	val cells: Grid<HTMLTableCellElement> = createCells(GAME_WIDTH, GAME_HEIGHT)


	private fun createCells(width: Int, height: Int): Grid<HTMLTableCellElement> {
		val ui = document.create.table {
			id = "game-grid"
			(0 until height).forEach { y ->
				tr {
					(0 until width).forEach { x ->
						td("game-cell") {
							id = "game-cell-$x-$y"
						}
					}
				}
			}
		}

		rootDiv.append(ui)

		return Grid.create(width, height) { x, y ->
			document.get<HTMLTableCellElement>("game-cell-$x-$y")
		}
	}

	init {
		launch {
			presenter.start()
			checkGameMode()
			updateUI()
			registerEventListeners()
		}
	}

	fun updateUI() {
		cells.forEach { x, y, element ->
			presenter.setClasses(element!!, x, y)
		}

		turnIndicator.innerText = presenter.turnText()

		undo.disabled = ! presenter.canUndo()
	}

	fun isAI(player: Player) = when (player) {
		Player.Red -> aiCheckboxRed.checked
		Player.Blue -> aiCheckboxBlue.checked
	}

	private fun checkGameMode() {
		when (mode) {
			GameMode.Local -> {
				localControls.hidden = false
				serverControls.hidden = true
			}
			GameMode.Online -> {
				localControls.hidden = true
				serverControls.hidden = false
			}
		}
	}

	private fun registerEventListeners() {
		cells.forEach { x, y, element ->
			element?.let {
				eventListeners += it.onClick {
					presenter.handleClick(x, y)
				}
			}
		}

		eventListeners += restart.onClick {
			launch { presenter.restart() }
		}

		eventListeners += undo.onClick {
			presenter.undo()
		}

		eventListeners += aiCheckboxRed.onClick {
			presenter.setRedAI(aiCheckboxRed.checked)
		}

		eventListeners += aiCheckboxBlue.onClick {
			presenter.setBlueAI(aiCheckboxRed.checked)
		}

		eventListeners += document.get<HTMLButtonElement>("btn-exit-game").onClick {
			exitGame()
		}
	}

	private fun exitGame() {

		// unregister listeners
		eventListeners.forEach { (elem, action) ->
			elem.removeOnClick(action)

		}

		// return to menu
		menu.closeGame()

	}

	fun showOwnPlayer(player: Player, opponent: String) {
		onwPlayer.innerText = "Your are playing as $player against $opponent"
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

}