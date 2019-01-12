package de.earley.gogogo.backend

import io.ktor.http.cio.websocket.Frame
import io.ktor.http.cio.websocket.readText
import io.ktor.routing.Routing
import io.ktor.websocket.webSocket
import kotlinx.coroutines.channels.consumeEach
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.channels.mapNotNull

fun Routing.matchmaking() {

	webSocket("/matchmaking") {

		println("onConnect")
		incoming.mapNotNull { it as? Frame.Text }.map { it.readText() }.consumeEach { msg ->
			println("Received $msg")
		}
		println("onClose")

	}

}