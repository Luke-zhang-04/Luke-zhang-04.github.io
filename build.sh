#!/usr/bin/env bash
# Luke Zhang's developer portfolio
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

# Files to browserify
browserify=()
src="\.\/src\/"
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

# Get all folders in ./ts, add to their index files to browserify list
for dir in ./src/*/ ; do
    formattedDir=$(formatDir $dir "index" $src)
    
    browserify+=( "$formattedDir" )
done

# Compile SASS
printf "${BIYellow}Compiling ${Red}./scss/ ${Purple}to ${BIBlue}./css/ ${Purple}with ${BIRed}SASS${Purple}\n"
for file in ./scss/*.scss ; do
    formattedDir=$(formatDir $file "" $scss)

    if [[ ${formattedDir:0:1} != "_" ]]; then
        fileName=$(formatDir $formattedDir "" "\.scss")

        printf "\t${BIYellow}Compiling ${Red}./scss/$fileName.scss ${Purple}to ${BIBlue}./css/$fileName.css ${Purple}with ${BIRed}SASS${Purple}\n"

        sass ./scss/"$fileName".scss ./css/"$fileName".css --style compressed
    fi
done

# Compile w/ TypeScript
printf "${BIYellow}Compiling${Purple} with ${BIBlue}./src/${Purple} to ${BIGreen}./lib/${Purple} with ${BIBlue}TypeScript\n"
npx tsc -p .

# Compile w/ Babel
printf "${BIYellow}Compiling${BIGreen} ./lib/${Purple} in place with ${BIYellow}Babel${BIGreen}\n\t"
npx babel lib --out-dir lib

# Remove new JS directory
printf "${BIRed}Removing ${Yellow}./js/${Purple} ${Red}(if exists)${Purple}\n"
if [ -d "js" ]; then
    rm -r js
fi

# Make new js directory
printf "${BIGreen}Creating${Purple} new ${Yellow}./js/${Purple} ${Cyan}directory${Purple}\n"
mkdir js

# Pack lib files w/ browserify
printf "${BIBlue}Packing ${BIGreen}./lib/${Purple} files with ${BBlue}browserify${Purple} and sending to ${Yellow}./js/${Purple}\n"
for script in "${browserify[@]}"; do
    formattedDir=$(formatDir $script "" $index)

    printf "\t${BIBlue}Packing${Purple} script with root ${Cyan}$script${Purple}, to file ${Cyan}$formattedDir.js${Purple}\n"

    npx browserify lib/"${script}".js > ./js/"${formattedDir}."js
done

# Compile w/ Babel
printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./js/${BIGreen}\n\t"
npx babel js --out-dir js --minified --compact true --no-comments

printf "${BGreen}Cleaning up...${Purple}\n"

# Get rid of lib
printf "\t${BIRed}Removing ${BIGreen}lib${ICyan}\n"
rm -r lib
