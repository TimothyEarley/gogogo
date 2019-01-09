package de.earley.gogogo.game

enum class Player {
	Red, Blue
}

fun Player.next(): Player = when (this) {
	Player.Red -> Player.Blue
	Player.Blue -> Player.Red
}