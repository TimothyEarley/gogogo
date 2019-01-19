plugins {
	id("com.palantir.git-version") version "0.11.0"
}

val gitVersion: groovy.lang.Closure<*> by extra

allprojects {
	group = "de.earley.gogogo"
	version = gitVersion()

	repositories {
		jcenter()
		maven("https://kotlin.bintray.com/kotlinx")
	}
}

tasks {
	val stage by registering {
		dependsOn(":gogogo-backend:clean", ":gogogo-backend:shadowJar")
	}
}