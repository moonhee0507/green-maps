!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,c=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(T){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),s=new I(r||[]);return c(i,"_invoke",{value:k(t,n,s)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}n.wrap=f;var d={};function p(){}function m(){}function y(){}var v={};l(v,s,(function(){return this}));var x=Object.getPrototypeOf,g=x&&x(x(L([])));g&&g!==r&&o.call(g,s)&&(v=g);var j=y.prototype=p.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,n){function r(c,i,s,a){var u=h(e[c],e,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,s,a)}),(function(t){r("throw",t,s,a)})):n.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,a)}))}a(u.arg)}var i;c(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function k(t,e,n){var r="suspendedStart";return function(o,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw c;return O()}for(n.method=o,n.arg=c;;){var i=n.delegate;if(i){var s=S(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var a=h(t,e,n);if("normal"===a.type){if(r=n.done?"completed":"suspendedYield",a.arg===d)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r="completed",n.method="throw",n.arg=a.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var c=o.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function L(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=y,c(j,"constructor",{value:y,configurable:!0}),c(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,a,(function(){return this})),n.AsyncIterator=b,n.async=function(t,e,r,o,c){void 0===c&&(c=Promise);var i=new b(f(t,e,r,o),c);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(j),l(j,u,"Generator"),l(j,s,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=L,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var s=o.call(c,"catchLoc"),a=o.call(c,"finallyLoc");if(s&&a){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=e,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(t,e,n,r,o,c,i){try{var s=t[c](i),a=s.value}catch(u){return void n(u)}s.done?e(a):Promise.resolve(a).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var i=t.apply(e,r);function s(t){n(i,o,c,s,a,"next",t)}function a(t){n(i,o,c,s,a,"throw",t)}s(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c,i,s=[],a=!0,u=!1;try{if(c=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(s.push(r.value),s.length!==e);a=!0);}catch(l){u=!0,o=l}finally{try{if(!a&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["../chunks/chunk-202ebce4-legacy.js","../chunks/chunk-19a5c1b3-legacy.js","../chunks/chunk-9dc86580-legacy.js","../chunks/chunk-4b310fd2-legacy.js","../chunks/chunk-7c2f6333-legacy.js","../chunks/chunk-331253e6-legacy.js","../chunks/chunk-028b78e6-legacy.js","../chunks/chunk-b00ceac5-legacy.js","../chunks/chunk-61dbc6e4-legacy.js","../chunks/chunk-7915836a-legacy.js","../chunks/chunk-afd16fcf-legacy.js","../chunks/chunk-dc6b0642-legacy.js","../chunks/chunk-5b8c52db-legacy.js","../chunks/chunk-967a8d53-legacy.js","../chunks/chunk-077295df-legacy.js","../chunks/chunk-ab518e22-legacy.js"],(function(t,n){"use strict";var c,i,s,a,u,l,f,h,d,p,m,y,v,x,g,j,w,b,k,S,N,E;return{setters:[function(t){c=t.j,i=t.r,s=t.R},function(t){a=t.A,u=t.b,l=t.u},function(t){f=t.S},function(t){h=t.T},function(t){d=t.D},function(t){p=t.i},function(t){m=t.i},function(t){y=t.a,v=t.S,x=t.b,g=t.c,j=t.d,w=t.e},function(t){b=t.a},function(t){k=t.n},function(t){S=t.P},function(t){N=t.u},function(t){E=t.L},null,null,null],execute:function(){function n(t){var e=t.content;return c.jsx("div",{dangerouslySetInnerHTML:{__html:d.sanitize(e)},style:{wordBreak:"keep-all",marginTop:"40px"}})}function I(t){var n=t.postId,s=t.like,u=o(i.useState(null),2),l=u[0],f=u[1],h=o(i.useState(s?s.length:0),2),d=h[0],m=h[1],y=o(i.useState(!1),2),v=y[0],x=y[1];function g(){return(g=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/posts/").concat(n,"/like"),{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:l})});case 2:if(!t.sent.ok){t.next=7;break}m(d+1),t.next=8;break;case 7:throw new Error;case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/posts/").concat(n,"/like"),{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:l})});case 2:if(!t.sent.ok){t.next=7;break}m(d-1),t.next=8;break;case 7:throw new Error;case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return i.useEffect((function(){function t(){return(t=r(e().mark((function t(){var n,r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/users"));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.user.userId);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){f(t)})).catch((function(t){return console.error(t)}))}),[]),i.useEffect((function(){s&&x(s.some((function(t){return t.user===l})))}),[l]),c.jsxs("button",{className:"button-like",type:"button",onClick:function(){v?function(){j.apply(this,arguments)}():function(){g.apply(this,arguments)}(),x(!v)},style:{margin:"60px auto 0px"},children:[c.jsx("img",{src:p,alt:"좋아요 이미지",className:"img-like review ".concat(v?"on":"")}),c.jsx("span",{style:{minWidth:"20px"},children:d})]})}function L(t){var e=t.userInfo,n=t.owner,r=t.postId,s=u(),a=i.useRef(null),l=o(i.useState(null),2),f=l[0],h=l[1];return i.useEffect((function(){null!==e&&h(e)}),[e]),c.jsx("button",{type:"button","aria-label":"더보기 버튼",className:"button-more postitem",onClick:function(){b(!0),s(y(!0)),s(v((null==f?void 0:f.nickName)===n)),s(x(r)),s(g("post"))},ref:a})}function O(t){var e=t.userInfo,r=t.postInfo,o=(r.subject,r.content),i=r.like,s=r.owner,a=(r.photo,r.registeredAt),u=r.comments,l=r.title,f=r._id;return c.jsxs("section",{className:"section-post-content",children:[c.jsx("h3",{"aria-label":"게시글 제목",className:"txt-post-title",children:l}),c.jsxs("div",{children:[c.jsx("p",{"aria-label":"작성자",className:"txt-post-owner",children:s}),c.jsxs("div",{className:"container-post-subinfo",children:[c.jsx(T,{like:i}),c.jsx(_,{comments:u}),c.jsx(C,{registeredAt:a})]})]}),c.jsx(n,{content:o}),c.jsx(I,{postId:f,like:i}),c.jsx(L,{userInfo:e,owner:s,postId:f})]})}function T(t){var e;return c.jsxs(c.Fragment,{children:[c.jsx("dt",{className:"sr-only",children:"좋아요 개수"}),c.jsx("dd",{className:"container-count-like",children:c.jsx("span",{children:(null===(e=t.like)||void 0===e?void 0:e.length)||0})})]})}function _(t){var e;return c.jsxs(c.Fragment,{children:[c.jsx("dt",{className:"sr-only",children:"댓글 개수"}),c.jsx("dd",{className:"container-count-comment",children:c.jsx("span",{children:(null===(e=t.comments)||void 0===e?void 0:e.length)||0})})]})}function C(t){var e,n,r=t.registeredAt,o=m(r)?"".concat(null===(e=r.split(". ").at(-1))||void 0===e?void 0:e.split(":")[0],":").concat(null===(n=r.split(". ").at(-1))||void 0===n?void 0:n.split(":")[1]):r.slice(0,13);return c.jsxs(c.Fragment,{children:[c.jsx("dt",{className:"sr-only",children:"작성 시간"}),c.jsx("dd",{className:"container-post-time",children:c.jsx("time",{dateTime:"",children:o})})]})}function P(t){var n=t.postId,o=t.content;function i(){return(i=r(e().mark((function t(){var n,r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/users/"),{credentials:"include",method:"GET"});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return(s=r(e().mark((function t(r){var c,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(null!==o&&o.length>0)){t.next=10;break}return c={owner:r,content:o},t.next=5,fetch("".concat(a,"/posts/").concat(n,"/comment"),{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:return i=t.sent,t.next=8,i.json();case 8:!0===t.sent.success&&window.location.reload();case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return c.jsx("button",{type:"button",onClick:function(){(function(){return i.apply(this,arguments)})().then((function(t){!0===t.success?function(t){s.apply(this,arguments)}(t.user.nickName):confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?")&&k("/login")}))},disabled:!(null!==o&&o.length>0),"aria-label":"댓글 등록 버튼"})}function A(t){var e=t.postId,n=o(i.useState(null),2),r=n[0],s=n[1];return c.jsxs("form",{className:"form-create-comment",children:[c.jsx("label",{htmlFor:"comment",className:"sr-only",children:"댓글 작성하기"}),c.jsx("textarea",{id:"comment",onChange:function(t){s(t.target.value)},minLength:1,maxLength:100}),c.jsx(P,{postId:e,content:r})]})}function G(){return c.jsx("div",{className:"container-notice comment",children:c.jsx("em",{children:"게시글과 관련없는 홍보성 댓글과 저속한 표현의 비방성 댓글은 삭제될 수 있습니다."})})}function F(t){var e=t.userInfo,n=t.postId,r=t.comment,s=u(),a=i.useRef(null),l=o(i.useState(null),2),f=l[0],h=l[1];return i.useEffect((function(){null!==e&&h(e)}),[e]),c.jsx("button",{type:"button","aria-label":"더보기 버튼",className:"button-more commentitem",onClick:function(){var t=document.querySelector(".app");null==t||t.classList.add("modal-mode"),s(y(!0)),s(v((null==f?void 0:f.nickName)===r.owner)),s(g("comment")),s(x(n)),s(j(r._id))},ref:a})}function D(t){var e=t.userInfo,n=t.postId,r=t.comments;return r&&r.length>0?c.jsx("ul",{children:r.map((function(t,o){return c.jsx(R,{userInfo:e,postId:n,comment:t,isLast:o===r.length-1},t._id)}))}):c.jsxs("div",{className:"style-wrapper-no-review",children:[c.jsx("div",{className:"txt-no-review",children:"😭"}),c.jsx("p",{children:"댓글이 없어요."})]})}function R(t){var e,n,r=t.userInfo,o=t.postId,s=t.comment,a=t.isLast,u=s.owner,f=s.content,h=(s.like,s.registeredAt),d=(s.updatedAt,l((function(t){return t.postSlice.editCommentMode}))),p=m(h)?"".concat(null===(e=h.split(". ").at(-1))||void 0===e?void 0:e.split(":")[0],":").concat(null===(n=h.split(". ").at(-1))||void 0===n?void 0:n.split(":")[1]):h.slice(0,13),y=i.useRef(null);return i.useEffect((function(){a&&y.current&&y.current.scrollIntoView(!1)}),[a]),c.jsxs("li",{className:"li-commentitem",ref:y,children:[c.jsxs("dl",{className:"wrapper-commentitem",children:[c.jsxs("dl",{className:"container-owner-date",children:[c.jsx("dt",{className:"sr-only",children:"댓글 작성자"}),c.jsx("dd",{className:"txt-owner",children:u}),c.jsx("dt",{className:"sr-only",children:"게시 시간"}),c.jsx("dd",{className:"txt-date",children:p})]}),c.jsxs("dl",{children:[c.jsx("dt",{className:"sr-only",children:"댓글 내용"}),d?c.jsx(M,{content:f}):c.jsx("dd",{className:"txt-content",children:f})]})]}),d?c.jsx(J,{postId:o,commentId:s._id}):c.jsx(F,{userInfo:r,postId:o,comment:s})]})}function M(t){var e=t.content,n=o(i.useState(e),2),r=n[0],s=n[1];return c.jsx("textarea",{id:"editCommentTextarea",onChange:function(t){s(t.target.value)},minLength:1,maxLength:100,value:r})}function J(t){var n=t.postId,o=t.commentId;function i(){return(i=r(e().mark((function t(r){var c;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/comments/").concat(o,"?postId=").concat(n),{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:r})});case 2:return c=t.sent,t.next=5,c.json();case 5:t.sent.success?alert("댓글이 수정되었습니다."):alert("다시 시도해주세요."),window.location.reload();case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return c.jsx("button",{type:"button",className:"button-more commentitem edit",onClick:function(){var t=document.getElementById("editCommentTextarea");null!==t&&function(t){i.apply(this,arguments)}(t.value)},children:"수정"})}t("Page",(function(t){var n,l=(null===(n=t.routeParams)||void 0===n?void 0:n.postId)||"",d=u(),p=o(N(),2),m=(p[0],p[1]),y=o(i.useState(null),2),v=y[0],x=y[1];function g(){return(g=r(e().mark((function t(){var n,r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/posts/").concat(l),{headers:{"Cache-Control":"max-age=31536000"}});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return i.useEffect((function(){(function(){return g.apply(this,arguments)})().then((function(t){x(t||null)}))}),[]),i.useEffect((function(){if(v&&v.comments){for(var t={},e=0;e<v.comments.length;e+=10){var n=v.comments.slice(e,e+10);t[e/10]=n}d(f(t))}}),[v]),v?c.jsxs(s.Suspense,{fallback:c.jsx(E,{}),children:[c.jsx(h,{title:v.subject}),c.jsxs("main",{className:"main-read-post",children:[c.jsx(O,{userInfo:m,postInfo:v}),"공지사항"!==v.subject&&c.jsx(B,{userInfo:m,postId:v._id,comments:v.comments})]}),c.jsx(Y,{})]}):c.jsx(E,{})}));var q=10;function B(t){var e=t.postId,n=t.comments,r=t.userInfo,s=u(),a=l((function(t){return t.paginationSlice.comment})),f=l((function(t){return t.paginationSlice.currentPage})),h=o(i.useState(a[f-1]),2),d=h[0],p=h[1];return i.useEffect((function(){s({type:"paginationSlice/CURRENT_PAGE",currentPage:Object.keys(a).length})}),[a]),i.useEffect((function(){p(a[f-1])}),[a,f]),c.jsxs("section",{className:"section-post-comment",children:[n&&n.length>0?c.jsxs("h3",{children:["댓글 ",c.jsxs("span",{children:["(",n.length,")"]})]}):c.jsx("h3",{className:"sr-only",children:"댓글"}),c.jsx(G,{}),c.jsx(A,{postId:e}),c.jsx(D,{postId:e,comments:d,userInfo:r}),n&&n.length>q?c.jsx(S,{count:n.length,perPage:q}):null]})}function U(){var t=o(i.useState(!1),2),e=t[0],n=t[1],r=l((function(t){return t.postSlice.editDeleteNotifyModalOn})),s=l((function(t){return t.postSlice.sameUserOwner}));return i.useEffect((function(){n(!0===r)}),[r]),c.jsxs("article",{className:"modal-edit-delete-notify ".concat(e?"on":""),children:[c.jsx("h4",{className:"sr-only",children:"수정, 삭제, 신고용 모달"}),c.jsx("ul",{children:s?c.jsxs(c.Fragment,{children:[c.jsx(H,{}),c.jsx(V,{})]}):c.jsx("li",{children:" 🚨 신고하기"})})]})}function H(){var t=u(),e=l((function(t){return t.postSlice.postId}));l((function(t){return t.postSlice.commentId}));var n=l((function(t){return t.postSlice.accessTarget}));return c.jsx("li",{onClick:function(){"post"===n?(k("/community/edit/".concat(e)),b(!1),t(y(!1))):"comment"===n&&(t(w(!0)),b(!1),t(y(!1)))},children:"🩹 수정하기"})}function V(){var t=u(),n=l((function(t){return t.postSlice.postId})),o=l((function(t){return t.postSlice.commentId})),i=l((function(t){return t.postSlice.accessTarget}));function s(){return(s=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"post"===i?f():"comment"===i&&d();case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=r(e().mark((function r(){var o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(a,"/posts/").concat(n),{credentials:"include",method:"DELETE"});case 3:return o=e.sent,e.next=6,o.json();case 6:e.sent.success?k("/community"):alert("다시 시도해주세요."),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:return e.prev=13,b(!1),t(y(!1)),e.finish(13);case 17:case"end":return e.stop()}}),r,null,[[0,10,13,17]])})))).apply(this,arguments)}function d(){return p.apply(this,arguments)}function p(){return(p=r(e().mark((function r(){var c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(a,"/comments/").concat(o,"?postId=").concat(n),{credentials:"include",method:"DELETE"});case 3:return c=e.sent,e.next=6,c.json();case 6:e.sent.success?window.location.reload():alert("다시 시도해주세요."),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:return e.prev=13,b(!1),t(y(!1)),e.finish(13);case 17:case"end":return e.stop()}}),r,null,[[0,10,13,17]])})))).apply(this,arguments)}return c.jsx("li",{onClick:function(){return s.apply(this,arguments)},children:"🗑️ 삭제하기"})}function Y(){var t=l((function(t){return t.postSlice.editDeleteNotifyModalOn})),e=o(i.useState(!1),2),n=e[0],r=e[1],s=u();function a(t){if("app modal-mode"===t.target.className){var e=document.querySelector(".app");null==e||e.classList.remove("modal-mode"),s(y(!1)),s(x(""))}}return i.useEffect((function(){r(!0===t)}),[t]),i.useEffect((function(){return n&&document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}),[n]),c.jsx("div",{className:"modal-group ".concat(n?"on":""),children:c.jsx(U,{})})}t("documentProps",{title:"게시글 | Green Maps",description:"채식 식당 지도 서비스 게시글 페이지"})}}}))}();