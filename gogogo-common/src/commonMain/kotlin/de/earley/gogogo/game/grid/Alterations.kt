package de.earley.gogogo.game.grid

import de.earley.gogogo.game.Point

// all these reified things are because of multiplatform (idk)

inline fun <reified T> Grid<T>.copy(alterations: Alterations<T, MutableGrid<T>>.() -> Unit) =
	Alterations(this.toMutableGrid()).also(alterations).create()

class Alterations<T, G : MutableGrid<T>>(
	private val workingGrid: G
) {

	operator fun set(p: Point, value: T?) {
		workingGrid[p.x, p.y] = value
	}

	operator fun set(x: Int, y: Int, value: T?) {
		workingGrid[x, y] = value
	}

	fun create(): G = workingGrid
}