package de.earley.gogogo.game

import de.earley.gogogo.game.grid.GameGrid
import kotlinx.serialization.json.JSON


//fun State.toNetFormat(): String = JSON.stringify(State.serializer(), this)
//fun String.stateFromNetFormat(): State = JSON.parse(State.serializer(), this)

//TODO code net formats by hand (thus reduce size dramatically)

fun State.toNetFormat(): String = JSON.stringify(State.serializer(), this)
fun String.stateFromNetFormat(): State = JSON.parse(State.serializer(), this)

fun Move.toNetFormat(): String = JSON.stringify(Move.serializer(), this)
fun String.moveFromNetFormat(): Move = JSON.parse(Move.serializer(), this)

fun GameGrid.toNetFormat(): String = JSON.stringify(GameGrid.serializer(), this)
fun String.gameGridFromNetFormat(): GameGrid = JSON.parse(GameGrid.serializer(), this)



fun Point.toReducedNetFormat(): String = "$x,$y"
fun String.pointFromReducedNetFormat(): Point =
	split(",", limit = 2)
		.let { (x, y) -> Point(x.toInt(), y.toInt()) }

fun Move.toReducedNetFormat(): String = "${from.toReducedNetFormat()} -> ${to.toReducedNetFormat()}"
fun String.moveFromReducedNetFormat(): Move =
	split(" -> ", limit = 2)
		.map { it.pointFromReducedNetFormat() }
		.let { (from, to) -> Move(from, to) }

fun State.toReducedNetFormat(): String =
	"$playersTurn;${grid.toReducedNetFormat()};${lastPushed?.toReducedNetFormat()};${lastMove?.toReducedNetFormat()};${prev?.toReducedNetFormat()}"

fun String.stateFromReducedNetFormat(): State =
	split(";", limit = 5).let { (playersTurn, grid, lastPushed, lastMove, prev) ->
		State(
			playersTurn = Player.valueOf(playersTurn),
			grid = grid.gameGridFromReducedNetFormat(),
			lastPushed = lastPushed.parseNull()?.pointFromReducedNetFormat(),
			lastMove = lastMove.parseNull()?.moveFromReducedNetFormat(),
			prev = prev.parseNull()?.stateFromReducedNetFormat()
		)
	}


fun GameGrid.toReducedNetFormat(): String =
	"${this.width},${this.height},${this.elems.joinToString("", transform = Player?::toReducedNetFormat)}"

fun String.gameGridFromReducedNetFormat(): GameGrid = split(",", limit = 3).let { (width, height, elems) ->
	GameGrid.create(
		width = width.toInt(),
		height = height.toInt(),
		elems = elems.toList()
			.map(Char::toString)
			.map(String::playerFromReducedNetFormat)
			.toTypedArray()
	)
}

private fun Player?.toReducedNetFormat() = when(this) {
	Player.Red -> "R"
	Player.Blue -> "B"
	null -> "_"
}
private fun String.playerFromReducedNetFormat(): Player? = when(this) {
	"R" -> Player.Red
	"B" -> Player.Blue
	else -> null
}


private fun String.parseNull(): String? = if (this == "null") null else this