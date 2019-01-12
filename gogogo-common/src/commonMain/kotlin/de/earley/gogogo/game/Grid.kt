package de.earley.gogogo.game


data class Grid<T>(
	val width: Int,
	val height: Int,
	private val elems: Array<T?>
) {

	companion object {
		inline fun <reified T> create(width: Int, height: Int, init: (Int, Int) -> T?): Grid<T> = Grid(
			width,
			height,
			(0 until height).flatMap { y ->
				(0 until width).map { x ->
					init(x, y)
				}
			}.toTypedArray()
		)
	}

	operator fun get(x: Int, y: Int): T? =
		if (x in 0..(width - 1) && y in 0..(height-1)) elems[y * width + x] else null


	override fun toString(): String = (0 until height).joinToString(separator = "\n") { y ->
		(0 until width).joinToString(separator = " ") { x ->
			this[x, y].toString()
		}
	}

	inline fun forEach(action: (Int, Int, T?) -> Unit) {
		(0 until height).forEach { y ->
			(0 until width).forEach { x ->
				action(x, y, this[x, y])
			}
		}
	}

	override fun equals(other: Any?): Boolean {
		if (this === other) return true
		if (other == null || this::class != other::class) return false

		other as Grid<T>

		if (width != other.width) return false
		if (height != other.height) return false
		if (!elems.contentEquals(other.elems)) return false

		return true
	}

	override fun hashCode(): Int {
		var result = width
		result = 31 * result + height
		result = 31 * result + elems.contentHashCode()
		return result
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