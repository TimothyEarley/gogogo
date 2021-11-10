package de.earley.gogogo.benchmark

import java.time.Duration
import java.time.Instant

class ProgressBar(private val total: Int) {

	private var done = 0
	private lateinit var start: Instant
	private var lastWidth = 0

	fun start() {
		start = Instant.now()
	}

	fun tick() {
		done++
	}

	fun show() {
		val message = progressBar(80)
		lastWidth = message.length
		print(message)
	}

	fun eraseAndShow() {
		print("\b".repeat(lastWidth))
		show()
	}

	private fun progressBar(width: Int): String {
		val percent = (done.toFloat() / total).coerceIn(0f, 1f)
		val progress = (width * percent).toInt()
		val now = Instant.now()
		val soFar = Duration.between(start, now)
		val eta = Duration.ofMillis((soFar.toMillis() * (1 / percent - 1)).toLong())

		return "[${"=".repeat(progress)}>${" ".repeat(width - progress)}] $done/$total ETA: ${format(eta)}"
	}

	private fun format(d: Duration) = d.toString()
		.substring(2)
		.replace("(\\d[HMS])(?!$)".toRegex(), "$1 ")
		.lowercase()


}