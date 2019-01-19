package de.earley.gogogo.net

import de.earley.gogogo.game.*
import de.earley.gogogo.web.WebsocketConnection
import de.earley.gogogo.web.WebsocketConnectionImpl
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import org.w3c.dom.WebSocket
import kotlin.coroutines.CoroutineContext

class Connection(
	private val ws: WebsocketConnection
) {

	fun sendMove(move: Move) {
		ws.send(move.toNetFormat())
	}

	suspend fun getMove(lastMove: Move?): Move {
		if (lastMove != null) sendMove(lastMove)
		return ws.receive().moveFromNetFormat()
	}

	suspend fun setupMatch(playerInfo: PlayerInfo): MatchInfo {
		ws.send(Messages.connect(playerInfo))
		return Messages.parseMatchStart(ws.receive())
	}

	companion object {

		fun connect(url: String): Connection {
			val ws = WebsocketConnectionImpl(WebSocket(url))
			return Connection(ws)
		}

	}

}