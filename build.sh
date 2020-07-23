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

index="\/index"
scss="\.\/scss\/"

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
    for file in ./scss/*.scss ; do
        formattedDir=$(formatDir $file "" $scss)

        if [[ ${formattedDir:0:1} != "_" ]]; then
            fileName=$(formatDir $formattedDir "" "\.scss")

            printf "\t${BIYellow}Compiling ${Red}./scss/$fileName.scss ${Purple}to ${BIBlue}./css/$fileName.css ${Purple}with ${BIRed}SASS${Purple}\n"

            if $1; then
                sass ./scss/"$fileName".scss ./css/"$fileName".css --style compressed || npx sass ./scss/"$fileName".scss ./css/"$fileName".css --style compressed &
            else
                sass ./scss/"$fileName".scss ./css/"$fileName".css || npx sass ./scss/"$fileName".scss ./css/"$fileName".css &
            fi
        fi
    done

    wait
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
    # Compile SASS
    

    # Compile w/ TypeScript
    printf "${BIYellow}Compiling${Purple} with ${BIBlue}./src/${Purple} to ${BIGreen}./lib/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p . &

    wait

    # Remove new JS_new directory
    printf "${BIRed}Removing ${Yellow}./js_new/${Purple} ${Red}(if exists)${Purple}\n"
    if [ -d "js_new" ]; then
        rm -r js_new
    fi

    # Make new js_new directory
    printf "${BIGreen}Creating${Purple} new ${Yellow}./js_new/${Purple} ${Cyan}directory${Purple}\n"
    mkdir js_new

    # Pack lib files w/ webpack
    printf "${BIBlue}Packing ${BIGreen}./lib/${Purple} files with ${BBlue}webpack${Purple} and sending to ${Yellow}./js_new/${Purple}\n"
    npx webpack --mode none

    printf "${BGreen}Cleaning up...${Purple}\n"

    # Get rid of lib
    printf "\t${BIRed}Removing ${BIGreen}lib${ICyan}\n"
    rm -r lib

    # Get rid of ./js/
    if [ -d "js" ]; then
        rm -r js
    fi

    # Move ./js_new to ./js
    mv ./js_new/ ./js/
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
    # Compile SASS
    compileSass true &

    # Compile w/ TypeScript
    printf "${BIYellow}Compiling${Purple} with ${BIBlue}./src/${Purple} to ${BIGreen}./lib/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p . &

    wait

    # Compile w/ Babel
    printf "${BIYellow}Compiling${BIGreen} ./lib/${Purple} in place with ${BIYellow}Babel${BIGreen}\n\t"
    npx babel lib --out-dir lib

    # Remove new JS_new directory
    printf "${BIRed}Removing ${Yellow}./js_new/${Purple} ${Red}(if exists)${Purple}\n"
    if [ -d "js_new" ]; then
        rm -r js_new
    fi

    # Make new js_new directory
    printf "${BIGreen}Creating${Purple} new ${Yellow}./js_new/${Purple} ${Cyan}directory${Purple}\n"
    mkdir js_new

    # Pack lib files w/ webpack
    printf "${BIBlue}Packing ${BIGreen}./lib/${Purple} files with ${BBlue}webpack${Purple} and sending to ${Yellow}./js_new/${Purple}\n"
    npx webpack

    # Compile w/ Babel
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./js_new/${BIGreen}\n\t"
    npx babel js_new --out-dir js_new --minified --compact true --no-comments

    printf "${BGreen}Cleaning up...${Purple}\n"

    # Get rid of lib
    printf "\t${BIRed}Removing ${BIGreen}lib${ICyan}\n"
    rm -r lib

    # Get rid of ./js/
    if [ -d "js" ]; then
        rm -r js
    fi

    # Move ./js_new to ./js
    mv ./js_new/ ./js/

        # build
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
    watch scss &
    watch src &

    wait
elif [[ $1 == "-d" ]]||[[ $1 == "--dev" ]]; then
    buildDev
else
    build
fi
