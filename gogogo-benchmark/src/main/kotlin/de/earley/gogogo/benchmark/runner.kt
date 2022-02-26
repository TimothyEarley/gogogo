package de.earley.gogogo.benchmark

import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.Point
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.SendChannel
import kotlinx.coroutines.channels.actor
import kotlin.time.Duration

data class Score(
	val wins: Int,
	val draws: Int,
	val losses: Int
) {
	override fun toString(): String = "$wins/$draws/$losses"
	 val score: Int
		 get() = 3 * wins + draws
}


operator fun Score.plus(other: Score): Score =
	Score(wins + other.wins, draws + other.draws, losses + other.losses)

fun run(
	strategies: List<Benchmarked>,
	concurrency: Int,
	timeout: Duration,
	fromStates: List<State> = listOf(State.initial())
): Map<Benchmarked, Map<Benchmarked, Score>> = runBlocking(Dispatchers.Default) {
	require(concurrency >= 1)

	val scores: MutableMap<Benchmarked, Map<Benchmarked, Score>> = mutableMapOf()
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
					tasks.send(Task(a, b, state))
				}
			}
		}
		tasks.close()

	}
	progressActor.close()
	scorer.close()

	scores
}

@OptIn(ObsoleteCoroutinesApi::class) // actor
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
private typealias Result = Triple<Benchmarked, Benchmarked, Score>
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
		scorer.send(Triple(a, b, aScore))
		scorer.send(Triple(b, a, bScore))
		progressChannel.send(Unit)
	}
}

@OptIn(ObsoleteCoroutinesApi::class) // actors
private fun CoroutineScope.scorer(scores: MutableMap<Benchmarked, Map<Benchmarked, Score>>) = actor<Result>(
	capacity = 10
) {
	for ((name, against, score) in channel) {
		scores.merge(name, mapOf(against to score)) { a, b ->
			(a.asSequence() + b.asSequence()).groupBy({it.key}, {it.value})
				.mapValues { it.value.reduce(Score::plus) }
		}
	}
}

private suspend fun runBothSides(
	a: PlayerController,
	b: PlayerController,
	timeout: Duration,
	startingState: State
): Pair<Score, Score> /* score a, score b */ {
	var scoreA = Score(0, 0, 0)
	var scoreB = Score(0, 0, 0)

	when (runGame(a, b, timeout, startingState)) {
		Player.Red -> {
			scoreA = scoreA.copy(wins = scoreA.wins + 1)
			scoreB = scoreB.copy(losses = scoreB.losses + 1)
		}
		Player.Blue -> {
			scoreA = scoreA.copy(losses = scoreA.losses + 1)
			scoreB = scoreB.copy(wins = scoreB.wins + 1)
		}
		null -> {
			scoreA = scoreA.copy(draws = scoreA.draws + 1)
			scoreB = scoreB.copy(draws = scoreB.draws + 1)
		}
	}
	when (runGame(b, a, timeout, startingState)) {
		Player.Blue -> {
			scoreA = scoreA.copy(wins = scoreA.wins + 1)
			scoreB = scoreB.copy(losses = scoreB.losses + 1)
		}
		Player.Red -> {
			scoreA = scoreA.copy(losses = scoreA.losses + 1)
			scoreB = scoreB.copy(wins = scoreB.wins + 1)
		}
		null -> {
			scoreA = scoreA.copy(draws = scoreA.draws + 1)
			scoreB = scoreB.copy(draws = scoreB.draws + 1)
		}
	}

	return scoreA to scoreB
}

private object NoOpUiHook : UIHook {
	override fun onSelect(point: Point?) {}
	override fun onGameEnd() {}
	override suspend fun onMove(move: Move, lines: List<Line>?) {}
}

private suspend fun runGame(
	red: PlayerController,
	blue: PlayerController,
	timeout: Duration,
	startingState: State
): Player? =
	withTimeoutOrNull(timeout) {
		// copy the state since it is mutable
		val game = ControlledGame(red, blue, NoOpUiHook, startingState.deepCopy())
		with(game) {
			start().join()
		}
		game.victor
	}
