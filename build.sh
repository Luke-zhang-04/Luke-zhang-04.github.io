#!/usr/bin/env bash
# Luke Zhang's developer portfolio
#
# Copyright (C) 2020 Luke Zhang
#
# Luke-zhang-04.github.io
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published
# by the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )" # Get location of this script
. "${DIR}/colours.sh"

#######################################
# Formats dir with sed; remove pattern $ts
# Globals:
#   none
# Arguments:
#   dir: string - directory of typescript file in ./ts/ folder
#   suffix: string - suffix of ddir
#   pattern: string - pattern to remove
#######################################
formatDir() {
    echo "$1$2" | sed "s/$3//g"
}

#######################################
# Compile SCSS
# Globals:
#   colours
#   scss: string - scss file extension pattern
#   formatDir: (string, string, stirng) => string - removes pattern from string adn adds suffix
# Arguments:
#   compressed: boolean - minify sass or not
#######################################
compileSass() {
    # Compile SASS
    printf "${BIYellow}Compiling ${Red}./scss/ ${Purple}to ${BIBlue}./css/ ${Purple}with ${BIRed}SASS${Purple}\n"
    if $1; then
        sass scss:css --style compressed || npx sass scss:css --style compressed &
    else
        sass scss:css || npx sass scss:css &
    fi
}

#######################################
# Main build function for development mode
# Globals:
#   colours
#   formatDir: (string, string, stirng) => string - removes pattern from string adn adds suffix
#   comileSass: () => void - compiles sass
# Arguments:
#   skipSass: boolean - if sass should compile
#######################################
buildDev() {
    if [[ ! $1 ]]; then
        compileSass false &
    fi

    # Compile w/ TypeScript
    printf "${BIYellow}Compiling${Purple} with ${BIBlue}./src/${Purple} to ${BIGreen}./lib/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p . &

    wait

    # Pack lib files w/ webpack
    printf "${BIBlue}Packing ${BIGreen}./lib/${Purple} files with ${BBlue}webpack${Purple} and sending to ${Yellow}./js_new/${Purple}\n"
    npx webpack --mode none
}

typescriptStrict() {
    npx tsc -p . || echo "TYPESCRIPT ERROR"
}

#######################################
# Main build function
# Globals:
#   colours
#   formatDir: (string, string, stirng) => string - removes pattern from string adn adds suffix
#   comileSass: () => void - compiles sass
# Arguments:
#   none
#######################################
build() {
    compileSass false &
    
    # Compile w/ TypeScript
    printf "${BIYellow}Compiling${Purple} with ${BIBlue}./src/${Purple} to ${BIGreen}./lib/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p . &

    wait

    # Pack lib files w/ webpack
    printf "${BIBlue}Packing ${BIGreen}./lib/${Purple} files with ${BBlue}webpack${Purple} and sending to ${Yellow}./js_new/${Purple}\n"
    npx webpack

    for file in ./js/*.js; do
        echo "/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license AGPL-3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */ $(cat "$file")" > $file
    done
}

#######################################
# Watches for file changes and executes build
# Globals:
#   none
# Arguments:
#   filePattern: string - dir to watch
#######################################
watch() {
    fileChange1=""

    while [[ true ]]; do
        fileChange2=$(find $1/ -type f -exec md5 {} \;)

        if [[ "$fileChange1" != "$fileChange2" ]] ; then
            if [[ "$1" == "scss" ]]; then
                compileSass
            else
                buildDev true
            fi

            clear
            printf "${BIGreen}Compiled successfully!\n\n"

            fileChange1="$fileChange2"
            printf "${BICyan}Waiting...${Purple}\n"
        fi

        sleep 15
    done
}

if [[ $1 == "--only" ]]; then
    if [[ $2 == "sass" ]]; then
        compileSass
    else
        printf "${BIRed}ERROR: ${Purple}Unknown option $2 for $1\n"
    fi
elif [[ $1 == "-w" ]]||[[ $1 == "--watch" ]];then
    watch src
elif [[ $1 == "-d" ]]||[[ $1 == "--dev" ]]; then
    buildDev
else
    build
fi
