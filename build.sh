#!/bin/bash

bin="./node_modules/.bin"

build() {
    echo "Compiling with sass"
    "$bin"/sass scss/:build/css --style compressed --no-source-map &

    echo "Bundling with Rollup"
    "$bin"/rollup -c rollup.config.js &

    wait

    echo "Moving assets"
    cp -rv public/images build

    echo "Minifying with html-minifer"
    for file in public/*.html; do
        "$bin"/html-minifier --config-file .htmlminifier.json "$file" -o build/"$(basename "$file")" &
    done
}

build
