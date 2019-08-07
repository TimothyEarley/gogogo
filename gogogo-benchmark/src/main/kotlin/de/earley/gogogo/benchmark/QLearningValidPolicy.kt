package de.earley.gogogo.benchmark

import org.deeplearning4j.rl4j.learning.StepCountable
import org.deeplearning4j.rl4j.learning.sync.qlearning.discrete.QLearningDiscrete
import org.deeplearning4j.rl4j.mdp.MDP
import org.deeplearning4j.rl4j.policy.EpsGreedy
import org.deeplearning4j.rl4j.policy.Policy
import org.deeplearning4j.rl4j.space.DiscreteSpace
import org.deeplearning4j.rl4j.space.Encodable
import org.nd4j.linalg.api.ndarray.INDArray
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import java.util.*

@Suppress("UNCHECKED_CAST")
fun <O: Encodable> hackPolicy(ql: QLearningDiscrete<O>, checker: (Int) -> Boolean) {

	val field = QLearningDiscrete::class.java.getDeclaredField("egPolicy")
	field.isAccessible = true

	val newPolicy = ValidPolicy(
		ql.policy, ql.mdp, ql.configuration.updateStart, ql.configuration.epsilonNbStep, ql.random, ql.configuration.minEpsilon, ql, checker
	)

	field.set(ql, newPolicy)
}

private class ValidPolicy<O : Encodable>(
	val policy: Policy<O, Int>,
	val mdp: MDP<O, Int, DiscreteSpace>,
	updateStart: Int,
	epsilonNbStep: Int,
	val rd: Random,
	minEpsilon: Float,
	val learning: StepCountable,
	val checker: (Int) -> Boolean
) : EpsGreedy<O, Int, DiscreteSpace>(
	policy,
	mdp,
	updateStart,
	epsilonNbStep,
	rd,
	minEpsilon,
	learning
) {

	private val log: Logger = LoggerFactory.getLogger(this::class.java)

	override fun nextAction(input: INDArray?): Int {
		val ep = epsilon
		if (learning.stepCounter % 500 == 1)
			log.info("EP: " + ep + " " + learning.stepCounter)

		fun rand(): Int {
			var action: Int? = null
			var tryCount = 0
			while (action == null || !checker(action)) {
				action = mdp.actionSpace.randomAction()
				if (tryCount++ > 100) error("Cannot find a valid move")
			}
			return action
		}

		return if (rd.nextFloat() > ep) {
			policy.nextAction(input).takeIf(checker) ?: rand().also {
				//TODO find second, third, etc. best action (argmax of output) instead of falling back to random
				System.err.println("Learned illegal action. Doing random instead")
			}
		} else {
			rand()
		}
	}
}