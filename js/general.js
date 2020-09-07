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
 */ !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.general=e():t.general=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createElement function for DOM manipulation
 */var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e._bindChildren=e._unpackChildren=e._bindProps=void 0;const o=i(n(5));e._bindProps=(t,e,n=!1)=>{if(e)for(const[i,o]of Object.entries(e))"string"==typeof o||"number"==typeof o?"innerHTML"===i?t.innerHTML=o.toString():n?t.setAttributeNS(null,i,o.toString()):t.setAttribute(i,o.toString()):"on"===i.slice(0,2)?"function"==typeof o&&t.addEventListener(i.slice(2).toLowerCase(),o):"ref"===i&&"object"==typeof o&&"current"in o?o.current=t:console.warn(`WARN: Invalid prop type "${typeof o}" for key "${i}". Skipping prop.`)},e._unpackChildren=t=>{const n=[];for(const i of t)"object"==typeof i&&i instanceof Array?n.push(...e._unpackChildren(i)):n.push(i);return n},e._bindChildren=(t,n)=>{if(null!=n)if(n instanceof Array)for(const i of n)e._bindChildren(t,i);else if("string"==typeof n||"number"==typeof n)t.innerText=n.toString();else if(n instanceof o.default){if(!n.didMount&&t instanceof window.HTMLElement)return void n.mount(t);if(!(t instanceof window.HTMLElement))throw new Error("Cannot use non-HTMLElement as component parent");n.parent!==t&&(n.parent=t),n.forceUpdate()}else t.appendChild(n)};e.default=(t,n,i,...o)=>{const r=document.createElement(t);e._bindProps(r,n);let s=i;return i&&o&&(s=i instanceof Array?[...e._unpackChildren(i),...e._unpackChildren(o)]:[i,...e._unpackChildren(o)]),e._bindChildren(r,s),r}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createDSComponent add nested component for DeStagnate components
 */Object.defineProperty(e,"__esModule",{value:!0});e.default=(t,e,n)=>{const i=document.createElement("div");i.classList.add("DeStagnate-component-parent");const o=new t(i,e);return o.mount(),n&&(n.current=o),i}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createElementNS createElement for namespaced elements
 */Object.defineProperty(e,"__esModule",{value:!0}),e.createElementNS=void 0;const i=n(0);e.createElementNS=(t,e,n,o,...r)=>{const s=document.createElementNS(t,e);i._bindProps(s,n,!0);let a=o;return o&&r&&(a="object"==typeof o&&o instanceof Array?[...i._unpackChildren(o),...i._unpackChildren(r)]:[o,...i._unpackChildren(r)]),i._bindChildren(s,a),s},e.default=e.createElementNS},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=()=>({current:null})},function(t,e,n){"use strict";var i=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});
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
var o,r,s,a=i(n(0)),l=i(n(8));o=a.default("footer",{class:"page-footer font-small blue pt-4 bg-dark"}),document.body.appendChild(o),o.innerHTML=l.default,r=document.querySelector("#navbar .navbar-toggler"),s=document.getElementById("navbarNav"),null==r||r.addEventListener("click",(function(){var t,e;(null==s?void 0:s.classList.contains("active"))?(null==s||s.classList.remove("active"),null==r||r.classList.remove("open"),null===(t=null==r?void 0:r.querySelector(".burger"))||void 0===t||t.classList.remove("open")):(null==s||s.classList.add("active"),null==r||r.classList.add("open"),null===(e=null==r?void 0:r.querySelector(".burger"))||void 0===e||e.classList.add("open"))}))},function(t,e,n){"use strict";
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
 */var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=e.createRef=e.createElementNS=e.createElement=e.createDSComponent=void 0;const o=i(n(6)),r=i(n(1)),s=i(n(0)),a=i(n(2)),l=i(n(3));class u extends o.default{constructor(t,e,n=!1){super(),this.props=e,this._strict=!0,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.getSnapshotBeforeUpdate=(t,e)=>[t,e],this.useStrict=()=>{this._strict=!0},this.disableStrict=()=>{this._strict=!1},this.forceUpdate=()=>{try{if(this.componentDidUpdate(),void 0===this._parent)throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this.componentDidCatch(t),t}},this.setState=t=>{try{if(this.componentWillUpdate(),void 0===this._parent)throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");this._strict&&this._checkKeys(t),this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,t);const e=this.shouldComponentUpdate()?this._execRender():void 0;this._update(e)}catch(t){return this.componentDidCatch(t),t}},this.mountComponent=t=>{try{if(void 0!==t&&(this.parent=t),void 0===this._parent)throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");const e=this.render();if(this._didSetInitialState=!0,this.componentWillMount(),null===e)throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array");return this.bindEventListeners(this._parent),this._didMount=!0,this.componentDidMount(),"object"==typeof e&&e instanceof Array?e.map(t=>this._parent.appendChild(t)):this._parent.appendChild(e)}catch(t){return this.componentDidCatch(t),t}},this.mount=this.mountComponent,this.unmountComponent=()=>{try{if(void 0===this._parent)return void this.componentDidWarn("No parent was set. Component unmounted from nothing.");this.componentWillUnmount(),this.unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this.componentDidCatch(t)}},this.unmount=this.unmountComponent,this._removeChildren=()=>{if(void 0===this._parent)throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)},this._execRender=()=>(this._removeChildren(),this.render()),this._checkKeys=t=>{for(const e of Object.keys(t))Object.keys(this.state).includes(e)||this.componentDidWarn(`WARN: New key (${e}) should not be set with setState, which has keys ${JSON.stringify(Object.keys(this.state))}. Declare all state variables in constructor as a best practice. Did you misspell a key?`)},this._update=t=>{if("object"==typeof t&&t instanceof Array)for(const e of t)this._parent.appendChild(e);else t&&this._parent.appendChild(t);t&&this.componentDidUpdate()},t&&t.childElementCount>0&&!n&&this._strict&&this.componentDidCatch(new Error(`ERR: Avoid using this ${t.tagName.toLowerCase()} as element parent, as all elements within this ${t.tagName.toLowerCase()} will be removed on re-render. To disable this, pass in true as a third parameter`)),this._parent=t}get getState(){return this.state}get state(){return this._state}set state(t){this._didSetInitialState&&this._strict?(this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead.")),this.componentDidWarn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly"),this.setState(t)):(this._state=t,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){t&&t.childElementCount>0&&this._strict&&this.componentDidWarn(`WARN: Avoid using this ${t.tagName.toLowerCase()} as element parent, as all elements within this ${t.tagName.toLowerCase()} will be removed on re-render. If this was intentional, turn strict off before setting parent.`),this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}}e.default=u,e.createDSComponent=r.default,e.createElement=s.default,e.createElementNS=a.default,e.createRef=l.default,e.Component=u},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports Preset
 * @package
 */var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=i(n(7)),r=i(n(1)),s=i(n(0)),a=i(n(2)),l=i(n(3));class u extends o.default{constructor(){super(...arguments),this.createDSComponent=r.default,this.createElement=s.default,this.createElementNS=a.default,this.createRef=l.default,this.componentDidCatch=t=>console.error(t),this.componentDidMount=()=>{},this.componentDidUpdate=()=>{},this.componentDidWarn=t=>console.warn(t),this.componentWillMount=()=>{},this.componentWillUnmount=()=>{},this.componentWillUpdate=()=>{},this.shouldComponentUpdate=()=>!0,this.render=()=>null}}e.default=u,u.createDSComponent=r.default,u.createElement=s.default,u.createElementNS=a.default,u.createRef=l.default},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports Events
 * @package
 */Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.bindEventListeners=t=>{this._eventListener(t.addEventListener)},this.unbindEventListeners=t=>{this._eventListener(t.removeEventListener)},this.onFocus=()=>{},this.onBlur=()=>{},this.onFocusIn=()=>{},this.onFocusOut=()=>{},this.onAnimationStart=()=>{},this.onAnimationCancel=()=>{},this.onAnimationEnd=()=>{},this.onAnimationIteration=()=>{},this.onTransitionStart=()=>{},this.onTransitionCancel=()=>{},this.onTransitionEnd=()=>{},this.onTransitionRun=()=>{},this.onAuxClick=()=>{},this.onClick=()=>{},this.onDblClick=()=>{},this.onMouseDown=()=>{},this.onMouseEnter=()=>{},this.onMouseLeave=()=>{},this.onMouseMove=()=>{},this.onMouseOver=()=>{},this.onMouseOut=()=>{},this.onMouseUp=()=>{},this._eventListener=t=>{for(const[e,n]of Object.entries(this._events()))t(e,n)},this._events=()=>({focus:this.onFocus,blur:this.onBlur,focusin:this.onFocusIn,focusout:this.onFocusOut,animationstart:this.onAnimationStart,animationcancel:this.onAnimationCancel,animationend:this.onAnimationEnd,animationiteration:this.onAnimationIteration,transitionstart:this.onTransitionStart,transitioncancel:this.onTransitionCancel,transitionend:this.onTransitionEnd,transitionrun:this.onTransitionRun,auxclick:this.onAuxClick,click:this.onClick,dblclick:this.onDblClick,mousedown:this.onMouseDown,mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave,mousemove:this.onMouseMove,mouseover:this.onMouseOver,mouseout:this.onMouseOut,mouseup:this.onMouseUp})}}},function(t,e,n){"use strict";n.r(e),e.default='<div class="container-fluid text-center blue text-light text-md-left">\n  <div class="row">\n    <div class="col-md-3 mt-md-0 mt-3 px-5">\n      <h5 class="text-uppercase d-block text-center">Luke Zhang</h5>\n      <img class="w-md-100 w-sm-50" src="/images/logo-light.png"/>\n    </div>\n    <div class="col-md-3"></div> \n\n    <hr class="clearfix w-50 d-md-none pb-3"/>\n\n    <div class="col-md-3 mb-md-0 mb-3">\n\n      <h5 class="text-uppercase">Nav</h5>\n      <ul class="list-unstyled">\n        <li>\n          <a href="/">Home</a>\n        </li>\n        <li>\n          <a href="/portfolio.html">Portfolio</a>\n        </li>\n        <li>\n          <a href="https://rebrand.ly/luke-zhang-resume" target="_blank" rel="noopener noreferrer">Resume</a>\n        </li>\n        <li>\n          <a href="/contact.html">Contact</a>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class="col-md-3 mb-md-0 mb-3">\n      <h5 class="text-uppercase">Profiles</h5>\n\n      <ul class="list-unstyled">\n        <li>\n          <a href="https://github.com/Luke-zhang-04" target="_blank" ref="noopener noreferrer">\n            GitHub\n          </a>\n        </li>\n        <li>\n          <a href="mailto:Luke.zhang2004@gmail.com" target="_blank" ref="noopener noreferrer">\n            Email\n          </a>\n        </li>\n        <li>\n          <a href="https://pypi.org/user/Luke-zhang-04/" target="_blank" ref="noopener noreferrer">\n            PyPi\n          </a>\n        </li>\n        <li>\n          <a href="https://www.linkedin.com/in/luke-zhang-1b8a89198/" target="_blank" ref="noopener noreferrer">\n            Linkedin\n          </a>\n        </li>\n        <li>\n          <a href="https://twitter.com/Luke_zhang_04" target="_blank" ref="noopener noreferrer">\n            Twitter\n          </a>\n        </li>\n        <li>\n          <a href="https://stackoverflow.com/users/12370337/luke-zhang-04" target="_blank" ref="noopener noreferrer">\n            Stackoverflow\n          </a>\n        </li>\n        <li>\n          <a href="https://www.npmjs.com/~luke-zhang-04" target="_blank" ref="noopener noreferrer">\n            NPM\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class="footer-copyright text-center py-3">Copyright © 2020: Luke Zhang</div>\n'}])}));
