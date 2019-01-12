package de.earley.gogogo

import de.earley.gogogo.game.Point
import de.earley.gogogo.web.WebsocketConnection
import de.earley.gogogo.web.WebsocketConnectionImpl
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import org.w3c.dom.WebSocket
import kotlin.coroutines.CoroutineContext

const val server = "ws://localhost:8080"
val con = Connection.connect("$server/matchmaking")

class Connection(
	private val ws: WebsocketConnection
) : CoroutineScope {

	fun move(from: Point, to: Point) {
		ws.send("[${from.x}, ${from.y}] -> [${to.x}, ${to.y}]")
	}

	override val coroutineContext: CoroutineContext
		get() = Dispatchers.Default + Job()

	init {
		launch {
			for (message in ws.messages) {
				println(message)
			}
		}
	}

	companion object {

		fun connect(url: String): Connection {
			val ws = WebsocketConnectionImpl(WebSocket(url))
			return Connection(ws)
		}

	}

}