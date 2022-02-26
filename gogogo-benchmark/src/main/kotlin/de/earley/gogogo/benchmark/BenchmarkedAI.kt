package de.earley.gogogo.benchmark

import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Point
import kotlin.time.Duration
import kotlin.time.ExperimentalTime
import kotlin.time.measureTimedValue

interface Benchmarked {
	val name: String
	val ai: PlayerController
	fun avg(): Duration
	fun stats(): String
}

class BenchmarkAI(private val wrapped: PlayerController): PlayerController, Benchmarked {

	override val name: String = wrapped.name

	override val ai: PlayerController = this

	private var totalTime: Duration = Duration.ZERO
	private var invokeCount: Int = 0
	private var max: Duration = Duration.ZERO

	@OptIn(ExperimentalTime::class) // measureTimedValue
	override suspend fun getMove(
        lastMove: Move?,
        state: State,
        fromSelectCallback: (Point?) -> Unit
	): MoveResponse {
		val (move, time) = measureTimedValue {
			wrapped.getMove(lastMove, state, fromSelectCallback)
		}

		if (time > max) max = time
		totalTime += time
		invokeCount++
		return move
	}

	override fun avg() =
		if (invokeCount != 0)
			totalTime / invokeCount.toDouble()
		else
			Duration.INFINITE
	override fun stats(): String = "${"[${name}]: ".padEnd(40)}avg: ${avg()}, \tmax: ${max}, \tCount: $invokeCount"
}