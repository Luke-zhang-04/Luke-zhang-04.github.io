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
 */ !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.portfolio=e():t.portfolio=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=46)}([function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=e.createRef=e.createElementNS=e.createElement=e.createDSComponent=void 0;var o=r(n(7)),i=r(n(33)),a=r(n(14)),u=r(n(15)),c=r(n(18));e.createDSComponent=a.default,e.createElement=u.default,e.createElementNS=c.default,e.createRef=o.default,e.Component=i.default,e.default=i.default},function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(43),o=n(44),i=n(12),a=n(45);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(6);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createRef=void 0,e.createRef=function(){return{current:null}},e.default=e.createRef},function(t,e,n){var r=n(35);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(1),o=n(36);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(38),o=n(39),i=n(12),a=n(40);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},function(t,e,n){var r=n(13);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createDSComponent add nested component for DeStagnate components
 */Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e,n){var r=document.createElement("div");r.classList.add("DeStagnate-component-parent");var o=new t(r,e);return o.mount(),n&&(n.current=o),r}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElement function for DOM manipulation
 */var r=n(3);Object.defineProperty(e,"__esModule",{value:!0}),e.createElement=void 0;var o=n(16);function i(t,e,n){for(var i=n,a=arguments.length,u=Array(3<a?a-3:0),c=3;c<a;c++)u[c-3]=arguments[c];if(n&&u&&(i=n instanceof Array?[].concat(r(o.unpackChildren(n)),r(o.unpackChildren(u))):[n].concat(r(o.unpackChildren(u)))),"string"==typeof t){var f=document.createElement(t);return o.bindProps(f,e),o.bindChildren(f,i),f}return"function"==typeof t?t(e,i):Error("tagNameOrComponent is of invalid type.")}e.createElement=i,e.default=i},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file share functions and types for createElement and it's variants
 */var r=n(3),o=n(1),i=n(11);function a(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,t},f:function t(){try{i||null==n.return||n.return()}finally{if(a)throw t}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.bindChildren=e.unpackChildren=e.bindProps=void 0;var f=c(n(0)),s=c(n(17));e.bindProps=function(t,e){var n=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];if(e)for(var r=0,a=Object.entries(e);r<a.length;r++){var u=i(a[r],2),c=u[0],f=u[1];"string"==typeof f||"number"==typeof f?"innerHTML"===c?t.innerHTML=f.toString():n?t.setAttributeNS(null,c,f.toString()):t.setAttribute(c,f.toString()):"on"===c.slice(0,2)?"function"==typeof f&&t.addEventListener(c.slice(2).toLowerCase(),f):"ref"===c&&"object"===o(f)&&"current"in f?f.current=t:void 0!==f&&console.warn("WARN: Code 7. See ".concat(s.default,". Params: ").concat(o(f),", ").concat(c))}},e.unpackChildren=function(t){var n,i=[],u=a(t);try{for(u.s();!(n=u.n()).done;){var c=n.value;"object"===o(c)&&c instanceof Array?i.push.apply(i,r(e.unpackChildren(c))):i.push(c)}}catch(t){u.e(t)}finally{u.f()}return i},e.bindChildren=function(t,n){if(null!=n)if(n instanceof Array){var r,o=a(n);try{for(o.s();!(r=o.n()).done;){var i=r.value;e.bindChildren(t,i)}}catch(t){o.e(t)}finally{o.f()}}else if("string"==typeof n||"number"==typeof n)t.innerText=n.toString();else if(n instanceof f.default){if(!n.didMount&&t instanceof window.HTMLElement)return void n.mount(t);if(!(t instanceof window.HTMLElement))throw new Error("ERROR: code 8. See ".concat(s.default));n.parent!==t&&(n.parent=t),n.forceUpdate()}else t.appendChild(n)}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file share functions and types for createElement and it's variants
 */Object.defineProperty(e,"__esModule",{value:!0}),e.url=void 0,e.url="https://luke-zhang-04.github.io/DeStagnate/error-codes",e.default=e.url},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElementNS createElement for namespaced elements
 */var r=n(3),o=n(1);Object.defineProperty(e,"__esModule",{value:!0}),e.createElementNS=void 0;var i=n(16);e.createElementNS=function(t,e,n,a){var u=document.createElementNS(t,e);i.bindProps(u,n,!0);for(var c=a,f=arguments.length,s=Array(4<f?f-4:0),l=4;l<f;l++)s[l-4]=arguments[l];return a&&s&&(c="object"===o(a)&&a instanceof Array?[].concat(r(i.unpackChildren(a)),r(i.unpackChildren(s))):[a].concat(r(i.unpackChildren(s)))),i.bindChildren(u,c),u},e.default=e.createElementNS},function(t,e,n){var r=n(24),o=n(25),i=n(5),a=n(26);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},function(t,e,n){var r=n(27),o=n(28),i=n(5),a=n(29);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(30);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(31),o=n(32);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){var r=n(6);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports DeStagnate main destagnate class
 * @file DeStagnate component class
 * @preserve
 */var r=n(1),o=n(2),i=n(34),a=n(8),u=n(9),c=n(10);function f(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,t},f:function t(){try{i||null==n.return||n.return()}finally{if(a)throw t}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var d=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=void 0;var p=d(n(37)),y=d(n(17)),m=function(t){function e(t,i){var a,u=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];return o(this,e),(a=n.call(this)).props=i,a._strict=!0,a._state={},a._didSetInitialState=!1,a._didMount=!1,a.getSnapshotBeforeUpdate=function(t,e){return[t,e]},a.useStrict=function(){a._strict=!0},a.disableStrict=function(){a._strict=!1},a.forceUpdate=function(){try{if(a.componentDidUpdate(),void 0===a._parent)throw new Error("ERROR: code 3. See ".concat(y.default,"."));a.getSnapshotBeforeUpdate(Object.assign({},a.props),Object.assign({},a.state)),a._update(a._execRender())}catch(t){return a.componentDidCatch(t),t}},a.setState=function(t){try{if(a.componentWillUpdate(),void 0===a._parent)throw new Error("ERROR: code 3. See ".concat(y.default,"."));a._strict&&a._checkKeys(t),a.getSnapshotBeforeUpdate(Object.assign({},a.props),Object.assign({},a.state)),Object.assign(a._state,t);var e=a.shouldComponentUpdate()?a._execRender():void 0;a._update(e)}catch(t){return a.componentDidCatch(t),t}},a.mountComponent=function(t){try{if(void 0!==t&&(a.parent=t),void 0===a._parent)throw new Error("ERROR: code 3. See ".concat(y.default,"."));var e=a.render();if(a._didSetInitialState=!0,a.componentWillMount(),null===e)throw new Error("ERROR: code 5. See ".concat(y.default,"."));return a.bindEventListeners(a._parent),a._didMount=!0,a.componentDidMount(),"object"===r(e)&&e instanceof Array?e.map((function(t){return a._parent.appendChild(t)})):a._parent.appendChild(e)}catch(t){return a.componentDidCatch(t),t}},a.mount=a.mountComponent,a.unmountComponent=function(){try{if(void 0===a._parent)return void a.componentDidWarn("WARN: code 4. See ".concat(y.default,"."));a.componentWillUnmount(),a.unbindEventListeners(a._parent),a._removeChildren(),a._didMount=!1}catch(t){a.componentDidCatch(t)}},a.unmount=a.unmountComponent,a._removeChildren=function(){if(void 0===a._parent)throw new Error("ERROR: code 3. See ".concat(y.default,"."));for(;a._parent.firstChild;)a._parent.lastChild&&a._parent.removeChild(a._parent.lastChild)},a._execRender=function(){return a._removeChildren(),a.render()},a._checkKeys=function(t){for(var e,n=0,r=Object.keys(t);n<r.length;n++)e=r[n],Object.keys(a.state).includes(e)||a.componentDidWarn("WARN: code 6. See ".concat(y.default,". Params: ").concat(e,", ").concat(JSON.stringify(Object.keys(a.state)),"."))},a._update=function(t){if("object"===r(t)&&t instanceof Array){var e,n=f(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;a._parent.appendChild(o)}}catch(t){n.e(t)}finally{n.f()}}else t&&a._parent.appendChild(t);t&&a.componentDidUpdate()},t&&0<t.childElementCount&&!u&&a._strict&&a.componentDidCatch(new Error("ERROR: code 1. See ".concat(y.default,". Params: ").concat(t.tagName.toLowerCase()))),a._parent=t,a}a(e,t);var n=l(e);return i(e,[{key:"getState",get:function(){return this.state}},{key:"state",get:function(){return this._state},set:function(t){this._didSetInitialState&&this._strict?(this.componentDidCatch(new Error("ERROR: code 2. See ".concat(y.default,"."))),this.componentDidWarn("ERROR: code 2. See ".concat(y.default,".")),this.setState(t)):(this._state=t,this._didSetInitialState=!0)}},{key:"getProps",get:function(){return this.props}},{key:"parent",set:function(t){t&&0<t.childElementCount&&this._strict&&this.componentDidCatch(new Error("ERROR: code 1. See ".concat(y.default,". Params: ").concat(t.tagName.toLowerCase()))),this._parent=t},get:function(){return this._parent}},{key:"didMount",get:function(){return this._didMount}}]),e}(p.default);e.default=m;var v=function(t){function e(){return o(this,e),n.apply(this,arguments)}a(e,t);var n=l(e);return e}(m);e.Component=v},function(t,e){function n(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports Events
 * @package
 */var r=n(11),o=n(2),i=n(8),a=n(9),u=n(10);function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,t},f:function t(){try{i||null==n.return||n.return()}finally{if(a)throw t}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var d=l(n(41)),p=function(t){function e(){var t;return o(this,e),(t=n.apply(this,arguments)).onFocus=void 0,t.onBlur=void 0,t.onFocusIn=void 0,t.onFocusOut=void 0,t.onAnimationStart=void 0,t.onAnimationCancel=void 0,t.onAnimationEnd=void 0,t.onAnimationIteration=void 0,t.onTransitionStart=void 0,t.onTransitionCancel=void 0,t.onTransitionEnd=void 0,t.onTransitionRun=void 0,t.onAuxClick=void 0,t.onClick=void 0,t.onDblClick=void 0,t.onMouseDown=void 0,t.onMouseEnter=void 0,t.onMouseLeave=void 0,t.onMouseMove=void 0,t.onMouseOver=void 0,t.onMouseOut=void 0,t.onMouseUp=void 0,t.bindEventListeners=function(e){t._eventListener(e.addEventListener)},t.unbindEventListeners=function(e){t._eventListener(e.removeEventListener)},t._eventListener=function(e){var n,o=c(d.default(t._events()));try{for(o.s();!(n=o.n()).done;){var i=r(n.value,2),a=i[0],u=i[1];void 0!==u&&e(a,u)}}catch(t){o.e(t)}finally{o.f()}},t._events=function(){return{focus:t.onFocus,blur:t.onBlur,focusin:t.onFocusIn,focusout:t.onFocusOut,animationstart:t.onAnimationStart,animationcancel:t.onAnimationCancel,animationend:t.onAnimationEnd,animationiteration:t.onAnimationIteration,transitionstart:t.onTransitionStart,transitioncancel:t.onTransitionCancel,transitionend:t.onTransitionEnd,transitionrun:t.onTransitionRun,auxclick:t.onAuxClick,click:t.onClick,dblclick:t.onDblClick,mousedown:t.onMouseDown,mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,mousemove:t.onMouseMove,mouseover:t.onMouseOver,mouseout:t.onMouseOut,mouseup:t.onMouseUp}},t}i(e,t);var n=s(e);return e}(l(n(42)).default);e.default=p},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.1
 * @package
 */Object.defineProperty(e,"__esModule",{value:!0}),e.eventsList=void 0,e.eventsList=function(t){for(var e,n=[],r=0,o=Object.keys(t);r<o.length;r++)e=o[r],n.push([e,t[e]]);return n},e.default=e.eventsList},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports Preset - base for a component
 * @package
 */var r=n(2),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(14)),a=o(n(15)),u=o(n(18)),c=o(n(7)),f=function t(){r(this,t),this.createDSComponent=i.default,this.createElement=a.default,this.createElementNS=u.default,this.createRef=c.default,this.componentDidCatch=function(t){return console.error(t)},this.componentDidMount=function(){},this.componentDidUpdate=function(){},this.componentDidWarn=function(t){return console.warn(t)},this.componentWillMount=function(){},this.componentWillUnmount=function(){},this.componentWillUpdate=function(){},this.shouldComponentUpdate=function(){return!0},this.render=function(){return null}};e.default=f,f.createDSComponent=i.default,f.createElement=a.default,f.createElementNS=u.default,f.createRef=c.default},function(t,e,n){var r=n(13);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){"use strict";n.r(e);var r=n(19),o=n.n(r),i=n(20),a=n.n(i),u=n(21),c=n.n(u),f=n(22),s=n.n(f),l=n(23),d=n.n(l),p=n(4),y=n.n(p);firebase.initializeApp({apiKey:"AIzaSyDKHbbyZoschUX1cMf5VdjRl9TtdIX1R9A",authDomain:"luke-zhang.firebaseapp.com",databaseURL:"https://luke-zhang.firebaseio.com",projectId:"luke-zhang",storageBucket:"luke-zhang.appspot.com",messagingSenderId:"309956853075",appId:"1:309956853075:web:ebb55b1076c4aca168f5a6"});firebase.auth();var m=firebase.firestore(),v=n(0);function h(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,t},f:function t(){try{i||null==n.return||n.return()}finally{if(a)throw t}}}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}
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
 */();return function(){var n,r=y()(t);if(e){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var S=function(t){function e(t){var r;return c()(this,e),(r=n.call(this,t)).componentDidMount=function(){m.collection("projects").orderBy("date","desc").get().then((function(t){t.forEach((function(t){var e=t.data().file,n=Object.assign(Object.assign({},t.data()),{imgUrl:"https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F".concat(e,"?alt=media"),name:t.id});r.setState({projects:[].concat(a()(r.state.projects),[n])})}))}))},r.render=function(){return Object(v.createElement)("div",{class:"project-container"},r._groupProjects().map((function(t){return Object(v.createElement)("div",{class:"row project-row"},t.map((function(t){return r._project(t)})))})))},r._groupProjects=function(){var t,e=[],n=[],i=h(r.state.projects.entries());try{for(i.s();!(t=i.n()).done;){var a=o()(t.value,2),u=a[0],c=a[1];n.push(c),0==(u+1)%4&&(e.push(n),n=[])}}catch(t){i.e(t)}finally{i.f()}return 0<n.length&&e.push(n),e},r._project=function(t){var e=t.imgUrl;return Object(v.createElement)("div",{class:"col-sm-6 col-md-3 project-card",style:"background-image: url(".concat(e,")")})},r.state={projects:[]},r}s()(e,t);var n=_(e);return e}(n.n(v).a),g=document.getElementById("root");
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
 */g&&new S(g).mount()}])}));
