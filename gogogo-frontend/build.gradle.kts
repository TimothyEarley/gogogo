plugins {
    kotlin("multiplatform")
}

kotlin {
    js(IR) {
        binaries.executable()
        browser {}
    }

    sourceSets {

        val jsMain by getting {
            dependencies {
                implementation(project(":gogogo-common"))

                implementation(Kotlin.stdlib.js)
                implementation(KotlinX.coroutines.core)
                implementation(KotlinX.html)
            }
        }

    }
}