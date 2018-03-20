#!/bin/bash

for dir in $(find ./0* -maxdepth 0 -type d)
do
    cd "$dir"
    npx remarker build
    cd ..
done
