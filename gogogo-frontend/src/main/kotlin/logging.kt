package de.earley.gogogo

/**
 * Very, very basic logging because I can't be bothered to add a proper library
 */
object Log {

	enum class Level(val value: Int) {
		Error(10), Info(5), Debug(0)
	}

	var level: Level = Level.Info

	fun error(msg: () -> String) {
		if (Level.Error.isEnabled()) println(msg())
	}

	fun info(msg: () -> String) {
		if (Level.Info.isEnabled()) println(msg())
	}

	fun debug(msg: () -> String) {
		if (Level.Debug.isEnabled()) println(msg())
	}

	private fun Level.isEnabled(): Boolean = value >= level.value

}