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
 */ !function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.general=n():e.general=n()}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});
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
var o,l,i,a=r(t(1)),s=r(t(2));o=a.default("footer",{class:"page-footer font-small blue pt-4 bg-dark"}),document.body.appendChild(o),o.innerHTML=s.default,l=document.querySelector("#navbar .navbar-toggler"),i=document.getElementById("navbarNav"),null==l||l.addEventListener("click",(function(){var e,n;(null==i?void 0:i.classList.contains("active"))?(null==i||i.classList.remove("active"),null==l||l.classList.remove("open"),null===(e=null==l?void 0:l.querySelector(".burger"))||void 0===e||e.classList.remove("open")):(null==i||i.classList.add("active"),null==l||l.classList.add("open"),null===(n=null==l?void 0:l.querySelector(".burger"))||void 0===n||n.classList.add("open"))}))},function(e,n){
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createElement function for DOM manipulation
 */
Object.defineProperty(n,"__esModule",{value:!0}),n._bindChildren=n._unpackChildren=n._bindProps=void 0,n._bindProps=(e,n,t=!1)=>{if(n)for(const[r,o]of Object.entries(n))"string"==typeof o||"number"==typeof o?"innerHTML"===r?e.innerHTML=o.toString():t?e.setAttributeNS(null,r,o.toString()):e.setAttribute(r,o.toString()):"on"===r.slice(0,2)?"function"==typeof o&&e.addEventListener(r.slice(2).toLowerCase(),o):"ref"===r&&"object"==typeof o&&"current"in o?o.current=e:console.warn(`WARN: Invalid prop type "${typeof o}" for key "${r}". Skipping prop.`)},n._unpackChildren=e=>{const t=[];for(const r of e)"object"==typeof r&&r instanceof Array?t.push(...n._unpackChildren(r)):t.push(r);return t},n._bindChildren=(e,t)=>{if(t||0===t)if(t instanceof Array)for(const r of t)"string"==typeof r||"number"==typeof r?e.innerText=r.toString():"object"==typeof r&&r instanceof Array?n._unpackChildren(r).forEach(t=>n._bindChildren(e,t)):e.appendChild(r);else"string"==typeof t||"number"==typeof t?e.innerText=t.toString():e.appendChild(t)};n.default=(e,t,r,...o)=>{const l=document.createElement(e);n._bindProps(l,t);let i=r;return r&&o&&(i="object"==typeof r&&r instanceof Array?[...n._unpackChildren(r),...n._unpackChildren(o)]:[r,...n._unpackChildren(o)]),n._bindChildren(l,i),l}},function(e,n,t){"use strict";t.r(n),n.default='<div class="container-fluid text-center blue text-light text-md-left">\n  <div class="row">\n    <div class="col-md-3 mt-md-0 mt-3 px-5">\n      <h5 class="text-uppercase d-block text-center">Luke Zhang</h5>\n      <img class="w-md-100 w-sm-50" src="/images/logo-light.png"/>\n    </div>\n    <div class="col-md-3"></div> \n\n    <hr class="clearfix w-50 d-md-none pb-3"/>\n\n    <div class="col-md-3 mb-md-0 mb-3">\n\n      <h5 class="text-uppercase">Nav</h5>\n      <ul class="list-unstyled">\n        <li>\n          <a href="/">Home</a>\n        </li>\n        <li>\n          <a href="/portfolio.html">Portfolio</a>\n        </li>\n        <li>\n          <a href="https://rebrand.ly/luke-zhang-resume" target="_blank" rel="noopener noreferrer">Resume</a>\n        </li>\n        <li>\n          <a href="/contact.html">Contact</a>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class="col-md-3 mb-md-0 mb-3">\n      <h5 class="text-uppercase">Profiles</h5>\n\n      <ul class="list-unstyled">\n        <li>\n          <a href="https://github.com/Luke-zhang-04" target="_blank" ref="noopener noreferrer">\n            GitHub\n          </a>\n        </li>\n        <li>\n          <a href="mailto:Luke.zhang2004@gmail.com" target="_blank" ref="noopener noreferrer">\n            Email\n          </a>\n        </li>\n        <li>\n          <a href="https://pypi.org/user/Luke-zhang-04/" target="_blank" ref="noopener noreferrer">\n            PyPi\n          </a>\n        </li>\n        <li>\n          <a href="https://www.linkedin.com/in/luke-zhang-1b8a89198/" target="_blank" ref="noopener noreferrer">\n            Linkedin\n          </a>\n        </li>\n        <li>\n          <a href="https://twitter.com/Luke_zhang_04" target="_blank" ref="noopener noreferrer">\n            Twitter\n          </a>\n        </li>\n        <li>\n          <a href="https://stackoverflow.com/users/12370337/luke-zhang-04" target="_blank" ref="noopener noreferrer">\n            Stackoverflow\n          </a>\n        </li>\n        <li>\n          <a href="https://www.npmjs.com/~luke-zhang-04" target="_blank" ref="noopener noreferrer">\n            NPM\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class="footer-copyright text-center py-3">Copyright © 2020: Luke Zhang</div>\n'}])}));
