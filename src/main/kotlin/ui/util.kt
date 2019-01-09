package de.earley.gogogo.ui

import org.w3c.dom.Document
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event

fun <T : Element> Document.get(id: String): T =
	getElementById(id) as? T ?: throw NoSuchElementException("No element with id $id found")

fun <T : HTMLElement> T.onClick(action: (Event) -> Unit) = addEventListener("click", action)