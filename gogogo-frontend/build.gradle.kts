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

    implementation(Depends.Stdlib.js)
    implementation(Depends.Coroutines.js)
    implementation(Depends.JS.html)
}