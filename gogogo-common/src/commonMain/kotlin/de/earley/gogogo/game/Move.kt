package de.earley.gogogo.game

import de.earley.gogogo.game.grid.Point

data class Move(val from: Point, val to: Point) {
	override fun toString() = "($from -> $to)"
}