import{_ as x}from"../chunks/chunk-101896b7.js";import{r as n,j as t,R as h}from"../chunks/chunk-0ad0329c.js";import{T as E}from"../chunks/chunk-64857c89.js";import{N as I}from"../chunks/chunk-5b1b7faa.js";import{b as i,c as d,A as p}from"../chunks/chunk-f6dd005f.js";import{E as u}from"../chunks/chunk-2b326172.js";import{n as v}from"../chunks/chunk-c949b376.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-af981888.js";function S(){const[a,s]=n.useState(!1),r=i(e=>e.reviewSlice.editDeleteNotifyModalOn),o=i(e=>e.reviewSlice.sameUserOwner);return n.useEffect(()=>{s(r===!0)},[r]),t.jsxs("article",{className:`modal-edit-delete-notify ${a?"on":""}`,children:[t.jsx("h4",{className:"sr-only",children:"수정, 삭제, 신고용 모달"}),t.jsx("ul",{children:o?t.jsxs(t.Fragment,{children:[t.jsx(y,{}),t.jsx(L,{})]}):t.jsx("li",{children:" 🚨 신고하기"})})]})}function y(){const a=d(),s=i(e=>e.reviewSlice.reviewId),r=i(e=>e.reviewSlice.restaurantId);function o(){v(`/search/${r}/reviews/${s}/edit`);const e=document.querySelector(".app");e==null||e.classList.remove("modal-mode"),a(u(!1))}return t.jsx("li",{onClick:o,children:"🩹 수정하기"})}function L(){const a=d(),s=i(e=>e.reviewSlice.reviewId),r=i(e=>e.reviewSlice.restaurantId);async function o(){try{(await(await fetch(`${p}/reviews/${s}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({restaurantId:r})})).json()).success?v(`/search/${r}`):alert("다시 시도해주세요.")}catch(e){console.error(e)}finally{const e=document.querySelector(".app");e==null||e.classList.remove("modal-mode"),a(u(!1))}}return t.jsx("li",{onClick:o,children:"🗑️ 삭제하기"})}function D(){const a=i(c=>c.reviewSlice.editDeleteNotifyModalOn),[s,r]=n.useState(!1),o=d();n.useEffect(()=>{r(a===!0)},[a]),n.useEffect(()=>(s&&document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}),[s]);function e(c){if(c.target.className==="app modal-mode"){const l=document.querySelector(".app");l==null||l.classList.remove("modal-mode"),o(u(!1))}}return t.jsx("div",{className:`modal-group ${s?"on":""}`,children:t.jsx(S,{})})}const N=h.lazy(()=>x(()=>import("../chunks/chunk-d7e2ef76.js"),["assets/chunks/chunk-d7e2ef76.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-f6dd005f.js","assets/chunks/chunk-c949b376.js","assets/chunks/chunk-af981888.js","assets/chunks/chunk-9ae07e36.js","assets/chunks/chunk-32ec8ef6.js","assets/chunks/chunk-7962c6c8.js","assets/chunks/chunk-dfbf6de9.js","assets/chunks/chunk-2b326172.js","assets/chunks/chunk-41308c4f.js","assets/chunks/chunk-6ed56ac3.js"]));function F(a){var f;const{routeParams:s,user:r}=a,o=((f=a.routeParams)==null?void 0:f.restaurantId)||"",{isLoggedIn:e,info:c}=r,[l,j]=n.useState(null);n.useEffect(()=>{w()},[s]);async function w(){const m=await(await fetch(`${p}/restaurants/${o}`,{headers:{"Cache-Control":"max-age=31536000"}})).json();m.success&&j(m.restaurantInfo)}return t.jsxs(t.Fragment,{children:[t.jsx(E,{title:"상세정보"}),t.jsx(h.Suspense,{fallback:t.jsx(_,{}),children:t.jsx(N,{restaurantInfo:l,isLoggedIn:e,userInfo:c})}),t.jsx(I,{isLoggedIn:e}),t.jsx(D,{})]})}function _(){return t.jsx("div",{children:"로딩중..."})}export{F as Page};
