import{_ as x}from"../chunks/chunk-101896b7.js";import{r as o,j as s,R as d}from"../chunks/chunk-0ad0329c.js";import{B as P,u as h,A as g,a as _}from"../chunks/chunk-f5cf074f.js";import{N as S}from"../chunks/chunk-c6e08d5d.js";import"../chunks/chunk-da345742.js";import{u as E}from"../chunks/chunk-80567fa3.js";import{L as y}from"../chunks/chunk-857879ef.js";import"../chunks/chunk-1de3b966.js";function b(){const[n,a]=o.useState(!1),c=o.useRef(null);function e(){if(c.current!==null){const r=c.current.value;if(r.length>0){const i=`/community/search/${r}`;window.location.href=i}else window.alert("검색어를 입력해주세요.")}}return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"search-bar",children:s.jsx("div",{children:n?s.jsxs("div",{children:[s.jsx("label",{htmlFor:"searchItem",className:"sr-only",children:"게시글 검색하기"}),s.jsx("input",{type:"search",id:"searchItem",ref:c,autoFocus:!0})]}):s.jsx("h2",{className:"top-title",children:"게시판"})})}),s.jsx("button",{type:"button",onClick:()=>n?e():a(!0),"aria-label":"게시글 검색 버튼",children:"🔍"})]})}function R(){return s.jsxs("div",{className:"top-bar search",children:[s.jsx(P,{}),s.jsx(b,{})]})}const v=d.lazy(()=>x(()=>import("../chunks/chunk-9855c314.js"),["assets/chunks/chunk-9855c314.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-a9de6173.js","assets/chunks/chunk-f5cf074f.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-80567fa3.js","assets/chunks/chunk-525dc8c4.js","assets/chunks/chunk-4a7b83e5.js","assets/chunks/chunk-dfbf6de9.js"]));function $(n){var p,m;const[a,c]=E(),e=h(t=>t.postSlice.SUBJECT),r=h(t=>t.postSlice.post.CURRENT_PAGE),i=20,[l,j]=o.useState(((m=(p=n.pageProps)==null?void 0:p.postProps)==null?void 0:m.lists)||[]),u=o.useCallback(async()=>{try{return await(await fetch(`${g}/${e!==""?"subjects/"+e:"posts"}?page=${r}&limit=${i}`,{credentials:"include",headers:{"Content-Type":"application/json"}})).json()}catch(t){console.error(t)}},[r,e]),f=_();return o.useEffect(()=>{u().then(t=>{j(t.currentPage===1?t.lists:[...l,...t.lists]),f({type:"postSlice/POST_IN_PAGE",TOTAL:t.total,CURRENT_PAGE:t.currentPage})})},[u]),s.jsxs(d.Suspense,{fallback:s.jsx(y,{}),children:[s.jsx(R,{}),s.jsx(v,{isLoggedIn:a,posts:l,limit:i}),s.jsx(S,{isLoggedIn:a})]})}export{$ as Page};
//# sourceMappingURL=pages_community_index.page.5fdace96.js.map
