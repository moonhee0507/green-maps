!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var e={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",a=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(_){l=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,c=Object.create(o.prototype),u=new I(r||[]);return i(c,"_invoke",{value:L(t,e,u)}),c}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(_){return{type:"throw",arg:_}}}e.wrap=f;var p={};function d(){}function m(){}function y(){}var g={};l(g,u,(function(){return this}));var v=Object.getPrototypeOf,x=v&&v(v(N([])));x&&x!==r&&o.call(x,u)&&(g=x);var b=y.prototype=d.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function k(n,e){function r(i,c,u,a){var s=h(n[i],n,c);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,a)}),(function(t){r("throw",t,u,a)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,a)}))}a(s.arg)}var c;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return c=c?c.then(o,o):o()}})}function L(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var u=w(c,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var a=h(t,n,e);if("normal"===a.type){if(r=e.done?"completed":"suspendedYield",a.arg===p)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(r="completed",e.method="throw",e.arg=a.arg)}}}function w(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=h(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function S(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(o.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=y,i(b,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},j(k.prototype),l(k.prototype,a,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var c=new k(f(t,n,r,o),i);return e.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(b),l(b,s,"Generator"),l(b,u,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return c.type="throw",c.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),a=o.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:N(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},e}function e(t,n,e,r,o,i,c){try{var u=t[i](c),a=u.value}catch(s){return void e(s)}u.done?n(a):Promise.resolve(a).then(r,o)}function r(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var c=t.apply(n,r);function u(t){e(c,o,i,u,a,"next",t)}function a(t){e(c,o,i,u,a,"throw",t)}u(void 0)}))}}function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,c,u=[],a=!0,s=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;a=!1}else for(;!(a=(r=i.call(e)).done)&&(u.push(r.value),u.length!==n);a=!0);}catch(l){s=!0,o=l}finally{try{if(!a&&null!=e.return&&(c=e.return(),Object(c)!==c))return}finally{if(s)throw o}}return u}}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}System.register(["../chunks/chunk-202ebce4-legacy.js","../chunks/chunk-4b310fd2-legacy.js","../chunks/chunk-9c8dad95-legacy.js","../chunks/chunk-19a5c1b3-legacy.js","../chunks/chunk-7e0c46e3-legacy.js","../chunks/chunk-0090c325-legacy.js","../chunks/chunk-4d37e21d-legacy.js","../chunks/chunk-7915836a-legacy.js","../chunks/chunk-dc6b0642-legacy.js","../chunks/chunk-967a8d53-legacy.js","../chunks/chunk-b00ceac5-legacy.js","../chunks/chunk-fd5fddd6-legacy.js","../chunks/chunk-331253e6-legacy.js","../chunks/chunk-077295df-legacy.js"],(function(t,e){"use strict";var i,c,u,a,s,l,f,h,p,d,m,y,g,v,x,b,j,k;return{setters:[function(t){i=t.j,c=t.r},function(t){u=t.T},function(t){a=t.i},function(t){s=t.b,l=t.A,f=t.u},function(t){h=t.E,p=t.f,d=t.I,m=t.S,y=t.g,g=t.O,v=t.a},function(t){x=t.N},function(t){b=t.I},function(t){j=t.n},function(t){k=t.u},null,null,null,null,null],execute:function(){function e(){return i.jsx("div",{className:"container-notice",children:i.jsx("em",{children:"기본 그룹은 편집할 수 없습니다."})})}function L(t){var n=t.groupInfo,e=t.bookmarkList,r=n.groupIcon,u=n.name,a=o(c.useState(0),2),s=a[0],l=a[1];return c.useEffect((function(){if(0===e.length&&l(0),e.length>0){var t=e.filter((function(t){return t.groupName===u}));l(t.length)}}),[]),i.jsxs("div",{className:"style-wrapper-groupname-info",children:[i.jsx("div",{className:"container-groupicon",children:i.jsx("img",{src:r,alt:"그룹 아이콘",style:{width:"100%",height:"100%"}})}),i.jsxs("div",{children:[i.jsx("p",{className:"txt-groupname",children:u}),i.jsxs("p",{className:"txt-restaurant-count",children:["개수 ",i.jsx("span",{className:"num-restaurant-count",children:s})]})]})]})}t("Page",(function(){var t=o(k(),2),e=t[0],a=t[1],s=o(c.useState(null),2),f=s[0],h=s[1];return c.useEffect((function(){try{a&&r(n().mark((function t(){var e,r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(l,"/bookmark/").concat(a.userId));case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,h(r.groupList);case 7:case"end":return t.stop()}}),t)})))()}catch(t){console.error(t)}}),[a]),console.log(f),i.jsxs(i.Fragment,{children:[i.jsx(u,{title:"그룹 목록 편집"}),i.jsx(T,{userInfo:a,groupList:f}),i.jsx(x,{isLoggedIn:e}),i.jsx(P,{userInfo:a,groupList:f})]})}));var w="/images/icon-edit.svg";function S(t){var e=t.groupInfo,o=t.userInfo,c=s();function u(){return(u=r(n().mark((function t(){var r,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm("해당 그룹을 삭제하시겠습니까?")){t.next=5;break}return r=null==o?void 0:o.userId,i=e._id,t.next=5,fetch("".concat(l,"/bookmark/").concat(i),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:r})}).then((function(t){return t.json()})).then((function(t){t.success?(alert("북마크 그룹이 삭제되었습니다."),window.location.reload()):alert("다시 시도해주세요.")}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return i.jsxs("div",{children:[i.jsx("button",{className:"button-edit-group",type:"button","aria-label":"그룹 수정 버튼",onClick:function(){var t=document.querySelector(".app");null==t||t.classList.add("modal-mode"),c(h(!0)),c(p(e.name)),c(d(e.groupIcon))},children:i.jsx("img",{src:w,alt:"수정 아이콘"})}),i.jsx("button",{className:"button-delete-group",type:"button","aria-label":"그룹 삭제 버튼",onClick:function(){return u.apply(this,arguments)},children:i.jsx("img",{src:a,alt:"삭제 아이콘"})})]})}function E(t){var n=t.userInfo,e=t.bookmarkList,r=t.groupList,u=o(c.useState(null),2),a=u[0],s=u[1];return c.useEffect((function(){null!==r&&s(r)}),[r]),i.jsx("ul",{children:null!==a&&a.map((function(t){return i.jsx(I,{userInfo:n,groupInfo:t,bookmarkList:e},Math.random())}))})}function I(t){var n=t.userInfo,e=t.groupInfo,r=t.bookmarkList;return i.jsx("li",{className:"li-bookmarkgroup reuse",children:i.jsxs("div",{className:"style-wrapper-groupname",children:[i.jsx(L,{groupInfo:e,bookmarkList:r}),"기본 그룹"!==e.name&&i.jsx(S,{userInfo:n,groupInfo:e})]})})}function N(){var t=s(),n=f((function(t){return t.myListSlice.targetGroup})),e=f((function(t){return t.myListSlice.groupName})),r=o(c.useState(""),2),u=r[0],a=r[1];return c.useEffect((function(){null===e&&a(n),""===e&&a("")}),[e,n]),i.jsxs(i.Fragment,{children:[i.jsx("label",{htmlFor:"groupNameForEdit",className:"sr-only",children:"그룹명"}),i.jsx("input",{type:"text",id:"groupNameForEdit",placeholder:"그룹명을 입력해 주세요.",maxLength:20,minLength:1,onChange:function(n){a(n.target.value),t(m(n.target.value))},value:u})]})}function O(t){var e=t.userInfo,u=t.groupList,a=o(c.useState({disabled:!0}),2),h=a[0],p=a[1],d=f((function(t){return t.myListSlice.groupName})),m=f((function(t){return t.myListSlice.selectedIcon})),g=f((function(t){return t.myListSlice.targetGroup})),v=f((function(t){return t.myListSlice.sameIcon})),x=s();function b(){return(b=r(n().mark((function t(){var r,o,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e||null===u){t.next=17;break}if(!u.map((function(t){return t.name})).includes(d||g)){t.next=6;break}alert("중복된 그룹명은 사용할 수 없습니다."),t.next=15;break;case 6:return r=e.userId,o=u.filter((function(t){return t.name===g}))[0]._id,t.next=10,fetch("".concat(l,"/bookmark/update"),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:r,groupId:o,name:d||g,groupIcon:m})});case 10:return i=t.sent,t.next=13,i.json();case 13:!0===t.sent.success?window.location.reload():alert("다시 시도해주세요.");case 15:t.next=19;break;case 17:alert("로그아웃 되었습니다.\n다시 로그인해주세요."),j("/login");case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return c.useEffect((function(){if(null!==u){var t=u.filter((function(t){return t.name===g}))[0].groupIcon;x(y(t===m))}}),[m]),c.useEffect((function(){p(null!==d&&""!==d&&d!==g||!1===v?{disabled:!1}:{disabled:!0})}),[d,v,g,v]),i.jsx("button",{type:"button",className:"button-groupname-complete ".concat(h?"on":""),onClick:function(){return b.apply(this,arguments)},children:"완료"})}function _(t){var n=t.userInfo,e=t.groupList,r=s(),u=f((function(t){return t.myListSlice.editGroupModalOn})),l=o(c.useState(!1),2),p=l[0],y=l[1];return c.useEffect((function(){y(!0===u)}),[u]),i.jsxs("article",{className:"modal-group-item ".concat(p?"on":""),children:[i.jsx("h4",{children:"그룹 수정"}),i.jsxs("form",{action:"",children:[i.jsx(N,{}),i.jsx(b,{}),i.jsx(O,{userInfo:n,groupList:e})]}),i.jsx("button",{type:"button",className:"button-close",onClick:function(){var t=document.querySelector(".app");null==t||t.classList.remove("modal-mode"),r(h(!1)),r(m(null)),r(d("/images/icon-star.svg"))},children:i.jsx("img",{src:a,alt:"X 아이콘",className:"img-close"})})]})}function G(){var t=s(),n=f((function(t){return t.myListSlice.groupNameOrder})),e=f((function(t){return t.myListSlice.orderModalOn})),r=o(c.useState(!1),2),u=r[0],l=r[1];function h(n){t(g(n.currentTarget.innerText)),p()}function p(){var n=document.querySelector(".app");null==n||n.classList.remove("modal-mode"),t(v(!1))}return c.useEffect((function(){l(!0===e)}),[e]),i.jsxs("article",{className:"modal-group-item ".concat(u?"on":""),children:[i.jsx("h4",{children:"정렬기준"}),i.jsxs("div",{className:"container-button",children:[i.jsx("button",{type:"button",onClick:h,className:"button-groupname-order ".concat("등록순"===n?"on":""),children:"등록순"}),i.jsx("button",{type:"button",onClick:h,className:"button-groupname-order ".concat("이름순"===n?"on":""),children:"이름순"})]}),i.jsx("button",{type:"button",className:"button-close",onClick:p,children:i.jsx("img",{src:a,alt:"X 아이콘",className:"img-close"})})]})}function P(t){var n=t.userInfo,e=t.groupList,r=f((function(t){return t.myListSlice.editGroupModalOn})),u=o(c.useState(!1),2),a=u[0],l=u[1],p=s();function y(t){if("app modal-mode"===t.target.className){var n=document.querySelector(".app");null==n||n.classList.remove("modal-mode"),p(v(!1)),p(h(!1)),p(m(null)),p(d("/images/icon-star.svg"))}}return c.useEffect((function(){l(!0===r)}),[r]),c.useEffect((function(){return a&&document.addEventListener("click",y),function(){document.removeEventListener("click",y)}}),[a]),i.jsxs("div",{className:"modal-group ".concat(a?"on":""),children:[i.jsx(G,{}),i.jsx(_,{userInfo:n,groupList:e})]})}t("documentProps",{title:"북마크 그룹 목록 편집 | Green Maps",description:"북마크 그룹 목록 편집 페이지"});function T(t){var n=t.userInfo,r=t.groupList,u=o(c.useState(null),2),a=u[0],s=u[1];return c.useEffect((function(){s(null!==n?n.bookmarkList:null)}),[n]),i.jsx("main",{className:"main-group-list",children:i.jsxs("section",{children:[i.jsx("h3",{className:"sr-only",children:"내 북마크 그룹 목록"}),i.jsx(e,{}),a&&r&&i.jsx(E,{userInfo:n,bookmarkList:a,groupList:r})]})})}}}}))}();