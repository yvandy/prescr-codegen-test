(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{178:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},8479:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{UF:function(){return ye},ZP:function(){return nr}});var i=r(7294),s=r.t(i,2),c=r(178),l=r.n(c),d=r(3935);const u={prefix:Math.round(1e10*Math.random()),current:0},p=i.createContext(u);function f(e){let t=(0,i.useContext)(p),r=(0,i.useMemo)((()=>({prefix:t===u?0:++t.prefix,current:0})),[t]);return i.createElement(p.Provider,{value:r},e.children)}Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);"undefined"!==typeof window&&i.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let m=new Map,_=new Set;function v(){if("undefined"===typeof window)return;let e=t=>{let r=m.get(t.target);if(r&&(r.delete(t.propertyName),0===r.size&&(t.target.removeEventListener("transitioncancel",e),m.delete(t.target)),0===m.size)){for(let e of _)e();_.clear()}};document.body.addEventListener("transitionrun",(t=>{let r=m.get(t.target);r||(r=new Set,m.set(t.target,r),t.target.addEventListener("transitioncancel",e)),r.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?v():document.addEventListener("DOMContentLoaded",v));"undefined"!==typeof window&&window.visualViewport;new Map;function y(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function h(){return y(/^Mac/)}function b(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const g=i.createContext(null);g.displayName="PressResponderContext";let w=null,P=new Set,O=!1,A=!1,j=!1;function N(e,t){for(let r of P)r(e,t)}function S(e){A=!0,function(e){return!(e.metaKey||!h()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(w="keyboard",N("keyboard",e))}function x(e){w="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(A=!0,N("pointer",e))}function F(e){b(e)&&(A=!0,w="virtual")}function E(e){e.target!==window&&e.target!==document&&(A||j||(w="virtual",N("virtual",e)),A=!1,j=!1)}function C(){A=!1,j=!0}function k(){if("undefined"===typeof window||O)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){A=!0,e.apply(this,arguments)},document.addEventListener("keydown",S,!0),document.addEventListener("keyup",S,!0),document.addEventListener("click",F,!0),window.addEventListener("focus",E,!0),window.addEventListener("blur",C,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",x,!0),document.addEventListener("pointermove",x,!0),document.addEventListener("pointerup",x,!0)):(document.addEventListener("mousedown",x,!0),document.addEventListener("mousemove",x,!0),document.addEventListener("mouseup",x,!0)),O=!0}"undefined"!==typeof document&&("loading"!==document.readyState?k():document.addEventListener("DOMContentLoaded",k));new Set;const D=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];D.join(":not([hidden]),");D.push('[tabindex]:not([tabindex="-1"]):not([disabled])');D.join(':not([hidden]):not([tabindex="-1"]),');function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function Q(e){return null!=e}function H(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=n;o<i.length;o++){var s=i[o];s in e&&(t[s]=e[s])}return t}function U(e){for(var t={},r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=Object.keys(e);o<i.length;o++){var s=i[o];n.includes(s)||(t[s]=e[s])}return t}function V(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(0!==t.length)return function(e){for(var r,n=e,a=T(t);!(r=a()).done;){n=(0,r.value)(n)}return n}}var z="undefined"!==typeof window,B=Symbol("NONE"),J=z?i.useLayoutEffect:i.useEffect;function X(e,t,r){return Array.isArray(r)?i.createElement.apply(i,[e,t].concat(r)):r||"children"in t?i.createElement(e,t,r):i.createElement(e,t)}function R(e){for(var t=L({},e),r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];for(var o=0,i=n;o<i.length;o++)for(var s=i[o],c=0,l=Object.keys(s);c<l.length;c++){var d=l[c];t[d]=G(d,t[d],s[d])}return t}function W(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function q(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r,n=T(t);!(r=n()).done;){W(r.value,e)}}}function G(e,t,r){return t===B||r===B?null:null==t?r:null==r?t:"className"===e?l()(t,r):"style"===e?L({},t,r):"ref"===e?q(t,r):typeof t!==typeof r?r:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof r&&(e=r.apply(void 0,arguments)),e}:r}function Z(e,t,r,n){var a=t.children,o=M(t,["children"]),i=te(a,null!=r&&r);return X(e,L({ref:n},o),i)}function K(e,t){var r=e.as,n=e.hasGap;return Z(null!=r?r:"div",M(e,["as","hasGap"]),n,t)}var Y=(0,i.forwardRef)(K),$=function(e){return(0,i.forwardRef)((function(t,r){var n=t.hasGap,a=M(t,["hasGap"]);return Z(e,a,n,r)}))},ee=Object.assign(Y,{div:$("div"),a:$("a"),button:$("button"),h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6"),label:$("label"),form:$("form"),section:$("section"),head:$("head"),main:$("main"),nav:$("nav")});function te(e,t){var r=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?i.createElement.apply(s,["div",{className:r}].concat(e)):(0,i.createElement)("div",{className:r},e):null}function re(e,t,r,n){var a=ce(e),o=se(r,a.props);if("render"===a.type)return a.render(o,t);var s=t;"as"===a.type&&a.as&&(t===ee?o.as=a.as:s=a.as);var c=o.children;a.wrapChildren&&(c=a.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:i.createElement.apply(i,[i.Fragment,{}].concat(e)):e}(c))),n&&(c=te(c,!0));var l=X(s,o,c);return a.wrap&&(l=a.wrap(l)),l}var ne=new Map;function ae(e,t){null==t&&(t={});var r=t["data-plasmic-name"],n=t["data-plasmic-root"],a=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var o=arguments.length,i=new Array(o>2?o-2:0),s=2;s<o;s++)i[s-2]=arguments[s];var c=oe.apply(void 0,[e,t].concat(i));if(r&&ne.set(r,c),n){var l,d=a?null!=(l=ne.get(a))?l:null:c;return ne.clear(),d}return c}function oe(e,t){var r,n=t["data-plasmic-override"],a=t["data-plasmic-wrap-flex-child"],o=null!=(r=t["data-plasmic-trigger-props"])?r:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,s=new Array(i>2?i-2:0),c=2;c<i;c++)s[c-2]=arguments[c];return re(n,e,R.apply(void 0,[t,0===s.length?{}:{children:1===s.length?s[0]:s}].concat(o)),a)}var ie=Symbol("UNSET");function se(e,t){if(!t)return e;for(var r=L({},e),n=0,a=Object.keys(t);n<a.length;n++){var o=a[n],i=e[o],s=t[o];s===ie?delete r[o]:(null!=s||"className"===o||"style"===o||o.startsWith("on")&&"function"===typeof i||(s=B),r[o]=G(o,i,s))}return r}function ce(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||i.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?L({},e,{props:e.props||{},type:"as"}):"render"in e?L({},e,{type:"render"}):"props"in e?L({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),r=["wrap","wrapChildren"],t.every((function(e){return r.includes(e)}))?L({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,r;throw new Error("Unexpected override: "+e)}function le(e,t){for(var r={},n=0,a=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));n<a.length;n++){var o=a[n];r[o]=de(e[o],t[o])}return r}function de(e,t){var r,n;if(!e)return t;if(!t)return e;var a=ce(e),o=ce(t),i=V.apply(void 0,[a.wrap,o.wrap].filter(Q)),s=V.apply(void 0,[a.wrapChildren,o.wrapChildren].filter(Q)),c=se(null!=(r=a.props)?r:{},o.props);if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:s};if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:s};var l=null!=(n="as"===o.type?o.as:void 0)?n:"as"===a.type?a.as:void 0;return L({props:c,wrap:i,wrapChildren:s},l?{as:l}:{})}function ue(e,t){var r,n,a,o,i,s,c,l,d=t.name,u=t.descendantNames,p=t.internalVariantPropNames,f=t.internalArgPropNames,m=["variants","args","overrides"],_=(o=U.apply(void 0,[H.apply(void 0,[e].concat(p))].concat(m)),i=null!=(r=e.variants)?r:{},L({},o,i)),v=(s=U.apply(void 0,[H.apply(void 0,[e].concat(f))].concat(m)),c=null!=(n=e.args)?n:{},L({},s,c)),y=le(U.apply(void 0,[H.apply(void 0,[e].concat(u))].concat(f,p,m)),null!=(a=e.overrides)?a:{}),h=U.apply(void 0,[e,"variants","args","overrides"].concat(u,p,f));Object.keys(h).length>0&&(y=le(y,((l={})[d]={props:h},l)));return{variants:_,args:v,overrides:y}}var pe=[],fe={};function me(){return z?Object.entries(fe).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var _e=void 0;z&&window.addEventListener("resize",(function(){var e=me();_e&&e.join("")===_e.join("")||(_e=e,d.unstable_batchedUpdates((function(){return pe.forEach((function(e){return e()}))})))}));var ve=(0,i.createContext)(void 0);function ye(e){var t=e.platform,r=e.children,n=(0,i.useMemo)((function(){return{platform:t}}),[t]);return(0,i.createElement)(ve.Provider,{value:n},(0,i.createElement)(f,null,r))}var he=l();function be(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ge=r(9008),we=r(6265),Pe=r(5893),Oe=(r(3179),r(172)),Ae=r(9817),je=r(5376),Ne=new Array,Se=new Array;var xe={root:["root"]};var Fe=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(xe[e]),internalArgPropNames:Se,internalVariantPropNames:Ne});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,je.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntdDatePicker":"PlasmicAntdDatePicker.".concat(e),t}("root"),{internalVariantProps:Ne,internalArgProps:Se}),Ee=Fe;function Ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e,t){return(0,Pe.jsx)(Fe,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(r),!0).forEach((function(t){(0,we.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({root:{ref:t}},e))}var De=i.forwardRef(ke),Le=r(9407),Me=new Array,Ie=new Array("label","type","placeholder");var Te={root:["root"]};var Qe=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(Te[e]),internalArgPropNames:Ie,internalVariantPropNames:Me});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,Le.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntdFormInput":"PlasmicAntdFormInput.".concat(e),t}("root"),{internalVariantProps:Me,internalArgProps:Ie}),He=Qe;function Ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ve(e,t){return(0,Pe.jsx)(Qe,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(r),!0).forEach((function(t){(0,we.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({root:{ref:t}},e))}var ze=i.forwardRef(Ve),Be=r(6694),Je=new Array,Xe=new Array("label");var Re={root:["root"]};var We=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(Re[e]),internalArgPropNames:Xe,internalVariantPropNames:Je});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,Be.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntdMedicineInput":"PlasmicAntdMedicineInput.".concat(e),t}("root"),{internalVariantProps:Je,internalArgProps:Xe}),qe=We;function Ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ze(e,t){return(0,Pe.jsx)(We,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(r),!0).forEach((function(t){(0,we.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({root:{ref:t}},e))}var Ke=i.forwardRef(Ze),Ye=r(465),$e=new Array,et=new Array;var tt={root:["root"]};var rt=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(tt[e]),internalArgPropNames:et,internalVariantPropNames:$e});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,Ye.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntdFormSubmit":"PlasmicAntdFormSubmit.".concat(e),t}("root"),{internalVariantProps:$e,internalArgProps:et}),nt=rt;function at(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ot(e,t){return(0,Pe.jsx)(rt,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?at(Object(r),!0).forEach((function(t){(0,we.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({root:{ref:t}},e))}var it=i.forwardRef(ot),st=r(2835),ct=new Array,lt=new Array("medicine");var dt={root:["root","img","antdDatePicker","antdFormSubmit"],img:["img"],antdDatePicker:["antdDatePicker"],antdFormSubmit:["antdFormSubmit"]};function ut(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(dt[e]),internalArgPropNames:lt,internalVariantPropNames:ct});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae(i.Fragment,null,ae(ge.default,null,ae("title",{key:"title"},""),ae("meta",{key:"og:title",property:"og:title",content:""}),ae("meta",{key:"description",name:"description",property:"og:description",content:""})),ae("style",null,"\n        body {\n          margin: 0;\n        }\n      "),ae("div",{className:Oe.plasmic_page_wrapper},ae(ee,{as:"div","data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,hasGap:!0,className:he(Oe.all,Ae.root_reset,st.root)},ae("div",{className:he(Oe.all,st.freeBox__jQXn)}),ae(ee,{as:"div",hasGap:!0,className:he(Oe.all,st.freeBox__jET2)},ae(ee,{as:"div",hasGap:!0,className:he(Oe.all,st.freeBox__ucks8)},ae("div",{className:he(Oe.all,Oe.__wab_text,st.freeBox__yz8Je)},"Prescription Form"),ae("div",{className:he(Oe.all,Oe.__wab_text,st.freeBox___6OPoA)},"With us, you feel Secure")),ae("img",{"data-plasmic-name":"img","data-plasmic-override":t.img,alt:"",className:he(Oe.img,st.img),role:"img",src:"/plasmic/presc_codegen/images/logoPng.png"}),ae("div",{className:he(Oe.all,st.freeBox__ibhqp)},ae(De,{"data-plasmic-name":"antdDatePicker","data-plasmic-override":t.antdDatePicker,className:he("__wab_instance",st.antdDatePicker)})),ae(ze,{className:he("__wab_instance",st.antdFormInput__xd91G),label:"Name",type:"text"}),ae(ze,{className:he("__wab_instance",st.antdFormInput__rmtX2),label:"Age",type:"number"}),ae(ze,{className:he("__wab_instance",st.antdFormInput__rgmsz),label:"ID",type:"text"}),ae(Ke,{className:he("__wab_instance",st.antdMedicineInput__y9Csf),label:"Medicine 1"}),ae(Ke,{className:he("__wab_instance",st.antdMedicineInput__atb4D),label:"Medicine 2"}),ae(ze,{className:he("__wab_instance",st.antdFormInput__yLmAq),label:"Previous Prescription",type:"upload"}),ae(it,{"data-plasmic-name":"antdFormSubmit","data-plasmic-override":t.antdFormSubmit,className:he("__wab_instance",st.antdFormSubmit)})))))}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicHomepage":"PlasmicHomepage.".concat(e),t}var pt=Object.assign(ut("root"),{img:ut("img"),antdDatePicker:ut("antdDatePicker"),antdFormSubmit:ut("antdFormSubmit"),internalVariantProps:ct,internalArgProps:lt}),ft=r(8874),mt=new Array,_t=new Array;var vt={root:["root"]};var yt=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(vt[e]),internalArgPropNames:_t,internalVariantPropNames:mt});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,ft.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntdFileUpload":"PlasmicAntdFileUpload.".concat(e),t}("root"),{internalVariantProps:mt,internalArgProps:_t}),ht=r(4923),bt=new Array,gt=new Array;var wt={root:["root"]};var Pt=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(wt[e]),internalArgPropNames:gt,internalVariantPropNames:bt});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,ht.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntdFormText":"PlasmicAntdFormText.".concat(e),t}("root"),{internalVariantProps:bt,internalArgProps:gt}),Ot=r(8982),At=new Array,jt=new Array;var Nt={root:["root"]};var St=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(Nt[e]),internalArgPropNames:jt,internalVariantPropNames:At});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,Ot.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntdFormNumber":"PlasmicAntdFormNumber.".concat(e),t}("root"),{internalVariantProps:At,internalArgProps:jt}),xt=r(2019),Ft=new Array,Et=new Array;var Ct={root:["root"]};var kt=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(Ct[e]),internalArgPropNames:Et,internalVariantPropNames:Ft});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,xt.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntdFormLabel":"PlasmicAntdFormLabel.".concat(e),t}("root"),{internalVariantProps:Ft,internalArgProps:Et}),Dt=r(8277),Lt=new Array,Mt=new Array;var It={root:["root"]};var Tt=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(It[e]),internalArgPropNames:Mt,internalVariantPropNames:Lt});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,Dt.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntdTestComp":"PlasmicAntdTestComp.".concat(e),t}("root"),{internalVariantProps:Lt,internalArgProps:Mt}),Qt=r(5271),Ht=new Array,Ut=new Array;var Vt={root:["root"]};var zt=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(Vt[e]),internalArgPropNames:Ut,internalVariantPropNames:Ht});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,Qt.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntDTagLine":"PlasmicAntDTagLine.".concat(e),t}("root"),{internalVariantProps:Ht,internalArgProps:Ut}),Bt=r(4545),Jt=new Array,Xt=new Array;var Rt={root:["root"]};var Wt=Object.assign(function(e){var t=function(t){var r=ue(t,{name:e,descendantNames:be(Rt[e]),internalArgPropNames:Xt,internalVariantPropNames:Jt});return function(e){e.variants,e.args;var t=e.overrides,r=e.forNode;return e.dataFetches,ae("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":r,className:he(Oe.all,Ae.root_reset,Bt.root)})}({variants:r.variants,args:r.args,overrides:r.overrides,dataFetches:t.dataFetches,forNode:e})};return t.displayName="root"===e?"PlasmicAntDLogo":"PlasmicAntDLogo.".concat(e),t}("root"),{internalVariantProps:Jt,internalArgProps:Xt});function qt(e){return console.warn("DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."),e.children}Gt=!0,Zt={mobileOnly:"(min-width:0px) and (max-width:768px)"},Object.assign(fe,Zt),_e=void 0;var Gt,Zt,Kt={Homepage:pt,AntdDatePicker:Ee,AntdFormInput:He,AntdFormSubmit:nt,AntdFileUpload:yt,AntdFormText:Pt,AntdFormNumber:St,AntdFormLabel:kt,AntdTestComp:Tt,AntdMedicineInput:qe,AntDTagLine:zt,AntDLogo:Wt},Yt={Screen:{component:qt,isContext:!Boolean("ScreenVariantProvider")}},$t={Homepage:{bJSLnzQiU882Sm76eQ6ECs:pt},AntdDatePicker:{bJSLnzQiU882Sm76eQ6ECs:Ee},AntdFormInput:{bJSLnzQiU882Sm76eQ6ECs:He},AntdFormSubmit:{bJSLnzQiU882Sm76eQ6ECs:nt},AntdFileUpload:{bJSLnzQiU882Sm76eQ6ECs:yt},AntdFormText:{bJSLnzQiU882Sm76eQ6ECs:Pt},AntdFormNumber:{bJSLnzQiU882Sm76eQ6ECs:St},AntdFormLabel:{bJSLnzQiU882Sm76eQ6ECs:kt},AntdTestComp:{bJSLnzQiU882Sm76eQ6ECs:Tt},AntdMedicineInput:{bJSLnzQiU882Sm76eQ6ECs:qe},AntDTagLine:{bJSLnzQiU882Sm76eQ6ECs:zt},AntDLogo:{bJSLnzQiU882Sm76eQ6ECs:Wt}},er={Screen:{bJSLnzQiU882Sm76eQ6ECs:{component:qt,isContext:!Boolean(void 0)}}};function tr(e,t){if(Kt[t])return Kt[t];if(!$t[t])throw new Error("The component ".concat(t," could not be found."));if(!$t[t][e])throw new Error("The component ".concat(t," requires a valid projectId. Passed: ").concat(e,". Options: ").concat(Object.keys($t[t])));return $t[t][e]}function rr(e,t,r){var n=Object.entries(r||{}).map((function(e){var r=o(e,2),n=r[0],a=r[1];if(Yt[n]){var i=Yt[n],s=i.component;return[i.isContext?s.Provider:s,a]}if(!er[n])throw new Error("The provider ".concat(n," could not be found."));if(!er[n][t])throw new Error("The provider ".concat(n," requires a valid projectId. Passed: ").concat(t,". Options: ").concat(Object.keys(er[n])));var c=er[n][t],l=c.component;return[c.isContext?l.Provider:l,a]}));return n.length?n.reduce((function(e,t){var r=o(t,2),n=r[0],a=r[1];return i.createElement(n,{value:a},e)}),e):e}function nr(e){var t=e.projectId,r=e.component,n=e.componentProps,a=void 0===n?{}:n,o=e.providerProps,s=void 0===o?{}:o,c=tr(t,r);return rr(i.createElement(c,a),t,s)}nr.getPlumeType=function(e){return tr(e.projectId,e.component).__plumeType}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2775:function(e,t,r){"use strict";var n=r(1682);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(o=r(3244))&&o.__esModule?o:{default:o},c=r(3398),l=r(1165),d=r(6393);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function _(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,l=m.length;c<l;c++){var d=m[c];if(a.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?o=!1:r.add(d);else{var u=a.props[d],p=n[d]||new Set;"name"===d&&i||!p.has(u)?(p.add(u),n[d]=p):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:_,headManager:n,inAmpMode:(0,d.isInAmpMode)(r)},t)};t.default=v},3244:function(e,t,r){"use strict";var n=r(3115),a=r(2553),o=r(2012),i=(r(450),r(9807)),s=r(7690),c=r(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var d=r(7294),u=function(e){i(r,e);var t=l(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=u},7672:function(e,t,r){"use strict";r.r(t);var n=r(6265),a=r(5893),o=(r(2702),r(8479));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return(0,a.jsx)(o.UF,{children:(0,a.jsx)(t,s({},r))})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7672)}])},172:function(e){e.exports={all:"plasmic__default_style_all__208hu",img:"plasmic__default_style_img__23ccE plasmic__default_style_all__208hu",input:"plasmic__default_style_input__25_Su plasmic__default_style_all__208hu",textarea:"plasmic__default_style_textarea__2c9Ua plasmic__default_style_all__208hu",button:"plasmic__default_style_button__3nItH plasmic__default_style_all__208hu",code:"plasmic__default_style_code__3DJfb plasmic__default_style_all__208hu",pre:"plasmic__default_style_pre__3MJN8 plasmic__default_style_all__208hu",h1:"plasmic__default_style_h1__eQpTj plasmic__default_style_all__208hu",h2:"plasmic__default_style_h2__2bvJx plasmic__default_style_all__208hu",h3:"plasmic__default_style_h3__3ZEPj plasmic__default_style_all__208hu",h4:"plasmic__default_style_h4__1M-X7 plasmic__default_style_all__208hu",h5:"plasmic__default_style_h5__22BiX plasmic__default_style_all__208hu",h6:"plasmic__default_style_h6__367TL plasmic__default_style_all__208hu",address:"plasmic__default_style_address__mWNXW plasmic__default_style_all__208hu",ol:"plasmic__default_style_ol__2pXAy plasmic__default_style_all__208hu",ul:"plasmic__default_style_ul__iAncp plasmic__default_style_all__208hu",select:"plasmic__default_style_select__3HQ-o plasmic__default_style_all__208hu",li:"plasmic__default_style_li__2xWy3 plasmic__default_style_all__208hu",plasmic_default__component_wrapper:"plasmic__default_style_plasmic_default__component_wrapper__39rWm",__wab_text:"plasmic__default_style___wab_text__1tCIX",plasmic_page_wrapper:"plasmic__default_style_plasmic_page_wrapper__rvRY-"}},4545:function(e){e.exports={root:"PlasmicAntDLogo_root__3ILar"}},5271:function(e){e.exports={root:"PlasmicAntDTagLine_root__2rvI_"}},5376:function(e){e.exports={root:"PlasmicAntdDatePicker_root__1Yjj2"}},8874:function(e){e.exports={root:"PlasmicAntdFileUpload_root__1DPti"}},9407:function(e){e.exports={root:"PlasmicAntdFormInput_root__38C0R"}},2019:function(e){e.exports={root:"PlasmicAntdFormLabel_root__3txJy"}},8982:function(e){e.exports={root:"PlasmicAntdFormNumber_root__1YLAc"}},465:function(e){e.exports={root:"PlasmicAntdFormSubmit_root__2994X"}},4923:function(e){e.exports={root:"PlasmicAntdFormText_root__1oQFC"}},6694:function(e){e.exports={root:"PlasmicAntdMedicineInput_root__2Trvc"}},8277:function(e){e.exports={root:"PlasmicAntdTestComp_root__1PdPF"}},2835:function(e){e.exports={root:"PlasmicHomepage_root__3WWdS",freeBox__jQXn:"PlasmicHomepage_freeBox__jQXn__2LS-6",freeBox__jET2:"PlasmicHomepage_freeBox__jET2__1KFXa",freeBox__ucks8:"PlasmicHomepage_freeBox__ucks8__3K7Xw",freeBox__yz8Je:"PlasmicHomepage_freeBox__yz8Je__1q1QZ",freeBox___6OPoA:"PlasmicHomepage_freeBox___6OPoA__2radr",img:"PlasmicHomepage_img__2YJYB",freeBox__ibhqp:"PlasmicHomepage_freeBox__ibhqp__9-4lH",antdDatePicker:"PlasmicHomepage_antdDatePicker__tF9XQ",antdFormInput__xd91G:"PlasmicHomepage_antdFormInput__xd91G__3lgHX",antdFormInput__rmtX2:"PlasmicHomepage_antdFormInput__rmtX2__22eKX",antdFormInput__rgmsz:"PlasmicHomepage_antdFormInput__rgmsz__3MLr-",antdMedicineInput__y9Csf:"PlasmicHomepage_antdMedicineInput__y9Csf__2CLCY",antdMedicineInput__atb4D:"PlasmicHomepage_antdMedicineInput__atb4D__3MRyk",antdFormInput__yLmAq:"PlasmicHomepage_antdFormInput__yLmAq__2WrNk",antdFormSubmit:"PlasmicHomepage_antdFormSubmit__E34kr"}},9817:function(e){e.exports={root_reset:"plasmic_presc_codegen_root_reset__1IfLD"}},3179:function(){},2702:function(){},9008:function(e,t,r){e.exports=r(2775)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6265:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),a=r(7381),o=r(3585),i=r(5725);e.exports=function(e){return n(e)||a(e)||o(e)||i()}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var r=e.O();_N_E=r}]);