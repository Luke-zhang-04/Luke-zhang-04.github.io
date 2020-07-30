/**
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
 */
import * as ScrollMagic from "scrollmagic"

let _controller = new ScrollMagic.Controller()

const controller = {
    controller: _controller,
    destroy: (): void => _controller.destroy(true),
    init: (
        options?: ScrollMagic.ControllerConstructorOptions | undefined
    ): ScrollMagic.Controller => {
        _controller = new ScrollMagic.Controller(options)

        controller.controller = _controller

        return _controller
    }
}

export default controller
