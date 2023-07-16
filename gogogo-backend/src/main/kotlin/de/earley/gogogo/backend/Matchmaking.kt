package de.earley.gogogo.backend

import io.ktor.server.routing.*
import io.ktor.server.websocket.*
import io.ktor.websocket.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import java.util.*


fun Routing.matchmaking() {

	val matchmaker = MatchMaker()

	webSocket("/matchmaking") {
		println("onConnect")

		val p = ConnectedPlayer(this, matchmaker)

		for (frame in incoming) {
			if (frame !is  Frame.Text) continue
			val msg = frame.readText()
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