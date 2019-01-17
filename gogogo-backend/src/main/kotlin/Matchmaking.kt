package de.earley.gogogo.backend

import de.earley.gogogo.ai.findAllMoves
import de.earley.gogogo.game.Move
import de.earley.gogogo.game.stateFromNetFormat
import de.earley.gogogo.game.toNetFormat
import io.ktor.http.cio.websocket.Frame
import io.ktor.http.cio.websocket.readText
import io.ktor.http.cio.websocket.send
import io.ktor.routing.Routing
import io.ktor.websocket.webSocket
import kotlinx.coroutines.channels.consumeEach
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.channels.mapNotNull

fun Routing.matchmaking() {

	webSocket("/matchmaking") {

		println("onConnect")
		incoming.mapNotNull { it as? Frame.Text }.map { it.readText() }.consumeEach { msg ->
			println("MSG=$msg")
			// expect a getMove command
			val state = msg.stateFromNetFormat()
			// send a move
			val move = state.findAllMoves().first().let { Move(it.first, it.second) }
			val response = move.toNetFormat()
			println("RESP=$response")
			send(response)
		}
		println("onClose")

	}

}