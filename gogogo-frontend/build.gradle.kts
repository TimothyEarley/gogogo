plugins {
    kotlin("js")
}

kotlin {
    js {
      browser {}
    }
}

dependencies {
    implementation(project(":gogogo-common"))

    implementation(Kotlin.stdlib.js)
    implementation(KotlinX.coroutines.coreJs)
    implementation(KotlinX.html)
}