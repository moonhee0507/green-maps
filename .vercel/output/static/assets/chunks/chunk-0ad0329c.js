var ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ie(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var o=[null];o.push.apply(o,arguments);var i=Function.bind.apply(t,o);return new i}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var $={exports:{}},m={},k={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),B=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),R=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,C={};function p(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||g}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function P(){}P.prototype=p.prototype;function S(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||g}var b=S.prototype=new P;b.constructor=S;x(b,p.prototype);b.isPureReactComponent=!0;var j=Array.isArray,I=Object.prototype.hasOwnProperty,E={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var r,o={},i=null,f=null;if(t!=null)for(r in t.ref!==void 0&&(f=t.ref),t.key!==void 0&&(i=""+t.key),t)I.call(t,r)&&!T.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:y,type:e,key:i,ref:f,props:o,_owner:E.current}}function Y(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function K(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var O=/\/+/g;function h(e,t){return typeof e=="object"&&e!==null&&e.key!=null?K(""+e.key):t.toString(36)}function _(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var f=!1;if(e===null)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case y:case N:f=!0}}if(f)return f=e,o=o(f),e=r===""?"."+h(f,0):r,j(o)?(n="",e!=null&&(n=e.replace(O,"$&/")+"/"),_(o,t,n,"",function(a){return a})):o!=null&&(w(o)&&(o=Y(o,n+(!o.key||f&&f.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(f=0,r=r===""?".":r+":",j(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+h(i,s);f+=_(i,t,n,c,o)}else if(c=J(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+h(i,s++),f+=_(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function d(e,t,n){if(e==null)return e;var r=[],o=0;return _(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Q(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},v={transition:null},X={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:v,ReactCurrentOwner:E};u.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=p;u.Fragment=U;u.Profiler=V;u.PureComponent=S;u.StrictMode=M;u.Suspense=H;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X;u.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=x({},e.props),o=e.key,i=e.ref,f=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,f=E.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)I.call(t,c)&&!T.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var a=0;a<c;a++)s[a]=arguments[a+2];r.children=s}return{$$typeof:y,type:e.type,key:o,ref:i,props:r,_owner:f}};u.createContext=function(e){return e={$$typeof:B,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:q,_context:e},e.Consumer=e};u.createElement=D;u.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:z,render:e}};u.isValidElement=w;u.lazy=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:Q}};u.memo=function(e,t){return{$$typeof:W,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=v.transition;v.transition={};try{e()}finally{v.transition=t}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.useCallback=function(e,t){return l.current.useCallback(e,t)};u.useContext=function(e){return l.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return l.current.useDeferredValue(e)};u.useEffect=function(e,t){return l.current.useEffect(e,t)};u.useId=function(){return l.current.useId()};u.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};u.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return l.current.useMemo(e,t)};u.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};u.useRef=function(e){return l.current.useRef(e)};u.useState=function(e){return l.current.useState(e)};u.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};u.useTransition=function(){return l.current.useTransition()};u.version="18.2.0";k.exports=u;var F=k.exports;const fe=L(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=F,ee=Symbol.for("react.element"),te=Symbol.for("react.fragment"),re=Object.prototype.hasOwnProperty,ne=Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,o={},i=null,f=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(f=t.ref);for(r in t)re.call(t,r)&&!oe.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ee,type:e,key:i,ref:f,props:o,_owner:ne.current}}m.Fragment=te;m.jsx=A;m.jsxs=A;$.exports=m;var ce=$.exports;export{fe as R,ie as a,ue as c,L as g,ce as j,F as r};
