package de.earley.gogogo.benchmark

import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Point
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.SendChannel
import kotlinx.coroutines.channels.actor
import kotlin.time.Duration
import kotlin.time.ExperimentalTime

@OptIn(ExperimentalTime::class)
fun run(
	strategies: List<Benchmarked>,
	concurrency: Int,
	timeout: Duration,
	fromStates: List<State> = listOf(State.initial())
): MutableMap<Benchmarked, Int> = runBlocking(Dispatchers.Default) {
	require(concurrency >= 1)

	val scores: MutableMap<Benchmarked, Int> = mutableMapOf()
	val scorer = scorer(scores)
	val tasks = Channel<Task>()
	val totalGames = (2..strategies.size).sum() * fromStates.size
	val progressActor = progressActor(totalGames)

	coroutineScope {
		repeat(concurrency) {
			launch {
				runner(scorer, tasks, progressActor, timeout)
			}
		}

		for (first in strategies.indices) {
			for (second in first + 1 until strategies.size) {
				val a = strategies[first]
				val b = strategies[second]
				for (state in fromStates) {
					// copy the state since it is mutable
					tasks.send(Task(a, b, state.deepCopy()))
				}
			}
		}
		tasks.close()

	}
	progressActor.close()
	scorer.close()

	scores
}

@OptIn(ObsoleteCoroutinesApi::class)
private fun CoroutineScope.progressActor(totalGames: Int) = actor<Unit>(capacity = 10) {
	val progressBar = ProgressBar(totalGames).also {
		it.start()
		it.show()
	}
	for (u in channel) {
		progressBar.tick()
		progressBar.eraseAndShow()
	}
}

private typealias Task = Triple<Benchmarked, Benchmarked, State>
private typealias Result = Pair<Benchmarked, Int>
@OptIn(ExperimentalTime::class)
private suspend fun runner(
	scorer: SendChannel<Result>,
	tasks: ReceiveChannel<Task>,
	progressChannel: SendChannel<Unit>,
	timeout: Duration
) {
	for ((a, b, startingState) in tasks) {
		val (aScore, bScore) = benchmark(a, b, timeout, startingState)
		scorer.send(a to aScore)
		scorer.send(b to bScore)
		progressChannel.send(Unit)
	}
}

@OptIn(ObsoleteCoroutinesApi::class)
private fun CoroutineScope.scorer(scores: MutableMap<Benchmarked, Int>) = actor<Result>(
	capacity = 10
) {
	for ((name, score) in channel) {
		scores.merge(name, score, Int::plus)
	}
}

@OptIn(ExperimentalTime::class)
private suspend fun benchmark(
	a: Benchmarked,
	b: Benchmarked,
	timeout: Duration,
	startingState: State
): Pair<Int, Int> {
	val result = runBothSidesRepeated(
		a.name, a.ai,
		b.name, b.ai,
		timeout,
		startingState
	)

	if (result.containsKey("Draw")) {
		System.err.println("Timeout! for ${a.name} vs ${b.name}")
	}

	return result.getOrDefault(a.name, 0) to result.getOrDefault(b.name, 0)
}

@OptIn(ExperimentalTime::class)
private suspend fun runBothSidesRepeated(
	nameA: String,
	a: PlayerController,
	nameB: String,
	b: PlayerController,
	timeout: Duration,
	startingState: State
): Map<String, Int> {
	fun Player?.mapKeyTo(red: String, blue: String): String = when (this) {
		Player.Red -> red
		Player.Blue -> blue
		else -> "Draw"
	}


	val wins = mutableMapOf<String, Int>()

	wins.merge(runGame(a, b, timeout, startingState).mapKeyTo(nameA, nameB), 1, Int::plus)
	wins.merge(runGame(b, a, timeout, startingState).mapKeyTo(nameB, nameA), 1, Int::plus)

	return wins
}

private object NoOpUiHook : UIHook {
	override fun onSelect(point: Point?) {}
	override fun onGameEnd() {}
	override suspend fun onMove(move: Move, lines : List<Line>?) {}
}

@OptIn(ExperimentalTime::class)
private suspend fun runGame(
	red: PlayerController,
	blue: PlayerController,
	timeout: Duration,
	startingState: State
): Player? =
	withTimeoutOrNull(timeout) {
		val game = ControlledGame(red, blue, NoOpUiHook, startingState)
		with(game) {
			start().join()
		}
		game.victor
	}


