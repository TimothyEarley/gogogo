package de.earley.gogogo.net

import de.earley.gogogo.game.Move

import de.earley.gogogo.game.PlayerController
import de.earley.gogogo.game.Point
import de.earley.gogogo.game.State
import de.earley.gogogo.net.Connection

const val server = "ws://localhost:8080"

class NetworkController : PlayerController {

	override val name: String = "Network"
	private val con = Connection.connect("$server/matchmaking")


	override suspend fun getMove(state: State, fromSelectCallback: (Point?) -> Unit): Move {
		return con.getMove(state)
	}
}