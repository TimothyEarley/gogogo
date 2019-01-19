package de.earley.gogogo.net

const val server = "ws://localhost:8080"

class Matchmaking(private val playerInfo: PlayerInfo) {

	private var running = false

	private lateinit var connection: Connection
	lateinit var opponent: NetworkController

	suspend fun findMatch(): MatchInfo {
		if (running) throw IllegalStateException("Already running matchmaking")
		running = true
		connection = Connection.connect("$server/matchmaking")

		opponent = NetworkController(connection)

		return connection.setupMatch(playerInfo)
	}


}