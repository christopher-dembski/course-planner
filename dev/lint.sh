#!/bin/sh
FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g')
[ -z "$FILES" ] && exit 0

# Run eslint
# run on entire src directory because otherwise warning generated for ignored files
echo "Running eslint..."
echo ./node_modules/.bin/eslint src --fix

# Run prettier on all modified files
echo "Running prettier..."
echo "$FILES" | xargs ./node_modules/.bin/prettier --write --ignore-unknown

exit 0
