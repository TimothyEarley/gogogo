package de.earley.gogogo.net

import de.earley.gogogo.game.Move
import de.earley.gogogo.game.moveFromNetFormat
import de.earley.gogogo.game.toNetFormat
import org.w3c.dom.WebSocket

class ClosedException : Exception()

class Connection(
	private val ws: WebsocketConnection
) {

	fun sendMove(move: Move) {
		ws.send(move.toNetFormat())
	}

	suspend fun getMove(lastMove: Move?): Move {
		if (lastMove != null) sendMove(lastMove)
		val msg = ws.receive()
		if (msg == "CLOSE") throw ClosedException()
		else return msg.moveFromNetFormat()
	}

	suspend fun setupMatch(playerInfo: PlayerInfo): MatchInfo {
		ws.send(Messages.connect(playerInfo))
		return Messages.parseMatchStart(ws.receive())
	}

	fun close() {
		ws.close()
	}

	companion object {

		fun connect(url: String): Connection {
			val ws = WebsocketConnectionImpl(WebSocket(url))
			return Connection(ws)
		}

	}

}