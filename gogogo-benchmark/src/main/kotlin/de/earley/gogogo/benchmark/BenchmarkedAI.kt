package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.AI
import de.earley.gogogo.ai.Evaluation
import de.earley.gogogo.game.*
import kotlin.time.Duration
import kotlin.time.ExperimentalTime
import kotlin.time.measureTimedValue


//TODO rewrite benchmark to be on PlayerController level
@OptIn(ExperimentalTime::class)
interface Benchmarked {
	val name: String
	val ai: PlayerController
	fun avg(): Duration
	fun stats(): String
}

@OptIn(ExperimentalTime::class)
fun PlayerController.mockBenchmarked(name: String) = object : Benchmarked {
	override val name: String = name
	override val ai: PlayerController = this@mockBenchmarked
	override fun avg(): Duration = Duration.ZERO
	override fun stats(): String = "MOCKED"
}

@OptIn(ExperimentalTime::class)
class BenchmarkAI(override val name: String, val wrapped: PlayerController): PlayerController, Benchmarked {

	override val ai: PlayerController = this

	private var totalTime: Duration = Duration.ZERO
	private var invokeCount: Int = 0
	private var max: Duration = Duration.ZERO

	override suspend fun getMove(
		lastMove: Move?,
		state: State,
		fromSelectCallback: (Point?) -> Unit
	): Pair<Move, List<Line>?> {
		val (move, time) = measureTimedValue {
			wrapped.getMove(lastMove, state, fromSelectCallback)
		}

		if (time > max) max = time
		totalTime += time
		invokeCount++
		return move
	}

	override fun avg() = totalTime / invokeCount.toDouble()
	override fun stats(): String = "${"[${name}]: ".padEnd(40)}avg: ${avg()}, \tmax: ${max}, \tCount: $invokeCount"
}

fun benchmarkStrategy(name: String, strategy: Evaluation) = BenchmarkAI(name, AI(strategy))