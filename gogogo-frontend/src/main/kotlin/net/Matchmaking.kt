package de.earley.gogogo.net

//TODO better config
//const val server = "ws://localhost:8080"
const val server = "wss://gogogo-server.herokuapp.com/"

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

	fun disconnect() {
		if (!running) return
		running = false
		connection.close()
	}


}