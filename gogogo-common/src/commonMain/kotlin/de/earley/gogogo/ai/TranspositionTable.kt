package de.earley.gogogo.ai

import de.earley.gogogo.game.Move
import de.earley.gogogo.game.State
import de.earley.gogogo.game.grid.Point


enum class EntryKind {
    Exact, LowerBound, UpperBound
}

data class Entry(
    val key: Long,
    val value: Int,
    val move: Move,
    val depth: Int,
    val kind: EntryKind
)

interface TranspositionMemory {
    fun lookupEvaluation(stats: Stats, state: State, depth: Int, alpha: Int, beta: Int): Entry?
    fun getValidMove(state: State): Move?
    fun store(state: State, depth: Int, kind: EntryKind, eval: Int, move: Move)
    fun calculateOccupancy(): Float
}

class TranspositionHashMap private constructor(
    private val hashMap: MutableMap<Long, Entry>
) : TranspositionMemory {

    constructor(): this(HashMap())

    override fun lookupEvaluation(stats: Stats, state: State, depth: Int, alpha: Int, beta: Int): Entry? {
        val entry = hashMap[state.longHashCode()] ?: return null
        if (entry.depth < depth) return null

        return when (entry.kind) {
            EntryKind.Exact -> entry
            EntryKind.LowerBound -> entry.takeIf { it.value >= beta }
            EntryKind.UpperBound -> entry.takeIf { it.value <= alpha }
        }
    }

    override fun getValidMove(state: State): Move? = hashMap[state.longHashCode()]?.move

    override fun store(state: State, depth: Int, kind: EntryKind, eval: Int, move: Move) {
        hashMap[state.longHashCode()] = Entry(state.longHashCode(), eval, move, depth, kind)
    }

    override fun calculateOccupancy(): Float = 1f

}

class TranspositionTable private constructor(
    private val entries: Array<Entry>
) : TranspositionMemory {

    constructor(): this(Array(65536) {
        Entry(0, -1, Move(Point(0, 0), Point(0, 0)), 0, EntryKind.Exact)
    })

    private fun index(state: State): Int {
//            return abs(state.hashCode() % entries.size)
        val hash = state.longHashCode()
        return ((hash xor (hash shr 16) xor (hash shr 32) xor (hash shr 48)) and 0x000000000007FFF).toInt()
    }

    override fun lookupEvaluation(stats: Stats, state: State, depth: Int, alpha: Int, beta: Int): Entry? {
        val entry = entries[index(state)]
        if (entry.key != state.longHashCode()) {
            if (entry.key != 0L) stats.hashMiss++
            return null
        }
        if (entry.depth < depth) return null

        return when (entry.kind) {
            EntryKind.Exact -> entry
            EntryKind.LowerBound -> entry.takeIf { it.value >= beta }
            EntryKind.UpperBound -> entry.takeIf { it.value <= alpha }
        }
    }

    override fun getValidMove(state: State): Move? {
        return entries[index(state)].takeIf { it.key == state.longHashCode() }?.move
    }

    override fun store(state: State, depth: Int, kind: EntryKind, eval: Int, move: Move) {
        // TODO check depth is better?
        entries[index(state)] = Entry(state.longHashCode(), eval, move, depth, kind)
    }

    override fun calculateOccupancy(): Float = entries.count { it.key != 0L } / entries.size.toFloat()

}