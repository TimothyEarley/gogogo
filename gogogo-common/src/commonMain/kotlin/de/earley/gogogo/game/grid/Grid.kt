package de.earley.gogogo.game.grid

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

operator fun <T> Grid<T>.get(p: Point) = get(p.x, p.y)

inline fun <T> Grid<T>.forEach(action: (Int, Int, T?) -> Unit) {
	(0 until height).forEach { y ->
		(0 until width).forEach { x ->
			action(x, y, this[x, y])
		}
	}
}

fun <T> Grid<T>.isInGrid(x: Int, y: Int): Boolean =
	x in 0 until width && y in 0 until height