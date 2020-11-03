#!/bin/sh

./gradlew assemble
git subtree push --prefix gogogo-frontend/build/distributions origin gh-pages
git push origin heroku-deploy
