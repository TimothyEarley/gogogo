plugins {
	kotlin("multiplatform")
}

kotlin {

	jvm()
	js().browser {

	}

	sourceSets {
		commonMain {
			dependencies {
				implementation(Depends.Coroutines.core)
			}
		}
	}

//	targets.all {
//		compilations.all {
//			kotlinOptions.freeCompilerArgs = listOf(
//				"-Xno-param-assertions" // much better performance
//			)
//		}
//	}
}