import{_}from"../chunks/chunk-101896b7.js";import{R as y,r as s,j as e}from"../chunks/chunk-0ad0329c.js";import{T as j}from"../chunks/chunk-fa93ea2c.js";import{u as o}from"../chunks/chunk-da345742.js";import{a as T,A as x}from"../chunks/chunk-f5cf074f.js";import{L as S}from"../chunks/chunk-c9eff144.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-0249643f.js";const A=y.lazy(()=>_(()=>import("../chunks/chunk-102e4e4d.js"),["assets/chunks/chunk-102e4e4d.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-621f058a.js","assets/chunks/chunk-bf08ca9a.js","assets/chunks/chunk-f5cf074f.js","assets/chunks/chunk-8f791488.js","assets/chunks/chunk-abab299f.js","assets/chunks/chunk-4a7b83e5.js","assets/chunks/chunk-dfbf6de9.js"]));function k(r){var R;const c=T();c({type:"postSlice/SEARCH",KEYWORD:((R=r.routeParams)==null?void 0:R.keyword)||""});const[n,a]=s.useState([]),[i,P]=s.useState(!1);s.useEffect(()=>{typeof i<"u"&&(P(!0),a(r.postInfo.lists))},[]);const p=o(t=>t.postSlice.KEYWORD),l=o(t=>t.postSlice.SUBJECT),u=o(t=>t.postSlice.post.CURRENT_PAGE),m=o(t=>t.postSlice.BOUNDARY),f=o(t=>t.postSlice.ORDERBY),d=20,E=s.useCallback(async()=>{try{return await(await fetch(`${x}/posts?keyword=${p}&subject=${encodeURIComponent(l)}&page=${u}&limit=${d}&boundary=${m}&orderby=${f}`,{headers:{"Content-Type":"application/json"}})).json()}catch(t){console.error(t)}},[p,l,u,m,f]);return s.useEffect(()=>{E().then(t=>{a(t.currentPage===1?t.lists:[...n,...t.lists]),c({type:"postSlice/POST_IN_PAGE",TOTAL:t.total,CURRENT_PAGE:t.currentPage})})},[E]),i?e.jsxs(y.Suspense,{fallback:e.jsx(S,{}),children:[e.jsx(j,{title:"검색 결과"}),e.jsx(A,{posts:n,limit:d})]}):e.jsx(S,{})}export{k as Page};
