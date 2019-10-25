package de.earley.gogogo.benchmark

import de.earley.gogogo.ai.*
import de.earley.gogogo.game.*
import kotlinx.coroutines.runBlocking
import org.deeplearning4j.gym.StepReply
import org.deeplearning4j.nn.conf.Updater
import org.deeplearning4j.rl4j.learning.sync.qlearning.QLearning
import org.deeplearning4j.rl4j.learning.sync.qlearning.discrete.QLearningDiscreteDense
import org.deeplearning4j.rl4j.mdp.MDP
import org.deeplearning4j.rl4j.network.dqn.DQNFactoryStdDense
import org.deeplearning4j.rl4j.space.*
import org.deeplearning4j.rl4j.util.DataManager

typealias Observation = Encodable
fun State.toEncodable(): Encodable = Encodable {
	grid.elems.map { when(it) {
		Player.Red -> 1.0
		Player.Blue -> -1.0
		else -> 0.0
	}}.toDoubleArray()
}

class MDPGame(
	private val opponents: Map<IntRange, AI>
) : MDP<Observation, Int, DiscreteSpace> {

	private val ownPlayer = Player.Red
	private var game: Game = Game()

	private val aSpace = object : DiscreteSpace(5 * 4) {// action: piece number, direction
		override fun randomAction(): Int { // override to only allow valid actions
			return (0 until size).filter { canDoAction(it) }.let {
				if (it.isEmpty()) {
					error("No valid moves")
				} else {
					it.random()
				}
			}
		}
	}
	private val oSpace = ArrayObservationSpace<Observation>(intArrayOf(game.grid.height * game.grid.width)) // input size

	private var movesMade = 0
	private fun doOpponentMove() {
		if (game.isOver()) return
		movesMade++
		if (movesMade % 100 == 0) println(movesMade)
		val m = runBlocking {
			opponents.entries
				.find { it.key.contains(movesMade) }!!
				.also {
					if (it.key.start + 1 == movesMade) {
						println("Starting at $movesMade with ${it.value.name}")
					}
				}
				.value
				.getMove(null, game.state) {}
		}
		game.move(m.from, m.to)
	}

	override fun getActionSpace(): DiscreteSpace = aSpace
	override fun getObservationSpace(): ObservationSpace<Observation> = oSpace

	override fun isDone(): Boolean = game.isOver()

	override fun newInstance(): MDP<Observation, Int, DiscreteSpace> {
		TODO()
	}

	override fun reset(): Observation {
		game = Game()
		if (ownPlayer != game.player) {
			// let the opponent start
			doOpponentMove()
		}
		return game.state.toEncodable()
	}

	override fun close() {
		TODO()
	}

	fun canDoAction(action: Int): Boolean {
		val (from, to) = decodeAction(action) ?: return false
		return game.state.move(from, to) is MoveResult.Success
	}

	override fun step(action: Int): StepReply<Observation> {

		val didMove = decodeAction(action)?.let {
			game.move(it.from, it.to)
		} ?: false

		if (!didMove) {
			error("Attempted an illegal move")
		}

		doOpponentMove()

		val gameLengthPenalty = 0.25 * game.turns

		return StepReply(
			game.state.toEncodable(),
			when (game.victor) {
				ownPlayer -> 200.0 - gameLengthPenalty
				ownPlayer.next() -> -200.0 + gameLengthPenalty // plus to encourage defensive behaviour
				// else use progress
				else -> ( game.state.grid
					.getAllFor(ownPlayer)
						//TODO replace hardcoded direction
					.map { game.grid.width - it.x }.sum().toDouble() ?: 0.0 ) - gameLengthPenalty
			} ,
			game.isOver(),
			null
		)
	}

	private fun decodeAction(action: Int): Move? {
		val piece = action / 4
		val direction = action % 4

		val from = game.state.grid.getAllFor(ownPlayer).getOrNull(piece) ?: return null
		val to = when (direction) {
			0 -> from.left()
			1 -> from.up()
			2 -> from.right()
			3 -> from.down()
			else -> error("Maths is broken")
		}
		return Move(from, to)
	}


}

fun train() {

	// one epoch ~ 40 steps
	val opponents = mapOf(
		0..4_000 to AI(random(), false, "random"),
		4_000..10_000 to AI(Evaluations.sumSquarePosition, false, "easy"),
		10_000..Int.MAX_VALUE to AI(extreme, false, "extreme")
	)

	val steps = 200 // 100
	val epochs = 100 // but not really (actually is minimum)

	val qlConfig = QLearning.QLConfiguration(
		123,   //Random seed
		steps,//Max step By epoch
		steps * epochs, //Max step
		10000, //Max size of experience replay
		32,    //size of batches
		100,   //target update (hard)
		0,     //num step noop warmup
		0.05,  //reward scaling
		0.99,  //gamma
		10.0,  //td-error clipping
		0.1f,  //min epsilon
		2000,  //num step for eps greedy anneal
		true   //double DQN
	)

	// there should be 30*3 = 90 different inputs
	val config = DQNFactoryStdDense.Configuration(
		2, //number of layers
		128, //number of hidden nodes
		0.01, //l2 regularization
		Updater.SGD.iUpdaterWithDefaultConfig,
		null
	)

	val mdp = MDPGame(opponents)
	val data = DataManager("./rl-data", true)
	val dql = QLearningDiscreteDense<Observation>(mdp, config, qlConfig, data)

	hackPolicy(dql, mdp::canDoAction)

	dql.train()
}

fun main() {
	train()
}