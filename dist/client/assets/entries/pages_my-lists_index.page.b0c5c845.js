import{_ as c}from"../chunks/chunk-101896b7.js";import{R as e,r as i,j as r}from"../chunks/chunk-93156e5d.js";import{T as u}from"../chunks/chunk-7fa71246.js";import{N as f}from"../chunks/chunk-1989159b.js";import{M as l}from"../chunks/chunk-d97045ce.js";import{A as x}from"../chunks/chunk-c1371adf.js";import{u as d}from"../chunks/chunk-3a1767e4.js";import{L as a}from"../chunks/chunk-4d100f1e.js";import"../chunks/chunk-1ef25d43.js";import"../chunks/chunk-99ce4f1c.js";import"../chunks/chunk-605f7eb6.js";import"../chunks/chunk-e8bc0b58.js";import"../chunks/chunk-d57efc88.js";import"../chunks/chunk-9ae07e36.js";import"../chunks/chunk-58beb195.js";import"../chunks/chunk-0bbcfb89.js";import"../chunks/chunk-c4b708ad.js";import"../chunks/chunk-80cebf31.js";import"../chunks/chunk-0cecfb14.js";import"../chunks/chunk-5ceb8754.js";import"../chunks/chunk-bb7c4fe4.js";import"../chunks/chunk-3258e6a6.js";import"../chunks/chunk-1de3b966.js";const D={title:"내 목록 | Green Maps",description:"북마크, 좋아요 표시한 채식 식당 목록"},j=e.lazy(()=>c(()=>import("../chunks/chunk-6c2e0009.js"),["assets/chunks/chunk-6c2e0009.js","assets/chunks/chunk-93156e5d.js","assets/chunks/chunk-c1371adf.js","assets/chunks/chunk-1ef25d43.js","assets/chunks/chunk-605f7eb6.js","assets/chunks/chunk-99ce4f1c.js","assets/chunks/chunk-4b01acbc.js","assets/chunks/chunk-35151331.js","assets/chunks/chunk-3258e6a6.js"]));function F(){const[t,o]=d(),[m,p]=i.useState(null);return i.useEffect(()=>{if(o)try{(async()=>{const n=await(await fetch(`${x}/bookmark/${o==null?void 0:o.userId}`)).json();p(n.groupList)})()}catch(s){console.error(s)}},[o]),t&&o?r.jsxs(r.Fragment,{children:[r.jsx(u,{title:"내 식당 목록"}),r.jsx(e.Suspense,{fallback:r.jsx(a,{}),children:r.jsx(j,{userInfo:o,groupList:m})}),r.jsx(f,{isLoggedIn:t}),r.jsx(l,{userInfo:o})]}):r.jsx(a,{})}export{F as Page,D as documentProps};
//# sourceMappingURL=pages_my-lists_index.page.b0c5c845.js.map