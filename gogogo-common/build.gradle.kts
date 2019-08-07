plugins {
	kotlin("multiplatform") version "1.3.20"
}

kotlin {

	jvm()
	js()

	sourceSets {
		commonMain {
			dependencies {
				implementation(Depends.Stdlib.common)
				implementation(Depends.Coroutines.common)
			}
		}

		val jsMain by getting {
			dependencies {
				implementation(Depends.Stdlib.js)
				implementation(Depends.Coroutines.js)
			}
		}

		val jvmMain by getting {
			dependencies {
				implementation(Depends.Stdlib.jvm)
				implementation(Depends.Coroutines.jvm)
			}
		}
	}
}