!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,c=Object.create(o.prototype),a=new T(r||[]);return i(c,"_invoke",{value:S(t,n,a)}),c}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}n.wrap=f;var p={};function d(){}function y(){}function v(){}var m={};l(m,a,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(_([])));x&&x!==r&&o.call(x,a)&&(m=x);var j=v.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,n){function r(i,c,a,u){var s=h(e[i],e,c);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):n.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(s.arg)}var c;i(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return c=c?c.then(o,o):o()}})}function S(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=L(c,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return y.prototype=v,i(j,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,u,(function(){return this})),n.AsyncIterator=b,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var c=new b(f(t,e,r,o),i);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},w(j),l(j,s,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},n}function n(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,a=[],u=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(l){s=!0,o=l}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./chunk-202ebce4-legacy.js","./chunk-7915836a-legacy.js","./chunk-fde65b43-legacy.js","./chunk-967a8d53-legacy.js","./chunk-19a5c1b3-legacy.js","./chunk-dc7c2e3c-legacy.js","./chunk-077295df-legacy.js","./chunk-dc6b0642-legacy.js","./chunk-7c2f6333-legacy.js","./chunk-028b78e6-legacy.js"],(function(t,n){"use strict";var i,c,a,u,s,l,f,h,p,d,y,v,m;return{setters:[function(t){i=t.j,c=t.r},function(t){a=t.n},function(t){u=t.S},function(t){s=t.u},function(t){l=t.A,f=t.c,h=t.a},function(t){p=t.S,d=t.T,y=t.P,v=t.a,m=t.u},null,null,null,null],execute:function(){function n(t){var e=t.isLoggedIn;return i.jsx("button",{type:"button",className:"link-create",onClick:function(){e?a("/community/create"):confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?")&&a("/login")},children:"글쓰기"})}function g(t){var n=s((function(t){return t.postSlice.post.TOTAL})),a=s((function(t){return t.postSlice.SUBJECT})),f=o(c.useState(0),2),h=f[0],p=f[1];return c.useEffect((function(){function t(){return(t=r(e().mark((function t(n){var r,o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=encodeURIComponent(n),t.next=3,fetch("".concat(l,"/today/").concat(r),{headers:{"Content-Type":"application/json"}});case 3:return o=t.sent,t.next=6,o.json();case 6:return i=t.sent,t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(e){return t.apply(this,arguments)})(a).then((function(t){return p(t.todayCount)}))}),[t.posts]),i.jsxs("div",{className:"container-newpost-selectbox",children:[i.jsxs("p",{className:"txt-postinfo",children:["새글 ",i.jsx("span",{children:h}),"/",n]}),i.jsx(u,{})]})}function x(){var t=o(c.useState(null),2),n=t[0],a=t[1],u=c.useRef(null);function s(){return(s=r(e().mark((function t(){var n,r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"공지사항",t.next=3,fetch("".concat(l,"/subjects/").concat(encodeURIComponent("공지사항")),{headers:{"Cache-Control":"max-age=31536000"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return c.useEffect((function(){(function(){return s.apply(this,arguments)})().then((function(t){t.total>=1?a(t.lists):a(null)}))}),[]),i.jsxs("article",{className:"article-notice",children:[i.jsx("h3",{className:"sr-only",children:"공지사항"}),null!==n?i.jsx("ul",{className:"ul-notice",ref:u,children:n.map((function(t,e){return i.jsx(j,{posts:t},Math.random())}))}):null]})}function j(t){var e=t.posts,n=e._id,r=e.title;e.registeredAt,e.updatedAt;return i.jsx("li",{className:"li-notice",children:i.jsx("a",{href:"/community/".concat(n),children:i.jsxs("p",{className:"txt-title",children:[i.jsx("span",{children:"[공지사항] "}),i.jsx("em",{children:r})]})})})}t("default",(function(t){var e=t.isLoggedIn,r=t.posts,o=t.limit;return i.jsxs(i.Fragment,{children:[i.jsx(n,{isLoggedIn:e}),i.jsx(L,{posts:r,limit:o,isLoggedIn:e})]})}));var w=c.forwardRef((function(t,e){var n=t.postInfo,r=n._id,o=n.subject,c=n.owner,a=n.title,u=n.content,s=n.photo,l=n.like,f=n.registeredAt,h=n.comments,m=(x=u,x.replaceAll(/<[^>]*>/g,"").replaceAll(/&[a-zA-Z0-9]*;/g,"")),g="80px";var x;return i.jsx("li",{ref:e,children:i.jsxs("a",{href:"/community/".concat(r),style:{width:"100%",display:"flex",padding:"20px"},children:[i.jsxs("dl",{style:{width:"calc(100% - ".concat(s&&s.length>0?g:"0px",")")},children:[i.jsx(p,{subject:o}),i.jsx(d,{title:a}),i.jsx(y,{content:m}),i.jsx(v,{owner:c,like:l,registeredAt:f,comments:h})]}),s&&s.length>0?i.jsx("dd",{children:i.jsx("img",{src:s[0].src,alt:"",style:{width:g,height:g,objectFit:"cover"}})}):null]})})}));function b(t){var e=t.posts,n=t.limit,r=c.useRef(null),a=f(),u=h(),s=o(m((function(){var t=Math.ceil(a.getState().postSlice.post.TOTAL/n);a.getState().postSlice.post.CURRENT_PAGE<t&&u({type:"postSlice/POST_IN_PAGE",TOTAL:a.getState().postSlice.post.TOTAL,CURRENT_PAGE:a.getState().postSlice.post.CURRENT_PAGE+1})})),2),l=s[0],p=s[1];return c.useEffect((function(){var t=Math.ceil(a.getState().postSlice.post.TOTAL/n),e=a.getState().postSlice.post.CURRENT_PAGE;e===t?p(r.current):e<t&&l(r.current)}),[l,p]),i.jsx("ul",{className:"wrapper-posts",children:e.map((function(t,n){return n===e.length-1?i.jsx(w,{postInfo:t,ref:r},t._id):i.jsx(w,{postInfo:t},t._id)}))})}function S(t){var e=t.posts,n=t.limit;return i.jsxs("section",{children:[i.jsx("h3",{className:"sr-only",children:"게시글 목록"}),i.jsx(x,{}),i.jsx(b,{posts:e,limit:n})]})}function L(t){var e=t.posts,n=t.limit,r=(t.isLoggedIn,c.useRef(null)),a=o(c.useState(!1),2),u=a[0],s=a[1];return i.jsxs(i.Fragment,{children:[i.jsxs("main",{className:"main-community",ref:r,onScroll:function(){var t;0===(null==r||null===(t=r.current)||void 0===t?void 0:t.scrollTop)?s(!1):s(!0)},children:[i.jsx(g,{posts:e}),i.jsx(S,{posts:e,limit:n})]}),u&&i.jsx("button",{id:"buttonGoUp",onClick:function(){var t;null==r||null===(t=r.current)||void 0===t||t.scrollTo({top:0,left:0,behavior:"auto"})},type:"button",children:"맨위로"})]})}}}}))}();
