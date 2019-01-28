package de.earley.gogogo.ui


import de.earley.gogogo.game.GAME_HEIGHT
import de.earley.gogogo.game.GAME_WIDTH
import de.earley.gogogo.game.Player
import de.earley.gogogo.game.grid.Grid
import de.earley.gogogo.game.grid.forEach
import kotlinx.coroutines.*
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

		table.replaceWith(ui)

		return Grid.create(width, height) { x, y ->
			document.get<HTMLTableCellElement>("game-cell-$x-$y")
		}
	}

	init {
		launch {
			setupSelects()
			registerEventListeners()
			checkGameMode()
			delay(10)
			presenter.start()
			updateUI()
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

	fun updateUI() {
		cells.forEach { x, y, element ->
			presenter.setClasses(element!!, x, y)
		}

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

		// unregister listeners
		eventListeners.forEach { (elem, action) ->
			elem.removeOnClick(action)
		}

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
		println("Queried value for $player is $it")
	}

}