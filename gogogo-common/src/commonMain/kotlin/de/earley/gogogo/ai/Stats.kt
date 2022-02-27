package de.earley.gogogo.ai

data class Stats(
    var iterations: Int = 0,
    var finished: Int = 0,
    var pruned: Int = 0,
    var evaluated: Int = 0,
    var transpositions: Int = 0,
    var hashFound: Int = 0,
    var hashMiss: Int = 0,
    var depthReached: Int = 0,
)