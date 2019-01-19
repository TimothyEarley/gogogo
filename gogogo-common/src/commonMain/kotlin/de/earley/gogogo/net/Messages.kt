package de.earley.gogogo.net

import de.earley.gogogo.game.Player

data class PlayerInfo(val name: String)

data class MatchInfo(val player: Player, val other: PlayerInfo)

object Messages {

	fun connect(player: PlayerInfo): String = "CONNECT:${player.name}"

	fun parseConnect(msg: String): PlayerInfo {
		val (connect, name) = msg.split(':', limit = 2)
		require(connect == "CONNECT") { "Invalid message received" }
		return PlayerInfo(name)
	}

	fun matchStart(player: Player, other: PlayerInfo) = "START:$player:${other.name}"

	fun parseMatchStart(msg: String): MatchInfo {
		val (start, player, name) = msg.split(':', limit = 3)
		require(start == "START") { "Invalid message received" }
		return MatchInfo(Player.valueOf(player), PlayerInfo(name))
	}


}