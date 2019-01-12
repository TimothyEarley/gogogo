#!/bin/sh

git subtree push --prefix web origin gh-pages
git subtree push --prefix gogogo-backend origin heroku-deploy
