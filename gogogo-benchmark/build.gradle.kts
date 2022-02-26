plugins {
	kotlin("jvm")
	application
}

dependencies {
	implementation(project(":gogogo-common"))
	implementation(Kotlin.stdlib)
	implementation(KotlinX.coroutines.core)
	implementation(JakeWharton.picnic)
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile>().configureEach {
	kotlinOptions.jvmTarget = "11"
	kotlinOptions.freeCompilerArgs += "-Xopt-in=kotlin.RequiresOptIn"
}

application {
	mainClassName = "de.earley.gogogo.benchmark.MainKt"
}

tasks.withType<JavaExec> {
	standardInput = System.`in`
}