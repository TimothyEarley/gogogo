package de.earley.gogogo.ui


import de.earley.gogogo.game.*
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.table
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.dom.removeClass

fun Player.asClass(): String = toString().toLowerCase()


class GameUI(
	private val rootDiv: HTMLDivElement
) {

	private val presenter = Presenter(this)

	val cells: Grid<HTMLTableCellElement> = createCells(presenter.gameWidth, presenter.gameHeight)
	private val turnIndicator: HTMLParagraphElement = document.get("turn-indicator")
	private val undo: HTMLButtonElement = document.get("undo")
	private val aiCheckboxBlue: HTMLInputElement = document.get("ai-blue-check")
	private val aiCheckboxRed: HTMLInputElement = document.get("ai-red-check")


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
		updateUI()
		registerEventListeners()
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

	private fun registerEventListeners() {
		cells.forEach { x, y, element ->
			element?.onClick {
				presenter.handleClick(x, y)
			}
		}

		document.get<HTMLButtonElement>("restart").onClick {
			presenter.restart()
		}

		undo.onClick {
			presenter.undo()
		}

		aiCheckboxRed.onClick {
			presenter.checkAI()
		}

		aiCheckboxBlue.onClick {
			presenter.checkAI()
		}
	}

}