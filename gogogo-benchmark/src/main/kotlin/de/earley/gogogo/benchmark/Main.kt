package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.Evaluations
import de.earley.gogogo.ai.RandomAI
import de.earley.gogogo.ai.Search
import de.earley.gogogo.game.Game
import de.earley.gogogo.game.State
import de.earley.gogogo.game.withMove
import kotlin.random.Random
import kotlin.time.Duration
import kotlin.time.Duration.Companion.seconds
import kotlin.time.ExperimentalTime
import kotlin.time.measureTimedValue

@OptIn(ExperimentalTime::class)
fun main() {
	val teams: List<Benchmarked> = listOf(
		RandomAI(),
		RandomAI(),
		RandomAI(),
		Search(depth = 6, evaluation = Evaluations.countTokens, pruning = true, useMemory = true),
//		Search(depth = 4, evaluation = Evaluations.countTokens, pruning = true, useMemory = true),
//		Search(depth = 4, evaluation = Evaluations.sumSquarePosition, pruning = true, useMemory = true),
	).map(::BenchmarkAI)

	// 9 -> 40353607
	// 9 -> 13.5s
	// without grid cache: 11.7s
	// better grid cache: 11.7s, 12.2s
	// no victory checking: 9.6s, 9s
	// better victory checking: 10.2, 10s
	// no token tracking and changed calculatePossibleMoves: 6.4s, 6.1s
	// with token tracking and changed calculatePossibleMoves: 10.9s
	println(measureTimedValue { findNumberOfVariations(9) })

	// league(teams, timeout = true)
}

private val rand = Random(1337)
fun generateRandomState(): State {
	val randAI = RandomAI(rand)
	val game = Game()
	val turns = rand.nextInt(1, 10)
	repeat(turns) {
		val (move, _) = randAI.calculateMove(game.getState())
		game.move(move)
		// if the game is over we can't test the AI
		if (game.isOver()) {
			game.undo()
		}
	}
	return game.getState()
}

fun league(strategies: List<Benchmarked>, timeout: Boolean = true) {
	println("Starting league with: ")
	strategies.forEach {
		println("- ${it.name}")
	}
	val score = run(
		strategies,
		3,
		if (!timeout) Duration.INFINITE else 30.seconds,
		(1..5).map { generateRandomState() } + State.initial()
	)

	println("\nScores:\n")
	score.entries.sortedBy { -it.value }.forEachIndexed { i, e ->
		println("${i + 1}. ${e.key.name}: ${e.value}")
	}

	println("\nStats:\n")

	strategies.sortedBy { it.avg() }.forEach {
		println(it.stats())
	}
}


fun findNumberOfVariations(depth: Int): Int {
	if (depth == 0) return 1
	val state = State.initial()
	return state.possibleMoves.sumOf {
		state.withMove(it) {
			findNumberOfVariations(depth - 1)
		}
	}
}