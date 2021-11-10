package de.earley.gogogo.game.grid

import de.earley.gogogo.game.Move

data class Point(val x: Int, val y: Int) {
    override fun toString(): String = toLetterName()
}

fun Point.left()  : Move = Move(this, Point(x - 1, y + 0))
fun Point.right() : Move = Move(this, Point(x + 1, y + 0))
fun Point.up()    : Move = Move(this, Point(x + 0, y - 1))
fun Point.down()  : Move = Move(this, Point(x + 0, y + 1))

fun Point.toLetterName() : String = "${(y + 'a'.toInt()).toChar()}${x + 1}"