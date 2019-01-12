package de.earley.gogogo.backend

import io.ktor.application.call
import io.ktor.response.respond
import io.ktor.routing.Routing
import io.ktor.routing.get

fun Routing.info() {
	get("/") {
		call.respond("GoGoGo server")
	}
}