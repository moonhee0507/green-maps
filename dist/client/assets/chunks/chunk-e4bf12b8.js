import{r as l,j as e}from"./chunk-0ad0329c.js";import{u as o}from"./chunk-da345742.js";import{n as a}from"./chunk-621f058a.js";import{a as i}from"./chunk-f5cf074f.js";import{P as u}from"./chunk-f2fe287b.js";import"./chunk-bf08ca9a.js";import"./chunk-525dc8c4.js";import"./chunk-4a7b83e5.js";import"./chunk-dfbf6de9.js";function h(){const s=o(c=>c.postSlice.KEYWORD),t=l.useRef(null);function n(){var r;const c=`/community/search/${(r=t.current)==null?void 0:r.value}`;a(c,{keepScrollPosition:!0})}return e.jsxs("div",{className:"container-search-input",children:[e.jsx("label",{htmlFor:"communitySearchResult",className:"sr-only",children:"게시글 검색하기"}),e.jsx("input",{type:"search",id:"communitySearchResult",ref:t,defaultValue:s}),e.jsx("button",{onClick:n,children:"검색"})]})}function m(){const s=i();function t(n){s({type:"postSlice/SUBJECT_STATE",SUBJECT:n==null?void 0:n.target.value})}return e.jsxs("div",{className:"container-search-select",children:[e.jsx("label",{htmlFor:"communitySearchSelect",className:"sr-only",children:"말머리 선택"}),e.jsxs("select",{name:"subjects",id:"communitySearchSelect",onChange:t,children:[e.jsx("option",{value:"",children:"전체 게시판"}),e.jsx("option",{value:"공지사항",children:"공지사항"}),e.jsx("option",{value:"🥑채식얘기",children:"🥑채식얘기"}),e.jsx("option",{value:"⚽운동얘기",children:"⚽운동얘기"})]})]})}function d(){return e.jsxs("div",{children:[e.jsx(h,{}),e.jsx(m,{})]})}function p(){const s=i();function t(n){s({type:"postSlice/SEARCH_POOL",BOUNDARY:n.target.value})}return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"boundarySelect",children:"범위"}),e.jsxs("select",{id:"boundarySelect",onChange:t,className:"select-community-search",children:[e.jsx("option",{value:"tc",children:"제목+내용"}),e.jsx("option",{value:"t",children:"제목"}),e.jsx("option",{value:"c",children:"내용"}),e.jsx("option",{value:"n",children:"글작성자"})]})]})}function x(){const s=i();function t(n){s({type:"postSlice/SEARCH_ORDER",ORDERBY:n.target.value})}return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"orderBySelect",children:"정렬"}),e.jsxs("select",{id:"orderBySelect",onChange:t,className:"select-community-search",children:[e.jsx("option",{value:"latest",children:"최신순"}),e.jsx("option",{value:"accuracy",children:"정확도"}),e.jsx("option",{value:"comment",children:"댓글"})]})]})}function j(){return e.jsxs("div",{className:"wrapper-selectbox-in-result",children:[e.jsx(p,{}),e.jsx(x,{})]})}function S(){const s=o(t=>t.postSlice.post.TOTAL);return e.jsxs("div",{className:"result-community-detail",children:[e.jsx("p",{className:"txt-total-search",children:e.jsxs("span",{children:[s||0,"건"]})}),e.jsx(j,{})]})}function y(){return e.jsxs("div",{style:{position:"sticky",top:0},children:[e.jsx(d,{}),e.jsx(S,{})]})}function f(s){const{posts:t,limit:n}=s;return e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only",children:"검색결과"}),e.jsx(u,{posts:t,limit:n})]})}function D(s){const{posts:t,limit:n}=s;return e.jsxs("main",{className:"community-search-main",children:[e.jsx(y,{}),e.jsx(f,{posts:t,limit:n})]})}export{D as default};
