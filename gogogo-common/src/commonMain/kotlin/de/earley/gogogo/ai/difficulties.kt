package de.earley.gogogo.ai

import kotlin.random.Random

val easy: Strategy = Evaluations.sumPosition

// gets beaten by easy
val medium: Strategy = recurseOnce(easy)

val base: Strategy = treeSearchStrategy(2, medium, false)

val randomBase: Strategy = treeSearchStrategy(2, medium, false)
	.map { _, _, i -> i + Random.nextInt(-2, 2) }


// medium and hard are very similar
val hard: Strategy = treeSearchStrategy(2, Evaluations.sumPosition, false)

// broken
val superStrategy: Strategy = treeSearchStrategy(3, Evaluations.sumSquarePosition, true, 10)

// shit (also: misses obvious victory)
val extreme: Strategy = treeSearchStrategy(4, Evaluations.sumSquarePosition, false)

val random: Strategy = { _, _ -> Random.nextInt() }