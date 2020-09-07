(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["home"] = factory();
	else
		root["home"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 *
 * @license
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
 *
 * @file main homepage script
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const langs_1 = __importStar(__webpack_require__(1));
const langSm_1 = __importDefault(__webpack_require__(12));
const projects_1 = __importDefault(__webpack_require__(13));
const _globals_1 = __importDefault(__webpack_require__(15));
projects_1.default();
let scrollmagicScene;
const langDisplay = new langs_1.default(document.getElementById("langs-display"), { parent: document.getElementById("langs-display") }), langDisplaySM = new langSm_1.default(document.getElementById("langs-display"), { parent: document.getElementById("langs-display") }), windowResize = () => {
    if (window.innerWidth > _globals_1.default.sizes.sm) {
        const home = document.getElementById("home");
        langDisplay.unmount();
        langDisplaySM.unmount();
        langDisplay.mount();
        scrollmagicScene === null || scrollmagicScene === void 0 ? void 0 : scrollmagicScene.destroy(true);
        scrollmagicScene = undefined;
        if (home) {
            if (home.querySelector(".languages #fixed") &&
                home.getElementsByClassName("lang-img") &&
                !scrollmagicScene) {
                langs_1.controller.init();
                scrollmagicScene = langs_1.bindLangStickEvent(home.querySelector(".languages #fixed"), home.getElementsByClassName("lang-img"), langDisplay);
            }
        }
    }
    else {
        langDisplay.unmount();
        langDisplaySM.mount();
        langs_1.controller.destroy();
    }
}, 
/**
 * Check scrolled elements and apply appropriate classes to them
 * @param {Array.<HTMLElement | null> | Array.<Array.<HTMLElement | null>>} elements - array of elements
 * @returns {void} void
 */
checkScrolled = (elements) => {
    var _a;
    const offset = window.innerHeight * 3 / 4, scrolled = window.scrollY + window.innerHeight - offset;
    for (const element of elements) {
        let offsetTop = 0, _element;
        if (element instanceof Array) {
            offsetTop = (_a = element[1]) === null || _a === void 0 ? void 0 : _a.offsetTop;
            [_element] = element;
        }
        else {
            offsetTop = element === null || element === void 0 ? void 0 : element.offsetTop;
            _element = element;
        }
        if (_element && offsetTop &&
            scrolled >= offsetTop &&
            !_element.classList.contains("scrolled-at")) {
            _element.classList.add("scrolled-at");
        }
        else if (_element && offsetTop &&
            scrolled < offsetTop &&
            _element.classList.contains("scrolled-at")) {
            _element.classList.remove("scrolled-at");
        }
    }
}, windowScroll = () => {
    const elems = [
        [
            document.querySelector(".swiper-container .title"),
            document.querySelector(".swiper-container"),
        ],
    ];
    checkScrolled(elems);
};
(() => {
    var _a;
    (_a = document.querySelectorAll("#contact-container ul li")) === null || _a === void 0 ? void 0 : _a.forEach((element) => {
        element.addEventListener("click", () => { var _a; return (_a = element.querySelector("a")) === null || _a === void 0 ? void 0 : _a.click(); });
    });
    window.onresize = windowResize;
    window.onscroll = windowScroll;
    windowScroll();
    windowResize();
    const images = document.getElementsByClassName("lang-img");
    if (images) {
        images[images.length - 1].addEventListener("load", windowResize);
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9tZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHSCxpREFBbUU7QUFDbkUsc0RBQW9DO0FBQ3BDLDBEQUF3QztBQUN4QywyREFBaUM7QUFFakMsa0JBQWUsRUFBRSxDQUFBO0FBRWpCLElBQUksZ0JBQStDLENBQUE7QUFFbkQsTUFBTSxXQUFXLEdBQUcsSUFBSSxlQUFXLENBQzNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFnQixFQUN2RCxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBZ0IsRUFBQyxDQUNwRSxFQUNELGFBQWEsR0FBRyxJQUFJLGdCQUFhLENBQzdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFnQixFQUN2RCxFQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBZ0IsRUFBQyxDQUNwRSxFQUVELFlBQVksR0FBRyxHQUFTLEVBQUU7SUFDdEIsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLGtCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUN0QyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTVDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNyQixhQUFhLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDdkIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRW5CLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUM7UUFDL0IsZ0JBQWdCLEdBQUcsU0FBUyxDQUFBO1FBRTVCLElBQUksSUFBSSxFQUFFO1lBQ04sSUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFt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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.bindLangStickEvent = void 0;
/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license GPL-3.0
 *
 * @file languages display
 */
const ScrollMagic = __importStar(__webpack_require__(2));
const utils = __importStar(__webpack_require__(3));
const destagnate_1 = __importStar(__webpack_require__(4));
const langData_json_1 = __importDefault(__webpack_require__(11));
class LangDisplay extends destagnate_1.default {
    constructor(parent, props) {
        super(parent, props);
        /**
         * Sets state with slight delay (to fade out)
         * @param {Object.<string, string>} obj - object of new state
         * @returns {void} void
         */
        this.changeComponent = (obj) => {
            this.props.parent.classList.add("fade-out");
            setTimeout(() => {
                this.setState(obj);
                this.props.parent.classList.remove("fade-out");
            }, 250);
        };
        this.render = () => [
            destagnate_1.createElement("h2", { class: "my-3" }, this.state.title),
            destagnate_1.createElement("span", { class: "line d-block" }),
            destagnate_1.createElement("p", { class: "mb-4" }, this.state.text),
            destagnate_1.createElement("a", {
                class: "btn-box btn-box-primary d-none d-lg-block",
                href: this.state.href,
                role: "button",
            }, [
                "See projects ",
                destagnate_1.createElement("span", { class: "material-icons" }, "trending_flat")
            ]),
            destagnate_1.createElement("a", {
                class: "btn btn-outline-primary d-block d-lg-none",
                href: this.state.href,
                role: "button",
            }, "See Projects"),
        ];
        this.state = Object.assign(Object.assign({}, langData_json_1.default.tsjs), { key: "tsjs", index: 0 });
    }
}
exports.default = LangDisplay;
/**
 * Binds ScrollMagic to elements
 * @param {HTMLDivElement} container - container of event
 * @param {HTMLCollectionOf.<HTMLImageElement>} images - names of images
 * @param {LangDisplay} langDisplay - language display component
 * @returns {ScrollMagic.Scene} scrollmagic scene
 */
exports.bindLangStickEvent = (container, images, langDisplay) => {
    const scene = new ScrollMagic.Scene({
        triggerElement: images[0],
        triggerHook: 0.5,
        duration: images[images.length - 1].offsetTop +
            window.innerHeight * 0.5,
    }), increment = 1 / images.length, langs = ["tsjs", "frontend", "bash", "backend"];
    if (scene) {
        scene.setPin(container)
            .addTo(utils.default.controller);
    }
    let currentKey = "tsjs";
    scene.on("progress", (event) => {
        for (const [index, lang] of langs.entries()) {
            if (event.target.progress() <= increment * (index + 1)) {
                if (currentKey !== lang) {
                    currentKey = lang;
                    langDisplay.changeComponent(Object.assign(Object.assign({}, langData_json_1.default[lang]), { key: lang, index }));
                }
                break;
            }
        }
    });
    return scene;
};
exports.controller = utils.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9tZS9sYW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILHlEQUEwQztBQUMxQyxpREFBa0M7QUFDbEMseURBQW9EO0FBQ3BELG9FQUFtRDtBQXdCbkQsTUFBcUIsV0FBWSxTQUFRLG9CQUNEO0lBRXBDLFlBQW9CLE1BQW1CLEVBQUUsS0FBdUI7UUFDNUQsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQVN4Qjs7OztXQUlHO1FBQ0ksb0JBQWUsR0FBRyxDQUFDLEdBQXFCLEVBQVEsRUFBRTtZQUNyRCxJQUFJLENBQUMsS0FBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBRTVDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDbEIsSUFBSSxDQUFDLEtBQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNuRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDWCxDQUFDLENBQUE7UUFFTSxXQUFNLEdBQUcsR0FBa0IsRUFBRSxDQUFDO1lBQ2pDLDBCQUFhLENBQUMsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3RELDBCQUFhLENBQUMsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQyxDQUFDO1lBQzlDLDBCQUFhLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3BELDBCQUFhLENBQUMsR0FBRyxFQUFFO2dCQUNmLEtBQUssRUFBRSwyQ0FBMkM7Z0JBQ2xELElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQ3JCLElBQUksRUFBRSxRQUFRO2FBQ2pCLEVBQUU7Z0JBQ0MsZUFBZTtnQkFDZiwwQkFBYSxDQUFDLE1BQU0sRUFBRSxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBQyxFQUFFLGVBQWUsQ0FBQzthQUNwRSxDQUFDO1lBQ0YsMEJBQWEsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLDJDQUEyQztnQkFDbEQsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckIsSUFBSSxFQUFFLFFBQVE7YUFDakIsRUFBRSxjQUFjLENBQUM7U0FDckIsQ0FBQTtRQXRDRyxJQUFJLENBQUMsS0FBSyxtQ0FDRix1QkFBcUIsQ0FBQyxJQUFJLEtBQzlCLEdBQUcsRUFBRSxNQUFNLEVBQ1gsS0FBSyxFQUFFLENBQUMsR0FDWCxDQUFBO0lBQ0wsQ0FBQztDQW1DSjtBQTlDRCw4QkE4Q0M7QUFFRDs7Ozs7O0dBTUc7QUFDVSxRQUFBLGtCQUFrQixHQUFHLENBQzlCLFNBQXlCLEVBQ3pCLE1BQTBDLEVBQzFDLFdBQXdCLEVBQ1AsRUFBRTtJQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDNUIsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekIsV0FBVyxFQUFFLEdBQUc7UUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDekMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHO0tBQy9CLENBQUMsRUFDRixTQUFTLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQzdCLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBRW5ELElBQUksS0FBSyxFQUFFO1FBQ1AsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7S0FDdkM7SUFFRCxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUE7SUFFdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUMzQixLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3pDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BELElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtvQkFDckIsVUFBVSxHQUFHLElBQUksQ0FBQTtvQkFDakIsV0FBVyxDQUFDLGVBQWUsaUNBQ25CLHVCQUFxQixDQUFDLElBQUksQ0FBQyxLQUMvQixHQUFHLEVBQUUsSUFBSSxFQUNULEtBQUssSUFDUCxDQUFBO2lCQUNMO2dCQUNELE1BQUs7YUFDUjtTQUNKO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLEtBQUssQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFWSxRQUFBLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFBIn0=

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {
	"use strict";

	var ScrollMagic = function () {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.7";

	// TODO: temporary workaround for chrome's scroll jitter bug
	window.addEventListener("mousewheel", function () {});

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
											 ** `0` => silent
											 ** `1` => errors
											 ** `2` => errors, warnings
											 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 																										 This interval polls these parameters to fire the necessary events.  
	 																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */
	ScrollMagic.Controller = function (options) {
		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */
		var
			NAMESPACE = 'ScrollMagic.Controller',
			SCROLL_DIRECTION_FORWARD = 'FORWARD',
			SCROLL_DIRECTION_REVERSE = 'REVERSE',
			SCROLL_DIRECTION_PAUSED = 'PAUSED',
			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */
		var
			Controller = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_sceneObjects = [],
			_updateScenesOnNextCycle = false, // can be boolean (true => all scenes) or an array of scenes to be updated
			_scrollPos = 0,
			_scrollDirection = SCROLL_DIRECTION_PAUSED,
			_isDocument = true,
			_viewPortSize = 0,
			_enabled = true,
			_updateTimeout,
			_refreshTimeout;

		/*
		 * ----------------------------------------------------------------
		 * private functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */
		var construct = function () {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			var ri = parseInt(_options.refreshInterval, 10);
			_options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
		 * Schedule the next execution of the refresh function
		 * @private
		 */
		var scheduleRefresh = function () {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */
		var getScrollPos = function () {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */
		var getViewportSize = function () {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */
		var updateScenes = function () {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) { // scroll position changed?
					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
		 * Initializes rAF callback
		 * @private
		 */
		var debounceUpdate = function () {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
		 * Handles Container changes
		 * @private
		 */
		var onChange = function (e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function () {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) { // stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */
		var sortScenes = function (ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
	 * Update one ore more scene(s) according to the scroll position of the container.  
	 * This is the equivalent to `Scene.update()`.  
	 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
	 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
	 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
	 * @public
	 * @example
	 * // update a specific scene on next cycle
 	 * controller.updateScene(scene);
 	 *
	 * // update a specific scene immediately
	 * controller.updateScene(scene, true);
 	 *
	 * // update multiple scenes scene on next cycle
	 * controller.updateScene([scene1, scene2, scene3]);
	 *
	 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
	 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
	 										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
	 * @return {Controller} Parent object for chaining.
	 */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) { // excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
				setScrollPos = scrollTarget;
			} else { // scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var
						param = _options.vertical ? "top" : "left", // which param is of interest ?
						containerOffset = _util.get.offset(_options.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
						elementOffset = _util.get.offset(elem);

					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) { // get
				return getScrollPos.call(Controller);
			} else { // set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 							 Valid options are:
		 							 ** `"size"` => the current viewport size of the container
		 							 ** `"vertical"` => true if vertical scrolling, otherwise false
		 							 ** `"scrollPos"` => the current scroll position
		 							 ** `"scrollDirection"` => the last known direction of the scroll
		 							 ** `"container"` => the container element
		 							 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */
		this.info = function (about) {
			var values = {
				size: _viewPortSize, // contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) { // get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) { // get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) { // set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};


	/**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
	 					Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 															  Can also be defined using a string:
	 															  ** `"onEnter"` => `1`
	 															  ** `"onCenter"` => `0.5`
	 															  ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 										  ** `0` => silent
	 										  ** `1` => errors
	 										  ** `2` => errors, warnings
	 										  ** `3` => errors, warnings, debuginfo
	 * 
	 */
	ScrollMagic.Scene = function (options) {

		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */

		var
			NAMESPACE = 'ScrollMagic.Scene',
			SCENE_STATE_BEFORE = 'BEFORE',
			SCENE_STATE_DURING = 'DURING',
			SCENE_STATE_AFTER = 'AFTER',
			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */

		var
			Scene = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_state = SCENE_STATE_BEFORE,
			_progress = 0,
			_scrollOffset = {
				start: 0,
				end: 0
			}, // reflects the controllers's scroll position for the start and end of the scene respectively
			_triggerPos = 0,
			_enabled = true,
			_durationUpdateMethod,
			_controller;

		/**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */
		var construct = function () {
			for (var key in _options) { // check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

		/*
		 * ----------------------------------------------------------------
		 * Event Management
		 * ----------------------------------------------------------------
		 */

		var _listeners = {};
		/**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */
		/**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */
		/**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */
		/**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */
		/**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */
		/**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */

		/**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var
						nameparts = fullname.split('.'),
						eventname = nameparts[0],
						namespace = nameparts[1];
					if (eventname != "*") { // disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var
					nameparts = fullname.split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1] || '',
					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var
						list = _listeners[remove] || [],
						i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.trigger = function (name, vars) {
			if (name) {
				var
					nameparts = name.trim().split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1],
					listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene
			.on("change.internal", function (e) {
				if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
					if (e.what === "triggerElement") {
						updateTriggerElementPosition();
					} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
						Scene.update();
					}
				}
			})
			.on("shift.internal", function (e) {
				updateScrollOffset();
				Scene.update(); // update scene to reflect new position
			});

		/**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) { // was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};


		/**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var
							scrollPos = _controller.info("scrollPos"),
							newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		this.progress = function (progress) {
			if (!arguments.length) { // get
				return _progress;
			} else { // set
				var
					doUpdate = false,
					oldState = _state,
					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
					reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var
						eventVars = {
							progress: _progress,
							state: _state,
							scrollDirection: scrollDirection
						},
						stateChanged = _state != oldState;

					var trigger = function (eventName) { // tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) { // enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) { // leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};


		/**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */
		var updateScrollOffset = function () {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateDuration = function (suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateTriggerElementPosition = function (suppressEvents) {
			var
				elementPos = 0,
				telem = _options.triggerElement;
			if (_controller && (telem || _triggerPos > 0)) { // either an element exists or was removed and the triggerPos is still > 0
				if (telem) { // there currently a triggerElement set
					if (telem.parentNode) { // check if element is still attached to DOM
						var
							controllerInfo = _controller.info(),
							containerOffset = _util.get.offset(controllerInfo.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
							param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?

						// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
						while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
							telem = telem.parentNode;
						}

						var elementOffset = _util.get.offset(telem);

						if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
							containerOffset[param] -= _controller.scrollPos();
						}

						elementPos = elementOffset[param] - containerOffset[param];

					} else { // there was an element, but it was removed from DOM
						log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
						Scene.triggerElement(undefined); // unset, so a change event is triggered
					}
				}

				var changed = elementPos != _triggerPos;
				_triggerPos = elementPos;
				if (changed && !suppressEvents) {
					Scene.trigger("shift", {
						reason: "triggerElementPosition"
					});
				}
			}
		};

		/**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */
		var onContainerResize = function (e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};


		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function (val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function () {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod.call(Scene));
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */
		var validateOption = function (check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) { // there is a validation method for this option
					try { // validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) { // validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */
		var changeOption = function (varname, newval) {
			var
				changed = false,
				oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function (optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) { // get
						return _options[optionName];
					} else {
						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) { // set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
		 * **Get** or **Set** the duration option value.
		 *
		 * As a **setter** it accepts three types of parameters:
		 * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
		 *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
		 *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
		 * 2. `string`: Always updates the duration relative to parent scroll container.  
		 *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
		 *   When scrolling vertically the width is used for reference respectively.
		 * 3. `function`: The supplied function will be called to return the scene duration.
		 *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
		 *   The scene can be referenced inside the callback using `this`.
		 *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 *   It's recomended to avoid calculations within the function and use cached variables as return values.  
		 *   This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // set duration responsively to container size
		 * scene.duration("100%");
		 *
		 * // use a function to randomize the duration for some reason.
		 * var durationValueCache;
		 * function durationCallback () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration () {
		 *   durationValueCache = Math.random() * 100;
		 * }
		 * updateDuration(); // set to initial value
		 * scene.duration(durationCallback); // set duration callback
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */
		this.controller = function () {
			return _controller;
		};

		/**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */
		this.state = function () {
			return _state;
		};

		/**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};


		var
			_pin,
			_pinOptions;

		Scene
			.on("shift.internal", function (e) {
				var durationChanged = e.reason === "duration";
				if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
					// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
					updatePinState();
				}
				if (durationChanged) {
					updatePinDimensions();
				}
			})
			.on("progress.internal", function (e) {
				updatePinState();
			})
			.on("add.internal", function (e) {
				updatePinDimensions();
			})
			.on("destroy.internal", function (e) {
				Scene.removePin(e.reset);
			});
		/**
		 * Update the pin state.
		 * @private
		 */
		var updatePinState = function (forceUnpin) {
			if (_pin && _controller) {
				var
					containerInfo = _controller.info(),
					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins

				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var
						fixedPos = _util.get.offset(_pinOptions.spacer, true), // get viewport position of spacer
						scrollDistance = _options.reverse || _options.duration === 0 ?
						containerInfo.scrollPos - _scrollOffset.start // quicker
						:
						Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress

					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var
						newCSS = {
							position: _pinOptions.inFlow ? "relative" : "absolute",
							top: 0,
							left: 0
						},
						change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) { // only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */
		var updatePinDimensions = function () {
			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
				var
					after = (_state === SCENE_STATE_AFTER),
					before = (_state === SCENE_STATE_BEFORE),
					during = (_state === SCENE_STATE_DURING),
					vertical = _controller.info("vertical"),
					pinTarget = _pinOptions.spacer.firstChild, // usually the pined element but can also be another spacer (cascaded pins)
					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
					css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */
		var updatePinInContainer = function () {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */
		var updateRelativePinSpacer = function () {
			if (_controller && _pin && // well, duh
				_state === SCENE_STATE_DURING && // element in pinned state?
				( // is width or height relatively sized, but not in relation to body? then we need to recalc.
					((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) ||
					(_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))
				)
			) {
				updatePinDimensions();
			}
		};

		/**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */
		var onMousewheelOverPin = function (e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
		 * Pin an element for the duration of the scene.
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 												   Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setPin = function (element, settings) {
			var
				defaultSettings = {
					pushFollowers: true,
					spacerClass: "scrollmagic-pin-spacer"
				};
			var pushFollowersActivelySet = settings && settings.hasOwnProperty('pushFollowers');
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) { // preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}

			}
			_pin = element;

			var
				parentDisplay = _pin.parentNode.style.display,
				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var
				inFlow = _util.css(_pin, "position") != "absolute",
				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
				sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.

			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var
				spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
				spacerCSS = _util.extend(pinCSS, {
					position: inFlow ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});

			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow, // stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var
					pinInlineCSS = _pin.style,
					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) { // if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
						var
							style = _pinOptions.spacer.style,
							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
							margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};


		var
			_cssClasses,
			_cssClassElems = [];

		Scene
			.on("destroy.internal", function (e) {
				Scene.removeClassToggle(e.reset);
			});
		/**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function (val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function (val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem && elem.parentNode) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function (val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function (val) {
				return !!val; // force boolean
			},
			loglevel: function (val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		}, // holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"], // list of options that trigger a `shift` event
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 * TODO: DOC (private for dev)
	 */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};



	/**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

	/*
	 * TODO: DOCS (private for dev)
	 */

	var _util = ScrollMagic._util = (function (window) {
		var U = {},
			i;

		/**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */

		// parse float and fall back to 0.
		var floatval = function (number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function (elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function (which, elem, outer, includeMargin) {
			elem = (elem === document) ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function (str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var
			lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function (callback) {
				var
					currTime = new Date().getTime(),
					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
					id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function (id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var
			loglevels = ["error", "warn", "log"],
			console = window.console || {};

		console.log = console.log || function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
				method = loglevels[loglevel - 1],
				args = Array.prototype.splice.call(arguments, 1),
				func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
		};
		_type.DomElement = function (o) {
			return (
				typeof HTMLElement === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : //DOM2
				o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
			);
		};

		/**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) { // invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector) || selector instanceof NodeList) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) { // check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) { // clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.add(classname);
				else
					elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.remove(classname);
				else
					elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var
					obj = {},
					style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {}));


	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}

	return ScrollMagic;
}));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Luke Zhang's developer portfolio
 * Copyright (C) 2020 Luke Zhang Luke-zhang-04.github.io
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
 *
 * @file houses univeral utilities which can be accessed from any file
 */
const ScrollMagic = __importStar(__webpack_require__(2));
let _controller = new ScrollMagic.Controller();
const controller = {
    controller: _controller,
    destroy: () => _controller.destroy(true),
    init: (options) => {
        _controller = new ScrollMagic.Controller(options);
        controller.controller = _controller;
        return _controller;
    }
};
exports.default = controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvX3V0aWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCx5REFBMEM7QUFFMUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUE7QUFFOUMsTUFBTSxVQUFVLEdBQUc7SUFDZixVQUFVLEVBQUUsV0FBVztJQUN2QixPQUFPLEVBQUUsR0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDOUMsSUFBSSxFQUFFLENBQ0YsT0FBOEQsRUFDeEMsRUFBRTtRQUN4QixXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRWpELFVBQVUsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFBO1FBRW5DLE9BQU8sV0FBVyxDQUFBO0lBQ3RCLENBQUM7Q0FDSixDQUFBO0FBRUQsa0JBQWUsVUFBVSxDQUFBIn0=

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */
/* eslint-disable max-lines */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = exports.createRef = exports.createElementNS = exports.createElement = exports.createDSComponent = void 0;
const _preset_1 = __importDefault(__webpack_require__(5));
const createDSComponent_1 = __importDefault(__webpack_require__(7));
const createElement_1 = __importDefault(__webpack_require__(8));
const createElementNS_1 = __importDefault(__webpack_require__(9));
const createRef_1 = __importDefault(__webpack_require__(10));
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
class DeStagnate extends _preset_1.default {
    /**
     * Construct class component
     * @public
     * @constructor
     * @param {HTMLElement} parent - parent of this element
     * @param {undefined | Object.<string, string | number>} props - element properties; works like React Props
     * @param {boolean} shouldSkipParentCheck - warn or throw error if parent element already has children
     */
    constructor(parent, props, shouldSkipParentCheck = false) {
        super();
        this.props = props;
        /**
         * If strict mode should be used. True by default
         * @private
         * @instance
         * @type {boolean}
         */
        this._strict = true;
        /**
         * State of component. Works similar React State
         * @type {undefined | Object.<string, unknown>}
         * @private
         * @instance
         */
        this._state = {};
        /**
         * If initial state was set in initializer
         * Do not throw error with direct state setting
         * @type {boolean}
         * @private
         * @instance
         */
        this._didSetInitialState = false;
        /**
         * If component is mounted
         * @type {boolean}
         * @private
         * @instance
         */
        this._didMount = false;
        /**
         * What to call before component update (state mutation)
         * @public
         * @instance
         * @param {Props} prevProps - previous props
         * @param {State} prevState - previous state
         * @returns {void} void
         */
        this.getSnapshotBeforeUpdate = (prevProps, prevState) => [prevProps, prevState];
        /**
         * Turn on strict mode
         * @public
         * @instance
         * @returns {void} void
         */
        this.useStrict = () => {
            this._strict = true;
        };
        /**
         * Turn off strict mode
         * @public
         * @instance
         * @returns {void} void
         */
        this.disableStrict = () => {
            this._strict = false;
        };
        /**
         * Forces a component to update
         * Follows the same component updating procedure as setState without modifying state
         * @public
         * @instance
         * @readonly
         * @returns {void | Error} returns error if error is thrown
         */
        this.forceUpdate = () => {
            try {
                this.componentDidUpdate();
                if (this._parent === undefined) {
                    throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                }
                this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));
                this._update(this._execRender());
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
                return err;
            }
        };
        /**
         * Sets state
         * @public
         * @instance
         * @readonly
         * @param {Partial<State>} obj - state to set
         * @returns {void | Error} void
         */
        this.setState = (obj) => {
            try {
                this.componentWillUpdate();
                if (this._parent === undefined) {
                    throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                }
                if (this._strict) {
                    this._checkKeys(obj);
                }
                this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));
                Object.assign(this._state, obj);
                const renderedContent = this.shouldComponentUpdate()
                    ? this._execRender()
                    : undefined;
                this._update(renderedContent);
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
                return err;
            }
        };
        /* eslint-disable @typescript-eslint/member-ordering, max-len */
        /**
         * Initial mounting to be manually called
         * @public
         * @instance
         * @readonly
         * @param {HTMLElement | undefined} parent - parent element to mount with; optional
         * @returns {HTMLElement | Array.<HTMLElement> | error} - result of append child to parent element
         */
        this.mountComponent = (parent) => {
            try {
                if (parent !== undefined) {
                    this.parent = parent;
                }
                if (this._parent === undefined) {
                    throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                }
                const component = this.render();
                this._didSetInitialState = true;
                this.componentWillMount();
                if (component === null) {
                    throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array");
                }
                this.bindEventListeners(this._parent);
                this._didMount = true;
                this.componentDidMount();
                if (typeof (component) === "object" && component instanceof Array) {
                    return component.map((element) => (this._parent.appendChild(element)));
                }
                return this._parent.appendChild(component);
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
                return err;
            }
        };
        /**
         * Initial mounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns {HTMLElement} - result of append child to parent element
         */
        this.mount = this.mountComponent;
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns {void} - void
         */
        this.unmountComponent = () => {
            try {
                if (this._parent === undefined) {
                    this.componentDidWarn("No parent was set. Component unmounted from nothing.");
                    return;
                }
                this.componentWillUnmount();
                this.unbindEventListeners(this._parent);
                this._removeChildren();
                this._didMount = false;
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
            }
        };
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns {void} - void
         */
        this.unmount = this.unmountComponent;
        /* eslint-enable max-len, @typescript-eslint/member-ordering */
        /**
         * Removes children from this._parent
         * @private
         * @instance
         * @return {void} void
         */
        this._removeChildren = () => {
            if (this._parent === undefined) {
                throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
            }
            while (this._parent.firstChild) {
                if (this._parent.lastChild) {
                    this._parent.removeChild(this._parent.lastChild);
                }
            }
        };
        /**
         * Executes new render
         * @private
         * @instance
         * @returns {HTMLElement | Array.<HTMLElement> | null} rendered content
         */
        this._execRender = () => {
            this._removeChildren();
            return this.render();
        };
        /**
         * Checks new state assignment to make sure no new keys are assigned
         * @private
         * @instance
         * @param {Partial<State>} obj - new state
         * @returns {void} void
         */
        this._checkKeys = (obj) => {
            for (const key of Object.keys(obj)) {
                if (!Object.keys(this.state).includes(key)) {
                    // eslint-disable-next-line
                    this.componentDidWarn(`WARN: New key (${key}) should not be set with setState, which has keys ${JSON.stringify(Object.keys(this.state))}. Declare all state variables in constructor as a best practice. Did you misspell a key?`);
                }
            }
        };
        /**
         * Updates the component
         * @private
         * @instance
         * @param {RenderType} renderedContent - rendered content from executing the render function
         * @returns {void} void
         */
        this._update = (renderedContent) => {
            if (typeof (renderedContent) === "object" &&
                renderedContent instanceof Array) {
                for (const element of renderedContent) {
                    this._parent.appendChild(element);
                }
            }
            else if (renderedContent) {
                this._parent.appendChild(renderedContent);
            }
            if (renderedContent) {
                this.componentDidUpdate();
            }
        };
        if (parent &&
            parent.childElementCount > 0 &&
            !shouldSkipParentCheck &&
            this._strict) {
            this.componentDidCatch(new Error(`ERR: Avoid using this ${parent.tagName.toLowerCase()} as element parent, as all elements within this ${parent.tagName.toLowerCase()} will be removed on re-render. To disable this, pass in true as a third parameter`));
        }
        this._parent = parent;
    }
    /**
     * Public getState getter as this.state itself is protected
     * @public
     * @returns {State} component state
     */
    get getState() {
        return this.state;
    }
    /**
     * Get component state
     * @protected
     * @returns {State} component state
     */
    get state() {
        return this._state;
    }
    /**
     * Sets component state
     * WARN: do not use this method to mutate the state directly
     * @protected
     * @param {State} obj - state to set
     */
    set state(obj) {
        if (this._didSetInitialState && this._strict) {
            this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead."));
            // eslint-disable-next-line
            this.componentDidWarn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly");
            this.setState(obj);
        }
        else {
            this._state = obj;
            this._didSetInitialState = true;
        }
    }
    /**
     * Public getProps getter as this.props itself is protected
     * @public
     * @returns {Props | undefined} component state
     */
    get getProps() {
        return this.props;
    }
    /**
     * Set the parent of this component
     * @public
     * @param {HTMLElement | undefined} element - parent element
     * @returns {void} void;
     */
    set parent(element) {
        if (element &&
            element.childElementCount > 0 &&
            this._strict) {
            this.componentDidWarn(`WARN: Avoid using this ${element.tagName.toLowerCase()} as element parent, as all elements within this ${element.tagName.toLowerCase()} will be removed on re-render. If this was intentional, turn strict off before setting parent.`);
        }
        this._parent = element;
    }
    /**
     * Get the parent element of this component
     * @public
     * @returns {HTMLElement | undefined} parent
     */
    get parent() {
        return this._parent;
    }
    /**
     * Get didMount value publicly
     * @public
     * @returns {boolean} if mounted
     */
    get didMount() {
        return this._didMount;
    }
}
exports.default = DeStagnate;
/**
 * Creates nested DeStagnate component
 * @param {DeStagnateConstructor} Component - DeStagnate component
 * @param {Object<string, unknown>} props - props of component
 * @returns {HTMLDivElement} parent of component
 */
exports.createDSComponent = createDSComponent_1.default;
/**
 * Creates a child element to deStagnate
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns {HTMLElement} html element
 */
exports.createElement = createElement_1.default;
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
exports.createElementNS = createElementNS_1.default;
/**
 * Creates a reference for a nested component
 * @returns {Object<string, undefined>} empty ref object
 */
exports.createRef = createRef_1.default;
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
exports.Component = DeStagnate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCw4QkFBOEI7Ozs7OztBQUU5Qix3REFBOEI7QUFDOUIsNEVBQWlFO0FBQ2pFLG9FQUF5RDtBQUN6RCx3RUFBNkQ7QUFDN0QsNERBQWlEO0FBSWpEOzs7Ozs7R0FNRztBQUNILE1BQThCLFVBRTFCLFNBQVEsaUJBQU07SUEyQ2Q7Ozs7Ozs7T0FPRztJQUNILFlBQ0ksTUFBb0IsRUFDVixLQUFhLEVBQ3ZCLHFCQUFxQixHQUFHLEtBQUs7UUFFN0IsS0FBSyxFQUFFLENBQUE7UUFIRyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBbkQzQjs7Ozs7V0FLRztRQUNLLFlBQU8sR0FBRyxJQUFJLENBQUE7UUFFdEI7Ozs7O1dBS0c7UUFDSyxXQUFNLEdBQVUsRUFBVyxDQUFBO1FBRW5DOzs7Ozs7V0FNRztRQUNLLHdCQUFtQixHQUFHLEtBQUssQ0FBQTtRQVVuQzs7Ozs7V0FLRztRQUNLLGNBQVMsR0FBRyxLQUFLLENBQUE7UUE0QnpCOzs7Ozs7O1dBT0c7UUFDSSw0QkFBdUIsR0FBRyxDQUM3QixTQUFnQixFQUNoQixTQUFnQixFQUNGLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUUzQzs7Ozs7V0FLRztRQUNJLGNBQVMsR0FBRyxHQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDdkIsQ0FBQyxDQUFBO1FBRUQ7Ozs7O1dBS0c7UUFDSSxrQkFBYSxHQUFHLEdBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN4QixDQUFDLENBQUE7UUFxRkQ7Ozs7Ozs7V0FPRztRQUNhLGdCQUFXLEdBQUcsR0FBaUIsRUFBRTtZQUM3QyxJQUFJO2dCQUNBLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2dC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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports Preset
 * @package
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _events_1 = __importDefault(__webpack_require__(6));
const createDSComponent_1 = __importDefault(__webpack_require__(7));
const createElement_1 = __importDefault(__webpack_require__(8));
const createElementNS_1 = __importDefault(__webpack_require__(9));
const createRef_1 = __importDefault(__webpack_require__(10));
/* istanbul ignore next */
/**
 * Lifecycle member functions
 */
class Preset extends _events_1.default {
    constructor() {
        super(...arguments);
        /**
         * Creates nested DeStagnate component
         * @public
         * @instance
         * @readonly
         * @param {DeStagnateConstructor} Component - DeStagnate component
         * @param {Object<string, unknown>} props - props of component
         * @returns {HTMLDivElement} parent of component
         */
        this.createDSComponent = createDSComponent_1.default;
        /**
         * Creates a child element to DynamComponent
         * @public
         * @instance
         * @readonly
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
         * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */
        this.createElement = createElement_1.default;
        /**
         * Creates a child element to deStagnate
         * @public
         * @instance
         * @readonly
         * @param {string | null} namespaceURI - namespace uri
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */
        this.createElementNS = createElementNS_1.default;
        /**
         * Creates a reference for a nested component
         * @public
         * @instance
         * @readonly
         * @returns {Object<string, null>} empty ref object
         */
        this.createRef = createRef_1.default;
        /**
         * Called when component catches error. Default behaviour is console.error
         * @param {Error} error - error object with info
         * @returns {void} void
         */
        this.componentDidCatch = (error) => console.error(error);
        /**
         * What to call after component mounting
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentDidMount = () => undefined;
        /**
         * What to call after component update (state mutation)
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentDidUpdate = () => undefined;
        /**
         * Called when component catches a warning. Default behaviour is console.warn
         * @param {string} msg - warning message
         * @returns {void} void
         */
        this.componentDidWarn = (msg) => console.warn(msg);
        /**
         * What to call before component mounting
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentWillMount = () => undefined;
        /**
         * What to call before component unmounting
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentWillUnmount = () => undefined;
        /**
         * What to call before component update (state mutation)
         * @public
         * @instance
         * @returns {void} void
         */
        this.componentWillUpdate = () => undefined;
        /**
         * Called before component is updated
         * @returns {boolean} whether or not component should update/re-render
         */
        this.shouldComponentUpdate = () => true;
        /**
         * Rendering HTML, must be part of extended class
         * @public
         * @instance
         * @abstract
         * @returns {null | HTMLElement | Array.<HTMLElement> | Element | Array.<Element>} if returns null error will be thrown
         */
        this.render = () => null;
    }
}
exports.default = Preset;
/**
 * Creates nested DeStagnate component
 * @public
 * @static
 * @readonly
 * @param {DeStagnateConstructor} Component - DeStagnate component
 * @param {Object<string, unknown>} props - props of component
 * @returns {HTMLDivElement} parent of component
 */
Preset.createDSComponent = createDSComponent_1.default;
/**
 * Creates a child element to DynamComponent
 * @public
 * @static
 * @readonly
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
Preset.createElement = createElement_1.default;
/**
 * Creates a child element to deStagnate
 * @public
 * @static
 * @readonly
 * @param {string | null} namespaceURI - namespace uri
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
Preset.createElementNS = createElementNS_1.default;
/**
 * Creates a reference for a nested component
 * @public
 * @static
 * @readonly
 * @returns {Object<string, null>} empty ref object
 */
Preset.createRef = createRef_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3ByZXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9fcHJlc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7Ozs7O0FBRUgsd0RBQThCO0FBQzlCLDRFQUFpRTtBQUNqRSxvRUFBeUQ7QUFDekQsd0VBQTZEO0FBQzdELDREQUFpRDtBQUlqRCwwQkFBMEI7QUFDMUI7O0dBRUc7QUFDSCxNQUE4QixNQUFPLFNBQVEsaUJBQU07SUFBbkQ7O1FBaURJOzs7Ozs7OztXQVFHO1FBQ2Esc0JBQWlCLEdBQUcsMkJBQWtCLENBQUE7UUFFdEQ7Ozs7Ozs7Ozs7V0FVRztRQUNhLGtCQUFhLEdBQUcsdUJBQWMsQ0FBQTtRQUU5Qzs7Ozs7Ozs7Ozs7V0FXRztRQUNhLG9CQUFlLEdBQUcseUJBQWdCLENBQUE7UUFFbEQ7Ozs7OztXQU1HO1FBQ2EsY0FBUyxHQUFHLG1CQUFVLENBQUE7UUFFdEM7Ozs7V0FJRztRQUNJLHNCQUFpQixHQUFHLENBQUMsS0FBWSxFQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRXZFOzs7OztXQUtHO1FBQ0ksc0JBQWlCLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRWhEOzs7OztXQUtHO1FBQ0ksdUJBQWtCLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRWpEOzs7O1dBSUc7UUFDSSxxQkFBZ0IsR0FBRyxDQUFDLEdBQVcsRUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVsRTs7Ozs7V0FLRztRQUNJLHVCQUFrQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVqRDs7Ozs7V0FLRztRQUNJLHlCQUFvQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVuRDs7Ozs7V0FLRztRQUNJLHdCQUFtQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVsRDs7O1dBR0c7UUFDSSwwQkFBcUIsR0FBRyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUE7UUFFbEQ7Ozs7OztXQU1HO1FBQ2EsV0FBTSxHQUFHLEdBQWUsRUFBRSxDQUFDLElBQUksQ0FBQTtJQUVuRCxDQUFDOztBQXJLRCx5QkFxS0M7QUFuS0c7Ozs7Ozs7O0dBUUc7QUFDb0Isd0JBQWlCLEdBQUcsMkJBQWtCLENBQUE7QUFFN0Q7Ozs7Ozs7Ozs7R0FVRztBQUNvQixvQkFBYSxHQUFHLHVCQUFjLENBQUE7QUFFckQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDb0Isc0JBQWUsR0FBRyx5QkFBZ0IsQ0FBQTtBQUV6RDs7Ozs7O0dBTUc7QUFDb0IsZ0JBQVMsR0FBRyxtQkFBVSxDQUFBIn0=

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports Events
 * @package
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next */
class Events {
    constructor() {
        /**
         * Binds event listeners event
         * Do not call manually
         * @protected
         * @instance
         * @pacakge
         * @param {HTMLElement} element - element to bind listeners to
         * @returns {void} void;
         */
        this.bindEventListeners = (element) => {
            this._eventListener(element.addEventListener);
        };
        /**
         * Binds event listeners event
         * Do not call manually
         * @protected
         * @instance
         * @pacakge
         * @param {HTMLElement} element - element to bind listeners to
         * @returns {void} void;
         */
        this.unbindEventListeners = (element) => {
            this._eventListener(element.removeEventListener);
        };
        /**
         * Focus event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onFocus = () => undefined;
        /**
         * Blur event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onBlur = () => undefined;
        /**
         * Focus in event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onFocusIn = () => undefined;
        /**
         * Focus out event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onFocusOut = () => undefined;
        /**
         * Animation start event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationStart = () => undefined;
        /**
         * Animation cancel event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationCancel = () => undefined;
        /**
         * Animation end event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationEnd = () => undefined;
        /**
         * Animation iteration event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationIteration = () => undefined;
        /**
         * Transition start event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionStart = () => undefined;
        /**
         * Transition cancel event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionCancel = () => undefined;
        /**
         * Transition end event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionEnd = () => undefined;
        /**
         * Transition run event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionRun = () => undefined;
        /**
         * Auxillary click event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAuxClick = () => undefined;
        /**
         * Click event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onClick = () => undefined;
        /**
         * Double click event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onDblClick = () => undefined;
        /**
         * Mousedown event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseDown = () => undefined;
        /**
         * Mouse enter event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseEnter = () => undefined;
        /**
         * Mouse leave event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseLeave = () => undefined;
        /**
         * Mouse move event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseMove = () => undefined;
        /**
         * Mouseover event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseOver = () => undefined;
        /**
         * Mouseout event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseOut = () => undefined;
        /**
         * Mouseup event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseUp = () => undefined;
        this._eventListener = (el) => {
            for (const [event, callback] of Object.entries(this._events())) {
                el(event, callback);
            }
        };
        this._events = () => ({
            focus: this.onFocus,
            blur: this.onBlur,
            focusin: this.onFocusIn,
            focusout: this.onFocusOut,
            animationstart: this.onAnimationStart,
            animationcancel: this.onAnimationCancel,
            animationend: this.onAnimationEnd,
            animationiteration: this.onAnimationIteration,
            transitionstart: this.onTransitionStart,
            transitioncancel: this.onTransitionCancel,
            transitionend: this.onTransitionEnd,
            transitionrun: this.onTransitionRun,
            auxclick: this.onAuxClick,
            click: this.onClick,
            dblclick: this.onDblClick,
            mousedown: this.onMouseDown,
            mouseenter: this.onMouseEnter,
            mouseleave: this.onMouseLeave,
            mousemove: this.onMouseMove,
            mouseover: this.onMouseOver,
            mouseout: this.onMouseOut,
            mouseup: this.onMouseUp,
        });
    }
}
exports.default = Events;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2V2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9fZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7O0FBb0NILDBCQUEwQjtBQUMxQixNQUFxQixNQUFNO0lBQTNCO1FBRUk7Ozs7Ozs7O1dBUUc7UUFDTyx1QkFBa0IsR0FBRyxDQUFDLE9BQW9CLEVBQVEsRUFBRTtZQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ2pELENBQUMsQ0FBQTtRQUVEOzs7Ozs7OztXQVFHO1FBQ08seUJBQW9CLEdBQUcsQ0FBQyxPQUFvQixFQUFRLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNwRCxDQUFDLENBQUE7UUFFRDs7Ozs7V0FLRztRQUNPLFlBQU8sR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFekM7Ozs7O1dBS0c7UUFDTyxXQUFNLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRXhDOzs7OztXQUtHO1FBQ08sY0FBUyxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUUzQzs7Ozs7V0FLRztRQUNPLGVBQVUsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFNUM7Ozs7O1dBS0c7UUFDTyxxQkFBZ0IsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFbEQ7Ozs7O1dBS0c7UUFDTyxzQkFBaUIsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFbkQ7Ozs7O1dBS0c7UUFDTyxtQkFBYyxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVoRDs7Ozs7V0FLRztRQUNPLHlCQUFvQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUd0RDs7Ozs7V0FLRztRQUNPLHNCQUFpQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVuRDs7Ozs7V0FLRztRQUNPLHVCQUFrQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVwRDs7Ozs7V0FLRztRQUNPLG9CQUFlLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRWpEOzs7OztXQUtHO1FBQ08sb0JBQWUsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFHakQ7Ozs7O1dBS0c7UUFDTyxlQUFVLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRTVDOzs7OztXQUtHO1FBQ08sWUFBTyxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUV6Qzs7Ozs7V0FLRztRQUNPLGVBQVUsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFNUM7Ozs7O1dBS0c7UUFDTyxnQkFBVyxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUU3Qzs7Ozs7V0FLRztRQUNPLGlCQUFZLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRTlDOzs7OztXQUtHO1FBQ08saUJBQVksR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFOUM7Ozs7O1dBS0c7UUFDTyxnQkFBVyxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUU3Qzs7Ozs7V0FLRztRQUNPLGdCQUFXLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRTdDOzs7OztXQUtHO1FBQ08sZUFBVSxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUU1Qzs7Ozs7V0FLRztRQUNPLGNBQVMsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFbkMsbUJBQWMsR0FBRyxDQUFDLEVBQU0sRUFBUSxFQUFFO1lBQ3RDLEtBQUssTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO2dCQUM1RCxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFBO1FBRU8sWUFBTyxHQUFHLEdBQWUsRUFBRSxDQUFDLENBQUM7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBRXpCLGNBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3JDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYztZQUNqQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBRTdDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3ZDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDekMsYUFBYSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ25DLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUVuQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQyxDQUFBO0lBRU4sQ0FBQztDQUFBO0FBaFBELHlCQWdQQyJ9

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createDSComponent add nested component for DeStagnate components
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Creates nested DeStagnate component
 * @deprecated do not use this function, since 1.6.0
 * @see {@link https://github.com/Luke-zhang-04/DeStagnate/wiki/createDSComponent}
 * @see {@link https://github.com/Luke-zhang-04/DeStagnate/wiki/nestedComponents}
 * @param {DeStagnateConstructor} Component - DeStagnate component
 * @param {Object<string, unknown>} props - props of component
 * @param {Object<string, undefined | DeStagnate>} ref - ref object
 * @returns {HTMLDivElement} parent of component
 */
const createDSComponent = (Component, props, ref) => {
    const element = document.createElement("div");
    element.classList.add("DeStagnate-component-parent");
    const _component = new Component(element, props);
    _component.mount();
    if (ref) {
        ref.current = _component;
    }
    return element;
};
exports.default = createDSComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRFNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlRFNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztHQVFHOztBQVVILHlEQUF5RDtBQUN6RDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLGlCQUFpQixHQUFHLENBSWxCLFNBQThDLEVBQzlDLEtBQWEsRUFDYixHQUFtQyxFQUNyQixFQUFFO0lBQ3BCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFN0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtJQUVwRCxNQUFNLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFFaEQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRWxCLElBQUksR0FBRyxFQUFFO1FBQ0wsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUE7S0FDM0I7SUFFRCxPQUFPLE9BQU8sQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQSJ9

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createElement function for DOM manipulation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._bindChildren = exports._unpackChildren = exports._bindProps = void 0;
const _1 = __importDefault(__webpack_require__(4));
/**
 * Binds children to element
 * @package
 * @param {Element} element - element to bind
 * @param {undefined | Object.<string, string | number>} props - props to bind with
 * @param {boolean} ns - if namespace element
 * @returns {void} void
 */
exports._bindProps = (element, props, ns = false) => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (typeof (val) === "string" || typeof (val) === "number") {
                if (key === "innerHTML") {
                    element.innerHTML = val.toString();
                }
                else if (ns) {
                    element.setAttributeNS(null, key, val.toString());
                }
                else {
                    element.setAttribute(key, val.toString());
                }
            }
            else if (key.slice(0, 2) === "on") { // Works such as onClick, onAnimationEnd, etc.
                if (typeof (val) === "function") {
                    element.addEventListener(key.slice(2)
                        .toLowerCase(), val);
                }
            }
            else if (key === "ref" &&
                typeof (val) === "object" &&
                "current" in val) {
                val.current = element;
            }
            else {
                console.warn(`WARN: Invalid prop type "${typeof (val)}" for key "${key}". Skipping prop.`);
            }
        }
    }
};
exports._unpackChildren = (children) => {
    const newChildren = [];
    for (const child of children) {
        if (typeof (child) === "object" && child instanceof Array) {
            newChildren.push(...exports._unpackChildren(child));
        }
        else {
            newChildren.push(child);
        }
    }
    return newChildren;
};
/**
 * Binds children to element
 * @package
 * @param {Element} element - element to bind
 * @param {undefined | ChildrenType} children - children to bind with
 * @returns {void} void
 */
exports._bindChildren = (element, children) => {
    if (children !== null && children !== undefined) {
        if (children instanceof Array) {
            for (const child of children) {
                exports._bindChildren(element, child);
            }
        }
        else if (typeof (children) === "string" ||
            typeof (children) === "number") {
            element.innerText = children.toString();
        }
        else if (children instanceof _1.default) {
            if (!children.didMount && element instanceof window.HTMLElement) {
                children.mount(element);
                return;
            }
            else if (!(element instanceof window.HTMLElement)) {
                throw new Error("Cannot use non-HTMLElement as component parent");
            }
            if (children.parent !== element) {
                children.parent = element;
            }
            children.forceUpdate();
        }
        else {
            element.appendChild(children);
        }
    }
};
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
const createElement = (tagName, props, children, ...childrenArgs) => {
    const element = document.createElement(tagName);
    exports._bindProps(element, props);
    let _children = children;
    if (children && childrenArgs) {
        if (children instanceof Array) {
            _children = [
                ...exports._unpackChildren(children),
                ...exports._unpackChildren(childrenArgs),
            ];
        }
        else {
            _children = [children, ...exports._unpackChildren(childrenArgs)];
        }
    }
    exports._bindChildren(element, _children);
    return element;
};
exports.default = createElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7R0FRRzs7Ozs7O0FBRUgseUNBQTBCO0FBMkIxQjs7Ozs7OztHQU9HO0FBQ1UsUUFBQSxVQUFVLEdBQUcsQ0FDdEIsT0FBZ0IsRUFDaEIsS0FBMkUsRUFDM0UsRUFBRSxHQUFHLEtBQUssRUFDTixFQUFFO0lBQ04sSUFBSSxLQUFLLEVBQUU7UUFDUCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QyxJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDdEQsSUFBSSxHQUFHLEtBQUssV0FBVyxFQUFFO29CQUNyQixPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtpQkFDckM7cUJBQU0sSUFBSSxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2lCQUNwRDtxQkFBTTtvQkFDSCxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtpQkFDNUM7YUFDSjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLDhDQUE4QztnQkFDakYsSUFBSSxPQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxFQUFFO29CQUM1QixPQUFPLENBQUMsZ0JBQWdCLENBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUNQLFdBQVcs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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createElementNS createElement for namespaced elements
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElementNS = void 0;
const createElement_1 = __webpack_require__(8);
/**
 * Creates a child element to deStagnate
 * @param {string | null} namespaceURI - namespace uri
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Element | string | number | Array.<Element> | Array.<string> | Array.<number>} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
exports.createElementNS = (namespaceURI, tagName, props, children, ...childrenArgs) => {
    const element = document.createElementNS(namespaceURI, tagName);
    createElement_1._bindProps(element, props, true);
    let _children = children;
    if (children && childrenArgs) {
        if (typeof (children) === "object" && children instanceof Array) {
            _children = [
                ...createElement_1._unpackChildren(children),
                ...createElement_1._unpackChildren(childrenArgs),
            ];
        }
        else {
            _children = [children, ...createElement_1._unpackChildren(childrenArgs)];
        }
    }
    createElement_1._bindChildren(element, _children);
    return element;
};
exports.default = exports.createElementNS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudE5TLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUVsZW1lbnROUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0dBUUc7OztBQUVILG1EQU13QjtBQUV4Qjs7Ozs7Ozs7R0FRRztBQUNVLFFBQUEsZUFBZSxHQUFHLENBQzNCLFlBQStHLEVBQy9HLE9BQTBDLEVBQzFDLEtBQXdDLEVBQ3hDLFFBQXVCLEVBQ3ZCLEdBQUcsWUFBK0IsRUFDM0IsRUFBRTtJQUNULE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBRS9ELDBCQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUVoQyxJQUFJLFNBQVMsR0FBNkIsUUFBUSxDQUFBO0lBRWxELElBQUksUUFBUSxJQUFJLFlBQVksRUFBRTtRQUMxQixJQUFJLE9BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLElBQUksUUFBUSxZQUFZLEtBQUssRUFBRTtZQUM1RCxTQUFTLEdBQUc7Z0JBQ1IsR0FBRywrQkFBZSxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsR0FBRywrQkFBZSxDQUFDLFlBQVksQ0FBQzthQUNuQyxDQUFBO1NBQ0o7YUFBTTtZQUNILFNBQVMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLCtCQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtTQUMzRDtLQUNKO0lBRUQsNkJBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFFakMsT0FBTyxPQUFPLENBQUE7QUFDbEIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsdUJBQWUsQ0FBQSJ9

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a reference for a nested component
 * @returns {Object<string, null>} empty ref object
 */
const createRef = () => ({
    current: null,
});
/**
 * Creates a reference for a nested component
 * @returns {Object<string, null>} empty ref object
 */
exports.default = createRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZVJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWVBOzs7R0FHRztBQUNILE1BQU0sU0FBUyxHQUFHLEdBQXlDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELE9BQU8sRUFBRSxJQUFJO0NBQ2hCLENBQUMsQ0FBQTtBQUVGOzs7R0FHRztBQUNILGtCQUFlLFNBQVMsQ0FBQSJ9

/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = JSON.parse("{\"tsjs\":{\"title\":\"TypeScript and JavaScript\",\"text\":\"Usage in static and dynamic websites with tools such as React and Webpack/Browserify, as well as usage with NodeJS backends.\",\"href\":\"/portfolio.html\"},\"frontend\":{\"title\":\"HTML, CSS, and SCSS\",\"text\":\"Usage in static and dynamic websites with tools such as React, Webpack/Browserify and Bootstrap.\",\"href\":\"/portfolio.html\"},\"bash\":{\"title\":\"Bash\",\"text\":\"Usage in everyday programming as well as writing shell scripts to build, compile, and start projects.\",\"href\":\"/portfolio.html\"},\"backend\":{\"title\":\"Python, C++, and GO\",\"text\":\"Usage in projects and backend applications, as well as extensive use of Python in competitive programming situations.\",\"href\":\"/portfolio.html\"}}");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license GPL-3.0
 *
 * @file mobile languages display
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const destagnate_1 = __importStar(__webpack_require__(4));
const langData_json_1 = __importDefault(__webpack_require__(11));
class LangDisplaySm extends destagnate_1.default {
    constructor(parent, props) {
        super(parent, props);
        this._contentRef = this.createRef();
        this.render = () => [
            destagnate_1.createElement("div", { class: "change-buttons" }, this._changeButtons()),
            destagnate_1.createElement("div", { ref: this._contentRef }, destagnate_1.createElement("h2", { class: "my-3" }, this.state.title), destagnate_1.createElement("span", { class: "line d-block" }), destagnate_1.createElement("p", { class: "mb-4" }, this.state.text), destagnate_1.createElement("a", {
                class: "btn btn-outline-primary d-block d-lg-none",
                href: this.state.href,
                role: "button",
            }, "See Projects"))
        ];
        this._incrementData = (val) => {
            var _a;
            (_a = this._contentRef.current) === null || _a === void 0 ? void 0 : _a.classList.add("fade-out");
            setTimeout(() => {
                var _a;
                if (this.state.index + val >= Object.keys(langData_json_1.default).length) {
                    this.setState({
                        index: 0,
                        key: Object.keys(langData_json_1.default)[0],
                    });
                }
                else if (this.state.index + val < 0) {
                    this.setState({
                        index: 3,
                        key: Object.keys(langData_json_1.default)[3],
                    });
                }
                else {
                    this.setState({
                        index: this.state.index + val,
                        key: Object.keys(langData_json_1.default)[this.state.index + val],
                    });
                }
                this.setState(Object.assign({}, langData_json_1.default[this.state.key]));
                (_a = this._contentRef.current) === null || _a === void 0 ? void 0 : _a.classList.remove("fade-out");
            }, 250);
        };
        this._changeButtons = () => [
            destagnate_1.createElement("button", { class: "btn-circle btn-circle-primary mr-3" }, destagnate_1.createElement("span", {
                class: "material-icons",
                onClick: () => this._incrementData(-1),
            }, "arrow_back")),
            destagnate_1.createElement("button", { class: "btn-circle btn-circle-primary ml-3" }, destagnate_1.createElement("span", {
                class: "material-icons",
                onClick: () => this._incrementData(1),
            }, "arrow_forward"))
        ];
        this.state = Object.assign(Object.assign({}, langData_json_1.default.tsjs), { key: "tsjs", index: 0 });
    }
}
exports.default = LangDisplaySm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ1NtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvbWUvbGFuZ1NtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztHQU9HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCx5REFBb0Q7QUFNcEQsb0VBQW1EO0FBRW5ELE1BQXFCLGFBQWMsU0FBUSxvQkFDSDtJQUlwQyxZQUFvQixNQUFtQixFQUFFLEtBQXVCO1FBQzVELEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFIaEIsZ0JBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFrQixDQUFBO1FBWS9DLFdBQU0sR0FBRyxHQUFrQixFQUFFLENBQUM7WUFDakMsMEJBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEUsMEJBQWEsQ0FDVCxLQUFLLEVBQ0wsRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBQyxFQUN2QiwwQkFBYSxDQUFDLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUN0RCwwQkFBYSxDQUFDLE1BQU0sRUFBRSxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUMsQ0FBQyxFQUM5QywwQkFBYSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNwRCwwQkFBYSxDQUFDLEdBQUcsRUFBRTtnQkFDZixLQUFLLEVBQUUsMkNBQTJDO2dCQUNsRCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixJQUFJLEVBQUUsUUFBUTthQUNqQixFQUFFLGNBQWMsQ0FBQyxDQUNyQjtTQUNKLENBQUE7UUFFTyxtQkFBYyxHQUFHLENBQUMsR0FBVyxFQUFRLEVBQUU7O1lBQzNDLE1BQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLDBDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFDO1lBRW5ELFVBQVUsQ0FBQyxHQUFHLEVBQUU7O2dCQUNaLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtvQkFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDVixLQUFLLEVBQUUsQ0FBQzt3QkFDUixHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNoQyxDQUFDLENBQUE7aUJBQ0w7cUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFO29CQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNWLEtBQUssRUFBRSxDQUFDO3dCQUNSLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2hDLENBQUMsQ0FBQTtpQkFDTDtxQkFBTTtvQkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHO3dCQUM3QixHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO3FCQUNyRCxDQUFDLENBQUE7aUJBQ0w7Z0JBRUQsSUFBSSxDQUFDLFFBQVEsbUJBQ0wsdUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDM0MsQ0FBQTtnQkFFRixNQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTywwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQztZQUMxRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDWCxDQUFDLENBQUE7UUFFTyxtQkFBYyxHQUFHLEdBQWtCLEVBQUUsQ0FBQztZQUMxQywwQkFBYSxDQUNULFFBQVEsRUFDUixFQUFDLEtBQUssRUFBRSxvQ0FBb0MsRUFBQyxFQUM3QywwQkFBYSxDQUNULE1BQU0sRUFDTjtnQkFDSSxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QyxFQUNELFlBQVksQ0FDZixDQUNKO1lBQ0QsMEJBQWEsQ0FDVCxRQUFRLEVBQ1IsRUFBQyxLQUFLLEVBQUUsb0NBQW9DLEVBQUMsRUFDN0MsMEJBQWEsQ0FDVCxNQUFNLEVBQ047Z0JBQ0ksS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2FBQ3hDLEVBQ0QsZUFBZSxDQUNsQixDQUNKO1NBQ0osQ0FBQTtRQTdFRyxJQUFJLENBQUMsS0FBSyxtQ0FDRix1QkFBcUIsQ0FBQyxJQUFJLEtBQzlCLEdBQUcsRUFBRSxNQUFNLEVBQ1gsS0FBSyxFQUFFLENBQUMsR0FDWCxDQUFBO0lBQ0wsQ0FBQztDQTBFSjtBQXZGRCxnQ0F1RkMifQ==

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Luke Zhang's developer portfolio
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang Luke-zhang-04.github.io
 * @license GPL-3.0
 *
 * @file projects display
 */
const firebaseApp = __importStar(__webpack_require__(14));
const createElement_1 = __importDefault(__webpack_require__(8));
// CDN https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F**FILENAME**?alt=media
/**
 * Displays projects with swiper
 * @returns {void} void
 */
const displayProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const sliderContainer = document.getElementById("projects-slider");
    yield firebaseApp.firestore.collection("projects")
        .orderBy("date", "desc")
        .get()
        .then((snapshot) => {
        snapshot.forEach((doc) => {
            var _a;
            const imgFileName = doc.data().file, imgUrl = `https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F${imgFileName}?alt=media`;
            (_a = sliderContainer === null || sliderContainer === void 0 ? void 0 : sliderContainer.querySelector(".swiper-wrapper")) === null || _a === void 0 ? void 0 : _a.appendChild(createElement_1.default("div", {
                class: "swiper-slide",
                style: `background-image: url(${imgUrl});`,
            }));
        });
    });
    return new Swiper("#projects-slider", {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
});
exports.default = displayProjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9tZS9wcm9qZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsMERBQTJDO0FBRzNDLGlGQUF3RDtBQUl4RCxtSEFBbUg7QUFFbkg7OztHQUdHO0FBQ0gsTUFBTSxlQUFlLEdBQUcsR0FBMkIsRUFBRTtJQUNqRCxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFFbEUsTUFBTSxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7U0FDN0MsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7U0FDdkIsR0FBRyxFQUFFO1NBQ0wsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDZixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7O1lBQ3JCLE1BQU0sV0FBVyxHQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQWtCLENBQUMsSUFBSSxFQUNoRCxNQUFNLEdBQUcseUZBQXlGLFdBQVcsWUFBWSxDQUFBO1lBRTdILE1BQUEsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLGFBQWEsQ0FBQyxpQkFBaUIsMkNBQUcsV0FBVyxDQUMxRCx1QkFBYSxDQUNULEtBQUssRUFDTDtnQkFDSSxLQUFLLEVBQUUsY0FBYztnQkFDckIsS0FBSyxFQUFFLHlCQUF5QixNQUFNLElBQUk7YUFDN0MsQ0FDSixFQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUVOLE9BQU8sSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUU7UUFDbEMsTUFBTSxFQUFFLFdBQVc7UUFDbkIsSUFBSSxFQUFFLElBQUk7UUFDVixVQUFVLEVBQUUsSUFBSTtRQUNoQixjQUFjLEVBQUUsSUFBSTtRQUNwQixhQUFhLEVBQUUsTUFBTTtRQUNyQixlQUFlLEVBQUU7WUFDYixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixRQUFRLEVBQUUsQ0FBQztZQUNYLFlBQVksRUFBRSxJQUFJO1NBQ3JCO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsRUFBRSxFQUFFLG9CQUFvQjtTQUMzQjtLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSxDQUFBO0FBRUQsa0JBQWUsZUFBZSxDQUFBIn0=

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Luke Zhang's developer portfolio
 * Copyright (C) 2020 Luke Zhang Luke-zhang-04.github.io
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
 *
 * @file houses firebase configuration and variables
 */
/* eslint-disable one-var */
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = exports.auth = void 0;
const firebaseConfig = {
    apiKey: "AIzaSyDKHbbyZoschUX1cMf5VdjRl9TtdIX1R9A",
    authDomain: "luke-zhang.firebaseapp.com",
    databaseURL: "https://luke-zhang.firebaseio.com",
    projectId: "luke-zhang",
    storageBucket: "luke-zhang.appspot.com",
    messagingSenderId: "309956853075",
    appId: "1:309956853075:web:ebb55b1076c4aca168f5a6"
};
firebase.initializeApp(firebaseConfig);
exports.auth = firebase.auth(), exports.firestore = firebase.firestore();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvX2ZpcmViYXNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBQ0gsNEJBQTRCOzs7QUFLNUIsTUFBTSxjQUFjLEdBQUc7SUFDbkIsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxVQUFVLEVBQUUsNEJBQTRCO0lBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7SUFDaEQsU0FBUyxFQUFFLFlBQVk7SUFDdkIsYUFBYSxFQUFFLHdCQUF3QjtJQUN2QyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDLEtBQUssRUFBRSwyQ0FBMkM7Q0FDckQsQ0FBQTtBQUVELFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUE7QUFFekIsUUFBQSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUMvQixRQUFBLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUEifQ==

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Luke Zhang's developer portfolio
 * Copyright (C) 2020 Luke Zhang Luke-zhang-04.github.io
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
 *
 * @file houses global constants
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.globals = exports.sizes = void 0;
exports.sizes = {
    sm: 767,
    md: 992,
}, exports.globals = {
    sizes: exports.sizes,
};
exports.default = exports.globals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvX2dsb2JhbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7OztBQThCVSxRQUFBLEtBQUssR0FBVTtJQUN4QixFQUFFLEVBQUUsR0FBRztJQUNQLEVBQUUsRUFBRSxHQUFHO0NBQ1YsRUFDRyxRQUFBLE9BQU8sR0FBWTtJQUNmLEtBQUssRUFBTCxhQUFLO0NBQ1IsQ0FBQTtBQUVMLGtCQUFlLGVBQU8sQ0FBQSJ9

/***/ })
/******/ ]);
});