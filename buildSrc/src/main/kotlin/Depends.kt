object Depends {

	object JS {
		const val kotlin = "org.jetbrains.kotlin:kotlin-stdlib-js:${Versions.kotlin}"
		const val coroutines = "org.jetbrains.kotlinx:kotlinx-coroutines-core-js:${Versions.coroutines}"
		const val html = "org.jetbrains.kotlinx:kotlinx-html-js:${Versions.html}"
		const val serialisation = "org.jetbrains.kotlinx:kotlinx-serialization-runtime-js:${Versions.serialisationRuntime}"

	}

	object Ktor {
		const val netty = "io.ktor:ktor-server-netty:${Versions.ktor}"
		const val websockets = "io.ktor:ktor-websockets:${Versions.ktor}"
	}
	const val logback = "ch.qos.logback:logback-classic:${Versions.logback}"
}