package de.earley.gogogo.backend

import de.earley.gogogo.game.*
import de.earley.gogogo.net.Messages
import de.earley.gogogo.net.MoveNetFormat
import de.earley.gogogo.net.PlayerInfo
import io.ktor.http.cio.websocket.WebSocketSession
import io.ktor.http.cio.websocket.send
import kotlinx.coroutines.*
import java.lang.IllegalArgumentException
import kotlin.coroutines.CoroutineContext

data class ConnectedPlayer(
	val ws: WebSocketSession,
	val matchMaker: MatchMaker
) : CoroutineScope {

	private val job = Job()
	override val coroutineContext: CoroutineContext
		get() = Dispatchers.IO + job

	sealed class State {
		object START: State()
		data class CONNECTED(val playerInfo: PlayerInfo): State()
		data class INGAME(
			val opponent: ConnectedPlayer,
			val player: Player,
			val game: Game
		) : ConnectedPlayer.State()
	}

	private var state: State =
		State.START

	//TODO concurrency
	suspend fun handleMessage(msg: String) = state.let { s ->
		when (s) {
			State.START -> {
				val info = Messages.parseConnect(msg)
				state = State.CONNECTED(info)
				matchMaker.register(this)
			}

			is State.CONNECTED -> {
				throw IllegalArgumentException("No message expected, got $msg")
			}

			is State.INGAME -> {
				// 1. get the move from the player
				val move = MoveNetFormat.decode(msg)
				// 2. verify
				//TODO what does throwing an exception here do? better feedback
				require(s.game.move(move) is MoveResult.Success) { "CHEATER!!!!" }
				// 2. pass on to opponent
				s.opponent.ws.send(MoveNetFormat.encodeNullable(move))
			}
		}
	}

	suspend fun close() {
		// remove from queue (if we where there)
		matchMaker.unregister(this)
		// inform opponent
		val s = state
		if (s is State.INGAME) {
			s.opponent.sendClose()
		}
		job.cancelAndJoin()
	}

	private suspend fun sendClose() {
		println("Sending close!")
		ws.send("CLOSE")
	}

	companion object {

		suspend fun createMatch(red: ConnectedPlayer, blue: ConnectedPlayer) {
			// gather info

			require(red.state is State.CONNECTED)
			require(blue.state is State.CONNECTED)

			val infoRed = (red.state as State.CONNECTED).playerInfo
			val infoBlue = (blue.state as State.CONNECTED).playerInfo

			val game = Game()

			// change state
			red.state = State.INGAME(blue, Player.Red, game)
			blue.state = State.INGAME(red, Player.Blue, game)

			// start game
			red.ws.send(Messages.matchStart(Player.Red, infoBlue))
			blue.ws.send(Messages.matchStart(Player.Blue, infoRed))

		}

	}
}