import{_ as f}from"../chunks/chunk-101896b7.js";import{r as o,j as t,R as h}from"../chunks/chunk-0ad0329c.js";import{B as x,u as m,A as P,a as g}from"../chunks/chunk-f5cf074f.js";import{n as S}from"../chunks/chunk-621f058a.js";import{N as _}from"../chunks/chunk-5b1b7faa.js";import"../chunks/chunk-da345742.js";import{u as E}from"../chunks/chunk-aaa4175a.js";import{L as y}from"../chunks/chunk-c9eff144.js";import"../chunks/chunk-bf08ca9a.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-0249643f.js";function b(){const[n,a]=o.useState(!1),c=o.useRef(null);function e(){if(c.current!==null){const r=c.current.value;if(r.length>0){const i=`/community/search/${r}`;S(i,{keepScrollPosition:!0})}else window.alert("검색어를 입력해주세요.")}}return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"search-bar",children:t.jsx("div",{children:n?t.jsxs("div",{children:[t.jsx("label",{htmlFor:"searchItem",className:"sr-only",children:"게시글 검색하기"}),t.jsx("input",{type:"search",id:"searchItem",ref:c,autoFocus:!0})]}):t.jsx("h2",{className:"top-title",children:"게시판"})})}),t.jsx("button",{type:"button",onClick:()=>n?e():a(!0),"aria-label":"식당 검색 버튼",children:"🔍"})]})}function v(){return t.jsxs("div",{className:"top-bar search",children:[t.jsx(x,{}),t.jsx(b,{})]})}const R=h.lazy(()=>f(()=>import("../chunks/chunk-e3a62534.js"),["assets/chunks/chunk-e3a62534.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-621f058a.js","assets/chunks/chunk-bf08ca9a.js","assets/chunks/chunk-5e884567.js","assets/chunks/chunk-f5cf074f.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-aaa4175a.js","assets/chunks/chunk-abab299f.js","assets/chunks/chunk-4a7b83e5.js","assets/chunks/chunk-dfbf6de9.js"]));function U(n){var p;const[a,c]=E(),e=m(s=>s.postSlice.SUBJECT),r=m(s=>s.postSlice.post.CURRENT_PAGE),i=20,[l,d]=o.useState(((p=n.postProps)==null?void 0:p.lists)||[]),u=o.useCallback(async()=>{try{return await(await fetch(`${P}/${e!==""?"subjects/"+e:"posts"}?page=${r}&limit=${i}`,{credentials:"include",headers:{"Content-Type":"application/json"}})).json()}catch(s){console.error(s)}},[r,e]),j=g();return o.useEffect(()=>{u().then(s=>{d(s.currentPage===1?s.lists:[...l,...s.lists]),j({type:"postSlice/POST_IN_PAGE",TOTAL:s.total,CURRENT_PAGE:s.currentPage})})},[u]),t.jsxs(h.Suspense,{fallback:t.jsx(y,{}),children:[t.jsx(v,{}),t.jsx(R,{isLoggedIn:a,posts:l,limit:i}),t.jsx(_,{isLoggedIn:a})]})}export{U as Page};
