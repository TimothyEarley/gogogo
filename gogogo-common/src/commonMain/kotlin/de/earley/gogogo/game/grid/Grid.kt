package de.earley.gogogo.game.grid

import de.earley.gogogo.game.Point

interface Grid<T> {
	val width: Int
	val height: Int
	val elems: Array<T?>
	operator fun get(x: Int, y: Int): T?
	/**
	 * Create a new mutable grid
	 */
	fun toMutableGrid(): MutableGrid<T>

	companion object {
		inline fun <reified T> create(width: Int, height: Int, init: (Int, Int) -> T?): GenericGrid<T> = GenericGrid(
			width,
			height,
			(0 until height).flatMap { y ->
				(0 until width).map { x ->
					init(x, y)
				}
			}.toTypedArray()
		)
	}
}

interface MutableGrid<T> : Grid<T> {
	operator fun set(x: Int, y: Int, t: T?)
}

interface IndexableGrid<T> {
	/**
	 * Performant alternative to looping through all grid cells
	 */
	fun getAllFor(t: T): List<Point>
}

operator fun <T> Grid<T>.get(p: Point) = get(p.x, p.y)

inline fun <T> Grid<T>.forEach(action: (Int, Int, T?) -> Unit) {
	(0 until height).forEach { y ->
		(0 until width).forEach { x ->
			action(x, y, this[x, y])
		}
	}
}

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

inline fun <T> Grid<T>.sumBy(value: (Int, Int, T?) -> Int): Int {
	var sum = 0
	this.forEach { x, y, t -> sum += value(x, y, t) }
	return sum
}