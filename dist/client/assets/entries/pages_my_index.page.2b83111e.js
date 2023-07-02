import{_ as T}from"../chunks/chunk-101896b7.js";import{r as i,j as e,R as k}from"../chunks/chunk-0ad0329c.js";import{T as M}from"../chunks/chunk-fa93ea2c.js";import{N as _}from"../chunks/chunk-c6e08d5d.js";import{b as h,A as p,u as m}from"../chunks/chunk-f5cf074f.js";import{P as g,E,a as O,S as P,b as v,c as y,d as b}from"../chunks/chunk-91c16fc8.js";import{r as D}from"../chunks/chunk-c8344d66.js";import{i as C}from"../chunks/chunk-e8bc0b58.js";import{v as L}from"../chunks/chunk-9bdd667e.js";import{E as $,S as A,a as R,b as F}from"../chunks/chunk-2b326172.js";import{u as U}from"../chunks/chunk-72fd2dbb.js";import{L as I}from"../chunks/chunk-857879ef.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-1de3b966.js";function V(){const a=h(),n=i.useRef(null),o=()=>{var r;(r=n.current)==null||r.click()},t=r=>{const c=r.target;if(c.files!==null){const f=c.files[0],N=D()+"."+f.type.replace("image/","");l(f,N)}};async function l(r,c){try{const f={name:`client/${c}`,type:r.type},w=(await(await fetch(`${p}/images/client`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})).json()).signedUrl;(await fetch(w,{method:"PUT",headers:{"Content-Type":r.type},body:r})).ok&&await s(c)}catch(f){console.error(f)}}async function s(r){try{await fetch(`${p}/users/edit/profile`,{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({profileImage:`client/${r}`})})}catch(c){console.error(c)}finally{a(g(!1)),window.location.reload()}}return e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"file",id:"fileInput",accept:"image/*",ref:n,onChange:t,style:{display:"none"}}),e.jsx("button",{type:"button",className:"button-groupname-order on",onClick:o,children:"변경"})]})}function J(){const a=h(),n=async()=>{try{await fetch(`${p}/users/edit/profile`,{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({profileImage:""})})}catch(o){console.error(o)}finally{a(g(!1)),window.location.reload()}};return e.jsx("button",{type:"button",className:"button-groupname-order on",onClick:n,children:"삭제"})}function W(){const a=m(s=>s.profileSlice.profileImageModalOn),[n,o]=i.useState(!1),t=h();i.useEffect(()=>{o(a===!0)},[a]);function l(){const s=document.querySelector(".app");s==null||s.classList.remove("modal-mode"),t(g(!1))}return e.jsxs("article",{className:`modal-group-item ${n?"on":""}`,children:[e.jsx("h4",{children:"프로필 사진"}),e.jsxs("div",{className:"container-button",children:[e.jsx(V,{}),e.jsx(J,{})]}),e.jsx("button",{type:"button",className:"button-close",onClick:l,children:e.jsx("img",{src:C,alt:"X 아이콘",className:"img-close"})})]})}function q(){const a=h(),[n,o]=i.useState(""),t=m(s=>s.profileSlice.prevNickName);i.useEffect(()=>{o(t)},[t]);const l=s=>{const r=s.target;o(r.value),a(E(r.value))};return e.jsxs("form",{className:"form-edit-nickName",onSubmit:s=>{s.preventDefault()},children:[e.jsxs("p",{className:"num-count-nickName",children:[e.jsx("span",{children:n.length}),"/",e.jsx("span",{children:"17"})]}),e.jsx("label",{htmlFor:"editNickNameInput",className:"sr-only",children:"닉네임"}),e.jsx("input",{type:"text",id:"editNickNameInput",onChange:l,value:n,minLength:1,maxLength:17})]})}function B(){return e.jsx("div",{className:"container-notice edit-nickName",children:e.jsx("em",{children:"한글, 영문, 숫자만 입력가능합니다."})})}function G(a){return a.trim().length===0}function z(){const a=m(d=>d.profileSlice.prevNickName),n=m(d=>d.profileSlice.nextNickName),[o,t]=i.useState(!0),[l,s]=i.useState(!1),[r,c]=i.useState(!0);i.useEffect(()=>{f(n),N(n)},[n]),i.useEffect(()=>{c(a!==n?!(o===!1&&l===!0):!0)},[o,l]);async function f(d){const u=await(await fetch(`${p}/users/check-nickname?nickname=${d}`,{credentials:"include",method:"GET"})).json();return t(u.duplicated),u}function N(d){/^[ㄱ-힣a-zA-Z0-9\s]{1,17}$/g.test(d)&&!G(d)?s(!0):s(!1)}const j=()=>{let d=n.trim();f(d).then(x=>{x.duplicated===!0?alert("닉네임 양옆 띄어쓰기를 제외하고 입력해주세요."):w(d)})};async function w(d){try{(await(await fetch(`${p}/users/edit/profile`,{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:d})})).json()).success&&window.location.reload()}catch(x){console.error(x)}}return e.jsx("button",{type:"button",className:"styled-button nickName",disabled:r,onClick:j,children:(()=>o?"이미 존재하는 닉네임입니다.":l?"완료":"올바른 닉네임을 입력하세요.")()})}function H(){const a=h(),n=m(s=>s.profileSlice.profileNickNameModalOn),[o,t]=i.useState(!1);i.useEffect(()=>{t(n===!0)},[n]);function l(){const s=document.querySelector(".app");s==null||s.classList.remove("modal-mode"),a(O(!1)),a(P("")),a(E(""))}return e.jsxs("article",{className:`modal-group-item ${o?"on":""}`,children:[e.jsx("h4",{children:"닉네임 변경"}),e.jsx(q,{}),e.jsx(B,{}),e.jsx(z,{}),e.jsx("button",{type:"button",className:"button-close",onClick:l,children:e.jsx("img",{src:C,alt:"X 아이콘",className:"img-close"})})]})}function K(){const a=h(),[n,o]=i.useState(!0),[t,l]=i.useState(""),[s,r]=i.useState(""),[c,f]=i.useState(!1),[N,j]=i.useState(!1);i.useEffect(()=>{t===s?(f(!0),L(t)?j(!0):j(!1)):(f(!1),j(!1))},[t,s]),i.useEffect(()=>{o(!(c&&N))},[c,N]);const w=u=>{const S=u.target;l(S.value)},d=u=>{const S=u.target;r(S.value)},x=async()=>{try{(await(await fetch(`${p}/users/edit/password`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t})})).json()).success&&(await(await fetch(`${p}/users/logout`,{credentials:"include",method:"POST"})).json()).success?(alert(`비밀번호가 변경되었습니다.
로그인 페이지로 이동합니다.`),window.location.href="/login"):alert("다시 시도해주세요.")}catch(u){console.error(u)}finally{a(v(!1)),a(y(!1)),a(b(""));const u=document.querySelector(".app");u==null||u.classList.remove("modal-mode")}};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:u=>u.preventDefault(),className:"form-new-password",children:[e.jsx("p",{className:"txt-notice",children:"새로운 비밀번호를 입력해주세요."}),e.jsx("div",{className:"container-notice password",children:e.jsx("em",{children:"영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)"})}),e.jsx("label",{htmlFor:"nextPassword",className:"sr-only",children:"비밀번호"}),e.jsx("input",{type:"password",id:"nextPassword",onChange:w,placeholder:"비밀번호"}),e.jsx("label",{htmlFor:"confirmNextPassword",className:"sr-only",children:"비밀번호 재입력"}),e.jsx("input",{type:"password",id:"confirmNextPassword",onChange:d,placeholder:"비밀번호 재입력",minLength:8,maxLength:32})]}),e.jsx("button",{type:"button",onClick:x,disabled:n,className:"styled-button thin",children:(()=>c?N?"완료":"비밀번호 구성을 확인해주세요.":"두 비밀번호가 일치하지 않습니다.")()})]})}function X(){const a=h(),n=m(c=>c.profileSlice.userId),o=i.useRef(null),[t,l]=i.useState(""),s=c=>{const f=c.target;l(f.value)},r=async()=>{(await(await fetch(`${p}/users/check-password`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t})})).json()).success?a(y(!0)):(a(y(!1)),alert("틀린 비밀번호입니다."))};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:c=>c.preventDefault(),className:"form-current-password",children:[e.jsx("p",{className:"txt-notice",children:"그린맵 계정의 현재 비밀번호를 확인해주세요."}),e.jsx("label",{htmlFor:"readOnlyUserId",className:"sr-only",children:"아이디"}),e.jsx("input",{type:"text",id:"readOnlyUserId",readOnly:!0,defaultValue:n,className:"input-userid-in-profile"}),e.jsx("label",{htmlFor:"prevPassword",className:"sr-only",children:"현재 비밀번호"}),e.jsx("input",{type:"password",id:"prevPassword",onChange:s,ref:o,value:t})]}),e.jsx("button",{type:"button",onClick:r,className:"styled-button thin",children:"완료"})]})}function Y(){const a=h(),[n,o]=i.useState(!1),t=m(r=>r.profileSlice.profilePasswordModalOn),l=m(r=>r.profileSlice.passCurrentPassword);i.useEffect(()=>{o(t===!0)},[t]);function s(){const r=document.querySelector(".app");r==null||r.classList.remove("modal-mode"),a(v(!1)),a(y(!1)),a(b(""))}return e.jsxs("article",{className:`modal-group-item ${n?"on":""}`,children:[e.jsx("h4",{children:"비밀번호 재설정"}),l?e.jsx(K,{}):e.jsx(X,{}),e.jsx("button",{type:"button",className:"button-close",onClick:s,children:e.jsx("img",{src:C,alt:"X 아이콘",className:"img-close"})})]})}function Z(){const[a,n]=i.useState(!1),o=m(l=>l.reviewSlice.editDeleteNotifyModalOn),t=m(l=>l.reviewSlice.sameUserOwner);return i.useEffect(()=>{n(o===!0)},[o]),e.jsxs("article",{className:`modal-edit-delete-notify ${a?"on":""}`,children:[e.jsx("h4",{className:"sr-only",children:"수정, 삭제, 신고용 모달"}),e.jsx("ul",{children:t?e.jsxs(e.Fragment,{children:[e.jsx(Q,{}),e.jsx(ee,{})]}):e.jsx("li",{children:" 🚨 신고하기"})})]})}function Q(){const a=m(t=>t.reviewSlice.reviewId),n=m(t=>t.reviewSlice.restaurantId);function o(){window.location.href=`/search/${n}/reviews/${a}/edit`}return e.jsx("li",{onClick:o,children:"🩹 수정하기"})}function ee(){const a=m(t=>t.reviewSlice.reviewId),n=m(t=>t.reviewSlice.restaurantId);async function o(){try{(await(await fetch(`${p}/reviews/${a}`,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({restaurantId:n})})).json()).success?window.location.href=`/search/${n}`:alert("다시 시도해주세요.")}catch(t){console.error(t)}}return e.jsx("li",{onClick:o,children:"🗑️ 삭제하기"})}function te(){const a=m(s=>s.profileSlice.profileImageModalOn||s.profileSlice.profileNickNameModalOn||s.profileSlice.profilePasswordModalOn||s.reviewSlice.editDeleteNotifyModalOn),[n,o]=i.useState(!1),t=h();i.useEffect(()=>{o(a===!0)},[a]),i.useEffect(()=>(n&&document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[n]);function l(s){if(s.target.className==="app modal-mode"){const r=document.querySelector(".app");r==null||r.classList.remove("modal-mode"),t(g(!1)),t(O(!1)),t(P("")),t(E("")),t(v(!1)),t(y(!1)),t(b("")),t($(!1)),t(A(!1)),t(R("")),t(F(""))}}return e.jsxs("div",{className:`modal-group ${n?"on":""}`,children:[e.jsx(W,{}),e.jsx(H,{}),e.jsx(Y,{}),e.jsx(Z,{})]})}const ye={title:"내 정보 | Green Maps",description:"채식 식당 지도 서비스 마이 페이지"},se=k.lazy(()=>T(()=>import("../chunks/chunk-f1ac73ae.js"),["assets/chunks/chunk-f1ac73ae.js","assets/chunks/chunk-0ad0329c.js","assets/chunks/chunk-f5cf074f.js","assets/chunks/chunk-da345742.js","assets/chunks/chunk-91c16fc8.js","assets/chunks/chunk-41308c4f.js","assets/chunks/chunk-3258e6a6.js","assets/chunks/chunk-8b340eec.js","assets/chunks/chunk-dfbf6de9.js","assets/chunks/chunk-9ae07e36.js","assets/chunks/chunk-2b326172.js","assets/chunks/chunk-7ba4ee63.js","assets/chunks/chunk-525dc8c4.js","assets/chunks/chunk-4a7b83e5.js"]));function Se(){const[a,n]=U(),[o,t]=i.useState([]);i.useEffect(()=>{try{n!==null&&l(n).then(s=>{s.success?t(s.reviews):t([])})}catch(s){console.error(s)}},[n]);async function l(s){return await(await fetch(`${p}/reviews/my?owner=${s.userId}`)).json()}return a&&n?e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"내 정보"}),e.jsx(k.Suspense,{fallback:e.jsx(I,{}),children:e.jsx(se,{userInfo:n,reviews:o})}),e.jsx(_,{isLoggedIn:a}),e.jsx(te,{})]}):e.jsx(I,{})}export{Se as Page,ye as documentProps};
//# sourceMappingURL=pages_my_index.page.2b83111e.js.map