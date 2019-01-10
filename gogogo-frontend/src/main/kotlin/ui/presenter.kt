package de.earley.gogogo.ui

import de.earley.gogogo.ai.AI
import de.earley.gogogo.game.Game
import de.earley.gogogo.game.MoveResult
import de.earley.gogogo.game.Player
import de.earley.gogogo.game.Point
import org.w3c.dom.HTMLTableCellElement
import kotlin.dom.removeClass

class Presenter(
	private val gameUI: GameUI
) {

	private val ai: AI = AI()

	private var selected: Point? = null
	private var game: Game = Game()

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
		game = Game()
		gameUI.updateUI()
		checkAI()
	}

	fun handleClick(x: Int, y: Int) {
		if (game.isOver()) return

		// if already selected something, try to move
		val sel = selected
		if (sel != null) {

			if (sel.x == x && sel.y == y) {
				// unselect when clicking on same cell
				unselect()
			}

			// try to move
			if (game.move(sel, Point(x, y))) {
				unselect()
				gameUI.updateUI()
				checkAI()
			}

			if (game.isOver()) {
				unselect()
				gameUI.updateUI()
			}

		} else if (game.isEligibleToMove(Point(x, y))) {
			select(x, y)
		}

	}

	private fun select(x: Int, y: Int) {
		selected = Point(x, y)
		gameUI.cells[x, y]!!.classList.add("game-cell-selected")
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

	fun canUndo(): Boolean = game.canUndo()


	fun checkAI() {
		if (gameUI.isAI(game.player)) {
			ai.move(game.player, game.state, ::handleClick)
		}
	}

}