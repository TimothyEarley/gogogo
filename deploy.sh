#!/bin/sh

git subtree push --prefix web origin gh-pages
git push origin heroku-deploy
