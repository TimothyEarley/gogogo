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

tasks.withType<JavaExec> {
	standardInput = System.`in`
}