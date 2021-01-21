package de.earley.gogogo.net

import de.earley.gogogo.Log
import de.earley.gogogo.game.*

import de.earley.gogogo.net.Connection
import kotlinx.browser.window

class NetworkController(
	private val connection: Connection
) : PlayerController {

	override val name: String = "Network"

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Pair<Move, List<Line>?> {
		try {
			return connection.getMove(lastMove) to null
		} catch (e: ClosedException) {
			window.alert("Opponent has disconnected")
			throw e
		}
	}

	fun sendVictory(lastMove: Move) {
		connection.sendMove(lastMove)
		Log.debug { "Victory sent" }
	}
}