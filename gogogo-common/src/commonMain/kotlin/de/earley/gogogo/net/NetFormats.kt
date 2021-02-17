package de.earley.gogogo.net

import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.GameGrid

// TODO use kotlinx.serialisation or another library

// wouldn't this be a nice type class?

interface NetFormat<T> {
	fun encode(t: T): String
	fun encodeNullable(t: T?): String = when (t) {
		null -> "_"
		else -> encode(t)
	}
	fun decode(s: String): T
	fun decodeNullable(s: String): T? = when (s) {
		"_" -> null
		else -> decode(s)
	}
}

object PointNetFormat : NetFormat<Point> {
	override fun encode(t: Point): String = "${t.x},${t.y}"
	override fun decode(s: String): Point = s.split(",", limit = 2)
		.let { (x, y) -> Point(x.toInt(), y.toInt()) }
}

object MoveNetFormat : NetFormat<Move> {
	override fun encode(t: Move): String = with(PointNetFormat) {
		"${encode(t.from)} -> ${encode(t.to)}"
	}

	override fun decode(s: String): Move = s.split(" -> ", limit = 2)
		.map(PointNetFormat::decode)
		.let { (from, to) -> Move(from, to) }
}

// multiple contexts when?
object StateNetFormat : NetFormat<State> {
	override fun encode(t: State): String = with(t) { with(PointNetFormat) { with(MoveNetFormat) { with(
		GameGridNetFormat
	) {
		"$playersTurn;${encode(grid)};${encodeNullable(lastPushed)};${encodeNullable(lastMove)}"
	} } } }

	override fun decode(s: String): State =
		s.split(";", limit = 5).let { (playersTurn, grid, lastPushed, lastMove, prev) ->
			State(
				playersTurn = Player.valueOf(playersTurn),
				grid = GameGridNetFormat.decode(grid),
				lastPushed = PointNetFormat.decodeNullable(lastPushed),
				lastMove = MoveNetFormat.decodeNullable(lastMove),
				prev = emptyList() // TODO todo
			)
		}
}


object GameGridNetFormat : NetFormat<GameGrid> {
	override fun encode(t: GameGrid): String =
		"${t.width},${t.height},${t.elems.joinToString("", transform = PlayerNetFormat::encodeNullable)}"

	override fun decode(s: String): GameGrid =
		s.split(",", limit = 3).let { (width, height, elems) ->
		GameGrid.create(
			width = width.toInt(),
			height = height.toInt(),
			elems = elems.toList()
				.map(Char::toString)
				.map(PlayerNetFormat::decode)
				.toTypedArray()
		)
	}
}

object PlayerNetFormat : NetFormat<Player?> {
	override fun encode(t: Player?): String = when(t) {
		Player.Red -> "R"
		Player.Blue -> "B"
		null -> "_"
	}

	override fun decode(s: String): Player? = when(s) {
		"R" -> Player.Red
		"B" -> Player.Blue
		else -> null
	}

}
