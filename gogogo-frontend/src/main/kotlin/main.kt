package de.earley.gogogo


import de.earley.gogogo.ui.GameUI
import de.earley.gogogo.ui.MenuUI
import org.w3c.dom.HTMLDivElement
import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {
	println("Hello world!")

	window.onload = {
		MenuUI()
	}
}