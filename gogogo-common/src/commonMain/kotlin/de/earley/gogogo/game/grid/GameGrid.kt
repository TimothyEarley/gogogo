package de.earley.gogogo.game.grid

import de.earley.gogogo.game.Player

class GameGrid private constructor(
    private val width: Int,
    private val height: Int,
    // TODO maybe store as bitmask
    private val elems: Array<Player?>
    // TODO enable optimisation
    // private val tokenIndexes: MutableMap<Player, MutableList<Point>>
) {

    companion object {
        fun create(width: Int, height: Int, build: (x: Int, y: Int) -> Player?): GameGrid =
            GameGrid(width, height, Array(width * height) { i ->
                val x = i % width
                val y = i / width
                build(x, y)
            })
    }

    operator fun get(x: Int, y: Int): Player? = elems[x + y * width]
    operator fun get(p: Point): Player? = get(p.x, p.y)
    operator fun set(x: Int, y: Int, value: Player?) {
        elems[x + y * width] = value
    }

    operator fun set(p: Point, value: Player?) = set(p.x, p.y, value)
    fun isInGrid(x: Int, y: Int): Boolean = x in 0 until width && y in 0 until  height

    @OptIn(ExperimentalStdlibApi::class)
    fun tokensFor(player: Player): List<Point> = buildList {
        // TODO add helper structure to make this fast
        for (x in 0 until width) {
            for (y in 0 until height) {
                if (this@GameGrid[x, y] == player) {
                    add(Point(x, y))
                }
            }
        }
    }
}