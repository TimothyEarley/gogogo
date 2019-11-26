package de.earley.gogogo.game.grid

data class GenericGrid<T>(
	override val width: Int,
	override val height: Int,
	override val elems: Array<T?>
) : Grid<T>, MutableGrid<T> {

	override operator fun get(x: Int, y: Int): T? =
		if (isInGrid(x, y)) elems[y * width + x] else null

	override fun set(x: Int, y: Int, t: T?) {
		elems[y * width + x] = t
	}

	override fun toMutableGrid(): MutableGrid<T> {
		return GenericGrid(width, height, elems.copyOf())
	}

	override fun equals(other: Any?): Boolean {
		if (this === other) return true
		if (other == null || this::class != other::class) return false

		other as GenericGrid<T>

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