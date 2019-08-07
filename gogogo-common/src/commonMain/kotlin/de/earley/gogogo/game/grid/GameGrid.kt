package de.earley.gogogo.game.grid

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.Point

// non generic for JS serialisation

class GameGrid private constructor(
	override val width: Int,
	override  val height: Int,
	override val elems: Array<Player?>,
	private val tokenIndexes: MutableMap<Player, MutableList<Point>>
) : Grid<Player>, MutableGrid<Player>, IndexableGrid<Player> {


	companion object {
		fun create(width: Int, height: Int, init: Alterations<Player, GameGrid>.() -> Unit): GameGrid {
			val grid = GameGrid(width, height, arrayOfNulls(width * height), mutableMapOf())
			return Alterations(grid).also(init).create()
		}

		fun create(width: Int, height: Int, elems: Array<Player?>): GameGrid =
			GameGrid(width, height, elems, mutableMapOf()).also {
				// add all existing tokens to the index
				for (x in 0 until width) {
					for (y in 0 until height) {
						val p = it[x, y]
						if (p != null) {
							it.tokenIndexes.getOrPut(p) { mutableListOf() }.add(Point(x, y))
						}
					}
				}
			}
		}

	//TODO code duplication with GenericGrid
	override operator fun get(x: Int, y: Int): Player? =
		if (isInGrid(x, y)) elems[y * width + x] else null

	override fun getAllFor(t: Player): List<Point> {
		return tokenIndexes[t] ?: emptyList()
	}

	// to be used only when creating
	//TODO this is a hot method -> optimize
	override fun set(x: Int, y: Int, t: Player?) {
		if (isInGrid(x, y)) {
			val i = y * width + x

			val prev = elems[i]
			if (prev == t) return

			// update the token index
			if (prev != null) tokenIndexes[prev]?.remove(Point(x, y))
			if (t != null) tokenIndexes.getOrPut(t, ::mutableListOf).add(Point(x, y))

			elems[i] = t
		}
	}

	override fun toMutableGrid(): MutableGrid<Player> {
		return GameGrid(width, height, elems.copyOf(), tokenIndexes.deepClone())
	}

	override fun equals(other: Any?): Boolean {
		if (this === other) return true
		if (other == null || this::class != other::class) return false

		other as GameGrid

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

//fun Grid<Player>.toGameGrid(): GameGrid =
//		GameGrid(width, height, elems)

private fun <K, V> Map<K, List<V>>.deepClone(): MutableMap<K, MutableList<V>> {
	val clone = mutableMapOf<K, MutableList<V>>()
	this.forEach {
		clone[it.key] = ArrayList(it.value)
	}
	return clone
}