import{r as s,j as t}from"../chunks/chunk-0ad0329c.js";import{c,A as f}from"../chunks/chunk-f6dd005f.js";import{T as u}from"../chunks/chunk-f401e884.js";import{C as d}from"../chunks/chunk-d578d42d.js";import{e as x}from"../chunks/chunk-8da5e704.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-7deb6bd9.js";import"../chunks/chunk-101896b7.js";function T(e){const r=c(),{postId:a}=e.routeParams,[n,i]=s.useState(null),[o,p]=s.useState(!1);return s.useEffect(()=>{typeof o<"u"&&p(!0),(async()=>{const m=await(await fetch(`${f}/posts/${a}`)).json();i(m)})(),r(x(!0))},[]),t.jsxs(t.Fragment,{children:[t.jsx(u,{title:"글 수정"}),o&&t.jsx(d,{postInfo:n})]})}export{T as Page};