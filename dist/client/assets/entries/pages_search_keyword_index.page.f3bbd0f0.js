import{j as e,r as l,R as v}from"../chunks/chunk-0ad0329c.js";import{T as N}from"../chunks/chunk-f9ee32f0.js";import{N as E}from"../chunks/chunk-5b1b7faa.js";import{c as d,b as u,A as R}from"../chunks/chunk-0fac4abb.js";import{b as L,c as w,R as A}from"../chunks/chunk-05b8c856.js";import{A as m,p as f,q as y}from"../chunks/chunk-7de418d3.js";import{P as T}from"../chunks/chunk-1b57fcb1.js";import{u as _}from"../chunks/chunk-5786f306.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-8da5e704.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-c4e4febb.js";import"../chunks/chunk-101896b7.js";import"../chunks/chunk-c949b376.js";import"../chunks/chunk-af981888.js";import"../chunks/chunk-e8bc0b58.js";import"../chunks/chunk-3258e6a6.js";function B(){const t=d(),r=()=>{const c=Array.from(document.querySelectorAll(".checkbox-category-filter")),n=c.length,a=c.filter(s=>s.checked===!0).map(s=>s.value);if(a.length===0){alert("업종을 선택해주세요.");return}n===a.length?t(m("*")):t(m(a))};return e.jsx("button",{type:"button",onClick:r,className:"button-apply-filter",children:"적용"})}function I(){const t=d(),[r,c]=l.useState(()=>{const s=Object.keys(L).filter(i=>i!=="기타");return t(m([...s].sort())),[...s].sort()}),n=l.useRef([]);l.useEffect(()=>{n.current=Array(r.length).fill(null).map(()=>v.createRef())},[r]);const a=()=>{n.current.map(s=>{s.current!==null&&(s.current.checked=!1)})};return e.jsxs("div",{className:"container-filter",children:[e.jsx("em",{className:"txt-filter-name",children:"업종"}),e.jsx("div",{children:e.jsxs("form",{children:[e.jsx(B,{}),e.jsxs("div",{className:"container-button-all",children:[e.jsx("button",{type:"button",onClick:a,children:"전체 해제"}),e.jsx("button",{type:"reset",children:"전체 선택"})]}),e.jsx("div",{className:"wrapper-checkbox-category reuse-in-result",children:r.map((s,i)=>e.jsx(w,{name:s,index:i,ref:n.current[i]},Math.random()))})]})})]})}function P(){const t=d(),r=["채식음식점","채식가능음식점"];l.useEffect(()=>{t(f([]))},[]);const c=()=>{const a=Array.from(document.querySelectorAll(".checkbox-cert-filter")).filter(s=>s.checked===!0).map(s=>s.value);t(f(a))};return e.jsxs("div",{className:"container-filter",children:[e.jsx("em",{className:"txt-filter-name",children:"채식 인증"}),e.jsx("div",{children:e.jsxs("form",{children:[e.jsx("button",{type:"button",onClick:c,className:"button-apply-filter",children:"적용"}),e.jsx("div",{className:"wrapper-checkbox-category reuse-in-result",children:r.map((n,a)=>e.jsx(D,{name:n,index:a},Math.random()))})]})})]})}function D({name:t,index:r}){const c=u(i=>i.mapSlice.selectedCert),[n,a]=l.useState(!0),s=i=>{a(i.target.checked)};return l.useEffect(()=>{a(c.includes(t))},[c]),e.jsxs("div",{className:"container-check-cert",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:s,id:`checkboxCert-${r}`,className:"checkbox-cert-filter",value:t}),e.jsx("label",{htmlFor:`checkboxCert-${r}`,children:t})]})}function F(){return e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only","aria-label":"필터"}),e.jsx(I,{}),e.jsx(P,{})]})}function $(){const t=d();l.useEffect(()=>{t(y("relevance"))},[]);const r=c=>{t(y(c.target.value))};return e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only","aria-label":"정렬"}),e.jsx("div",{className:"container-sort",children:e.jsxs("form",{children:[e.jsx("label",{htmlFor:"selectBoxSortInSearch",children:"정렬"}),e.jsxs("select",{name:"",id:"selectBoxSortInSearch",onChange:r,children:[e.jsx("option",{value:"relevance",children:"관련도"}),e.jsx("option",{value:"rating",children:"별점순"}),e.jsx("option",{value:"review",children:"리뷰순"}),e.jsx("option",{value:"distance",children:"거리순"})]})]})})]})}function O(){return e.jsxs("div",{children:[e.jsx(F,{}),e.jsx($,{})]})}function M({total:t,perPage:r,searchListInPage:c}){return e.jsxs("div",{className:"wrapper-result-in-radius reuse-in-search",children:[e.jsxs("p",{children:["검색 결과(",t,")"]}),c.length>0?e.jsxs(e.Fragment,{children:[e.jsx(q,{searchListInPage:c}),e.jsx(T,{count:t,perPage:r})]}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"검색 결과가 없어요."})]})]})}function q({searchListInPage:t}){return e.jsx("ul",{className:"ul-restaurant-in-radius reuse-in-search",children:t.map((r,c)=>e.jsx(A,{restaurantInfo:r,isFirst:c===0},Math.random()))})}function G({keyword:t,total:r,perPage:c,searchListInPage:n}){return e.jsxs("main",{className:"main-search-result",children:[e.jsx(O,{}),e.jsx(M,{total:r,perPage:c,searchListInPage:n})]})}function ie(t){var j;const[r,c]=_(),n=((j=t.routeParams)==null?void 0:j.keyword)||"",a=u(o=>o.paginationSlice.currentPage),s=u(o=>o.mapSlice.selectedCategory),i=u(o=>o.mapSlice.selectedCert),p=u(o=>o.mapSlice.resultOrderBy),h=u(o=>o.mapSlice.currentLocation),[g,C]=l.useState([]),[k,S]=l.useState(0),[x,K]=l.useState(20);l.useEffect(()=>{b().then(o=>{o.success&&(C(o.lists),S(o.total))})},[a,s,i,p,h]);async function b(){return await(await fetch(`${R}/search/?keyword=${n}&page=${a}&limit=${x}&orderBy=${p}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:s,cert:i,currentLocation:[h[1],h[0]]})})).json()}return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:`${n} 🔍`}),e.jsx(G,{keyword:n,total:k,perPage:x,searchListInPage:g}),e.jsx(E,{isLoggedIn:r})]})}export{ie as Page};
