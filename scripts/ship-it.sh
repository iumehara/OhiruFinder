#!/bin/bash

set -e

function run_web_tests() {
  cd ohiru-finder-web
  npm run test-once
  cd -
}

git pull -r
run_web_tests
git push

