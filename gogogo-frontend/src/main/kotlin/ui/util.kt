package de.earley.gogogo.ui

import org.w3c.dom.Document
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener

fun <T : Element> Document.get(id: String): T =
	getElementById(id) as? T ?: throw NoSuchElementException("No element with id $id found")

fun <T : HTMLElement> T.onClick(action: (Event) -> Unit): Pair<T, (Event) -> Unit> {
	addEventListener("click", action)
	return this to action
}

fun HTMLElement.removeOnClick(action: (Event) -> Unit) {
	removeEventListener("click", action)
}
