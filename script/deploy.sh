#!/bin/bash

DEPLOY_REPO=(${GIT_SERVER//;/ })
DIST_DIR="docs/.vuepress/dist"

if [ ! -d "$DIST_DIR" ]; then
    cd "$DIST_DIR"
elif [ ! -d "../$DIST_DIR" ]; then
    cd "../$DIST_DIR"
else
    echo "not found dist dir, exit"
    exit 0
fi

git init
git checkout -b gh-docs
git add .
git commit -m "deploy from $CI_COMMIT_SHORT_SHA"

for var in ${deploy_server[@]}
do
  git push -f -u $var gh-docs
done
