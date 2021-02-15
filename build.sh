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

buildDev() {
    if [[ $(echo "scss:$(tar cf - scss | shasum -a 384)" | node buildInfo.js) == 1 ]]; then
        # Compile SASS
        echo -e "Compiling ./scss/ to ./public/css/ with sass"
        "$bin"/sass scss/:public/css
    else
        echo -e "No changed found in ./scss/"
    fi

    NODE_ENV="dev" "$bin"/rollup -c rollup.config.js
}

if [[ $1 == "-d" ]]||[[ $1 == "--dev" ]]; then
    buildDev
else
    build
fi
