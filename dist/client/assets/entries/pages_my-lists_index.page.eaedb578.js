import{_ as c}from"../chunks/chunk-101896b7.js";import{R as a,r as i,j as r}from"../chunks/chunk-0ad0329c.js";import{T as u}from"../chunks/chunk-fa93ea2c.js";import{N as f}from"../chunks/chunk-5b1b7faa.js";import{M as x}from"../chunks/chunk-5218c668.js";import{A as j}from"../chunks/chunk-f5cf074f.js";import{u as l}from"../chunks/chunk-aaa4175a.js";import{L as m}from"../chunks/chunk-c9eff144.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-87bfa915.js";import"../chunks/chunk-e8bc0b58.js";import"../chunks/chunk-d7506ad7.js";import"../chunks/chunk-9ae07e36.js";import"../chunks/chunk-621f058a.js";import"../chunks/chunk-bf08ca9a.js";import"../chunks/chunk-d32bad98.js";import"../chunks/chunk-5ed30243.js";import"../chunks/chunk-2b326172.js";import"../chunks/chunk-f3107ac8.js";import"../chunks/chunk-91c16fc8.js";import"../chunks/chunk-63b910cd.js";import"../chunks/chunk-370f01b3.js";import"../chunks/chunk-3258e6a6.js";import"../chunks/chunk-0249643f.js";const L=a.lazy(()=>c(()=>import("../chunks/chunk-3e0f2cfa.js"),["assets/chunks/chunk-3e0f2cfa.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-f5cf074f.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-87bfa915.js","assets/chunks/chunk-41308c4f.js","assets/chunks/chunk-81b7fed0.js","assets/chunks/chunk-1591098a.js","assets/chunks/chunk-621f058a.js","assets/chunks/chunk-bf08ca9a.js","assets/chunks/chunk-3258e6a6.js"]));function U(){const[t,o]=l(),[p,e]=i.useState(null);return i.useEffect(()=>{if(o)try{(async()=>{const n=await(await fetch(`${j}/bookmark/${o==null?void 0:o.userId}`)).json();e(n.groupList)})()}catch(s){console.error(s)}},[o]),t&&o?r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"내 식당 목록"}),r.jsx(a.Suspense,{fallback:r.jsx(m,{}),children:r.jsx(L,{userInfo:o,groupList:p})}),r.jsx(f,{isLoggedIn:t}),r.jsx(x,{userInfo:o})]}):r.jsx(m,{})}export{U as Page};
