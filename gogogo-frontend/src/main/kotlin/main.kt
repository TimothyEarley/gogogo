package de.earley.gogogo


import de.earley.gogogo.ui.MenuUI
import kotlin.browser.window

fun main(args: Array<String>) {
	println("Hello world!")

	window.onload = {
		MenuUI()
	}
}