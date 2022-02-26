package de.earley.gogogo.game.grid

import de.earley.gogogo.game.GAME_HEIGHT
import de.earley.gogogo.game.GAME_WIDTH
import de.earley.gogogo.game.Player
import kotlin.random.Random

// grid index, player, value
private val zobrist : Array<Int> = Array(GAME_WIDTH * GAME_HEIGHT * 2) {
	Random.nextInt()
}

/*
Token tracking has been removed for now since it can reduce performance
 */

class GameGrid private constructor(
	private val elems: Array<Player?>
) {

	private var hash : Int = reHash()
	private fun updateHash(h : Int, p : Point, player: Player) : Int = h xor zobrist[p.x + p.y * GAME_WIDTH + (player.ordinal) * GAME_HEIGHT * GAME_WIDTH]
	private fun reHash(): Int {
		var h = 0
		onEach { point, player ->
			if (player != null) {
				h = updateHash(h, point, player)
			}
		}
		return h
	}

	override fun hashCode(): Int = hash

	override fun equals(other: Any?): Boolean {
		if (this === other) return true
		if (other == null || this::class != other::class) return false

		other as GameGrid

		if (!elems.contentEquals(other.elems)) return false

		return true
	}

	companion object {
		fun create(build: (x: Int, y: Int) -> Player?): GameGrid {
			val grid = Array(GAME_WIDTH * GAME_HEIGHT) { i ->
				val x = i % GAME_WIDTH
				val y = i / GAME_WIDTH
				build(x, y)
			}
			return GameGrid(
				grid
			)
		}

		private fun createTokensFor(
			player: Player,
			grid: Array<Player?>
		): MutableList<Point> = mutableListOf<Point>().apply {
			for (x in 0 until GAME_WIDTH) {
				for (y in 0 until GAME_HEIGHT) {
					if (grid[x + y * GAME_WIDTH] == player) {
						add(Point(x, y))
					}
				}
			}
		}
	}

	inline fun onEach(f : (Point, Player?) -> Unit) {
		for (x in 0 until GAME_WIDTH) {
			for (y in 0 until GAME_HEIGHT) {
				f(Point(x, y), get(x, y))
			}
		}
	}

	operator fun get(x: Int, y: Int): Player? = elems[x + y * GAME_WIDTH]
	operator fun get(p: Point): Player? = get(p.x, p.y)

	/**
	 * Sets the value at point [p] to [value]
	 * Also keeps track of the helper structures for indices and the hash
	 */
	operator fun set(p : Point, value: Player?) {
		val i = p.x + p.y * GAME_WIDTH
		val old = elems[i]
		if (old == value) return
		when (old) {
			Player.Red -> {
				hash = updateHash(hash, p, Player.Red)
			}
			Player.Blue -> {
				hash = updateHash(hash, p, Player.Blue)
			}
			null -> {}
		}
		elems[i] = value
		when (value) {
			Player.Red -> {
				hash = updateHash(hash, p, Player.Red)
			}
			Player.Blue -> {
				hash = updateHash(hash, p, Player.Blue)
			}
			null -> {}
		}
	}

	fun isInGrid(x: Int, y: Int): Boolean = x in 0 until GAME_WIDTH && y in 0 until GAME_HEIGHT

	fun deepCopy(): GameGrid = create { x, y ->
		this[x, y]
	}
}