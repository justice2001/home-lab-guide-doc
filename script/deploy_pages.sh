#!/bin/bash

DIST_DIR="docs/.vuepress/dist"
DEPLOY_BRANCH="gh-docs"

if [ -d "$DIST_DIR" ]; then
    cd "$DIST_DIR"
elif [ -d "../$DIST_DIR" ]; then
    cd "../$DIST_DIR"
else
    echo "==> not found dist dir, exit"
    exit 0
fi

# Add CNAME
echo "==> Will add CNAME file to git repo"
echo "==> CNAME: $CNAME"
echo "$CNAME" > CNAME

# Commit
git init
git checkout -b gh-docs
git add .
git commit -m "deploy from $CI_COMMIT_SHORT_SHA"

# Deploy to git repo
for var in $DEPLOY_REPO
do
  echo "==> Deploying to git repo: $var, branch $DEPLOY_BRANCH"
  git push -f -u $var $DEPLOY_BRANCH
done
