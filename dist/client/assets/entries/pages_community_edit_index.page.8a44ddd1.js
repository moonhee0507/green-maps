import{r as s,j as t}from"../chunks/chunk-0ad0329c.js";import{c,A as f}from"../chunks/chunk-b4acbe02.js";import{T as u}from"../chunks/chunk-315c8d55.js";import{C as d}from"../chunks/chunk-ff6224f1.js";import{E as x}from"../chunks/chunk-41308c4f.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-02989719.js";import"../chunks/chunk-101896b7.js";function T(r){const e=c(),{postId:a}=r.routeParams,[n,i]=s.useState(null),[o,p]=s.useState(!1);return s.useEffect(()=>{typeof o<"u"&&p(!0),(async()=>{const m=await(await fetch(`${f}/posts/${a}`)).json();i(m)})(),e(x(!0))},[]),t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"글 수정"}),o&&t.jsx(d,{postInfo:n})]})}export{T as Page};