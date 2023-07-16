package de.earley.gogogo.backend

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Routing.info() {
	get("/") {
		call.respond("GoGoGo server")
	}
}