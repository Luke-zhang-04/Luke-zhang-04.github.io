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
 */ !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.portfolio=e():t.portfolio=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createElement function for DOM manipulation
 */var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e._bindChildren=e._unpackChildren=e._bindProps=void 0;const o=r(n(3));e._bindProps=(t,e,n=!1)=>{if(e)for(const[r,o]of Object.entries(e))"string"==typeof o||"number"==typeof o?"innerHTML"===r?t.innerHTML=o.toString():n?t.setAttributeNS(null,r,o.toString()):t.setAttribute(r,o.toString()):"on"===r.slice(0,2)?"function"==typeof o&&t.addEventListener(r.slice(2).toLowerCase(),o):"ref"===r&&"object"==typeof o&&"current"in o?o.current=t:console.warn(`WARN: Invalid prop type "${typeof o}" for key "${r}". Skipping prop.`)},e._unpackChildren=t=>{const n=[];for(const r of t)"object"==typeof r&&r instanceof Array?n.push(...e._unpackChildren(r)):n.push(r);return n},e._bindChildren=(t,n)=>{if(null!=n)if(n instanceof Array)for(const r of n)e._bindChildren(t,r);else if("string"==typeof n||"number"==typeof n)t.innerText=n.toString();else if(n instanceof o.default){if(!n.didMount&&t instanceof window.HTMLElement)return void n.mount(t);if(!(t instanceof window.HTMLElement))throw new Error("Cannot use non-HTMLElement as component parent");n.parent!==t&&(n.parent=t),n.forceUpdate()}else t.appendChild(n)};e.default=(t,n,r,...o)=>{const i=document.createElement(t);e._bindProps(i,n);let s=r;return r&&o&&(s=r instanceof Array?[...e._unpackChildren(r),...e._unpackChildren(o)]:[r,...e._unpackChildren(o)]),e._bindChildren(i,s),i}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e,n){"use strict";
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
 */var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Component=e.createRef=e.createElementNS=e.createElement=e.createDSComponent=void 0;const o=r(n(26)),i=r(n(4)),s=r(n(0)),a=r(n(5)),u=r(n(6));class c extends o.default{constructor(t,e,n=!1){super(),this.props=e,this._strict=!0,this._state={},this._didSetInitialState=!1,this._didMount=!1,this.getSnapshotBeforeUpdate=(t,e)=>[t,e],this.useStrict=()=>{this._strict=!0},this.disableStrict=()=>{this._strict=!1},this.forceUpdate=()=>{try{if(this.componentDidUpdate(),void 0===this._parent)throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),this._update(this._execRender())}catch(t){return this.componentDidCatch(t),t}},this.setState=t=>{try{if(this.componentWillUpdate(),void 0===this._parent)throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");this._strict&&this._checkKeys(t),this.getSnapshotBeforeUpdate(Object.assign({},this.props),Object.assign({},this.state)),Object.assign(this._state,t);const e=this.shouldComponentUpdate()?this._execRender():void 0;this._update(e)}catch(t){return this.componentDidCatch(t),t}},this.mountComponent=t=>{try{if(void 0!==t&&(this.parent=t),void 0===this._parent)throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");const e=this.render();if(this._didSetInitialState=!0,this.componentWillMount(),null===e)throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array");return this.bindEventListeners(this._parent),this._didMount=!0,this.componentDidMount(),"object"==typeof e&&e instanceof Array?e.map(t=>this._parent.appendChild(t)):this._parent.appendChild(e)}catch(t){return this.componentDidCatch(t),t}},this.mount=this.mountComponent,this.unmountComponent=()=>{try{if(void 0===this._parent)return void this.componentDidWarn("No parent was set. Component unmounted from nothing.");this.componentWillUnmount(),this.unbindEventListeners(this._parent),this._removeChildren(),this._didMount=!1}catch(t){this.componentDidCatch(t)}},this.unmount=this.unmountComponent,this._removeChildren=()=>{if(void 0===this._parent)throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");for(;this._parent.firstChild;)this._parent.lastChild&&this._parent.removeChild(this._parent.lastChild)},this._execRender=()=>(this._removeChildren(),this.render()),this._checkKeys=t=>{for(const e of Object.keys(t))Object.keys(this.state).includes(e)||this.componentDidWarn(`WARN: New key (${e}) should not be set with setState, which has keys ${JSON.stringify(Object.keys(this.state))}. Declare all state variables in constructor as a best practice. Did you misspell a key?`)},this._update=t=>{if("object"==typeof t&&t instanceof Array)for(const e of t)this._parent.appendChild(e);else t&&this._parent.appendChild(t);t&&this.componentDidUpdate()},t&&t.childElementCount>0&&!n&&this._strict&&this.componentDidCatch(new Error(`ERR: Avoid using this ${t.tagName.toLowerCase()} as element parent, as all elements within this ${t.tagName.toLowerCase()} will be removed on re-render. To disable this, pass in true as a third parameter`)),this._parent=t}get getState(){return this.state}get state(){return this._state}set state(t){this._didSetInitialState&&this._strict?(this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead.")),this.componentDidWarn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly"),this.setState(t)):(this._state=t,this._didSetInitialState=!0)}get getProps(){return this.props}set parent(t){t&&t.childElementCount>0&&this._strict&&this.componentDidWarn(`WARN: Avoid using this ${t.tagName.toLowerCase()} as element parent, as all elements within this ${t.tagName.toLowerCase()} will be removed on re-render. If this was intentional, turn strict off before setting parent.`),this._parent=t}get parent(){return this._parent}get didMount(){return this._didMount}}e.default=c,e.createDSComponent=i.default,e.createElement=s.default,e.createElementNS=a.default,e.createRef=u.default,e.Component=c},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createDSComponent add nested component for DeStagnate components
 */Object.defineProperty(e,"__esModule",{value:!0});e.default=(t,e,n)=>{const r=document.createElement("div");r.classList.add("DeStagnate-component-parent");const o=new t(r,e);return o.mount(),n&&(n.current=o),r}},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createElementNS createElement for namespaced elements
 */Object.defineProperty(e,"__esModule",{value:!0}),e.createElementNS=void 0;const r=n(0);e.createElementNS=(t,e,n,o,...i)=>{const s=document.createElementNS(t,e);r._bindProps(s,n,!0);let a=o;return o&&i&&(a="object"==typeof o&&o instanceof Array?[...r._unpackChildren(o),...r._unpackChildren(i)]:[o,...r._unpackChildren(i)]),r._bindChildren(s,a),s},e.default=e.createElementNS},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=()=>({current:null})},function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});
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
var o=r(n(8)),i=document.getElementById("root");i&&new o.default(i).mount()},function(t,e,n){"use strict";var r=n(9),o=r(n(10)),i=r(n(14)),s=r(n(18)),a=r(n(19)),u=r(n(21)),c=r(n(24));function l(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw i}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,c.default)(t);if(e){var o=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var p=Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]},h=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e},m=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&p(e,t,n);return h(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});
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
var y=m(n(25)),b=m(n(3)),_=function(t){(0,a.default)(n,t);var e=d(n);function n(t){var r;return(0,s.default)(this,n),(r=e.call(this,t)).componentDidMount=function(){y.firestore.collection("projects").orderBy("date","desc").get().then((function(t){t.forEach((function(t){var e=t.data().file,n=Object.assign(Object.assign({},t.data()),{imgUrl:"https://firebasestorage.googleapis.com/v0/b/luke-zhang.appspot.com/o/project_images%2F".concat(e,"?alt=media"),name:t.id});r.setState({projects:[].concat((0,i.default)(r.state.projects),[n])})}))}))},r.render=function(){return b.createElement("div",{class:"project-container"},r._groupProjects().map((function(t){return b.createElement("div",{class:"row project-row"},t.map((function(t){return r._project(t)})))})))},r._groupProjects=function(){var t,e=[],n=[],i=l(r.state.projects.entries());try{for(i.s();!(t=i.n()).done;){var s=(0,o.default)(t.value,2),a=s[0],u=s[1];n.push(u),(a+1)%4==0&&(e.push(n),n=[])}}catch(t){i.e(t)}finally{i.f()}return n.length>0&&e.push(n),e},r._project=function(t){var e=t.imgUrl;return b.createElement("div",{class:"col-sm-6 col-md-3 project-card",style:"background-image: url(".concat(e,")")})},r.state={projects:[]},r}return n}(b.default);e.default=_},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){var r=n(11),o=n(12),i=n(1),s=n(13);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||s()}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){var r=n(15),o=n(16),i=n(1),s=n(17);t.exports=function(t){return r(t)||o(t)||i(t)||s()}},function(t,e,n){var r=n(2);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(20);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){var r=n(22),o=n(23);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.firestore=e.auth=void 0;firebase.initializeApp({apiKey:"AIzaSyDKHbbyZoschUX1cMf5VdjRl9TtdIX1R9A",authDomain:"luke-zhang.firebaseapp.com",databaseURL:"https://luke-zhang.firebaseio.com",projectId:"luke-zhang",storageBucket:"luke-zhang.appspot.com",messagingSenderId:"309956853075",appId:"1:309956853075:web:ebb55b1076c4aca168f5a6"}),e.auth=firebase.auth(),e.firestore=firebase.firestore()},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports Preset
 * @package
 */var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(n(27)),i=r(n(4)),s=r(n(0)),a=r(n(5)),u=r(n(6));class c extends o.default{constructor(){super(...arguments),this.createDSComponent=i.default,this.createElement=s.default,this.createElementNS=a.default,this.createRef=u.default,this.componentDidCatch=t=>console.error(t),this.componentDidMount=()=>{},this.componentDidUpdate=()=>{},this.componentDidWarn=t=>console.warn(t),this.componentWillMount=()=>{},this.componentWillUnmount=()=>{},this.componentWillUpdate=()=>{},this.shouldComponentUpdate=()=>!0,this.render=()=>null}}e.default=c,c.createDSComponent=i.default,c.createElement=s.default,c.createElementNS=a.default,c.createRef=u.default},function(t,e,n){"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports Events
 * @package
 */Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.bindEventListeners=t=>{this._eventListener(t.addEventListener)},this.unbindEventListeners=t=>{this._eventListener(t.removeEventListener)},this.onFocus=()=>{},this.onBlur=()=>{},this.onFocusIn=()=>{},this.onFocusOut=()=>{},this.onAnimationStart=()=>{},this.onAnimationCancel=()=>{},this.onAnimationEnd=()=>{},this.onAnimationIteration=()=>{},this.onTransitionStart=()=>{},this.onTransitionCancel=()=>{},this.onTransitionEnd=()=>{},this.onTransitionRun=()=>{},this.onAuxClick=()=>{},this.onClick=()=>{},this.onDblClick=()=>{},this.onMouseDown=()=>{},this.onMouseEnter=()=>{},this.onMouseLeave=()=>{},this.onMouseMove=()=>{},this.onMouseOver=()=>{},this.onMouseOut=()=>{},this.onMouseUp=()=>{},this._eventListener=t=>{for(const[e,n]of Object.entries(this._events()))t(e,n)},this._events=()=>({focus:this.onFocus,blur:this.onBlur,focusin:this.onFocusIn,focusout:this.onFocusOut,animationstart:this.onAnimationStart,animationcancel:this.onAnimationCancel,animationend:this.onAnimationEnd,animationiteration:this.onAnimationIteration,transitionstart:this.onTransitionStart,transitioncancel:this.onTransitionCancel,transitionend:this.onTransitionEnd,transitionrun:this.onTransitionRun,auxclick:this.onAuxClick,click:this.onClick,dblclick:this.onDblClick,mousedown:this.onMouseDown,mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave,mousemove:this.onMouseMove,mouseover:this.onMouseOver,mouseout:this.onMouseOut,mouseup:this.onMouseUp})}}}])}));
