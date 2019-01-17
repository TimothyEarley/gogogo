package de.earley.gogogo.game.grid

import de.earley.gogogo.game.Point

interface Grid<T> {
	val width: Int
	val height: Int
	val elems: Array<T?>
	operator fun get(x: Int, y: Int): T?

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

operator fun <T> Grid<T>.get(p: Point) = get(p.x, p.y)

inline fun <T> Grid<T>.forEach(action: (Int, Int, T?) -> Unit) {
	(0 until height).forEach { y ->
		(0 until width).forEach { x ->
			action(x, y, this[x, y])
		}
	}
}

// all these reified things are because of multiplatform (idk)

inline fun <reified T> Grid<T>.copy(alterations: Alterations<T>.() -> Unit) =
	Alterations<T>().also(alterations).create(this)


class Alterations<T> {
	val ops: MutableMap<Point, T?> = HashMap()

	fun replace(p: Point, value: T?) {
		ops[p] = value
	}
}

inline fun <reified T> Alterations<T>.create(grid: Grid<T>): Grid<T> =
	Grid.create(grid.width, grid.height) { x, y ->
		val p = Point(x, y)
		if (ops.containsKey(p)) ops[p] else grid[x, y]
	}

fun <T> Grid<T>.sumBy(value: (Int, Int, T?) -> Int): Int {
	var sum = 0
	this.forEach { x, y, t -> sum += value(x, y, t) }
	return sum
}