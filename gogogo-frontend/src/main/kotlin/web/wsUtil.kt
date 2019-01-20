package de.earley.gogogo.web

import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.MessageEvent
import org.w3c.dom.WebSocket
import kotlin.coroutines.CoroutineContext

interface WebsocketConnection {
	fun send(s: String)
	suspend fun receive(): String
	fun close()
}

class WebsocketConnectionImpl(
	private val ws: WebSocket
): WebsocketConnection, CoroutineScope {

	private val open = CompletableDeferred<Nothing?>()

	override val coroutineContext: CoroutineContext
		get() = Dispatchers.Default + Job()

	private val messages: Channel<String> = Channel()


	override fun send(s: String) {
		launch {
			open.await() // only open ws can send
			ws.send(s)

		}
	}

	override suspend fun receive(): String {
		return messages.receive()
	}

	override fun close() {
		ws.close()
	}

	init {
		ws.onopen = {
			open.complete(null)
		}

		ws.onclose = {
			cancel()
		}

		ws.onmessage = {evt ->
			if (evt is MessageEvent) launch {
				messages.send(evt.data.toString())
			}
		}
	}
}