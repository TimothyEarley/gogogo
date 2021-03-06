package de.earley.gogogo.ui

import de.earley.gogogo.Log
import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Grid
import de.earley.gogogo.game.grid.forEach
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.table
import kotlinx.html.td
import kotlinx.html.tr
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLTableCellElement
import org.w3c.dom.HTMLTableElement
import kotlinx.browser.document
import kotlinx.dom.removeClass

class UIGrid(
	table: HTMLTableElement
) {


	private val cells = createCells(table, GAME_WIDTH, GAME_HEIGHT)

	private fun createCells(table: HTMLTableElement, width: Int, height: Int): Grid<HTMLTableCellElement> {
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

	fun onClick(listeners: EventListenerCollection, handler: (Int, Int) -> Unit) {
		cells.forEach { x, y, element ->
			element?.let {
				listeners += it.onClick {
					Log.debug { "Clicked $x, $y" }
					handler(x, y)
				}
			}
		}
	}

	fun setClasses(
		game: Game,
		selected: Point?
	) {
		cells.forEach { x, y, element ->
			with(element!!) {
				removeClass("token-blue", "token-red", "clickable", "can-move", "selected")
				game.grid[x, y]?.let { token ->
					classList.add("token-${token.asClass()}", "clickable")
				}

				if (!game.isOver() && game.isEligibleToMove(Point(x, y))) {
					classList.add("can-move")
				}

				if (selected != null && x == selected.x && y == selected.y) {
					classList.add("selected")
				}

			}
		}
	}

	operator fun get(p: Point): HTMLTableCellElement? = cells[p.x, p.y]

}