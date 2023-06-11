import{r,j as e}from"../chunks/chunk-0ad0329c.js";import{T as f}from"../chunks/chunk-f401e884.js";import{u as c}from"../chunks/chunk-da345742.js";import{n as R}from"../chunks/chunk-c949b376.js";import{a,A as E}from"../chunks/chunk-f6dd005f.js";import{P as C}from"../chunks/chunk-9ed50a3f.js";import"../chunks/chunk-8da5e704.js";import"../chunks/chunk-af981888.js";import"../chunks/chunk-b82a1d50.js";import"../chunks/chunk-4a7b83e5.js";import"../chunks/chunk-dfbf6de9.js";function g(){const n=c(i=>i.postSlice.KEYWORD),s=r.useRef(null);function o(){var l;const i=`/community/search/${(l=s.current)==null?void 0:l.value}`;R(i,{keepScrollPosition:!0})}return e.jsxs("div",{className:"container-search-input",children:[e.jsx("label",{htmlFor:"communitySearchResult",className:"sr-only",children:"게시글 검색하기"}),e.jsx("input",{type:"search",id:"communitySearchResult",ref:s,defaultValue:n}),e.jsx("button",{onClick:o,children:"검색"})]})}function v(){const n=a();function s(o){n({type:"postSlice/SUBJECT_STATE",SUBJECT:o==null?void 0:o.target.value})}return e.jsxs("div",{className:"container-search-select",children:[e.jsx("label",{htmlFor:"communitySearchSelect",className:"sr-only",children:"말머리 선택"}),e.jsxs("select",{name:"subjects",id:"communitySearchSelect",onChange:s,children:[e.jsx("option",{value:"",children:"전체 게시판"}),e.jsx("option",{value:"공지사항",children:"공지사항"}),e.jsx("option",{value:"🥑채식얘기",children:"🥑채식얘기"}),e.jsx("option",{value:"⚽운동얘기",children:"⚽운동얘기"})]})]})}function B(){return e.jsxs("div",{children:[e.jsx(g,{}),e.jsx(v,{})]})}function b(){const n=a();function s(o){n({type:"postSlice/SEARCH_POOL",BOUNDARY:o.target.value})}return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"boundarySelect",children:"범위"}),e.jsxs("select",{id:"boundarySelect",onChange:s,children:[e.jsx("option",{value:"tc",children:"제목+내용"}),e.jsx("option",{value:"t",children:"제목"}),e.jsx("option",{value:"c",children:"내용"}),e.jsx("option",{value:"n",children:"글작성자"})]})]})}function P(){const n=a();function s(o){n({type:"postSlice/SEARCH_ORDER",ORDERBY:o.target.value})}return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"orderBySelect",children:"정렬"}),e.jsxs("select",{id:"orderBySelect",onChange:s,children:[e.jsx("option",{value:"latest",children:"최신순"}),e.jsx("option",{value:"accuracy",children:"정확도"}),e.jsx("option",{value:"comment",children:"댓글"})]})]})}function T(){return e.jsxs("div",{children:[e.jsx(b,{}),e.jsx(P,{})]})}function O(){const n=c(s=>s.postSlice.post.TOTAL);return e.jsxs("div",{className:"result-community-detail",children:[e.jsx("p",{className:"txt-total-search",children:e.jsxs("span",{children:[n||0,"건"]})}),e.jsx(T,{})]})}function A(){return e.jsxs("div",{style:{position:"sticky",top:0},children:[e.jsx(B,{}),e.jsx(O,{})]})}function N(n){const{posts:s,limit:o}=n;return e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only",children:"검색결과"}),e.jsx(C,{posts:s,limit:o})]})}function J(n){var S;const s=a();s({type:"postSlice/SEARCH",KEYWORD:((S=n.routeParams)==null?void 0:S.keyword)||""});const[o,i]=r.useState(n.postInfo.lists),[l,y]=r.useState(!1);r.useEffect(()=>{typeof l<"u"&&y(!0)},[]);const u=c(t=>t.postSlice.KEYWORD),p=c(t=>t.postSlice.SUBJECT),d=c(t=>t.postSlice.post.CURRENT_PAGE),h=c(t=>t.postSlice.BOUNDARY),m=c(t=>t.postSlice.ORDERBY),x=20,j=r.useCallback(async()=>{try{return await(await fetch(`${E}/posts?keyword=${u}&subject=${encodeURIComponent(p)}&page=${d}&limit=${x}&boundary=${h}&orderby=${m}`,{headers:{"Content-Type":"application/json"}})).json()}catch(t){console.error(t)}},[u,p,d,h,m]);return r.useEffect(()=>{j().then(t=>{i(t.currentPage===1?t.lists:[...o,...t.lists]),s({type:"postSlice/POST_IN_PAGE",TOTAL:t.total,CURRENT_PAGE:t.currentPage})})},[j]),e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"검색 결과"}),l&&e.jsx(D,{posts:o,limit:x})]})}function D(n){const{posts:s,limit:o}=n;return e.jsxs("main",{className:"community-search-main",children:[e.jsx(A,{}),e.jsx(N,{posts:s,limit:o})]})}export{J as Page};
