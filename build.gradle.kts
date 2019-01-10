plugins {
	id("com.palantir.git-version") version "0.11.0"
}

val gitVersion: groovy.lang.Closure<*> by extra

allprojects {
	version = gitVersion()
}