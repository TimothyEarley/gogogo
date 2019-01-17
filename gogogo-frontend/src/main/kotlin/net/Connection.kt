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
) : CoroutineScope {

	suspend fun getMove(state: State): Move {
		ws.send(state.toNetFormat())
		return ws.receive().moveFromNetFormat()
	}

	override val coroutineContext: CoroutineContext
		get() = Dispatchers.Default + Job()

	companion object {

		fun connect(url: String): Connection {
			val ws = WebsocketConnectionImpl(WebSocket(url))
			return Connection(ws)
		}

	}

}