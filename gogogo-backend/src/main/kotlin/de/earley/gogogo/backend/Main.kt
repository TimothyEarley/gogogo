package de.earley.gogogo.backend

import io.ktor.application.Application
import io.ktor.application.install
import io.ktor.http.cio.websocket.*
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.websocket.WebSockets
import java.time.Duration

fun Application.main() {

	install(WebSockets) {
		timeout = Duration.ofMinutes(2)
	}

	routing {
		info()
		matchmaking()
	}

}

fun main() {
	embeddedServer(
		factory = Netty,
		port = port(),
		module = Application::main
	).start(true)
}

private fun port() = System.getenv("PORT")?.toInt() ?: 8080