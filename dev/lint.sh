#!/bin/sh

# Run eslint
# run on entire src directory because otherwise warning generated for ignored files
echo "Running eslint..."
./node_modules/.bin/eslint src --fix

# Run prettier
echo "Running prettier..."
./node_modules/.bin/prettier src --write --ignore-unknown

exit 0
