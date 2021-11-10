package de.earley.gogogo.net

import de.earley.gogogo.game.Move
import de.earley.gogogo.game.grid.Point

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

private object PointNetFormat : NetFormat<Point> {
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