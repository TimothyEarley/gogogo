package de.earley.gogogo.backend

import de.earley.gogogo.game.Player
import io.ktor.http.cio.websocket.Frame
import io.ktor.http.cio.websocket.readText
import io.ktor.routing.Routing
import io.ktor.websocket.webSocket
import kotlinx.coroutines.channels.consumeEach
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.channels.mapNotNull
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import java.util.*


fun Routing.matchmaking() {

	val matchmaker = MatchMaker()

	webSocket("/matchmaking") {
		println("onConnect")

		val p = ConnectedPlayer(this, matchmaker)

		incoming.mapNotNull { it as? Frame.Text }.map { it.readText() }.consumeEach { msg ->
			println("MSG=$msg")
			p.handleMessage(msg)
		}

		p.close()
		println("onClose")

	}

}

class MatchMaker {
	private val queue: Deque<ConnectedPlayer> = ArrayDeque() //ConcurrentLinkedDeque()

	private val mutex = Mutex()

	suspend fun register(player: ConnectedPlayer) {
		mutex.withLock {
			val opponent: ConnectedPlayer? = queue.poll()
			if (opponent == null) queue.add(player)
			else {
				ConnectedPlayer.createMatch(player, opponent)
			}
		}
	}

	suspend fun unregister(connectedPlayer: ConnectedPlayer) {
		mutex.withLock {
			queue.remove(connectedPlayer)
		}
	}
}