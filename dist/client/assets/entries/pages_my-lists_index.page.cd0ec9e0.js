import{_ as c}from"../chunks/chunk-101896b7.js";import{R as a,r as i,j as r}from"../chunks/chunk-0ad0329c.js";import{T as u}from"../chunks/chunk-366a422c.js";import{N as f}from"../chunks/chunk-5b1b7faa.js";import{M as x}from"../chunks/chunk-6a2673d5.js";import{A as j}from"../chunks/chunk-8f8abf42.js";import{u as l}from"../chunks/chunk-8c599d12.js";import{L as m}from"../chunks/chunk-3253a6a3.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-87bfa915.js";import"../chunks/chunk-e8bc0b58.js";import"../chunks/chunk-706a1cea.js";import"../chunks/chunk-9ae07e36.js";import"../chunks/chunk-c949b376.js";import"../chunks/chunk-af981888.js";import"../chunks/chunk-dbf1858e.js";import"../chunks/chunk-255b6daf.js";import"../chunks/chunk-2b326172.js";import"../chunks/chunk-f3107ac8.js";import"../chunks/chunk-91c16fc8.js";import"../chunks/chunk-63b910cd.js";import"../chunks/chunk-370f01b3.js";import"../chunks/chunk-3258e6a6.js";const L=a.lazy(()=>c(()=>import("../chunks/chunk-fc27d4d9.js"),["assets/chunks/chunk-fc27d4d9.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-8f8abf42.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-87bfa915.js","assets/chunks/chunk-41308c4f.js","assets/chunks/chunk-3359c289.js","assets/chunks/chunk-8c14dae8.js","assets/chunks/chunk-c949b376.js","assets/chunks/chunk-af981888.js","assets/chunks/chunk-3258e6a6.js"]));function O(){const[t,o]=l(),[p,e]=i.useState(null);return i.useEffect(()=>{if(o)try{(async()=>{const n=await(await fetch(`${j}/bookmark/${o==null?void 0:o.userId}`)).json();e(n.groupList)})()}catch(s){console.error(s)}},[o]),t&&o?r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"내 식당 목록"}),r.jsx(a.Suspense,{fallback:r.jsx(m,{}),children:r.jsx(L,{userInfo:o,groupList:p})}),r.jsx(f,{isLoggedIn:t}),r.jsx(x,{userInfo:o})]}):r.jsx(m,{})}export{O as Page};