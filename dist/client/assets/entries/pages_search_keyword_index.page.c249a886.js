import{j as e,r as l,R as S}from"../chunks/chunk-0ad0329c.js";import{T as v}from"../chunks/chunk-8a9c80ac.js";import{N}from"../chunks/chunk-5b1b7faa.js";import{u as d,c as u,A as b}from"../chunks/chunk-dcf8ae15.js";import{b as E,c as R,R as L}from"../chunks/chunk-be748a0a.js";import{A as h,p as x,q as j}from"../chunks/chunk-255b6daf.js";import{P as w}from"../chunks/chunk-95c16da0.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-dc2d6887.js";import"../chunks/chunk-101896b7.js";import"../chunks/chunk-c949b376.js";import"../chunks/chunk-af981888.js";import"../chunks/chunk-e8bc0b58.js";import"../chunks/chunk-3258e6a6.js";function A(){const t=d(),r=()=>{const s=Array.from(document.querySelectorAll(".checkbox-category-filter")),n=s.length,a=s.filter(c=>c.checked===!0).map(c=>c.value);if(a.length===0){alert("업종을 선택해주세요.");return}n===a.length?t(h("*")):t(h(a))};return e.jsx("button",{type:"button",onClick:r,className:"button-apply-filter",children:"적용"})}function I(){const t=d(),[r,s]=l.useState(()=>{const c=Object.keys(E).filter(i=>i!=="기타");return t(h([...c].sort())),[...c].sort()}),n=l.useRef([]);l.useEffect(()=>{n.current=Array(r.length).fill(null).map(()=>S.createRef())},[r]);const a=()=>{n.current.map(c=>{c.current!==null&&(c.current.checked=!1)})};return e.jsxs("div",{className:"container-filter",children:[e.jsx("em",{className:"txt-filter-name",children:"업종"}),e.jsx("div",{children:e.jsxs("form",{children:[e.jsx(A,{}),e.jsxs("div",{className:"container-button-all",children:[e.jsx("button",{type:"button",onClick:a,children:"전체 해제"}),e.jsx("button",{type:"reset",children:"전체 선택"})]}),e.jsx("div",{className:"wrapper-checkbox-category reuse-in-result",children:r.map((c,i)=>e.jsx(R,{name:c,index:i,ref:n.current[i]},Math.random()))})]})})]})}function T(){const t=d(),r=["채식음식점","채식가능음식점"];l.useEffect(()=>{t(x([]))},[]);const s=()=>{const a=Array.from(document.querySelectorAll(".checkbox-cert-filter")).filter(c=>c.checked===!0).map(c=>c.value);t(x(a))};return e.jsxs("div",{className:"container-filter",children:[e.jsx("em",{className:"txt-filter-name",children:"채식 인증"}),e.jsx("div",{children:e.jsxs("form",{children:[e.jsx("button",{type:"button",onClick:s,className:"button-apply-filter",children:"적용"}),e.jsx("div",{className:"wrapper-checkbox-category reuse-in-result",children:r.map((n,a)=>e.jsx(B,{name:n,index:a},Math.random()))})]})})]})}function B({name:t,index:r}){const s=u(i=>i.mapSlice.selectedCert),[n,a]=l.useState(!0),c=i=>{a(i.target.checked)};return l.useEffect(()=>{a(s.includes(t))},[s]),e.jsxs("div",{className:"container-check-cert",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:c,id:`checkboxCert-${r}`,className:"checkbox-cert-filter",value:t}),e.jsx("label",{htmlFor:`checkboxCert-${r}`,children:t})]})}function P(){return e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only","aria-label":"필터"}),e.jsx(I,{}),e.jsx(T,{})]})}function _(){const t=d();l.useEffect(()=>{t(j("relevance"))},[]);const r=s=>{t(j(s.target.value))};return e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only","aria-label":"정렬"}),e.jsx("div",{className:"container-sort",children:e.jsxs("form",{children:[e.jsx("label",{htmlFor:"selectBoxSortInSearch",children:"정렬"}),e.jsxs("select",{name:"",id:"selectBoxSortInSearch",onChange:r,children:[e.jsx("option",{value:"relevance",children:"관련도"}),e.jsx("option",{value:"rating",children:"별점순"}),e.jsx("option",{value:"review",children:"리뷰순"}),e.jsx("option",{value:"distance",children:"거리순"})]})]})})]})}function D(){return e.jsxs("div",{children:[e.jsx(P,{}),e.jsx(_,{})]})}function F({total:t,perPage:r,searchListInPage:s}){return e.jsxs("div",{className:"wrapper-result-in-radius reuse-in-search",children:[e.jsxs("p",{children:["검색 결과(",t,")"]}),s.length>0?e.jsxs(e.Fragment,{children:[e.jsx($,{searchListInPage:s}),e.jsx(w,{count:t,perPage:r})]}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"검색 결과가 없어요."})]})]})}function $({searchListInPage:t}){return e.jsx("ul",{className:"ul-restaurant-in-radius reuse-in-search",children:t.map((r,s)=>e.jsx(L,{restaurantInfo:r,isFirst:s===0},Math.random()))})}function O({keyword:t,total:r,perPage:s,searchListInPage:n}){return e.jsxs("main",{className:"main-search-result",children:[e.jsx(D,{}),e.jsx(F,{total:r,perPage:s,searchListInPage:n})]})}function ce(t){var p;const r=((p=t.routeParams)==null?void 0:p.keyword)||"",s=u(o=>o.paginationSlice.currentPage),n=u(o=>o.mapSlice.selectedCategory),a=u(o=>o.mapSlice.selectedCert),c=u(o=>o.mapSlice.resultOrderBy),i=u(o=>o.mapSlice.currentLocation),[f,y]=l.useState([]),[g,k]=l.useState(0),[m,M]=l.useState(20);l.useEffect(()=>{C().then(o=>{o.success&&(y(o.lists),k(o.total))})},[s,n,a,c,i]);async function C(){return await(await fetch(`${b}/search/?keyword=${r}&page=${s}&limit=${m}&orderBy=${c}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:n,cert:a,currentLocation:[i[1],i[0]]})})).json()}return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:`${r} 🔍`}),e.jsx(O,{keyword:r,total:g,perPage:m,searchListInPage:f}),e.jsx(N,{isLoggedIn:t.user.isLoggedIn})]})}export{ce as Page};
