package de.earley.gogogo.benchmark

import com.jakewharton.picnic.TextAlignment
import com.jakewharton.picnic.renderText
import com.jakewharton.picnic.table
import de.earley.gogogo.ai.Evaluations
import de.earley.gogogo.ai.Lague
import de.earley.gogogo.ai.RandomAI
import de.earley.gogogo.ai.Search
import de.earley.gogogo.game.Game
import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State
import de.earley.gogogo.game.grid.GameGrid
import de.earley.gogogo.game.grid.Point
import de.earley.gogogo.game.withMove
import kotlin.random.Random
import kotlin.time.Duration
import kotlin.time.Duration.Companion.milliseconds
import kotlin.time.Duration.Companion.seconds

private val rand = Random(1337)

fun main() {
	val teams: List<Benchmarked> = listOf(
		Search(depth = 6, evaluation = Evaluations.countTokens, pruning = true, useMemory = true),
		Lague(depth = 0, useForwardFinish = false, useIterativeDeepening = true, timeout = 300.milliseconds, evaluation = Evaluations.countTokens),
		Lague(depth = 0, useForwardFinish = false, useIterativeDeepening = true, timeout = 300.milliseconds, evaluation = Evaluations.positionMap),
	).map(::BenchmarkAI)

	league(teams, timeout = true)
}


fun generateRandomState(): State {
	val randAI = RandomAI(rand)
	val game = Game()
	val turns = rand.nextInt(1, 10)
	repeat(turns) {
		val (move, _) = randAI.calculateMoveSync(game.getState())
		game.move(move)
		// if the game is over we can't test the AI
		if (game.isOver()) {
			game.undo()
		}
	}
	return game.getState()
}

val winningState: State = State.create(Player.Blue, null, GameGrid.create { x, y ->
	when (Point(x, y)) {
		in listOf(Point(0, 0), Point(4, 4)) -> Player.Blue
		in listOf(Point(5, 0), Point(5, 4)) -> Player.Red
		else -> null
	}
})

fun league(strategies: List<Benchmarked>, timeout: Boolean = true) {
	println("Starting league with: ")
	strategies.forEach {
		println("- ${it.name}")
	}
	val score = run(
		strategies,
		1,
		if (!timeout) Duration.INFINITE else 20.seconds,
		(1..4).map { generateRandomState() } + State.initial() + winningState
	)

	val sortedStrats = strategies.map {
		it to (score[it]?.values?.reduce(Score::plus)?.score ?: 0)
	}.sortedByDescending { it.second }

	println()
	table {
		cellStyle {
			border = true
		}

		header {
			row {
				cell("")
				sortedStrats.forEach {
					cell(it.first.name)
				}
				cell("Total")
			}
		}
		sortedStrats.forEach { (strat, total) ->
			row {
				cell(strat.name)
				sortedStrats.forEach { (it, _) ->
					cell(score[strat]?.get(it) ?: "-") {
						alignment = TextAlignment.MiddleCenter
					}
				}
				cell(total)
			}
		}
	}.apply { println(renderText()) }

	println("\nStats:\n")
	strategies.sortedBy { it.avg() }.forEach {
		println(it.stats())
	}
}


fun State.findNumberOfVariations(depth: Int): Int {
	if (depth == 0) return 1
	return possibleMoves.sumOf {
		withMove(it) {
			findNumberOfVariations(depth - 1)
		}
	}
}