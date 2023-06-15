import{_ as w}from"../chunks/chunk-101896b7.js";import{r as n,j as t,R as p}from"../chunks/chunk-0ad0329c.js";import{T as E}from"../chunks/chunk-d4e38713.js";import{N as x}from"../chunks/chunk-5b1b7faa.js";import{b as i,c as d,A as h}from"../chunks/chunk-0fac4abb.js";import{E as u}from"../chunks/chunk-2b326172.js";import{n as v}from"../chunks/chunk-c949b376.js";import{u as I}from"../chunks/chunk-5786f306.js";import{L as S}from"../chunks/chunk-3253a6a3.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-af981888.js";function y(){const[a,r]=n.useState(!1),s=i(e=>e.reviewSlice.editDeleteNotifyModalOn),o=i(e=>e.reviewSlice.sameUserOwner);return n.useEffect(()=>{r(s===!0)},[s]),t.jsxs("article",{className:`modal-edit-delete-notify ${a?"on":""}`,children:[t.jsx("h4",{className:"sr-only",children:"수정, 삭제, 신고용 모달"}),t.jsx("ul",{children:o?t.jsxs(t.Fragment,{children:[t.jsx(L,{}),t.jsx(D,{})]}):t.jsx("li",{children:" 🚨 신고하기"})})]})}function L(){const a=d(),r=i(e=>e.reviewSlice.reviewId),s=i(e=>e.reviewSlice.restaurantId);function o(){v(`/search/${s}/reviews/${r}/edit`);const e=document.querySelector(".app");e==null||e.classList.remove("modal-mode"),a(u(!1))}return t.jsx("li",{onClick:o,children:"🩹 수정하기"})}function D(){const a=d(),r=i(e=>e.reviewSlice.reviewId),s=i(e=>e.reviewSlice.restaurantId);async function o(){try{(await(await fetch(`${h}/reviews/${r}`,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({restaurantId:s})})).json()).success?v(`/search/${s}`):alert("다시 시도해주세요.")}catch(e){console.error(e)}finally{const e=document.querySelector(".app");e==null||e.classList.remove("modal-mode"),a(u(!1))}}return t.jsx("li",{onClick:o,children:"🗑️ 삭제하기"})}function g(){const a=i(c=>c.reviewSlice.editDeleteNotifyModalOn),[r,s]=n.useState(!1),o=d();n.useEffect(()=>{s(a===!0)},[a]),n.useEffect(()=>(r&&document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}),[r]);function e(c){if(c.target.className==="app modal-mode"){const l=document.querySelector(".app");l==null||l.classList.remove("modal-mode"),o(u(!1))}}return t.jsx("div",{className:`modal-group ${r?"on":""}`,children:t.jsx(y,{})})}const N=p.lazy(()=>w(()=>import("../chunks/chunk-2b7aa0b8.js"),["assets/chunks/chunk-2b7aa0b8.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-0fac4abb.js","assets/chunks/chunk-c949b376.js","assets/chunks/chunk-af981888.js","assets/chunks/chunk-9ae07e36.js","assets/chunks/chunk-32ec8ef6.js","assets/chunks/chunk-53b3a789.js","assets/chunks/chunk-dfbf6de9.js","assets/chunks/chunk-2b326172.js","assets/chunks/chunk-41308c4f.js","assets/chunks/chunk-1b57fcb1.js"]));function B(a){var m;const{routeParams:r}=a,[s,o]=I(),e=((m=a.routeParams)==null?void 0:m.restaurantId)||"",[c,l]=n.useState(null);n.useEffect(()=>{j()},[r]);async function j(){const f=await(await fetch(`${h}/restaurants/${e}`,{headers:{"Cache-Control":"max-age=31536000"}})).json();f.success&&l(f.restaurantInfo)}return t.jsxs(t.Fragment,{children:[t.jsx(E,{title:"상세정보"}),t.jsx(p.Suspense,{fallback:t.jsx(S,{}),children:t.jsx(N,{restaurantInfo:c,isLoggedIn:s,userInfo:o})}),t.jsx(x,{isLoggedIn:s}),t.jsx(g,{})]})}export{B as Page};
