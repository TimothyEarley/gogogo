package de.earley.gogogo.net

import de.earley.gogogo.game.Move
import org.w3c.dom.WebSocket

class ClosedException : Exception()

class Connection(
	private val ws: WebsocketConnection
) {

	fun sendMove(move: Move) {
		ws.send(MoveNetFormat.encodeNullable(move))
	}

	suspend fun getMove(lastMove: Move?): Move {
		if (lastMove != null) sendMove(lastMove)
		val msg = ws.receive()
		if (msg == "CLOSE") throw ClosedException()
		else return MoveNetFormat.decode(msg)
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