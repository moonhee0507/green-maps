import{_ as u}from"../chunks/chunk-101896b7.js";import{R as a,r as p,j as t}from"../chunks/chunk-0ad0329c.js";import{T as f}from"../chunks/chunk-8eee58da.js";import{N as l}from"../chunks/chunk-5b1b7faa.js";import{M as x}from"../chunks/chunk-37b2a704.js";import{u as k}from"../chunks/chunk-b60bc363.js";import{L as s}from"../chunks/chunk-c9eff144.js";import"../chunks/chunk-ee696397.js";import"../chunks/chunk-02d17786.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-87bfa915.js";import"../chunks/chunk-e8bc0b58.js";import"../chunks/chunk-a2747114.js";import"../chunks/chunk-9ae07e36.js";import"../chunks/chunk-54587732.js";import"../chunks/chunk-4ee9bcfe.js";import"../chunks/chunk-a6e5261d.js";import"../chunks/chunk-b82d406b.js";import"../chunks/chunk-2b326172.js";import"../chunks/chunk-f3107ac8.js";import"../chunks/chunk-91c16fc8.js";import"../chunks/chunk-63b910cd.js";import"../chunks/chunk-370f01b3.js";import"../chunks/chunk-3258e6a6.js";import"../chunks/chunk-0249643f.js";function g(){import.meta.url,import("_").catch(()=>1);async function*i(){}}const J={title:"내 북마크 | Green Maps",description:"북마크 목록 페이지"},_=a.lazy(()=>u(()=>import("../chunks/chunk-5e1f7b0c.js"),["assets/chunks/chunk-5e1f7b0c.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-ee696397.js","assets/chunks/chunk-02d17786.js","assets/chunks/chunk-87bfa915.js","assets/chunks/chunk-41308c4f.js","assets/chunks/chunk-3258e6a6.js","assets/chunks/chunk-a3762b34.js","assets/chunks/chunk-051b4061.js"]));function K(i){const{routeParams:o}=i,[m,r]=k(),[e,n]=p.useState([]);return p.useEffect(()=>{r!==null&&n(r.bookmarkList.filter(c=>c.groupName===(o==null?void 0:o.bookmarkGroupName)))},[r]),m?t.jsxs(t.Fragment,{children:[t.jsx(f,{title:(o==null?void 0:o.bookmarkGroupName)||""}),t.jsx(a.Suspense,{fallback:t.jsx(s,{}),children:t.jsx(_,{info:r,groupName:(o==null?void 0:o.bookmarkGroupName)||"",lists:e})}),t.jsx(l,{isLoggedIn:m}),t.jsx(x,{userInfo:r})]}):t.jsx(s,{})}export{K as Page,g as __vite_legacy_guard,J as documentProps};