#! /usr/bin/env zsh

if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <major|minor|patch>"
    exit 1
fi

DIR=${0:a:h}
ROOT=${DIR:h}

cmds=(jq yq git)

# shellcheck disable=SC2128
for cmd in $cmds; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
        echo "Command $cmd not found. Please install it and try again."
        exit 1
    fi
done

# bump version
yarn version "$1"
v=$(jq -r .version "$ROOT"/package.json)
echo "Bumped version to $v"

# git commit
git add "$ROOT"/package.json
git commit -m "chore: release v$v"
git tag "v$v"
echo "Committed and tagged release v$v"

# prepare next cycle
yarn version prerelease
git add "$ROOT"/package.json
git commit -m "chore: prepare next cycle"
echo "Committed next release cycle"

