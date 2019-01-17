package de.earley.gogogo.game.grid

import de.earley.gogogo.game.Player
import kotlinx.serialization.Serializable

// non generic for JS serialisation

@Serializable
class GameGrid(
	override val width: Int,
	override  val height: Int,
	override val elems: Array<Player?>
) : Grid<Player> {


	//TODO code duplication
	override operator fun get(x: Int, y: Int): Player? =
		if (x in 0..(width - 1) && y in 0..(height-1)) elems[y * width + x] else null

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

fun Grid<Player>.toGameGrid(): GameGrid =
		GameGrid(width, height, elems)