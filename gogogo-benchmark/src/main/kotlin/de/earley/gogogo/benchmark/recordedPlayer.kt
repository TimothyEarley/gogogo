package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.bestMove
import de.earley.gogogo.ai.extreme
import de.earley.gogogo.game.*
import java.io.File
import kotlin.streams.toList

object RecordedPlayer : PlayerController {
	override val name: String = "Recorded Player"

	private val database: MutableMap<State, Move> = mutableMapOf()

	override suspend fun getMove(
		lastMove: Move?,
		state: State,
		fromSelectCallback: (Point?) -> Unit
	): Move {
		return database.asSequence().filter { (savedState, move) ->
			when {
				state == savedState -> true
				savedState.isSimilar(state) -> // check the move can be done
					state.canMove(move)
				else -> false
			}
		}.firstOrNull()?.value ?: askPlayer(state).also {
			database[state] = it
		}
	}

	private fun askPlayer(state: State): Move {
		var move: Move
		do {
			println("Asking player")
			println(state.debugString())
			println("Extreme suggests: " + extreme.bestMove(state.playersTurn, state).move)

			val (fromX, fromY, toX, toY) = readLine()!!
				.toCharArray()
				.map { it.toString().toInt() }

			move = Move(Point(fromX, fromY), Point(toX, toY))
		} while (!state.canMove(move))
		return move
	}

	fun save(file: File) {
		if (file.exists()) file.delete()
		file.createNewFile()
		println("Saving to ${file.absolutePath}")
		database.forEach { (state, move) ->
			file.appendText(state.toReducedNetFormat())
			file.appendText("\n")
			file.appendText(move.toReducedNetFormat())
			file.appendText("\n")
		}
	}

	fun load(file: File) {
		println("Loading from ${file.absolutePath}")
		database.clear()
		file.readLines().windowed(2, 2).forEach { (state, move) ->
			database[state.stateFromReducedNetFormat()] = move.moveFromReducedNetFormat()
		}
	}
}