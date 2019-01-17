package de.earley.gogogo.game

import de.earley.gogogo.game.grid.GameGrid
import de.earley.gogogo.game.grid.Grid
import de.earley.gogogo.game.grid.toGameGrid
import kotlinx.serialization.Serializable

const val WIDTH = 6
const val HEIGHT = 5

@Serializable
data class Point(val x: Int, val y: Int)

open class Game {

	private val states: MutableList<State> = mutableListOf(State())
	val state: State get() = states.last()
	val player: Player get() = state.playersTurn
	val victor: Player? get() = state.victor
	val grid: Grid<Player> get() = state.grid

	fun canUndo(): Boolean = states.size > 1

	fun undo() {
		if (!canUndo()) return

		states.removeAt(states.lastIndex)
	}

	fun isEligibleToMove(from: Point): Boolean = state.isEligibleToMove(from)
	fun isOver(): Boolean = victor != null
	fun move(from: Point, to: Point): Boolean {
		val next = state.move(from, to) ?: return false
		states.add(next)
		return true
	}

}

val standardStartGrid: GameGrid = Grid.create(WIDTH, HEIGHT) { x, _ ->
	when (x) {
		0 -> Player.Blue
		WIDTH-1 -> Player.Red
		else -> null
	}
}.toGameGrid()
