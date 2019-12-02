import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	kotlin("jvm") version Versions.kotlin
	application
}

dependencies {
	compile(project(":gogogo-common"))
	implementation(Depends.Stdlib.jvm)
	implementation(Depends.Coroutines.jvm)

	compile("org.deeplearning4j:deeplearning4j-core:1.0.0-beta3")
	compile("org.nd4j:nd4j-native-platform:1.0.0-beta3")

	compile("org.deeplearning4j:rl4j-core:1.0.0-beta3")
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