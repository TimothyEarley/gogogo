package de.earley.gogogo.net

import de.earley.gogogo.Log
import de.earley.gogogo.game.Move

import de.earley.gogogo.game.PlayerController
import de.earley.gogogo.game.Point
import de.earley.gogogo.game.State
import de.earley.gogogo.net.Connection
import kotlin.browser.window

class NetworkController(
	private val connection: Connection
) : PlayerController {

	override val name: String = "Network"

	override suspend fun getMove(lastMove: Move?, state: State, fromSelectCallback: (Point?) -> Unit): Move {
		try {
			return connection.getMove(lastMove)
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