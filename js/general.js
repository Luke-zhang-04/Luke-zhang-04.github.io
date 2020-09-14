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
 */ !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.general=t():e.general=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElement function for DOM manipulation without DeStagnate class or Refs
 */var r=n(3),o=n(7),l=n(8);function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,e},f:function e(){try{l||null==n.return||n.return()}finally{if(a)throw e}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=void 0;var u=c(n(12)),s=function(e,t){var n=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];if(t)for(var r=0,a=Object.entries(t);r<a.length;r++){var i=l(a[r],2),c=i[0],s=i[1];"string"==typeof s||"number"==typeof s?"innerHTML"===c?e.innerHTML=s.toString():n?e.setAttributeNS(null,c,s.toString()):e.setAttribute(c,s.toString()):"on"===c.slice(0,2)?"function"==typeof s&&e.addEventListener(c.slice(2).toLowerCase(),s):void 0!==s&&console.warn("WARN: Code 7. See ".concat(u.default,". Params: ").concat(o(s),", ").concat(c))}},f=function(e){var t,n=[],l=a(e);try{for(l.s();!(t=l.n()).done;){var i=t.value;"object"===o(i)&&i instanceof Array?n.push.apply(n,r(f(i))):n.push(i)}}catch(e){l.e(e)}finally{l.f()}return n},m=function(e,t){if(null!=t)if(t instanceof Array){var n,r=a(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;m(e,o)}}catch(e){r.e(e)}finally{r.f()}}else"string"==typeof t||"number"==typeof t?e.innerText=t.toString():e.appendChild(t)};function d(e,t,n){for(var o=n,l=arguments.length,a=Array(3<l?l-3:0),i=3;i<l;i++)a[i-3]=arguments[i];if(n&&a&&(o=n instanceof Array?[].concat(r(f(n)),r(f(a))):[n].concat(r(f(a)))),"string"==typeof e){var c=document.createElement(e);return s(c,t),m(c,o),c}return"function"==typeof e?e(t,o):Error("tagNameOrComponent is of invalid type.")}t.createElement=d,t.default=d},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){var r=n(1);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t,n){var r=n(4),o=n(5),l=n(2),a=n(6);e.exports=function(e){return r(e)||o(e)||l(e)||a()}},function(e,t,n){var r=n(1);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){var r=n(9),o=n(10),l=n(2),a=n(11);e.exports=function(e,t){return r(e)||o(e,t)||l(e,t)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw l}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file share functions and types for createElement and it's variants
 */Object.defineProperty(t,"__esModule",{value:!0}),t.url=void 0,t.url="https://luke-zhang-04.github.io/DeStagnate/error-codes",t.default=t.url},function(e,t,n){"use strict";n.r(t);var r,o=n(0),l={target:"_blank",rel:"noopener noreferrer"},a=function(){return o.createElement("div",{class:"col-md-3 mt-md-0 mt-3 px-5"},o.createElement("h5",{class:"text-uppercase d-block text-center"},"Luke Zhang"),o.createElement("img",{class:"w-md-100 w-sm-50",src:"/images/logo-light.png"}))},i=function(){return o.createElement("div",{class:"col-md-3 mb-md-0 mb-3"},o.createElement("h5",{class:"text-uppercase"},"Nav"),o.createElement("ul",{class:"list-unstyled"},o.createElement("li",null,o.createElement("a",{href:"/"},"Home")),o.createElement("li",null,o.createElement("a",{href:"/portfolio.html"},"Portfolio")),o.createElement("li",null,o.createElement("a",Object.assign({href:"https://rebrand.ly/luke-zhang-resume"},l),"Resume")),o.createElement("li",null,o.createElement("a",{href:"/contact.html"},"Contact"))))},c=function(){return o.createElement("div",{class:"col-md-3 mb-md-0 mb-3"},o.createElement("h5",{class:"text-uppercase"},"Profiles"),o.createElement("ul",{class:"list-unstyled"},o.createElement("li",null,o.createElement("a",Object.assign({href:"https://github.com/Luke-zhang-04"},l),"GitHub")),o.createElement("li",null,o.createElement("a",Object.assign({href:"mailto:Luke.zhang2004@gmail.com"},l),"Email")),o.createElement("li",null,o.createElement("a",Object.assign({href:"https://pypi.org/user/Luke-zhang-04/"},l),"PyPi")),o.createElement("li",null,o.createElement("a",Object.assign({href:"https://www.linkedin.com/in/luke-zhang-1b8a89198/"},l),"Linkedin")),o.createElement("li",null,o.createElement("a",Object.assign({href:"https://twitter.com/Luke_zhang_04"},l),"Twitter")),o.createElement("li",null,o.createElement("a",Object.assign({href:"https://stackoverflow.com/users/12370337/luke-zhang-04"},l),"Stackoverflow")),o.createElement("li",null,o.createElement("a",Object.assign({href:"https://www.npmjs.com/~luke-zhang-04"},l),"NPM"))))},u=function(){return[o.createElement("div",{class:"container-fluid text-center blue text-light text-md-left"},o.createElement("div",{class:"row"},o.createElement(a,null),o.createElement("div",{class:"col-md-3"}),o.createElement("hr",{class:"clearfix w-50 d-md-none pb-3"}),o.createElement(i,null),o.createElement(c,null))),o.createElement("div",{class:"footer-copyright text-center py-3"},"Copyright © 2020: Luke Zhang")]};
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
r=o.createElement("div",{class:"page-footer font-small blue pt-4 bg-dark"},u()),document.body.appendChild(r),function(){var e=document.querySelector("#navbar .navbar-toggler"),t=document.getElementById("navbarNav");null==e||e.addEventListener("click",(function(){var n,r;(null==t?void 0:t.classList.contains("active"))?(null==t||t.classList.remove("active"),null==e||e.classList.remove("open"),null===(n=null==e?void 0:e.querySelector(".burger"))||void 0===n||n.classList.remove("open")):(null==t||t.classList.add("active"),null==e||e.classList.add("open"),null===(r=null==e?void 0:e.querySelector(".burger"))||void 0===r||r.classList.add("open"))}))}()}])}));
