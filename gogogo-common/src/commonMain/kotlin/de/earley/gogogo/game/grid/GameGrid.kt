package de.earley.gogogo.game.grid

import de.earley.gogogo.game.GAME_HEIGHT
import de.earley.gogogo.game.GAME_WIDTH
import de.earley.gogogo.game.Player
import kotlin.random.Random

// grid index, player, value
private val zobrist : Array<Map<Player, Int>> = Array(GAME_WIDTH * GAME_HEIGHT) { _ ->
	mapOf(
			Player.Blue to Random.nextInt(),
			Player.Red to Random.nextInt()
	)
}

class GameGrid private constructor(
	// TODO maybe store as bitmask
	private val elems: Array<Player?>,
	// TODO enable optimisation
	private val redTokens: MutableList<Point>,
	private val blueTokens: MutableList<Point>,
) {

	private fun updateHash(h : Int, p : Point, player: Player) : Int = h xor zobrist[p.x + p.y * GAME_WIDTH][player]!!

	private var hash : Int = reHash()
	override fun hashCode(): Int = hash

	private fun reHash(): Int {
		var h = 0
		redTokens.forEach { p ->
			h = updateHash(h, p, Player.Red)
		}
		blueTokens.forEach { p ->
			h = updateHash(h, p, Player.Blue)
		}
		return h
	}

	companion object {
		fun create(build: (x: Int, y: Int) -> Player?): GameGrid {
			val grid = Array(GAME_WIDTH * GAME_HEIGHT) { i ->
				val x = i % GAME_WIDTH
				val y = i / GAME_WIDTH
				build(x, y)
			}
			return GameGrid(
				grid,
				createTokensFor(Player.Red, grid),
				createTokensFor(Player.Blue, grid)
			)
		}

		private fun createTokensFor(
			player: Player,
			grid: Array<Player?>
		): MutableList<Point> = mutableListOf<Point>().apply {
			// TODO add helper structure to make this fast
			for (x in 0 until GAME_WIDTH) {
				for (y in 0 until GAME_HEIGHT) {
					if (grid[x + y * GAME_WIDTH] == player) {
						add(Point(x, y))
					}
				}
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
				redTokens.remove(p)
				hash = updateHash(hash, p, Player.Red)
			}
			Player.Blue -> {
				blueTokens.remove(p)
				hash = updateHash(hash, p, Player.Blue)
			}
			null -> {}
		}
		elems[i] = value
		when (value) {
			Player.Red -> {
				redTokens.add(p)
				hash = updateHash(hash, p, Player.Red)
			}
			Player.Blue -> {
				blueTokens.add(p)
				hash = updateHash(hash, p, Player.Blue)
			}
			null -> {}
		}
	}

	fun isInGrid(x: Int, y: Int): Boolean = x in 0 until GAME_WIDTH && y in 0 until GAME_HEIGHT

	fun tokensFor(player: Player): List<Point> = when (player) {
		Player.Red -> redTokens
		Player.Blue -> blueTokens
	}

	fun deepCopy(): GameGrid = create { x, y ->
		this[x, y]
	}
}