(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["portfolio"] = factory();
	else
		root["portfolio"] = factory();
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
 */
const firebaseApp = __importStar(__webpack_require__(1));
const destagnate_1 = __importStar(__webpack_require__(2));
class Portfolio extends destagnate_1.default {
    constructor(parent) {
        super(parent);
        this.componentDidMount = () => {
            firebaseApp.firestore.collection("projects")
                .orderBy("date", "desc")
                .get()
                .then((snapshot) => {
                snapshot.forEach((doc) => {
                    const imgFileName = doc.data().file, data = Object.assign(Object.assign({}, doc.data()), { imgUrl: `https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F${imgFileName}?alt=media`, name: doc.id });
                    this.setState({ projects: [...this.state.projects, data] });
                });
            });
        };
        this.render = () => (this._groupProjects().map((projects) => (destagnate_1.createElement("div", { class: "row project-row" }, projects.map((project) => this._project(project))))));
        this._groupProjects = () => {
            const grouped = [];
            let group = [];
            for (const [index, entry] of this.state.projects.entries()) {
                group.push(entry);
                if ((index + 1) % 4 === 0) {
                    grouped.push(group);
                    group = [];
                }
            }
            if (group.length > 0) {
                grouped.push(group);
            }
            return grouped;
        };
        this._project = ({ imgUrl }) => (destagnate_1.createElement("div", {
            class: "col-sm-6 col-md-3 project-card",
            style: `background-image: url(${imgUrl})`,
        }));
        this.state = {
            projects: [],
        };
    }
}
const root = document.getElementById("root");
if (root) {
    const portfolio = new Portfolio(root);
    portfolio.mount();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcG9ydGZvbGlvL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFDSCwwREFBMkM7QUFDM0MseURBQW9EO0FBWXBELE1BQU0sU0FBVSxTQUFRLG9CQUE4QjtJQUVsRCxZQUFvQixNQUFtQjtRQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFPVixzQkFBaUIsR0FBRyxHQUFTLEVBQUU7WUFDbEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO2lCQUN2QyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztpQkFDdkIsR0FBRyxFQUFFO2lCQUNMLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDckIsTUFBTSxXQUFXLEdBQUksR0FBRyxDQUFDLElBQUksRUFBbUIsQ0FBQyxJQUFJLEVBQ2pELElBQUksbUNBQ0csR0FBRyxDQUFDLElBQUksRUFBa0IsS0FDN0IsTUFBTSxFQUFFLHlGQUF5RixXQUFXLFlBQVksRUFDeEgsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQ2YsQ0FBQTtvQkFFTCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUE7Z0JBQzdELENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUE7UUFDVixDQUFDLENBQUE7UUFFTSxXQUFNLEdBQUcsR0FBa0IsRUFBRSxDQUFDLENBQ2pDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQ3BDLDBCQUFhLENBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLGlCQUFpQixFQUFDLEVBQzNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDcEQsQ0FDSixDQUFDLENBQ0wsQ0FBQTtRQUVPLG1CQUFjLEdBQUcsR0FBb0IsRUFBRTtZQUMzQyxNQUFNLE9BQU8sR0FBb0IsRUFBRSxDQUFBO1lBQ25DLElBQUksS0FBSyxHQUFrQixFQUFFLENBQUE7WUFFN0IsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUN4RCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUVqQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ25CLEtBQUssR0FBRyxFQUFFLENBQUE7aUJBQ2I7YUFDSjtZQUVELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDdEI7WUFFRCxPQUFPLE9BQU8sQ0FBQTtRQUNsQixDQUFDLENBQUE7UUFFTyxhQUFRLEdBQUcsQ0FBQyxFQUFDLE1BQU0sRUFBYyxFQUFlLEVBQUUsQ0FBQyxDQUN2RCwwQkFBYSxDQUNULEtBQUssRUFDTDtZQUNJLEtBQUssRUFBRSxnQ0FBZ0M7WUFDdkMsS0FBSyxFQUFFLHlCQUF5QixNQUFNLEdBQUc7U0FDNUMsQ0FDSixDQUNKLENBQUE7UUEzREcsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQTtJQUNMLENBQUM7Q0EwREo7QUFFRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRTVDLElBQUksSUFBSSxFQUFFO0lBQ04sTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFckMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFBO0NBQ3BCIn0=

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.5.3
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRef = exports.createElementNS = exports.createElement = exports.createDSComponent = void 0;
var _preset_1 = __importDefault(__webpack_require__(3));
var createDSComponent_1 = __importDefault(__webpack_require__(5));
var createElement_1 = __importDefault(__webpack_require__(6));
var createElementNS_1 = __importDefault(__webpack_require__(7));
var createRef_1 = __importDefault(__webpack_require__(8));
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
var DeStagnate = /** @class */ (function (_super) {
    __extends(DeStagnate, _super);
    /**
     * Construct class component
     * @public
     * @constructor
     * @param {HTMLElement} parent - parent of this element
     * @param {undefined | Object.<string, string | number>} props - element properties; works like React Props
     */
    function DeStagnate(parent, props) {
        var _this = _super.call(this) || this;
        _this.props = props;
        /**
         * Creates nested DeStagnate component
         * @public
         * @instance
         * @readonly
         * @param {DeStagnateConstructor} Component - DeStagnate component
         * @param {Object<string, unknown>} props - props of component
         * @returns {HTMLDivElement} parent of component
         */
        _this.createDSComponent = DeStagnate.createDSComponent;
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
        _this.createElement = DeStagnate.createElement;
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
        _this.createElementNS = DeStagnate.createElementNS;
        /**
         * Creates a reference for a nested component
         * @public
         * @instance
         * @readonly
         * @returns {Object<string, null>} empty ref object
         */
        _this.createRef = DeStagnate.createRef;
        /**
         * State of component. Works similar React State
         * @type {undefined | Object.<string, unknown>}
         * @private
         * @instance
         */
        _this._state = {};
        /**
         * If initial state was set in initializer
         * Do not throw error with direct state setting
         * @type {boolean}
         * @private
         */
        _this._didSetInitialState = false;
        /**
         * What to call before component update (state mutation)
         * @public
         * @instance
         * @param {Props} prevProps - previous props
         * @param {State} prevState - previous state
         * @returns {void} void
         */
        _this.getSnapshotBeforeUpdate = function (prevProps, prevState) { return [prevProps, prevState]; };
        /**
         * Sets state
         * @public
         * @instance
         * @readonly
         * @param {Partial<State>} obj - state to set
         * @returns {void | Error} void
         */
        _this.setState = function (obj) {
            var e_1, _a, e_2, _b;
            try {
                _this.componentWillUpdate();
                try {
                    for (var _c = __values(Object.keys(obj)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        if (!Object.keys(_this.state).includes(key)) {
                            // eslint-disable-next-line
                            console.warn("WARN: New key (" + key + ") should not be set with setState, which has keys " + JSON.stringify(Object.keys(_this.state)) + ". Declare all state variables in constructor as a best practice. Did you misspell a key?");
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.getSnapshotBeforeUpdate(_this.props, _this.state);
                Object.assign(_this._state, obj);
                var renderedContent = _this._execRender();
                if (typeof (renderedContent) === "object" &&
                    renderedContent instanceof Array) {
                    try {
                        for (var renderedContent_1 = __values(renderedContent), renderedContent_1_1 = renderedContent_1.next(); !renderedContent_1_1.done; renderedContent_1_1 = renderedContent_1.next()) {
                            var element = renderedContent_1_1.value;
                            _this._parent.appendChild(element);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (renderedContent_1_1 && !renderedContent_1_1.done && (_b = renderedContent_1.return)) _b.call(renderedContent_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else if (renderedContent) {
                    _this._parent.appendChild(renderedContent);
                }
                _this.componentDidUpdate();
            }
            catch (err) /* istanbul ignore next */ {
                _this.componentDidCatch(err);
                return err;
            }
        };
        /* eslint-disable max-len, @typescript-eslint/member-ordering, max-lines */
        /**
         * Initial mounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns {HTMLElement | Array.<HTMLElement> | error} - result of append child to parent element
         */
        _this.mountComponent = function () {
            try {
                var component = _this.render();
                _this._didSetInitialState = true;
                _this.componentWillMount();
                if (component === null) {
                    var msg = "Expected render method to be included in component class, no render method found, or render returned an empty array";
                    throw new Error(msg);
                }
                _this.bindEventListeners(_this._parent);
                _this.componentDidMount();
                if (typeof (component) === "object" && component instanceof Array) {
                    return component.map(function (element) { return (_this._parent.appendChild(element)); });
                }
                return _this._parent.appendChild(component);
            }
            catch (err) /* istanbul ignore next */ {
                _this.componentDidCatch(err);
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
        _this.mount = _this.mountComponent;
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns {void} - void
         */
        _this.unmountComponent = function () {
            try {
                _this.componentWillUnmount();
                _this.unbindEventListeners(_this._parent);
                _this._removeChildren();
            }
            catch (err) /* istanbul ignore next */ {
                _this.componentDidCatch(err);
            }
        };
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns {void} - void
         */
        _this.unmount = _this.unmountComponent;
        /* eslint-enable max-len, @typescript-eslint/member-ordering */
        /**
         * Removes children from this._parent
         * @private
         * @instance
         * @return {void} void
         */
        _this._removeChildren = function () {
            while (_this._parent.firstChild) {
                if (_this._parent.lastChild) {
                    _this._parent.removeChild(_this._parent.lastChild);
                }
                else {
                    break;
                }
            }
        };
        /**
         * Executes new render
         * @returns {HTMLElement | Array.<HTMLElement> | null} rendered content
         */
        _this._execRender = function () {
            _this._removeChildren();
            return _this.render();
        };
        if (["body", "html"].includes(parent.tagName.toLowerCase())) {
            console.warn("WARN: Avoid using " + parent.tagName.toLowerCase() + " as element parent, as all elements within " + parent.tagName.toLowerCase() + " will be removed on re-render");
        }
        _this._parent = parent;
        return _this;
    }
    Object.defineProperty(DeStagnate.prototype, "getState", {
        /**
         * Public getState getter as this.state itself is protected
         * @public
         * @instance
         * @returns {State} component state
         */
        get: function () {
            return this.state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeStagnate.prototype, "state", {
        /**
         * Get component state
         * @protected
         * @instance
         * @returns {State} component state
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets component state
         * WARN: do not use this method to mutate the state directly
         * @protected
         * @instance
         * @param {State} obj - state to set
         */
        set: function (obj) {
            if (this._didSetInitialState) {
                this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead."));
                // eslint-disable-next-line
                console.warn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly");
                this.setState(obj);
            }
            else {
                this._state = obj;
                this._didSetInitialState = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeStagnate.prototype, "getProps", {
        /**
         * Public getProps getter as this.props itself is protected
         * @public
         * @instance
         * @returns {Props | undefined} component state
         */
        get: function () {
            return this.props;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates nested DeStagnate component
     * @public
     * @static
     * @readonly
     * @param {DeStagnateConstructor} Component - DeStagnate component
     * @param {Object<string, unknown>} props - props of component
     * @returns {HTMLDivElement} parent of component
     */
    DeStagnate.createDSComponent = createDSComponent_1.default;
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
    DeStagnate.createElement = createElement_1.default;
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
    DeStagnate.createElementNS = createElementNS_1.default;
    /**
     * Creates a reference for a nested component
     * @public
     * @static
     * @readonly
     * @returns {Object<string, null>} empty ref object
     */
    DeStagnate.createRef = createRef_1.default;
    return DeStagnate;
}(_preset_1.default));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsc0RBQThCO0FBQzlCLDBFQUFpRTtBQUNqRSxrRUFBeUQ7QUFDekQsc0VBQTZEO0FBQzdELDBEQUFpRDtBQUlqRDs7Ozs7O0dBTUc7QUFDSDtJQUVZLDhCQUFNO0lBeUhkOzs7Ozs7T0FNRztJQUNILG9CQUNJLE1BQW1CLEVBQ1QsS0FBYTtRQUYzQixZQUlJLGlCQUFPLFNBTVY7UUFSYSxXQUFLLEdBQUwsS0FBSyxDQUFRO1FBaEYzQjs7Ozs7Ozs7V0FRRztRQUNhLHVCQUFpQixHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQTtRQUVoRTs7Ozs7Ozs7OztXQVVHO1FBQ2EsbUJBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFBO1FBRXhEOzs7Ozs7Ozs7OztXQVdHO1FBQ2EscUJBQWUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFBO1FBRTVEOzs7Ozs7V0FNRztRQUNhLGVBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFBO1FBRWhEOzs7OztXQUtHO1FBQ0ssWUFBTSxHQUFVLEVBQVcsQ0FBQTtRQUVuQzs7Ozs7V0FLRztRQUNLLHlCQUFtQixHQUFHLEtBQUssQ0FBQTtRQTZCbkM7Ozs7Ozs7V0FPRztRQUNJLDZCQUF1QixHQUFHLFVBQzdCLFNBQWdCLEVBQ2hCLFNBQWdCLElBQ0MsT0FBQSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQTtRQXFEM0M7Ozs7Ozs7V0FPRztRQUNhLGNBQVEsR0FBRyxVQUFDLEdBQW1COztZQUMzQyxJQUFJO2dCQUNBLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBOztvQkFFMUIsS0FBa0IsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTt3QkFBL0IsSUFBTSxHQUFHLFdBQUE7d0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDeEMsMkJBQTJCOzRCQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFrQixHQUFHLDBEQUFxRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLDZGQUEwRixDQUFDLENBQUE7eUJBQzVOO3FCQUNKOzs7Ozs7Ozs7Z0JBRUQsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUksQ0FBQyxLQUFjLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUU3RCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBRS9CLElBQU0sZUFBZSxHQUFHLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtnQkFFMUMsSUFDSSxPQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssUUFBUTtvQkFDcEMsZUFBZSxZQUFZLEtBQUssRUFDbEM7O3dCQUNFLEtBQXNCLElBQUEsb0JBQUEsU0FBQSxlQUFlLENBQUEsZ0RBQUEsNkVBQUU7NEJBQWxDLElBQU0sT0FBTyw0QkFBQTs0QkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTt5QkFDcEM7Ozs7Ozs7OztpQkFDSjtxQkFBTSxJQUFJLGVBQWUsRUFBRTtvQkFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUE7aUJBQzVDO2dCQUVELEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2FBQzVCO1lBQUMsT0FBTyxHQUFHLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFFM0IsT0FBTyxHQUFZLENBQUE7YUFDdEI7UUFDTCxDQUFDLENBQUE7UUFFRCwyRUFBMkU7UUFDM0U7Ozs7OztXQU1HO1FBQ2Esb0JBQWMsR0FBRztZQUM3QixJQUFJO2dCQUNBLElBQU0sU0FBUyxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtnQkFFL0IsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQTtnQkFFL0IsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7Z0JBRXpCLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtvQkFDcEIsSUFBTSxHQUFHLEdBQUcscUhBQXFILENBQUE7b0JBRWpJLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ3ZCO2dCQUVELEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBRXJDLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO2dCQUV4QixJQUFJLE9BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxRQUFRLElBQUksU0FBUyxZQUFZLEtBQUssRUFBRTtvQkFDOUQsT0FBUSxTQUF1QixDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLENBQzdDLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUNwQyxFQUZnRCxDQUVoRCxDQUFDLENBQUE7aUJBQ0w7Z0JBRUQsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUM3QztZQUFDLE9BQU8sR0FBRyxFQUFFLDBCQUEwQixDQUFDO2dCQUNyQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBRTNCLE9BQU8sR0FBWSxDQUFBO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFBO1FBRUQ7Ozs7OztXQU1HO1FBQ2EsV0FBSyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUE7UUFFM0M7Ozs7OztXQU1HO1FBQ2Esc0JBQWdCLEdBQUc7WUFDL0IsSUFBSTtnQkFDQSxLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtnQkFFM0IsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFFdkMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO2FBQ3pCO1lBQUMsT0FBTyxHQUFHLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUM5QjtRQUVMLENBQUMsQ0FBQTtRQUVEOzs7Ozs7V0FNRztRQUNhLGFBQU8sR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUE7UUFDL0MsK0RBQStEO1FBRS9EOzs7OztXQUtHO1FBQ0sscUJBQWUsR0FBRztZQUN0QixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUM1QixJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO29CQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2lCQUNuRDtxQkFBTTtvQkFDSCxNQUFLO2lCQUNSO2FBQ0o7UUFDTCxDQUFDLENBQUE7UUFFRDs7O1dBR0c7UUFDSyxpQkFBVyxHQUFHO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUV0QixPQUFPLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUN4QixDQUFDLENBQUE7UUExTkcsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO1lBQ3pELE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLG1EQUE4QyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxrQ0FBK0IsQ0FBQyxDQUFBO1NBQzNLO1FBRUQsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUE7O0lBQ3pCLENBQUM7SUFxQkQsc0JBQVcsZ0NBQVE7UUFObkI7Ozs7O1dBS0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNyQixDQUFDOzs7T0FBQTtJQVFELHNCQUFjLDZCQUFLO1FBTm5COzs7OztXQUtHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEIsQ0FBQztRQUVEOzs7Ozs7V0FNRzthQUNILFVBQXFCLEdBQVU7WUFDM0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FDbEIsSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FDbkUsQ0FBQTtnQkFDRCwyQkFBMkI7Z0JBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEZBQThGLENBQUMsQ0FBQTtnQkFDNUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNyQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtnQkFDakIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQTthQUNsQztRQUNMLENBQUM7OztPQXJCQTtJQTZCRCxzQkFBVyxnQ0FBUTtRQU5uQjs7Ozs7V0FLRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3JCLENBQUM7OztPQUFBO0lBdk1EOzs7Ozs7OztPQVFHO0lBQ29CLDRCQUFpQixHQUFHLDJCQUFrQixDQUFBO0lBRTdEOzs7Ozs7Ozs7O09BVUc7SUFDb0Isd0JBQWEsR0FBRyx1QkFBYyxDQUFBO0lBRXJEOzs7Ozs7Ozs7OztPQVdHO0lBQ29CLDBCQUFlLEdBQUcseUJBQWdCLENBQUE7SUFFekQ7Ozs7OztPQU1HO0lBQ29CLG9CQUFTLEdBQUcsbUJBQVUsQ0FBQTtJQWlUakQsaUJBQUM7Q0FBQSxBQW5XRCxDQUVZLGlCQUFNLEdBaVdqQjtrQkFuVzZCLFVBQVU7QUFxV3hDOzs7OztHQUtHO0FBQ1UsUUFBQSxpQkFBaUIsR0FBRywyQkFBa0IsQ0FBQTtBQUVuRDs7Ozs7O0dBTUc7QUFDVSxRQUFBLGFBQWEsR0FBRyx1QkFBYyxDQUFBO0FBRTNDOzs7Ozs7O0dBT0c7QUFDVSxRQUFBLGVBQWUsR0FBRyx5QkFBZ0IsQ0FBQTtBQUcvQzs7O0dBR0c7QUFDVSxRQUFBLFNBQVMsR0FBRyxtQkFBVSxDQUFBIn0=

/***/ }),
/* 3 */
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
 * @exports Preset
 * @package
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _events_1 = __importDefault(__webpack_require__(4));
/* istanbul ignore next */
/**
 * Lifecycle member functions
 */
var Preset = /** @class */ (function (_super) {
    __extends(Preset, _super);
    function Preset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Called when component catches error. Default behaviour is console.error
         * @param {Error} error - error object with info
         * @returns {void} void
         */
        _this.componentDidCatch = function (error) { return console.error(error); };
        /**
         * What to call after component mounting
         * @public
         * @instance
         * @returns {void} void
         */
        _this.componentDidMount = function () { return undefined; };
        /**
         * What to call after component update (state mutation)
         * @public
         * @instance
         * @returns {void} void
         */
        _this.componentDidUpdate = function () { return undefined; };
        /**
         * What to call before component mounting
         * @public
         * @instance
         * @returns {void} void
         */
        _this.componentWillMount = function () { return undefined; };
        /**
         * What to call before component unmounting
         * @public
         * @instance
         * @returns {void} void
         */
        _this.componentWillUnmount = function () { return undefined; };
        /**
         * What to call before component update (state mutation)
         * @public
         * @instance
         * @returns {void} void
         */
        _this.componentWillUpdate = function () { return undefined; };
        /**
         * Rendering HTML, must be part of extended class
         * @public
         * @instance
         * @abstract
         * @returns {null | HTMLElement | Array.<HTMLElement> | Element | Array.<Element>} if returns null error will be thrown
         */
        _this.render = function () { return null; };
        return _this;
    }
    return Preset;
}(_events_1.default));
exports.default = Preset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3ByZXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9fcHJlc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJSCxzREFBOEI7QUFFOUIsMEJBQTBCO0FBQzFCOztHQUVHO0FBQ0g7SUFBNkMsMEJBQU07SUFBbkQ7UUFBQSxxRUEwREM7UUF4REc7Ozs7V0FJRztRQUNJLHVCQUFpQixHQUFHLFVBQUMsS0FBWSxJQUFXLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQTtRQUV2RTs7Ozs7V0FLRztRQUNJLHVCQUFpQixHQUFHLGNBQVksT0FBQSxTQUFTLEVBQVQsQ0FBUyxDQUFBO1FBRWhEOzs7OztXQUtHO1FBQ0ksd0JBQWtCLEdBQUcsY0FBWSxPQUFBLFNBQVMsRUFBVCxDQUFTLENBQUE7UUFFakQ7Ozs7O1dBS0c7UUFDSSx3QkFBa0IsR0FBRyxjQUFZLE9BQUEsU0FBUyxFQUFULENBQVMsQ0FBQTtRQUVqRDs7Ozs7V0FLRztRQUNJLDBCQUFvQixHQUFHLGNBQVksT0FBQSxTQUFTLEVBQVQsQ0FBUyxDQUFBO1FBRW5EOzs7OztXQUtHO1FBQ0kseUJBQW1CLEdBQUcsY0FBWSxPQUFBLFNBQVMsRUFBVCxDQUFTLENBQUE7UUFFbEQ7Ozs7OztXQU1HO1FBQ2EsWUFBTSxHQUFHLGNBQWtCLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQTs7SUFFbkQsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBMURELENBQTZDLGlCQUFNLEdBMERsRCJ9

/***/ }),
/* 4 */
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
 * @exports Events
 * @package
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
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next */
var Events = /** @class */ (function () {
    function Events() {
        var _this = this;
        /**
         * Binds event listeners event
         * Do not call manually
         * @protected
         * @instance
         * @pacakge
         * @param {HTMLElement} element - element to bind listeners to
         * @returns {void} void;
         */
        this.bindEventListeners = function (element) {
            _this._eventListener(element.addEventListener);
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
        this.unbindEventListeners = function (element) {
            _this._eventListener(element.removeEventListener);
        };
        /**
         * Focus event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onFocus = function () { return undefined; };
        /**
         * Blur event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onBlur = function () { return undefined; };
        /**
         * Focus in event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onFocusIn = function () { return undefined; };
        /**
         * Focus out event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onFocusOut = function () { return undefined; };
        /**
         * Animation start event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationStart = function () { return undefined; };
        /**
         * Animation cancel event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationCancel = function () { return undefined; };
        /**
         * Animation end event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationEnd = function () { return undefined; };
        /**
         * Animation iteration event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAnimationIteration = function () { return undefined; };
        /**
         * Transition start event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionStart = function () { return undefined; };
        /**
         * Transition cancel event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionCancel = function () { return undefined; };
        /**
         * Transition end event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionEnd = function () { return undefined; };
        /**
         * Transition run event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onTransitionRun = function () { return undefined; };
        /**
         * Auxillary click event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onAuxClick = function () { return undefined; };
        /**
         * Click event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onClick = function () { return undefined; };
        /**
         * Double click event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onDblClick = function () { return undefined; };
        /**
         * Mousedown event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseDown = function () { return undefined; };
        /**
         * Mouse enter event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseEnter = function () { return undefined; };
        /**
         * Mouse leave event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseLeave = function () { return undefined; };
        /**
         * Mouse move event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseMove = function () { return undefined; };
        /**
         * Mouseover event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseOver = function () { return undefined; };
        /**
         * Mouseout event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseOut = function () { return undefined; };
        /**
         * Mouseup event
         * @protected
         * @instance
         * @returns {void}
         */
        this.onMouseUp = function () { return undefined; };
        this._eventListener = function (el) {
            var e_1, _a;
            try {
                for (var _b = __values(Object.entries(_this._events())), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), event_1 = _d[0], callback = _d[1];
                    el(event_1, callback);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        this._events = function () { return ({
            focus: _this.onFocus,
            blur: _this.onBlur,
            focusin: _this.onFocusIn,
            focusout: _this.onFocusOut,
            animationstart: _this.onAnimationStart,
            animationcancel: _this.onAnimationCancel,
            animationend: _this.onAnimationEnd,
            animationiteration: _this.onAnimationIteration,
            transitionstart: _this.onTransitionStart,
            transitioncancel: _this.onTransitionCancel,
            transitionend: _this.onTransitionEnd,
            transitionrun: _this.onTransitionRun,
            auxclick: _this.onAuxClick,
            click: _this.onClick,
            dblclick: _this.onDblClick,
            mousedown: _this.onMouseDown,
            mouseenter: _this.onMouseEnter,
            mouseleave: _this.onMouseLeave,
            mousemove: _this.onMouseMove,
            mouseover: _this.onMouseOver,
            mouseout: _this.onMouseOut,
            mouseup: _this.onMouseUp,
        }); };
    }
    return Events;
}());
exports.default = Events;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2V2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9fZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DSCwwQkFBMEI7QUFDMUI7SUFBQTtRQUFBLGlCQWdQQztRQTlPRzs7Ozs7Ozs7V0FRRztRQUNPLHVCQUFrQixHQUFHLFVBQUMsT0FBb0I7WUFDaEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUNqRCxDQUFDLENBQUE7UUFFRDs7Ozs7Ozs7V0FRRztRQUNPLHlCQUFvQixHQUFHLFVBQUMsT0FBb0I7WUFDbEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNwRCxDQUFDLENBQUE7UUFFRDs7Ozs7V0FLRztRQUNPLFlBQU8sR0FBRyxjQUFZLE9BQUEsU0FBUyxFQUFULENBQVMsQ0FBQTtRQUV6Qzs7Ozs7V0FLRztRQUNPLFdBQU0sR0FBRyxjQUFZLE9BQUEsU0FBUyxFQUFULENBQVMsQ0FBQTtRQUV4Qzs7Ozs7V0FLRztRQUNPLGNBQVMsR0FBRyxjQUFZLE9BQUEsU0FBUyxFQUFULENBQVMsQ0FBQTtRQUUzQzs7Ozs7V0FLRztRQUNPLGVBQVUsR0FBRyxjQUFZLE9BQUEsU0FBUyxFQUFULENBQVMsQ0FBQTtRQUU1Qzs7Ozs7V0FLRztRQUNPLHFCQUFnQixHQUFHLGNBQVksT0FBQSxTQUFTLEVBQVQsQ0FBUyxDQUFBO1FBRWxEOzs7OztXQUtHO1FBQ08sc0JBQWlCLEdBQUcsY0FBWSxPQUFBLFNBQVMsRUFBVCxDQUFTLENBQUE7UUFFbkQ7Ozs7O1dBS0c7UUFDTyxtQkFBYyxHQUFHLGNBQVksT0FBQSxTQUFTLEVBQVQsQ0FBUyxDQUFBO1FBRWhEOzs7OztXQUtHO1FBQ08seUJBQW9CLEdBQUcsY0FBWSxPQUFBLFNBQVMsRUFBVCxDQUFTLENB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

/***/ }),
/* 5 */
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
 * @exports createDSComponent add nested component for DeStagnate components
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Creates nested DeStagnate component
 * @param {DeStagnateConstructor} Component - DeStagnate component
 * @param {Object<string, unknown>} props - props of component
 * @param {Object<string, undefined | DeStagnate>} ref - ref object
 * @returns {HTMLDivElement} parent of component
 */
var createDSComponent = function (Component, props, ref) {
    var element = document.createElement("div");
    element.classList.add("DeStagnate-component-parent");
    var _component = new Component(element, props);
    _component.mount();
    if (ref) {
        ref.current = _component;
    }
    return element;
};
exports.default = createDSComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRFNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlRFNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRzs7QUFVSCx5REFBeUQ7QUFDekQ7Ozs7OztHQU1HO0FBQ0gsSUFBTSxpQkFBaUIsR0FBRyxVQUlsQixTQUE4QyxFQUM5QyxLQUFhLEVBQ2IsR0FBbUM7SUFFdkMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU3QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0lBRXBELElBQU0sVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUVoRCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFbEIsSUFBSSxHQUFHLEVBQUU7UUFDTCxHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQTtLQUMzQjtJQUVELE9BQU8sT0FBTyxDQUFBO0FBQ2xCLENBQUMsQ0FBQTtBQUVELGtCQUFlLGlCQUFpQixDQUFBIn0=

/***/ }),
/* 6 */
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
/* 7 */
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
 * @exports createElementNS createElement for namespaced elements
 */
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
exports.createElementNS = void 0;
var createElement_1 = __webpack_require__(6);
/**
 * Creates a child element to deStagnate
 * @param {string | null} namespaceURI - namespace uri
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Element | string | number | Array.<Element> | Array.<string> | Array.<number>} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
exports.createElementNS = function (namespaceURI, tagName, props, children) {
    var childrenArgs = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        childrenArgs[_i - 4] = arguments[_i];
    }
    var element = document.createElementNS(namespaceURI, tagName);
    createElement_1._bindProps(element, props, true);
    var _children = children;
    if (children && childrenArgs) {
        if (typeof (children) === "object" && children instanceof Array) {
            _children = __spread(createElement_1._unpackChildren(children), createElement_1._unpackChildren(childrenArgs));
        }
        else {
            _children = __spread([children], createElement_1._unpackChildren(childrenArgs));
        }
    }
    createElement_1._bindChildren(element, _children);
    return element;
};
exports.default = exports.createElementNS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudE5TLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUVsZW1lbnROUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILGlEQU13QjtBQUV4Qjs7Ozs7Ozs7R0FRRztBQUNVLFFBQUEsZUFBZSxHQUFHLFVBQzNCLFlBQStHLEVBQy9HLE9BQTBDLEVBQzFDLEtBQXdDLEVBQ3hDLFFBQXVCO0lBQ3ZCLHNCQUFrQztTQUFsQyxVQUFrQyxFQUFsQyxxQkFBa0MsRUFBbEMsSUFBa0M7UUFBbEMscUNBQWtDOztJQUVsQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUUvRCwwQkFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFFaEMsSUFBSSxTQUFTLEdBQTZCLFFBQVEsQ0FBQTtJQUVsRCxJQUFJLFFBQVEsSUFBSSxZQUFZLEVBQUU7UUFDMUIsSUFBSSxPQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxJQUFJLFFBQVEsWUFBWSxLQUFLLEVBQUU7WUFDNUQsU0FBUyxZQUNGLCtCQUFlLENBQUMsUUFBUSxDQUFDLEVBQ3pCLCtCQUFlLENBQUMsWUFBWSxDQUFDLENBQ25DLENBQUE7U0FDSjthQUFNO1lBQ0gsU0FBUyxhQUFJLFFBQVEsR0FBSywrQkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7U0FDM0Q7S0FDSjtJQUVELDZCQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBRWpDLE9BQU8sT0FBTyxDQUFBO0FBQ2xCLENBQUMsQ0FBQTtBQUVELGtCQUFlLHVCQUFlLENBQUEifQ==

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a reference for a nested component
 * @returns {Object<string, null>} empty ref object
 */
var createRef = function () { return ({
    current: null,
}); };
/**
 * Creates a reference for a nested component
 * @returns {Object<string, null>} empty ref object
 */
exports.default = createRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZVJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQTs7O0dBR0c7QUFDSCxJQUFNLFNBQVMsR0FBRyxjQUE0QyxPQUFBLENBQUM7SUFDM0QsT0FBTyxFQUFFLElBQUk7Q0FDaEIsQ0FBQyxFQUY0RCxDQUU1RCxDQUFBO0FBRUY7OztHQUdHO0FBQ0gsa0JBQWUsU0FBUyxDQUFBIn0=

/***/ })
/******/ ]);
});