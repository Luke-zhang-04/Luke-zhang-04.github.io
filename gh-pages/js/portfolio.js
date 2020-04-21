/*
	luke-zhang-04.github.io
    Copyright (C) 2020  Luke Zhang
    
    https://github.com/Luke-zhang-04

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/

window.onresize = function() {
    document.getElementById("splash").style.height = (
        window.innerWidth*0.66666666666 - navbar.offsetHeight - 26
    ).toString() + "px"
}
document.getElementById("splash").style.height = (
    window.innerWidth*0.66666666666 - navbar.offsetHeight - 26
).toString() + "px"