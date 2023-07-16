package de.earley.gogogo.backend

import io.ktor.server.application.install
import io.ktor.server.routing.routing
import io.ktor.server.application.*
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.server.websocket.*
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