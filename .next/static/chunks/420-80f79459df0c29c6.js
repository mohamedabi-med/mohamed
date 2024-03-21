"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[420],{8954:function(e,t,n){n.d(t,{BH:function(){return w},DV:function(){return M},Dv:function(){return Z},GJ:function(){return j},L:function(){return d},LL:function(){return L},Sg:function(){return E},UI:function(){return F},US:function(){return c},Wj:function(){return $},Wl:function(){return B},Yr:function(){return A},ZB:function(){return g},ZR:function(){return N},aH:function(){return y},b$:function(){return S},cI:function(){return R},dS:function(){return G},eu:function(){return O},g5:function(){return o},gK:function(){return K},gQ:function(){return U},h$:function(){return u},hl:function(){return I},hu:function(){return a},jU:function(){return C},lb:function(){return Y},m9:function(){return X},ne:function(){return z},p$:function(){return p},r3:function(){return x},uI:function(){return D},ug:function(){return q},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let a of r){if(!i.includes(a))return!1;let r=t[a],o=n[a];if(W(r)&&W(o)){if(!e(r,o))return!1}else if(r!==o)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},w9:function(){return k},xO:function(){return H},xb:function(){return V}});var r=n(9079);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw o(t)},o=function(e){return Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},l=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{let a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,c=i>>2,h=(3&i)<<4|o>>4,u=(15&o)<<2|l>>6,d=63&l;s||(d=64,a||(u=64)),r.push(n[c],n[h],n[u],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):l(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,s=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==s)throw new h;let l=i<<2|a>>4;if(r.push(l),64!==o){let e=a<<4&240|o>>2;if(r.push(e),64!==s){let e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let u=function(e){let t=s(e);return c.encodeByteArray(t,!0)},d=function(e){return u(e).replace(/\./g,"")},f=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e){return g(void 0,e)}function g(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(let n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=g(e[n],t[n]));return e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m=()=>("undefined"!=typeof self?self:window).__FIREBASE_DEFAULTS__,b=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},v=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&f(e[1]);return t&&JSON.parse(t)},_=()=>{try{return m()||b()||v()}catch(e){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e));return}},y=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[d(JSON.stringify({alg:"none",type:"JWT"})),d(JSON.stringify(a)),""].join(".")}function D(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function C(){return"object"==typeof self&&self.self===self}function S(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function A(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function I(){try{return"object"==typeof indexedDB}catch(e){return!1}}function O(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{create(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?o.replace(T,(e,t)=>{let n=i[t];return null!=n?String(n):"<".concat(t,"?>")}):"Error",l="".concat(this.serviceName,": ").concat(s," (").concat(a,").");return new N(a,l,i)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}let T=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return JSON.parse(e)}function B(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P=function(e){let t={},n={},r={},i="";try{let a=e.split(".");t=R(f(a[0])||""),n=R(f(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},k=function(e){let t=P(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},j=function(e){let t=P(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function V(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function F(e,t,n){let r={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function W(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let n,r;t||(t=0);let i=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)i[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)i[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=i[e-3]^i[e-8]^i[e-14]^i[e-16];i[e]=(t<<1|t>>>31)&4294967295}let a=this.chain_[0],o=this.chain_[1],s=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(s^l),r=1518500249):(n=o^s^l,r=1859775393):e<60?(n=o&s|l&(o|s),r=2400959708):(n=o^s^l,r=3395469782);let t=(a<<5|a>>>27)+n+c+r+i[e]&4294967295;c=l,l=s,s=(o<<30|o>>>2)&4294967295,o=a,a=t}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;for(;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++a,++r,a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function z(e,t){let n=new Q(e,t);return n.subscribe.bind(n)}class Q{next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=J),void 0===r.error&&(r.error=J),void 0===r.complete&&(r.complete=J);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}}function J(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i)throw Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")};function K(e,t){return"".concat(e," failed: ").concat(t," argument ")}function $(e,t,n,r){if((!r||n)&&"function"!=typeof n)throw Error(K(e,t)+"must be a valid function.")}function Y(e,t,n,r){if((!r||n)&&("object"!=typeof n||null===n))throw Error(K(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){let t=i-55296;a(++r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:(i<65536?t[n++]=i>>12|224:(t[n++]=i>>18|240,t[n++]=i>>12&63|128),t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},q=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){return e&&e._delegate?e._delegate:e}},9079:function(e,t,n){var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(3127)},3127:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l=[],c=!1,h=-1;function u(){c&&r&&(c=!1,r.length?l=r.concat(l):h=-1,l.length&&d())}function d(){if(!c){var e=s(u);c=!0;for(var t=l.length;t;){for(r=l,l=[];++h<t;)r&&r[h].run();h=-1,t=l.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||c||s(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},o=!0;try{t[e](a,a.exports,r),o=!1}finally{o&&delete n[e]}return a.exports}r.ab="//";var i=r(229);e.exports=i}()},2110:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},342:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(8954),i=n(6574),a=n(5723),o=n(9858);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,a.deleteApp)(this._delegate)))}_getService(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a._DEFAULT_ENTRY_NAME;this._delegate.checkDestroyed();let r=this._delegate.container.getProvider(e);return r.isInitialized()||(null===(t=r.getComponent())||void 0===t?void 0:t.instantiationMode)!=="EXPLICIT"||r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a._DEFAULT_ENTRY_NAME;this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,a._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,a._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,(0,a._addComponent)(e,new i.wA("app-compat",()=>this,"PUBLIC")),this.container=e.container}}let l=new r.LL("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),c=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t={},n={__esModule:!0,initializeApp:function(i){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=a.initializeApp(i,o);if((0,r.r3)(t,s.name))return t[s.name];let l=new e(s,n);return t[s.name]=l,l},app:i,registerVersion:a.registerVersion,setLogLevel:a.setLogLevel,onLog:a.onLog,apps:null,SDK_VERSION:a.SDK_VERSION,INTERNAL:{registerComponent:function(t){let o=t.name,s=o.replace("-compat","");if(a._registerComponent(t)&&"PUBLIC"===t.type){let a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i();if("function"!=typeof e[s])throw l.create("invalid-app-argument",{appName:o});return e[s]()};void 0!==t.serviceProps&&(0,r.ZB)(a,t.serviceProps),n[s]=a,e.prototype[s]=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return this._getService.bind(this,o).apply(this,t.multipleInstances?n:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:a}};function i(e){if(e=e||a._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),i.App=e,n}(s);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,r.ZB)(t,e)},createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),t}(),h=new o.Yd("@firebase/app-compat");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){h.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");let e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&h.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}let u=c;(0,a.registerVersion)("@firebase/app-compat","0.2.29",void 0)},5723:function(e,t,n){let r,i;n.r(t),n.d(t,{FirebaseError:function(){return l.ZR},SDK_VERSION:function(){return M},_DEFAULT_ENTRY_NAME:function(){return A},_addComponent:function(){return L},_addOrOverwriteComponent:function(){return T},_apps:function(){return O},_clearComponents:function(){return k},_components:function(){return N},_getProvider:function(){return B},_registerComponent:function(){return R},_removeServiceInstance:function(){return P},deleteApp:function(){return H},getApp:function(){return F},getApps:function(){return W},initializeApp:function(){return V},onLog:function(){return z},registerVersion:function(){return U},setLogLevel:function(){return Q}});var a,o=n(6574),s=n(9858),l=n(8954);let c=(e,t)=>t.some(t=>e instanceof t),h=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(m(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(b(this),n),m(h.get(this))}:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return m(t.apply(b(this),n))}:function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];let a=t.call(b(this),e,...r);return d.set(a,e.sort?e.sort():[e]),m(a)}:(t instanceof IDBTransaction&&function(e){if(u.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});u.set(e,t)}(t),c(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return n!==e&&(f.set(e,n),p.set(n,e)),n}let b=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],y=new Map;function w(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(y.get(t))return y.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(n)))return;let a=async function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];let s=this.transaction(e,i?"readwrite":"readonly"),l=s.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&s.done]))[0]};return y.set(t,a),a}g={...a=g,get:(e,t,n)=>w(e,t)||a.get(e,t,n),has:(e,t)=>!!w(e,t)||a.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}}).filter(e=>e).join(" ")}constructor(e){this.container=e}}let D="@firebase/app",C="0.9.29",S=new s.Yd("@firebase/app"),A="[DEFAULT]",I={[D]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},O=new Map,N=new Map;function L(e,t){try{e.container.addComponent(t)}catch(n){S.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function T(e,t){e.container.addOrOverwriteComponent(t)}function R(e){let t=e.name;if(N.has(t))return S.debug("There were multiple attempts to register component ".concat(t,".")),!1;for(let n of(N.set(t,e),O.values()))L(n,e);return!0}function B(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function P(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:A;B(e,t).clearInstance(n)}function k(){N.clear()}let j=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw j.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let M="10.9.0";function V(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:A,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw j.create("bad-app-name",{appName:String(i)});if(n||(n=(0,l.aH)()),!n)throw j.create("no-options");let a=O.get(i);if(a){if((0,l.vZ)(n,a.options)&&(0,l.vZ)(r,a.config))return a;throw j.create("duplicate-app",{appName:i})}let s=new o.H0(i);for(let e of N.values())s.addComponent(e);let c=new x(n,r,s);return O.set(i,c),c}function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=O.get(e);if(!t&&e===A&&(0,l.aH)())return V();if(!t)throw j.create("no-app",{appName:e});return t}function W(){return Array.from(O.values())}async function H(e){let t=e.name;O.has(t)&&(O.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function U(e,t,n){var r;let i=null!==(r=I[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));let a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){let e=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];a&&e.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&s&&e.push("and"),s&&e.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),S.warn(e.join(" "));return}R(new o.wA("".concat(i,"-version"),()=>({library:i,version:t}),"VERSION"))}function z(e,t){if(null!==e&&"function"!=typeof e)throw j.create("invalid-log-argument");(0,s.Am)(e,t)}function Q(e){(0,s.Ub)(e)}let J="firebase-heartbeat-store",Z=null;function K(){return Z||(Z=(function(e,t){let{blocked:n,upgrade:r,blocking:i,terminated:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=indexedDB.open(e,1),s=m(o);return r&&o.addEventListener("upgradeneeded",e=>{r(m(o.result),e.oldVersion,e.newVersion,m(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(J)}catch(e){console.warn(e)}}}).catch(e=>{throw j.create("idb-open",{originalErrorMessage:e.message})})),Z}async function $(e){try{let t=(await K()).transaction(J),n=await t.objectStore(J).get(G(e));return await t.done,n}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=j.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}async function Y(e,t){try{let n=(await K()).transaction(J,"readwrite"),r=n.objectStore(J);await r.put(t,G(e)),await n.done}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=j.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}function G(e){return"".concat(e.name,"!").concat(e.options.appId)}class q{async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=X();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=X(),{heartbeatsToSend:n,unsentEntries:r}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),et(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),et(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,l.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ee(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}}function X(){return new Date().toISOString().substring(0,10)}class ee{async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await $(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return Y(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return Y(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function et(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}R(new o.wA("platform-logger",e=>new E(e),"PRIVATE")),R(new o.wA("heartbeat",e=>new q(e),"PRIVATE")),U(D,C,""),U(D,C,"esm2017"),U("fire-js","")},6574:function(e,t,n){n.d(t,{H0:function(){return s},wA:function(){return i},zt:function(){return o}});var r=n(8954);class i{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return this.instances.has(e)}getOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return this.instancesOptions.get(e)||{}}initialize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error("".concat(this.name,"(").concat(n,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService(e){let{instanceIdentifier:t,options:n={}}=e,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:t===a?void 0:t,options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(e){}return r||null}normalizeInstanceIdentifier(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}},9858:function(e,t,n){var r,i;n.d(t,{Am:function(){return d},Ub:function(){return u},Yd:function(){return h},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},s=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(t<e.logLevel)return;let a=new Date().toISOString(),o=l[t];if(o)console[o]("[".concat(a,"]  ").concat(e.name,":"),...r);else throw Error("Attempted to log a message with an invalid logType (value: ".concat(t,")"))};class h{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,a.push(this)}}function u(e){a.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(let n of a){let i=null;t&&t.level&&(i=o[t.level]),null===e?n.userLogHandler=null:n.userLogHandler=function(t,n){for(var a=arguments.length,o=Array(a>2?a-2:0),s=2;s<a;s++)o[s-2]=arguments[s];let l=o.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:l,args:o,type:t.name})}}}},6130:function(e,t,n){n.d(t,{f:function(){return h}});var r=n(2110),i=n(4090);n(9542);let a=(0,i.forwardRef)((e,t)=>{let{children:n,...a}=e,s=i.Children.toArray(n),c=s.find(l);if(c){let e=c.props.children,n=s.map(t=>t!==c?t:i.Children.count(e)>1?i.Children.only(null):(0,i.isValidElement)(e)?e.props.children:null);return(0,i.createElement)(o,(0,r.Z)({},a,{ref:t}),(0,i.isValidElement)(e)?(0,i.cloneElement)(e,void 0,n):null)}return(0,i.createElement)(o,(0,r.Z)({},a,{ref:t}),n)});a.displayName="Slot";let o=(0,i.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,i.isValidElement)(n)?(0,i.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];a(...t),i(...t)}:i&&(n[r]=i):"style"===r?n[r]={...i,...a}:"className"===r&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}(t,n.ref):n.ref}):i.Children.count(n)>1?i.Children.only(null):null});o.displayName="SlotClone";let s=e=>{let{children:t}=e;return(0,i.createElement)(i.Fragment,null,t)};function l(e){return(0,i.isValidElement)(e)&&e.type===s}let c=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,i.forwardRef)((e,n)=>{let{asChild:o,...s}=e,l=o?a:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(l,(0,r.Z)({},s,{ref:n}))});return n.displayName="Primitive.".concat(t),{...e,[t]:n}},{}),h=(0,i.forwardRef)((e,t)=>(0,i.createElement)(c.label,(0,r.Z)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},6093:function(e,t,n){n.d(t,{_:function(){return r}});function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},7447:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(342);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */r.Z.registerVersion("firebase","10.9.0","app-compat")},7853:function(e,t,n){var r,i=n(342),a=n(6574),o=n(3363),s=n(8954);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l=new(n(9858)).Yd("@firebase/database-compat"),c=function(e){l.warn("FIREBASE WARNING: "+e)},h=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!=typeof n)throw Error((0,s.gK)(e,t)+"must be a boolean.")},u=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw Error((0,s.gK)(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{cancel(e){(0,s.Dv)("OnDisconnect.cancel",0,1,arguments.length),(0,s.Wj)("OnDisconnect.cancel","onComplete",e,!0);let t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){(0,s.Dv)("OnDisconnect.remove",0,1,arguments.length),(0,s.Wj)("OnDisconnect.remove","onComplete",e,!0);let t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){(0,s.Dv)("OnDisconnect.set",1,2,arguments.length),(0,s.Wj)("OnDisconnect.set","onComplete",t,!0);let n=this._delegate.set(e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){(0,s.Dv)("OnDisconnect.setWithPriority",2,3,arguments.length),(0,s.Wj)("OnDisconnect.setWithPriority","onComplete",n,!0);let r=this._delegate.setWithPriority(e,t);return n&&r.then(()=>n(null),e=>n(e)),r}update(e,t){if((0,s.Dv)("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){let t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,c("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,s.Wj)("OnDisconnect.update","onComplete",t,!0);let n=this._delegate.update(e);return t&&n.then(()=>t(null),e=>t(e)),n}constructor(e){this._delegate=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{toJSON(){return(0,s.Dv)("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}constructor(e,t){this.committed=e,this.snapshot=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{val(){return(0,s.Dv)("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return(0,s.Dv)("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return(0,s.Dv)("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return(0,s.Dv)("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return(0,s.Dv)("DataSnapshot.child",0,1,arguments.length),e=String(e),(0,o.FQ)("DataSnapshot.child","path",e,!1),new p(this._database,this._delegate.child(e))}hasChild(e){return(0,s.Dv)("DataSnapshot.hasChild",1,1,arguments.length),(0,o.FQ)("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return(0,s.Dv)("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return(0,s.Dv)("DataSnapshot.forEach",1,1,arguments.length),(0,s.Wj)("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new p(this._database,t)))}hasChildren(){return(0,s.Dv)("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return(0,s.Dv)("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return(0,s.Dv)("DataSnapshot.ref",0,0,arguments.length),new m(this._database,this._delegate.ref)}get ref(){return this.getRef()}constructor(e,t){this._database=e,this._delegate=t}}class g{on(e,t,n,r){var i;(0,s.Dv)("Query.on",2,4,arguments.length),(0,s.Wj)("Query.on","callback",t,!1);let a=g.getCancelAndContextArgs_("Query.on",n,r),l=(e,n)=>{t.call(a.context,new p(this.database,e),n)};l.userCallback=t,l.context=a.context;let c=null===(i=a.cancel)||void 0===i?void 0:i.bind(a.context);switch(e){case"value":return(0,o.jM)(this._delegate,l,c),t;case"child_added":return(0,o.yv)(this._delegate,l,c),t;case"child_removed":return(0,o.MQ)(this._delegate,l,c),t;case"child_changed":return(0,o.Jr)(this._delegate,l,c),t;case"child_moved":return(0,o.Vt)(this._delegate,l,c),t;default:throw Error((0,s.gK)("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if((0,s.Dv)("Query.off",0,3,arguments.length),u("Query.off",e,!0),(0,s.Wj)("Query.off","callback",t,!0),(0,s.lb)("Query.off","context",n,!0),t){let r=()=>{};r.userCallback=t,r.context=n,(0,o.S1)(this._delegate,e,r)}else(0,o.S1)(this._delegate,e)}get(){return(0,o.U2)(this._delegate).then(e=>new p(this.database,e))}once(e,t,n,r){(0,s.Dv)("Query.once",1,4,arguments.length),(0,s.Wj)("Query.once","callback",t,!0);let i=g.getCancelAndContextArgs_("Query.once",n,r),a=new s.BH,l=(e,n)=>{let r=new p(this.database,e);t&&t.call(i.context,r,n),a.resolve(r)};l.userCallback=t,l.context=i.context;let c=e=>{i.cancel&&i.cancel.call(i.context,e),a.reject(e)};switch(e){case"value":(0,o.jM)(this._delegate,l,c,{onlyOnce:!0});break;case"child_added":(0,o.yv)(this._delegate,l,c,{onlyOnce:!0});break;case"child_removed":(0,o.MQ)(this._delegate,l,c,{onlyOnce:!0});break;case"child_changed":(0,o.Jr)(this._delegate,l,c,{onlyOnce:!0});break;case"child_moved":(0,o.Vt)(this._delegate,l,c,{onlyOnce:!0});break;default:throw Error((0,s.gK)("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise}limitToFirst(e){return(0,s.Dv)("Query.limitToFirst",1,1,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.Kk)(e)))}limitToLast(e){return(0,s.Dv)("Query.limitToLast",1,1,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.vh)(e)))}orderByChild(e){return(0,s.Dv)("Query.orderByChild",1,1,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.g2)(e)))}orderByKey(){return(0,s.Dv)("Query.orderByKey",0,0,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.R)()))}orderByPriority(){return(0,s.Dv)("Query.orderByPriority",0,0,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.HE)()))}orderByValue(){return(0,s.Dv)("Query.orderByValue",0,0,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.Bd)()))}startAt(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return(0,s.Dv)("Query.startAt",0,2,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.e0)(e,t)))}startAfter(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return(0,s.Dv)("Query.startAfter",0,2,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.TQ)(e,t)))}endAt(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return(0,s.Dv)("Query.endAt",0,2,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.Wu)(e,t)))}endBefore(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return(0,s.Dv)("Query.endBefore",0,2,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.Lx)(e,t)))}equalTo(e,t){return(0,s.Dv)("Query.equalTo",1,2,arguments.length),new g(this.database,(0,o.IO)(this._delegate,(0,o.EW)(e,t)))}toString(){return(0,s.Dv)("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return(0,s.Dv)("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if((0,s.Dv)("Query.isEqual",1,1,arguments.length),!(e instanceof g))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){let r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,(0,s.Wj)(e,"cancel",r.cancel,!0),r.context=n,(0,s.lb)(e,"context",r.context,!0);else if(t){if("object"==typeof t&&null!==t)r.context=t;else if("function"==typeof t)r.cancel=t;else throw Error((0,s.gK)(e,"cancelOrContext")+" must either be a cancel callback or a context object.")}return r}get ref(){return new m(this.database,new o.tn(this._delegate._repo,this._delegate._path))}constructor(e,t){this.database=e,this._delegate=t}}class m extends g{getKey(){return(0,s.Dv)("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return(0,s.Dv)("Reference.child",1,1,arguments.length),"number"==typeof e&&(e=String(e)),new m(this.database,(0,o.iU)(this._delegate,e))}getParent(){(0,s.Dv)("Reference.parent",0,0,arguments.length);let e=this._delegate.parent;return e?new m(this.database,e):null}getRoot(){return(0,s.Dv)("Reference.root",0,0,arguments.length),new m(this.database,this._delegate.root)}set(e,t){(0,s.Dv)("Reference.set",1,2,arguments.length),(0,s.Wj)("Reference.set","onComplete",t,!0);let n=(0,o.t8)(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}update(e,t){if((0,s.Dv)("Reference.update",1,2,arguments.length),Array.isArray(e)){let t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,c("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}(0,o.mI)("Reference.update",this._delegate._path),(0,s.Wj)("Reference.update","onComplete",t,!0);let n=(0,o.Vx)(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){(0,s.Dv)("Reference.setWithPriority",2,3,arguments.length),(0,s.Wj)("Reference.setWithPriority","onComplete",n,!0);let r=(0,o.cy)(this._delegate,e,t);return n&&r.then(()=>n(null),e=>n(e)),r}remove(e){(0,s.Dv)("Reference.remove",0,1,arguments.length),(0,s.Wj)("Reference.remove","onComplete",e,!0);let t=(0,o.Od)(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,n){(0,s.Dv)("Reference.transaction",1,3,arguments.length),(0,s.Wj)("Reference.transaction","transactionUpdate",e,!1),(0,s.Wj)("Reference.transaction","onComplete",t,!0),h("Reference.transaction","applyLocally",n,!0);let r=(0,o.i3)(this._delegate,e,{applyLocally:n}).then(e=>new f(e.committed,new p(this.database,e.snapshot)));return t&&r.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),r}setPriority(e,t){(0,s.Dv)("Reference.setPriority",1,2,arguments.length),(0,s.Wj)("Reference.setPriority","onComplete",t,!0);let n=(0,o.Sl)(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}push(e,t){(0,s.Dv)("Reference.push",0,2,arguments.length),(0,s.Wj)("Reference.push","onComplete",t,!0);let n=(0,o.VF)(this._delegate,e),r=n.then(e=>new m(this.database,e));t&&r.then(()=>t(null),e=>t(e));let i=new m(this.database,n);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return(0,o.mI)("Reference.onDisconnect",this._delegate._path),new d(new o.vA(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}constructor(e,t){super(e,new o.JH(t._repo,t._path,new o.G$,!1)),this.database=e,this._delegate=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{useEmulator(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,o.dH)(this._delegate,e,t,n)}ref(e){return((0,s.Dv)("database.ref",0,1,arguments.length),e instanceof m)?new m(this,(0,o.qT)(this._delegate,e.toString())):new m(this,(0,o.iH)(this._delegate,e))}refFromURL(e){return(0,s.Dv)("database.refFromURL",1,1,arguments.length),new m(this,(0,o.qT)(this._delegate,e))}goOffline(){return(0,s.Dv)("database.goOffline",0,0,arguments.length),(0,o.Sb)(this._delegate)}goOnline(){return(0,s.Dv)("database.goOnline",0,0,arguments.length),(0,o.$o)(this._delegate)}constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:o.TD,forceLongPolling:o.Ot}}}b.ServerValue={TIMESTAMP:(0,o.Bt)(),increment:e=>(0,o.nP)(e)};var v=Object.freeze({__proto__:null,initStandalone:function(e){let t,{app:n,url:r,version:i,customAuthImpl:s,customAppCheckImpl:l,namespace:c,nodeAdmin:h=!1}=e;(0,o.AM)(i);let u=new a.H0("database-standalone"),d=new a.zt("auth-internal",u);return d.setComponent(new a.wA("auth-internal",()=>s,"PRIVATE")),l&&(t=new a.zt("app-check-internal",u)).setComponent(new a.wA("app-check-internal",()=>l,"PRIVATE")),{instance:new b((0,o.wj)(n,d,t,r,h),n),namespace:c}}});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _=b.ServerValue;(r=i.Z).INTERNAL.registerComponent(new a.wA("database-compat",(e,t)=>{let{instanceIdentifier:n}=t,r=e.getProvider("app-compat").getImmediate();return new b(e.getProvider("database").getImmediate({identifier:n}),r)},"PUBLIC").setServiceProps({Reference:m,Query:g,Database:b,DataSnapshot:p,enableLogging:o.U7,INTERNAL:v,ServerValue:_}).setMultipleInstances(!0)),r.registerVersion("@firebase/database-compat","1.0.3")},7996:function(e,t,n){n.d(t,{Y:function(){return a}});var r=n(9631),i=n(2702);function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];let o=e.length;return(0,r.N)(n.filter(i.i),function(){let t="";for(let r=0;r<o;r++){t+=e[r];let a=n[r];a&&(t+=(0,i.i)(a)?a.get():a)}return t})}}}]);