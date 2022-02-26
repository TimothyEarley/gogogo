package de.earley.gogogo.benchmark

import com.jakewharton.picnic.TextAlignment
import com.jakewharton.picnic.renderText
import com.jakewharton.picnic.table
import de.earley.gogogo.ai.*
import de.earley.gogogo.game.*
import de.earley.gogogo.game.grid.GameGrid
import de.earley.gogogo.game.grid.Point
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
		Search(depth = 6, evaluation = Evaluations.countTokens, pruning = true, useMemory = true),
		Search(depth = 3, evaluation = Evaluations.countTokens, pruning = false, useMemory = false),
//		LastAI(),
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

	// println(measureTimedValue { State.initial().findNumberOfVariations(7) })

	league(teams, timeout = false)
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
		3,
		if (!timeout) Duration.INFINITE else 5.seconds,
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