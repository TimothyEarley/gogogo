import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	kotlin("jvm") version Versions.kotlin
	application
}

dependencies {
	compile(project(":gogogo-common"))
	implementation(Depends.Stdlib.jvm)
	implementation(Depends.Coroutines.jvm)
}

application {
	mainClassName = "de.earley.gogogo.benchmark.MainKt"
}
repositories {
	mavenCentral()
}