import{_}from"../chunks/chunk-101896b7.js";import{R as y,r as s,j as e}from"../chunks/chunk-0ad0329c.js";import{T as j}from"../chunks/chunk-fa93ea2c.js";import{u as o}from"../chunks/chunk-da345742.js";import{a as T,A as x}from"../chunks/chunk-f5cf074f.js";import{L as S}from"../chunks/chunk-c9eff144.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-0249643f.js";const A=y.lazy(()=>_(()=>import("../chunks/chunk-29b0b2a2.js"),["assets/chunks/chunk-29b0b2a2.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-621f058a.js","assets/chunks/chunk-bf08ca9a.js","assets/chunks/chunk-f5cf074f.js","assets/chunks/chunk-7ba4ee63.js","assets/chunks/chunk-525dc8c4.js","assets/chunks/chunk-4a7b83e5.js","assets/chunks/chunk-dfbf6de9.js"])),k={title:"게시글 검색 | Green Maps",description:"게시글 검색 페이지"};function B(r){var R;const n=T();n({type:"postSlice/SEARCH",KEYWORD:((R=r.routeParams)==null?void 0:R.keyword)||""});const[c,i]=s.useState([]),[a,P]=s.useState(!1);s.useEffect(()=>{typeof a<"u"&&(P(!0),i(r.postInfo.lists))},[]);const p=o(t=>t.postSlice.KEYWORD),l=o(t=>t.postSlice.SUBJECT),u=o(t=>t.postSlice.post.CURRENT_PAGE),m=o(t=>t.postSlice.BOUNDARY),d=o(t=>t.postSlice.ORDERBY),f=20,E=s.useCallback(async()=>{try{return await(await fetch(`${x}/posts?keyword=${p}&subject=${encodeURIComponent(l)}&page=${u}&limit=${f}&boundary=${m}&orderby=${d}`,{headers:{"Content-Type":"application/json"}})).json()}catch(t){console.error(t)}},[p,l,u,m,d]);return s.useEffect(()=>{E().then(t=>{i(t.currentPage===1?t.lists:[...c,...t.lists]),n({type:"postSlice/POST_IN_PAGE",TOTAL:t.total,CURRENT_PAGE:t.currentPage})})},[E]),a?e.jsxs(y.Suspense,{fallback:e.jsx(S,{}),children:[e.jsx(j,{title:"검색 결과"}),e.jsx(A,{posts:c,limit:f})]}):e.jsx(S,{})}export{B as Page,k as documentProps};