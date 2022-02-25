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
		val (aScore, bScore) = runBothSides(
			a.ai, b.ai, timeout, startingState
		)
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
private suspend fun runBothSides(
	a: PlayerController,
	b: PlayerController,
	timeout: Duration,
	startingState: State
): Pair<Int, Int> /* score a, score b */ {
	var winsA = 0
	var winsB = 0

	when (runGame(a, b, timeout, startingState)) {
		Player.Red -> winsA++
		Player.Blue -> winsB++
	}
	when (runGame(b, a, timeout, startingState)) {
		Player.Red -> winsB++
		Player.Blue -> winsA++
	}

	return winsA to winsB
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


