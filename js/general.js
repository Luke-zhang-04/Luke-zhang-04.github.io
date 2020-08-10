(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["general"] = factory();
	else
		root["general"] = factory();
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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
 *
 * @file script for all pages
 */
const createElement_1 = __importDefault(__webpack_require__(1));
const footer_html_1 = __importDefault(__webpack_require__(2));
/**
 * Append a footer to bottom of page
 * @returns {void} void
 */
(() => {
    const footer = createElement_1.default("footer", { class: "page-footer font-small blue pt-4 bg-dark" });
    document.body.appendChild(footer);
    footer.innerHTML = footer_html_1.default;
})();
/**
 * Hamburger menu setup for mobile page
 * @returns {void} void
 */
(() => {
    const navbarToggler = document.querySelector("#navbar .navbar-toggler"), navbarMenu = document.getElementById("navbarNav");
    navbarToggler === null || navbarToggler === void 0 ? void 0 : navbarToggler.addEventListener("click", () => {
        var _a, _b;
        if (navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.contains("active")) {
            navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.remove("active");
            navbarToggler === null || navbarToggler === void 0 ? void 0 : navbarToggler.classList.remove("open");
            (_a = navbarToggler === null || navbarToggler === void 0 ? void 0 : navbarToggler.querySelector(".burger")) === null || _a === void 0 ? void 0 : _a.classList.remove("open");
        }
        else {
            navbarMenu === null || navbarMenu === void 0 ? void 0 : navbarMenu.classList.add("active");
            navbarToggler === null || navbarToggler === void 0 ? void 0 : navbarToggler.classList.add("open");
            (_b = navbarToggler === null || navbarToggler === void 0 ? void 0 : navbarToggler.querySelector(".burger")) === null || _b === void 0 ? void 0 : _b.classList.add("open");
        }
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2VuZXJhbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILGlGQUF3RDtBQUN4RCw4RUFBOEM7QUFFOUM7OztHQUdHO0FBQ0gsQ0FBQyxHQUFTLEVBQUU7SUFDUixNQUFNLE1BQU0sR0FBRyx1QkFBYSxDQUN4QixRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUUsMENBQTBDLEVBQUMsQ0FDaEUsQ0FBQTtJQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRWpDLE1BQU0sQ0FBQyxTQUFTLEdBQUcscUJBQWMsQ0FBQTtBQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUw7OztHQUdHO0FBQ0gsQ0FBQyxHQUFTLEVBQUU7SUFDUixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQ25FLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBRXJELGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFOztRQUNoRCxJQUFJLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRztZQUMxQyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUM7WUFDdEMsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3ZDLE1BQUEsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLGFBQWEsQ0FBQyxTQUFTLDJDQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDO1NBQ3BFO2FBQU07WUFDSCxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUM7WUFDbkMsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDO1lBQ3BDLE1BQUEsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLGFBQWEsQ0FBQyxTQUFTLDJDQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDO1NBQ2pFO0lBQ0wsQ0FBQyxFQUFDO0FBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQSJ9

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * Copyright (C) 2020 Luke Zhang luke-zhang-04.github.io
 * MIT License
 *
 * @version 1.5.3
 * @exports createElement function for DOM manipulation
 */
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._bindChildren = exports._unpackChildren = exports._bindProps = void 0;
/**
 * Binds children to element
 * @package
 * @param {Element} element - element to bind
 * @param {undefined | Object.<string, string | number>} props - props to bind with
 * @param {boolean} ns - if namespace element
 * @returns {void} void
 */
exports._bindProps = function (element, props, ns) {
    var e_1, _a;
    if (ns === void 0) { ns = false; }
    if (props) {
        try {
            for (var _b = __values(Object.entries(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], val = _d[1];
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
                    console.warn("WARN: Invalid prop type \"" + typeof (val) + "\" for key \"" + key + "\". Skipping prop.");
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
};
exports._unpackChildren = function (children) {
    var e_2, _a;
    var newChildren = [];
    try {
        for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
            var child = children_1_1.value;
            if (typeof (child) === "object" && child instanceof Array) {
                newChildren.push.apply(newChildren, __spread(exports._unpackChildren(child)));
            }
            else {
                newChildren.push(child);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
        }
        finally { if (e_2) throw e_2.error; }
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
exports._bindChildren = function (element, children) {
    var e_3, _a;
    if (children || children === 0) {
        if (children instanceof Array) {
            try {
                for (var children_2 = __values(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
                    var child = children_2_1.value;
                    if (typeof (child) === "string" ||
                        typeof (child) === "number") {
                        element.innerText = child.toString();
                    }
                    else if (typeof (child) === "object" &&
                        child instanceof Array) {
                        exports._unpackChildren(child)
                            .forEach(function (_child) { return exports._bindChildren(element, _child); });
                    }
                    else {
                        element.appendChild(child);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (children_2_1 && !children_2_1.done && (_a = children_2.return)) _a.call(children_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        else if (typeof (children) === "string" ||
            typeof (children) === "number") {
            element.innerText = children.toString();
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
var createElement = function (tagName, props, children) {
    var childrenArgs = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        childrenArgs[_i - 3] = arguments[_i];
    }
    var element = document.createElement(tagName);
    exports._bindProps(element, props);
    var _children = children;
    if (children && childrenArgs) {
        if (typeof (children) === "object" && children instanceof Array) {
            _children = __spread(exports._unpackChildren(children), exports._unpackChildren(childrenArgs));
        }
        else {
            _children = __spread([children], exports._unpackChildren(childrenArgs));
        }
    }
    exports._bindChildren(element, _children);
    return element;
};
exports.default = createElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkg7Ozs7Ozs7R0FPRztBQUNVLFFBQUEsVUFBVSxHQUFHLFVBQ3RCLE9BQWdCLEVBQ2hCLEtBQW9FLEVBQ3BFLEVBQVU7O0lBQVYsbUJBQUEsRUFBQSxVQUFVO0lBRVYsSUFBSSxLQUFLLEVBQUU7O1lBQ1AsS0FBeUIsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBckMsSUFBQSxLQUFBLG1CQUFVLEVBQVQsR0FBRyxRQUFBLEVBQUUsR0FBRyxRQUFBO2dCQUNoQixJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDdEQsSUFBSSxHQUFHLEtBQUssV0FBVyxFQUFFO3dCQUNyQixPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtxQkFDckM7eUJBQU0sSUFBSSxFQUFFLEVBQUU7d0JBQ1gsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO3FCQUNwRDt5QkFBTTt3QkFDSCxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtxQkFDNUM7aUJBQ0o7cUJBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSw4Q0FBOEM7b0JBQ2pGLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsRUFBRTt3QkFD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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid text-center blue text-light text-md-left\">\n  <div class=\"row\">\n    <div class=\"col-md-3 mt-md-0 mt-3 px-5\">\n      <h5 class=\"text-uppercase d-block text-center\">Luke Zhang</h5>\n      <img class=\"w-md-100 w-sm-50\" src=\"/images/logo-light.png\"/>\n    </div>\n    <div class=\"col-md-3\"></div> \n\n    <hr class=\"clearfix w-50 d-md-none pb-3\"/>\n\n    <div class=\"col-md-3 mb-md-0 mb-3\">\n\n      <h5 class=\"text-uppercase\">Nav</h5>\n      <ul class=\"list-unstyled\">\n        <li>\n          <a href=\"/\">Home</a>\n        </li>\n        <li>\n          <a href=\"/portfolio.html\">Portfolio</a>\n        </li>\n        <li>\n          <a href=\"https://rebrand.ly/luke-zhang-resume\" target=\"_blank\" rel=\"noopener noreferrer\">Resume</a>\n        </li>\n        <li>\n          <a href=\"/contact.html\">Contact</a>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class=\"col-md-3 mb-md-0 mb-3\">\n      <h5 class=\"text-uppercase\">Profiles</h5>\n\n      <ul class=\"list-unstyled\">\n        <li>\n          <a href=\"https://github.com/Luke-zhang-04\" target=\"_blank\" ref=\"noopener noreferrer\">\n            GitHub\n          </a>\n        </li>\n        <li>\n          <a href=\"mailto:Luke.zhang2004@gmail.com\" target=\"_blank\" ref=\"noopener noreferrer\">\n            Email\n          </a>\n        </li>\n        <li>\n          <a href=\"https://pypi.org/user/Luke-zhang-04/\" target=\"_blank\" ref=\"noopener noreferrer\">\n            PyPi\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.linkedin.com/in/luke-zhang-1b8a89198/\" target=\"_blank\" ref=\"noopener noreferrer\">\n            Linkedin\n          </a>\n        </li>\n        <li>\n          <a href=\"https://twitter.com/Luke_zhang_04\" target=\"_blank\" ref=\"noopener noreferrer\">\n            Twitter\n          </a>\n        </li>\n        <li>\n          <a href=\"https://stackoverflow.com/users/12370337/luke-zhang-04\" target=\"_blank\" ref=\"noopener noreferrer\">\n            Stackoverflow\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.npmjs.com/~luke-zhang-04\" target=\"_blank\" ref=\"noopener noreferrer\">\n            NPM\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"footer-copyright text-center py-3\">Copyright © 2020: Luke Zhang</div>\n");

/***/ })
/******/ ]);
});