import{_ as c}from"../chunks/chunk-101896b7.js";import{R as m,r as s,j as t}from"../chunks/chunk-0ad0329c.js";import{T as u}from"../chunks/chunk-8eee58da.js";import{N as f}from"../chunks/chunk-5b1b7faa.js";import{M as l}from"../chunks/chunk-37b2a704.js";import{A as x}from"../chunks/chunk-ee696397.js";import{u as _}from"../chunks/chunk-b60bc363.js";import{L as a}from"../chunks/chunk-c9eff144.js";import"../chunks/chunk-02d17786.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-87bfa915.js";import"../chunks/chunk-e8bc0b58.js";import"../chunks/chunk-a2747114.js";import"../chunks/chunk-9ae07e36.js";import"../chunks/chunk-54587732.js";import"../chunks/chunk-4ee9bcfe.js";import"../chunks/chunk-a6e5261d.js";import"../chunks/chunk-b82d406b.js";import"../chunks/chunk-2b326172.js";import"../chunks/chunk-f3107ac8.js";import"../chunks/chunk-91c16fc8.js";import"../chunks/chunk-63b910cd.js";import"../chunks/chunk-370f01b3.js";import"../chunks/chunk-3258e6a6.js";import"../chunks/chunk-0249643f.js";function g(){import.meta.url,import("_").catch(()=>1);async function*o(){}}const V={title:"내 목록 | Green Maps",description:"북마크, 좋아요 표시한 채식 식당 목록"},d=m.lazy(()=>c(()=>import("../chunks/chunk-b44a1373.js"),["assets/chunks/chunk-b44a1373.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-ee696397.js","assets/chunks/chunk-02d17786.js","assets/chunks/chunk-87bfa915.js","assets/chunks/chunk-41308c4f.js","assets/chunks/chunk-a3762b34.js","assets/chunks/chunk-051b4061.js","assets/chunks/chunk-54587732.js","assets/chunks/chunk-4ee9bcfe.js","assets/chunks/chunk-3258e6a6.js"]));function q(){const[o,r]=_(),[p,e]=s.useState(null);return s.useEffect(()=>{if(r)try{(async()=>{const n=await(await fetch(`${x}/bookmark/${r==null?void 0:r.userId}`)).json();e(n.groupList)})()}catch(i){console.error(i)}},[r]),o&&r?t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"내 식당 목록"}),t.jsx(m.Suspense,{fallback:t.jsx(a,{}),children:t.jsx(d,{userInfo:r,groupList:p})}),t.jsx(f,{isLoggedIn:o}),t.jsx(l,{userInfo:r})]}):t.jsx(a,{})}export{q as Page,g as __vite_legacy_guard,V as documentProps};
