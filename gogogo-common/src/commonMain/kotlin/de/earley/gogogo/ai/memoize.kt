package de.earley.gogogo.ai

import de.earley.gogogo.game.Player
import de.earley.gogogo.game.State

data class MemState(
	val player: Player,
	val state: State
)

fun noMemoize(strat: Strat): Strat = strat

// memoize is really slow (hot spots are LRUCache put (-> backing.remove/backing.put) and get)
fun memoize(strat: Strat): Strat {

	// hit rates
	// MAX: ~0.005
	// 200000: ~0.0035
	val mem: MutableMap<MemState, Float> = LRUCache(200000)

	return { player, state ->
		val memState = MemState(player, state)
		mem.getOrPut(memState) {
			strat(player, state)
		}
	}
}

// what i need is java.util.LinkedHashMap, however the js lib does not move the item to the last position
class LRUCache<K, V>(
	private val capacity: Int,
	private val backing: LinkedHashMap<K, V> = LinkedHashMap()
) : MutableMap<K, V> by backing {

	private var hits: Long = 0
	private var lookups: Long = 0

	override fun get(key: K): V? {
		lookups++
		val v = backing[key] ?: return null
		hits++
		moveToTop(key)
		return v
	}

	private fun moveToTop(key: K) {
		// shuffle around to append to end (most recently accessed)
		val v = backing.remove(key) ?: error("To move the element has to be present")
		backing[key] = v
	}

	override fun putAll(from: Map<out K, V>) {
		from.forEach {
			put(it.key, it.value)
		}
	}

	override fun put(key: K, value: V): V? {
		if (size >= capacity && !backing.containsKey(key)) {
			backing.remove(backing.keys.first())
		}

//		println("Cache: $size, hits: $hits, lookups: $lookups, hit rate: ${hits / lookups.toDouble()}")
		return backing.put(key, value)
	}

	override fun toString(): String {
		return backing.toString()
	}
}