package de.earley.gogogo.ui

import kotlinx.html.dom.create
import kotlinx.html.js.option
import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import kotlin.browser.document

fun <T : Element> Document.get(id: String): T =
	getElementById(id) as? T ?: throw NoSuchElementException("No element with id $id found")

fun <T : HTMLElement> T.onClick(action: (Event) -> Unit): Pair<T, (Event) -> Unit> {
	addEventListener("click", action)
	return this to action
}


fun <T : HTMLSelectElement> T.onChange(action: (String) -> Unit): Pair<T, (Event) -> Unit> {
	val callback = { _:Event -> action(value)	}
	addEventListener("change", callback)
	return this to callback
}

fun HTMLElement.removeOnClick(action: (Event) -> Unit) {
	removeEventListener("click", action)
}

fun HTMLSelectElement.addOption(option: String) {
	options.add(document.create.option(content = option))
}

fun HTMLElement.hide() {
	classList.add("hidden")
}

fun HTMLElement.unhide() {
	classList.remove("hidden")
}

class EventListenerCollection {
	private val listeners: MutableList<Pair<HTMLElement, (Event) -> Unit>> = ArrayList()

	operator fun plusAssign(listener: Pair<HTMLElement, (Event) -> Unit>) {
		listeners += listener
	}

	/**
	 * unregister listeners
	 */
	fun close() {
		listeners.forEach { (elem, action) ->
			elem.removeOnClick(action)
		}
		listeners.clear()
	}
}