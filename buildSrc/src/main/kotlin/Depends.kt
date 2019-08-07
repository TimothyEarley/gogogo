object Depends {

	object Stdlib {
		const val common = "org.jetbrains.kotlin:kotlin-stdlib-common:${Versions.kotlin}"
		const val js = "org.jetbrains.kotlin:kotlin-stdlib-js:${Versions.kotlin}"
		const val jvm = "org.jetbrains.kotlin:kotlin-stdlib-jdk8:${Versions.kotlin}"
	}

	object Coroutines {
		const val common = "org.jetbrains.kotlinx:kotlinx-coroutines-core-common:${Versions.coroutines}"
		const val js = "org.jetbrains.kotlinx:kotlinx-coroutines-core-js:${Versions.coroutines}"
		const val jvm = "org.jetbrains.kotlinx:kotlinx-coroutines-core:${Versions.coroutines}"
	}

	object JS {
		const val html = "org.jetbrains.kotlinx:kotlinx-html-js:${Versions.html}"
	}

	object Ktor {
		const val netty = "io.ktor:ktor-server-netty:${Versions.ktor}"
		const val websockets = "io.ktor:ktor-websockets:${Versions.ktor}"
	}
	const val logback = "ch.qos.logback:logback-classic:${Versions.logback}"
}