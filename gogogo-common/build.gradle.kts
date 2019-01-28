plugins {
	kotlin("multiplatform") version "1.3.20"
	id("kotlinx-serialization") version Versions.serialisationPlugin
}

kotlin {

	jvm()
	js()

	sourceSets {
		commonMain {
			dependencies {
				implementation(Depends.Stdlib.common)
				implementation(Depends.Coroutines.common)
				implementation(Depends.Serialisation.common)
			}
		}

		val jsMain by getting {
			dependencies {
				implementation(Depends.Stdlib.js)
				implementation(Depends.Coroutines.js)
				implementation(Depends.Serialisation.js)
			}
		}

		val jvmMain by getting {
			dependencies {
				implementation(Depends.Stdlib.jvm)
				implementation(Depends.Coroutines.jvm)
				implementation(Depends.Serialisation.jvm)
			}
		}
	}
}