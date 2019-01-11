package de.earley.gogogo.backend

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.response.respond
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import java.lang.System

fun Application.main() {

	routing {

		get("/") {
			call.respond("hello")
		}

	}

}

fun main() {
	val port = System.getenv("PORT").toInt()
	embeddedServer(
		factory = Netty,
		port = port,
		module = Application::main
	).start(true)
}