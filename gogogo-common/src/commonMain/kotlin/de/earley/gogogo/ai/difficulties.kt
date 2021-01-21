package de.earley.gogogo.ai

import de.earley.gogogo.ai.Evaluations.sumSquarePosition
import kotlin.random.Random


val extreme: Evaluation = treeSearchStrategy(4, sumSquarePosition, false)
fun random(rand: Random = Random.Default): Evaluation = { _, _ -> rand.nextInt() }


