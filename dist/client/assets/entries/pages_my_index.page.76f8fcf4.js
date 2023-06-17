import{_ as D}from"../chunks/chunk-101896b7.js";import{r as l,j as e,R as P}from"../chunks/chunk-0ad0329c.js";import{T as L}from"../chunks/chunk-fa93ea2c.js";import{N as M}from"../chunks/chunk-5b1b7faa.js";import{b as p,A as h,u as f}from"../chunks/chunk-f5cf074f.js";import{P as w,E,a as T,S as _,b as v,c as S,d as b}from"../chunks/chunk-91c16fc8.js";import{r as A}from"../chunks/chunk-c8344d66.js";import{i as C}from"../chunks/chunk-e8bc0b58.js";import{v as $}from"../chunks/chunk-9bdd667e.js";import{n as k}from"../chunks/chunk-621f058a.js";import{E as I,S as R,a as F,b as U}from"../chunks/chunk-2b326172.js";import{u as V}from"../chunks/chunk-aaa4175a.js";import{L as O}from"../chunks/chunk-c9eff144.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-bf08ca9a.js";import"../chunks/chunk-0249643f.js";function q(){const n=p(),a=l.useRef(null),o=()=>{var i;(i=a.current)==null||i.click()},s=i=>{const c=i.target;if(c.files!==null){const m=c.files[0],N=A()+"."+m.type.replace("image/","");t(m,N)}};async function t(i,c){try{const m={name:`client/${c}`,type:i.type},y=(await(await fetch(`${h}/images/client`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})).json()).signedUrl;(await fetch(y,{method:"PUT",headers:{"Content-Type":i.type},body:i})).ok&&await r(c)}catch(m){console.error(m)}}async function r(i){try{await fetch(`${h}/users/edit/profile`,{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({profileImage:`client/${i}`})})}catch(c){console.error(c)}finally{n(w(!1)),window.location.reload()}}return e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"file",id:"fileInput",accept:"image/*",ref:a,onChange:s,style:{display:"none"}}),e.jsx("button",{type:"button",className:"button-groupname-order on",onClick:o,children:"변경"})]})}function J(){const n=p(),a=async()=>{try{await fetch(`${h}/users/edit/profile`,{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({profileImage:""})})}catch(o){console.error(o)}finally{n(w(!1)),window.location.reload()}};return e.jsx("button",{type:"button",className:"button-groupname-order on",onClick:a,children:"삭제"})}function W(){const n=f(r=>r.profileSlice.profileImageModalOn),[a,o]=l.useState(!1),s=p();l.useEffect(()=>{o(n===!0)},[n]);function t(){const r=document.querySelector(".app");r==null||r.classList.remove("modal-mode"),s(w(!1))}return e.jsxs("article",{className:`modal-group-item ${a?"on":""}`,children:[e.jsx("h4",{children:"프로필 사진"}),e.jsxs("div",{className:"container-button",children:[e.jsx(q,{}),e.jsx(J,{})]}),e.jsx("button",{type:"button",className:"button-close",onClick:t,children:e.jsx("img",{src:C,alt:"X 아이콘",className:"img-close"})})]})}function B(){const n=p(),[a,o]=l.useState(""),s=f(r=>r.profileSlice.prevNickName);l.useEffect(()=>{o(s)},[s]);const t=r=>{const i=r.target;o(i.value),n(E(i.value))};return e.jsxs("form",{className:"form-edit-nickName",onSubmit:r=>{r.preventDefault()},children:[e.jsxs("p",{className:"num-count-nickName",children:[e.jsx("span",{children:a.length}),"/",e.jsx("span",{children:"17"})]}),e.jsx("label",{htmlFor:"editNickNameInput",className:"sr-only",children:"닉네임"}),e.jsx("input",{type:"text",id:"editNickNameInput",onChange:t,value:a,minLength:1,maxLength:17})]})}function z(){return e.jsx("div",{className:"container-notice edit-nickName",children:e.jsx("em",{children:"한글, 영문, 숫자만 입력가능합니다."})})}function G(n){return n.trim().length===0}function H(){const n=f(d=>d.profileSlice.prevNickName),a=f(d=>d.profileSlice.nextNickName),[o,s]=l.useState(!0),[t,r]=l.useState(!1),[i,c]=l.useState(!0);l.useEffect(()=>{m(a),N(a)},[a]),l.useEffect(()=>{c(n!==a?!(o===!1&&t===!0):!0)},[o,t]);async function m(d){const u=await(await fetch(`${h}/users/check-nickname?nickname=${d}`,{credentials:"include",method:"GET"})).json();return s(u.duplicated),u}function N(d){/^[ㄱ-힣a-zA-Z0-9\s]{1,17}$/g.test(d)&&!G(d)?r(!0):r(!1)}const j=()=>{let d=a.trim();m(d).then(x=>{x.duplicated===!0?alert("닉네임 양옆 띄어쓰기를 제외하고 입력해주세요."):y(d)})};async function y(d){try{(await(await fetch(`${h}/users/edit/profile`,{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:d})})).json()).success&&window.location.reload()}catch(x){console.error(x)}}return e.jsx("button",{type:"button",className:"styled-button nickName",disabled:i,onClick:j,children:(()=>o?"이미 존재하는 닉네임입니다.":t?"완료":"올바른 닉네임을 입력하세요.")()})}function K(){const n=p(),a=f(r=>r.profileSlice.profileNickNameModalOn),[o,s]=l.useState(!1);l.useEffect(()=>{s(a===!0)},[a]);function t(){const r=document.querySelector(".app");r==null||r.classList.remove("modal-mode"),n(T(!1)),n(_("")),n(E(""))}return e.jsxs("article",{className:`modal-group-item ${o?"on":""}`,children:[e.jsx("h4",{children:"닉네임 변경"}),e.jsx(B,{}),e.jsx(z,{}),e.jsx(H,{}),e.jsx("button",{type:"button",className:"button-close",onClick:t,children:e.jsx("img",{src:C,alt:"X 아이콘",className:"img-close"})})]})}function X(){const n=p(),[a,o]=l.useState(!0),[s,t]=l.useState(""),[r,i]=l.useState(""),[c,m]=l.useState(!1),[N,j]=l.useState(!1);l.useEffect(()=>{s===r?(m(!0),$(s)?j(!0):j(!1)):(m(!1),j(!1))},[s,r]),l.useEffect(()=>{o(!(c&&N))},[c,N]);const y=u=>{const g=u.target;t(g.value)},d=u=>{const g=u.target;i(g.value)},x=async()=>{try{(await(await fetch(`${h}/users/edit/password`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:s})})).json()).success&&(await(await fetch(`${h}/users/logout`,{credentials:"include",method:"POST"})).json()).success?(alert(`비밀번호가 변경되었습니다.
로그인 페이지로 이동합니다.`),k("/login")):alert("다시 시도해주세요.")}catch(u){console.error(u)}finally{n(v(!1)),n(S(!1)),n(b(""));const u=document.querySelector(".app");u==null||u.classList.remove("modal-mode")}};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:u=>u.preventDefault(),className:"form-new-password",children:[e.jsx("p",{className:"txt-notice",children:"새로운 비밀번호를 입력해주세요."}),e.jsx("div",{className:"container-notice password",children:e.jsx("em",{children:"영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)"})}),e.jsx("label",{htmlFor:"nextPassword",className:"sr-only",children:"비밀번호"}),e.jsx("input",{type:"password",id:"nextPassword",onChange:y,placeholder:"비밀번호"}),e.jsx("label",{htmlFor:"confirmNextPassword",className:"sr-only",children:"비밀번호 재입력"}),e.jsx("input",{type:"password",id:"confirmNextPassword",onChange:d,placeholder:"비밀번호 재입력",minLength:8,maxLength:32})]}),e.jsx("button",{type:"button",onClick:x,disabled:a,className:"styled-button thin",children:(()=>c?N?"완료":"비밀번호 구성을 확인해주세요.":"두 비밀번호가 일치하지 않습니다.")()})]})}function Y(){const n=p(),a=f(c=>c.profileSlice.userId),o=l.useRef(null),[s,t]=l.useState(""),r=c=>{const m=c.target;t(m.value)},i=async()=>{(await(await fetch(`${h}/users/check-password`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:s})})).json()).success?n(S(!0)):(n(S(!1)),alert("틀린 비밀번호입니다."))};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:c=>c.preventDefault(),className:"form-current-password",children:[e.jsx("p",{className:"txt-notice",children:"그린맵 계정의 현재 비밀번호를 확인해주세요."}),e.jsx("label",{htmlFor:"readOnlyUserId",className:"sr-only",children:"아이디"}),e.jsx("input",{type:"text",id:"readOnlyUserId",readOnly:!0,defaultValue:a,className:"input-userid-in-profile"}),e.jsx("label",{htmlFor:"prevPassword",className:"sr-only",children:"현재 비밀번호"}),e.jsx("input",{type:"password",id:"prevPassword",onChange:r,ref:o,value:s})]}),e.jsx("button",{type:"button",onClick:i,className:"styled-button thin",children:"완료"})]})}function Z(){const n=p(),[a,o]=l.useState(!1),s=f(i=>i.profileSlice.profilePasswordModalOn),t=f(i=>i.profileSlice.passCurrentPassword);l.useEffect(()=>{o(s===!0)},[s]);function r(){const i=document.querySelector(".app");i==null||i.classList.remove("modal-mode"),n(v(!1)),n(S(!1)),n(b(""))}return e.jsxs("article",{className:`modal-group-item ${a?"on":""}`,children:[e.jsx("h4",{children:"비밀번호 재설정"}),t?e.jsx(X,{}):e.jsx(Y,{}),e.jsx("button",{type:"button",className:"button-close",onClick:r,children:e.jsx("img",{src:C,alt:"X 아이콘",className:"img-close"})})]})}function Q(){const[n,a]=l.useState(!1),o=f(t=>t.reviewSlice.editDeleteNotifyModalOn),s=f(t=>t.reviewSlice.sameUserOwner);return l.useEffect(()=>{a(o===!0)},[o]),e.jsxs("article",{className:`modal-edit-delete-notify ${n?"on":""}`,children:[e.jsx("h4",{className:"sr-only",children:"수정, 삭제, 신고용 모달"}),e.jsx("ul",{children:s?e.jsxs(e.Fragment,{children:[e.jsx(ee,{}),e.jsx(te,{})]}):e.jsx("li",{children:" 🚨 신고하기"})})]})}function ee(){const n=p(),a=f(t=>t.reviewSlice.reviewId),o=f(t=>t.reviewSlice.restaurantId);function s(){k(`/search/${o}/reviews/${a}/edit`);const t=document.querySelector(".app");t==null||t.classList.remove("modal-mode"),n(I(!1))}return e.jsx("li",{onClick:s,children:"🩹 수정하기"})}function te(){const n=p(),a=f(t=>t.reviewSlice.reviewId),o=f(t=>t.reviewSlice.restaurantId);async function s(){try{(await(await fetch(`${h}/reviews/${a}`,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({restaurantId:o})})).json()).success?k(`/search/${o}`):alert("다시 시도해주세요.")}catch(t){console.error(t)}finally{const t=document.querySelector(".app");t==null||t.classList.remove("modal-mode"),n(I(!1))}}return e.jsx("li",{onClick:s,children:"🗑️ 삭제하기"})}function se(){const n=f(r=>r.profileSlice.profileImageModalOn||r.profileSlice.profileNickNameModalOn||r.profileSlice.profilePasswordModalOn||r.reviewSlice.editDeleteNotifyModalOn),[a,o]=l.useState(!1),s=p();l.useEffect(()=>{o(n===!0)},[n]),l.useEffect(()=>(a&&document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}),[a]);function t(r){if(r.target.className==="app modal-mode"){const i=document.querySelector(".app");i==null||i.classList.remove("modal-mode"),s(w(!1)),s(T(!1)),s(_("")),s(E("")),s(v(!1)),s(S(!1)),s(b("")),s(I(!1)),s(R(!1)),s(F("")),s(U(""))}}return e.jsxs("div",{className:`modal-group ${a?"on":""}`,children:[e.jsx(W,{}),e.jsx(K,{}),e.jsx(Z,{}),e.jsx(Q,{})]})}const ne=P.lazy(()=>D(()=>import("../chunks/chunk-8d8318d6.js"),["assets/chunks/chunk-8d8318d6.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-f5cf074f.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-91c16fc8.js","assets/chunks/chunk-41308c4f.js","assets/chunks/chunk-3258e6a6.js","assets/chunks/chunk-9086f87d.js","assets/chunks/chunk-dfbf6de9.js","assets/chunks/chunk-9ae07e36.js","assets/chunks/chunk-2b326172.js","assets/chunks/chunk-f2fe287b.js","assets/chunks/chunk-525dc8c4.js","assets/chunks/chunk-4a7b83e5.js"]));function ve(n){const[a,o]=V(),{reviews:s}=n;return a&&o?e.jsxs(e.Fragment,{children:[e.jsx(L,{title:"내 정보"}),e.jsx(P.Suspense,{fallback:e.jsx(O,{}),children:e.jsx(ne,{userInfo:o,reviews:s})}),e.jsx(M,{isLoggedIn:a}),e.jsx(se,{})]}):e.jsx(O,{})}export{ve as Page};
