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
				implementation(KotlinX.coroutines.core)
				implementation("io.github.reactivecircus.cache4k:cache4k:_")
			}
		}

		commonTest {
			dependencies {
				implementation(Kotlin.test)
			}
		}

		all {
			languageSettings.optIn("kotlin.RequiresOptIn")
		}
	}

	targets.all {
		compilations.all {
			kotlinOptions {
				// for Cache4K workaround
//				freeCompilerArgs = listOf("-Xjvm-default=enable")
			}
		}
	}
}