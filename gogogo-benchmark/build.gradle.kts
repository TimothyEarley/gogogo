import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	kotlin("jvm")
	application
}

dependencies {
	implementation(project(":gogogo-common"))
	implementation(Depends.Stdlib.jvm)
	implementation(Depends.Coroutines.jvm)

	implementation(kotlin("stdlib-jdk8"))
}

application {
	mainClassName = "de.earley.gogogo.benchmark.MainKt"
}

tasks.withType<JavaExec> {
	standardInput = System.`in`
}

tasks.withType<KotlinCompile>().all {
	kotlinOptions.freeCompilerArgs += "-Xuse-experimental=kotlin.Experimental"
}

repositories {
	mavenCentral()
}