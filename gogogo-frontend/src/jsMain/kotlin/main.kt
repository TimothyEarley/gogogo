package de.earley.gogogo


import de.earley.gogogo.ui.MenuUI
import de.earley.gogogo.ui.get
import kotlinx.browser.document
import kotlinx.browser.localStorage
import kotlinx.browser.window
import kotlinx.dom.addClass
import kotlinx.dom.removeClass
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.get

fun main() {
	Log.debug { "Started main" }
	window.onload = {
		MenuUI()
		darkModeToggle()
	}
}


private enum class Theme {
	Dark, Light
}
fun darkModeToggle() {
	val body = document.body!!
	val stored = localStorage["theme"]
	var theme = if (stored == null) {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) Theme.Dark else Theme.Light
	} else {
		Theme.valueOf(stored)
	}
	println("Starting theme: $theme")

	val checkbox = document.get<HTMLInputElement>("dark-mode")

	fun setTheme(theme : Theme) : Unit = when (theme) {
		Theme.Dark -> {
			body.removeClass("light-theme")
			body.addClass("dark-theme")
			checkbox.checked = true
		}
		Theme.Light -> {
			body.removeClass("dark-theme")
			body.addClass("light-theme")
			checkbox.checked = false

		}
	}

	setTheme(theme)
	checkbox.onclick = {
		// toggle theme
		theme = when (theme) {
			Theme.Dark -> Theme.Light
			Theme.Light -> Theme.Dark
		}
		setTheme(theme)
		localStorage.setItem("theme", theme.toString())
		println("Theme: $theme")
	}
}