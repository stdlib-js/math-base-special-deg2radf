// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,e="function"==typeof a?a.toStringTag:"";var l=o&&"symbol"==typeof Symbol.toStringTag?function(t){var o,a,l,f,u;if(null==t)return r.call(t);a=t[e],u=e,o=null!=(f=t)&&n.call(f,u);try{t[e]=void 0}catch(o){return r.call(t)}return l=r.call(t),o?t[e]=a:delete t[e],l}:function(t){return r.call(t)},f="function"==typeof Float32Array;var u=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var c="function"==typeof Float32Array?Float32Array:void 0;var i=new(function(){var t,o,r;if("function"!=typeof y)return!1;try{o=new y([1,3.14,-3.14,5e40]),r=o,t=(f&&r instanceof Float32Array||"[object Float32Array]"===l(r))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===u}catch(o){t=!1}return t}()?c:function(){throw new Error("not implemented")})(1);var p="function"==typeof t?t:function(t){return i[0]=t,i[0]},v=p(.017453292519943295);function b(t){return p(p(t)*v)}export{b as default};
//# sourceMappingURL=mod.js.map
