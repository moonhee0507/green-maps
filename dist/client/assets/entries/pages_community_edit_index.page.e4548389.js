import{r as s,j as t}from"../chunks/chunk-0ad0329c.js";import{b as f,A as c}from"../chunks/chunk-f5cf074f.js";import{T as u}from"../chunks/chunk-fa93ea2c.js";import{C as d}from"../chunks/chunk-91b39080.js";import{E as x}from"../chunks/chunk-41308c4f.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-5e884567.js";import"../chunks/chunk-aaa4175a.js";import"../chunks/chunk-621f058a.js";import"../chunks/chunk-bf08ca9a.js";import"../chunks/chunk-101896b7.js";function C(r){const e=f(),{postId:a}=r.routeParams,[i,p]=s.useState(null),[o,n]=s.useState(!1);return s.useEffect(()=>{typeof o<"u"&&n(!0),(async()=>{const m=await(await fetch(`${c}/posts/${a}`)).json();p(m)})(),e(x(!0))},[]),t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"글 수정"}),o&&t.jsx(d,{postInfo:i})]})}export{C as Page};
