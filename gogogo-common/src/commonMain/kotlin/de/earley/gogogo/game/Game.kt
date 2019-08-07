package de.earley.gogogo.game

import de.earley.gogogo.game.grid.GameGrid
import de.earley.gogogo.game.grid.Grid
import kotlinx.serialization.Serializable

const val GAME_WIDTH = 6
const val GAME_HEIGHT = 5

@Serializable
data class Point(val x: Int, val y: Int) {
	override fun toString(): String = "($x/$y)"

	fun left(): Point = Point(x - 1, y)
	fun right(): Point = Point(x + 1, y)
	fun up(): Point = Point(x, y - 1)
	fun down(): Point = Point(x, y + 1)
}

open class Game {

	private val states: MutableList<State> = mutableListOf(State.inital)
	val state: State get() = states.last()
	val player: Player get() = state.playersTurn
	val victor: Player? get() = state.victor
	val grid: Grid<Player> get() = state.grid
	val turns: Int get() = states.size - 1

	fun canUndo(): Boolean = states.size > 1

	open fun undo() {
		if (!canUndo()) return

		states.removeAt(states.lastIndex)
	}

	fun isEligibleToMove(from: Point): Boolean = state.isEligibleToMove(from)
	fun isOver(): Boolean = victor != null
	fun move(from: Point, to: Point): Boolean {
		val next = state.move(from, to) as? MoveResult.Success ?: return false
		states.add(next.state)
		return true
	}

}

val standardStartGrid: GameGrid = GameGrid.create(GAME_WIDTH, GAME_HEIGHT) {
	for (y in 0 until GAME_HEIGHT) {
		set(0, y, Player.Blue)
		set(GAME_WIDTH-1, y, Player.Red)
	}
}
