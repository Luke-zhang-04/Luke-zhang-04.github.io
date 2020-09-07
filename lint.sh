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

lint() {
    printf "${BIGreen}Linting ${IYellow}.js, .jsx, ${IBlue}.ts, and .tsx ${Cyan}with ${Purple}ESLint\n"
    npx eslint "*/**/*.{js,jsx,ts,tsx}" &

    printf "${BIGreen}Linting ${Red}.scss ${Cyan}with ${RESET}Stylelint\n"
	npx stylelint "*/**/*.scss" &
    wait
}

lintFix() {
    printf "${BIGreen}Linting ${IYellow}.js, .jsx, ${IBlue}.ts, and .tsx ${Cyan}with ${Purple}ESLint ${Cyan}and ${BIBlue}fixing\n"
    npx eslint "*/**/*.{js,jsx,ts,tsx}" --fix &

    printf "${BIGreen}Linting ${Red}.scss ${Cyan}with ${RESET}Stylelint ${Cyan}and ${BIBlue}fixing\n"
	npx stylelint "*/**/*.scss" --fix &
    wait
}

if [[ $1 == "-f" ]]||[[ $1 == "--fix" ]]; then
    lintFix
else
    lint
fi
