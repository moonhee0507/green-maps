import{j as o}from"../chunks/chunk-0ad0329c.js";import{T as n}from"../chunks/chunk-2af108cb.js";import{a as p,u as c}from"../chunks/chunk-8f8abf42.js";import{O as l,M as d,a as u}from"../chunks/chunk-dcab5b34.js";import{B as k,M as x}from"../chunks/chunk-00f5a23b.js";import{N as b}from"../chunks/chunk-5b1b7faa.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-e8bc0b58.js";import"../chunks/chunk-5fc5658a.js";import"../chunks/chunk-9ae07e36.js";import"../chunks/chunk-c949b376.js";import"../chunks/chunk-af981888.js";import"../chunks/chunk-ce871bab.js";import"../chunks/chunk-255b6daf.js";import"../chunks/chunk-2b326172.js";import"../chunks/chunk-f3107ac8.js";import"../chunks/chunk-a5dd79e5.js";import"../chunks/chunk-63b910cd.js";import"../chunks/chunk-370f01b3.js";import"../chunks/chunk-8c14dae8.js";import"../chunks/chunk-3c838518.js";function j({lists:a,groupName:r}){const e=p(t=>t.myListSlice.groupNameOrder),i=c();function s(){const t=document.querySelector(".app");t==null||t.classList.add("modal-mode"),i(l(!0))}function m(){const t=document.querySelector(".app");t==null||t.classList.add("modal-mode"),i(d(!0)),i(u(r))}return o.jsxs("div",{className:"style-wrapper-bookmark-detail",children:[o.jsxs("div",{className:"wrapper-groupcount-orderbox",children:[o.jsxs("p",{className:"txt-bookmarkgroup",children:["전체 ",o.jsx("span",{children:a.length})]}),o.jsx("div",{className:"container-order-bookmarkgroup",children:o.jsx("button",{type:"button",className:"button-order-bookmarkgroup",onClick:s,children:e})})]}),o.jsx("button",{type:"button",className:"button-edit-bookmarkgroup",onClick:m,children:"편집하기"})]})}function N({info:a,lists:r,groupName:e}){return o.jsxs("main",{className:"main-bookmarklist",children:[o.jsx(j,{lists:r,groupName:e}),o.jsx(k,{lists:r})]})}function H(a){const{routeParams:r,user:e}=a,{isLoggedIn:i,info:s}=e,m=s==null?void 0:s.bookmarkList.filter(t=>t.groupName===(r==null?void 0:r.bookmarkGroupName));return o.jsxs(o.Fragment,{children:[o.jsx(n,{title:(r==null?void 0:r.bookmarkGroupName)||""}),o.jsx(N,{info:s,groupName:(r==null?void 0:r.bookmarkGroupName)||"",lists:m||[]}),o.jsx(b,{isLoggedIn:i}),o.jsx(x,{userInfo:s})]})}export{H as Page};
