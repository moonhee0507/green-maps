import{j as e,r as o}from"../chunks/chunk-0ad0329c.js";import{T as A}from"../chunks/chunk-7393fde3.js";import{N as R}from"../chunks/chunk-5b1b7faa.js";import{I as _,c as j,A as x,b as p}from"../chunks/chunk-0fac4abb.js";import{P as E,a as I,S as P,b as C,c as v,E as L,d as k}from"../chunks/chunk-a5dd79e5.js";import{R as F}from"../chunks/chunk-96ebd7d3.js";import{P as U}from"../chunks/chunk-db086f10.js";import{r as q}from"../chunks/chunk-c8344d66.js";import{i as O}from"../chunks/chunk-e8bc0b58.js";import{v as V}from"../chunks/chunk-9bdd667e.js";import{n as T}from"../chunks/chunk-c949b376.js";import{E as M,S as J,a as W,b as B}from"../chunks/chunk-2b326172.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-dfbf6de9.js";import"../chunks/chunk-9ae07e36.js";import"../chunks/chunk-b82a1d50.js";import"../chunks/chunk-4a7b83e5.js";import"../chunks/chunk-af981888.js";function H({host:t}){return e.jsx("div",{className:"container-notice profile",children:e.jsx("em",{children:e.jsxs("span",{children:[(()=>{switch(t){case"local":return"자체 계정";case"kakao":return"다음카카오 계정";case"naver":return"네이버 계정";default:return"자체 계정"}})()," ","회원 입니다."]})})})}const $="/images/default-profile.png";function z({userInfo:t}){return e.jsxs("li",{className:"style-wrapper-profile",children:[e.jsx(G,{userInfo:t}),e.jsx(K,{userInfo:t})]})}function G({userInfo:t}){const{profileImage:n}=t,[l,a]=o.useState($);return o.useEffect(()=>{t.profileImage?n.includes("http://")?a(n):n&&a(`${_}/${n}`):a($)},[t]),e.jsxs("dl",{children:[e.jsx("dt",{className:"sr-only",children:"프로필 사진"}),e.jsx("dd",{children:e.jsx("div",{className:"container-profile-img",children:e.jsx("img",{src:l,alt:"프로필 사진"})})})]})}function K({userInfo:t}){const{nickName:n,bookmarkList:l,likeList:a,userId:s}=t;return e.jsxs("dl",{className:"wrapper-id-bookmark",children:[e.jsxs("dl",{className:"container-id-nick",children:[e.jsx("dt",{className:"sr-only",children:"아이디"}),e.jsx("dd",{className:"txt-profile-userId",children:s}),e.jsx("dt",{className:"sr-only",children:"닉네임"}),e.jsx("dd",{className:"txt-profile-nickName",children:n})]}),e.jsxs("dl",{className:"container-profile-bookmark-like",children:[e.jsx("dt",{children:"북마크"}),e.jsx("dd",{className:"num-profile-bookmark",children:l.length}),e.jsx("dt",{children:"좋아요"}),e.jsx("dd",{className:"num-profile-like",children:a.length})]})]})}function X({userInfo:t}){const{nickName:n,userId:l}=t,a=j(),s=()=>{c(),a(E(!0))},i=()=>{c(),a(I(!0)),a(P(n))},r=()=>{c(),a(C(!0)),a(v(l))};function c(){const m=document.querySelector(".app");m==null||m.classList.add("modal-mode")}return e.jsxs("li",{className:"list-account",children:[e.jsx("p",{children:"계정"}),e.jsxs("ul",{children:[e.jsx("li",{onClick:s,className:"list-edit",children:"프로필 사진 변경"}),e.jsx("li",{onClick:i,className:"list-edit",children:"닉네임 변경"}),e.jsx("li",{onClick:r,className:"list-edit",children:"비밀번호 변경"})]})]})}function Y(){return e.jsxs("li",{className:"list-account",children:[e.jsx("p",{children:"안내"}),e.jsxs("ul",{children:[e.jsx("li",{className:"list-edit",children:e.jsx("a",{href:"",children:"공지사항"})}),e.jsx("li",{className:"list-edit",children:e.jsx("a",{href:"",children:"1:1 문의"})}),e.jsx("li",{className:"list-edit",children:e.jsx("a",{href:"",children:"자주 찾는 질문"})})]})]})}function D({userInfo:t}){async function n(){t.host==="kakao"&&await fetch(`${x}/oauth/kakao/logout`,{method:"POST"}),(await fetch(`${x}/users/logout`,{method:"POST",headers:{"Content-Type":"application/json"}})).ok===!0&&(window.localStorage.removeItem("#1"),window.localStorage.removeItem("#2"),window.location.href="/")}return e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only",children:"프로필"}),e.jsx(H,{host:t.host}),e.jsxs("ul",{className:"ul-profile",children:[e.jsx(z,{userInfo:t}),e.jsx(X,{userInfo:t}),e.jsx(Y,{})]}),e.jsx("div",{className:"style-wrapper-logout",children:e.jsx("button",{type:"button",onClick:n,className:"styled-button",children:"로그아웃"})})]})}function Z({userInfo:t,reviews:n}){const[l,a]=o.useState("");return o.useEffect(()=>{n&&n.length>0&&n.forEach(s=>{typeof s.restaurant=="string"?a(s.restaurant):a(s.restaurant._id)})},[n]),e.jsxs("section",{className:"section-review",children:[e.jsx("h3",{className:"sr-only",children:"식당 리뷰"}),e.jsx("div",{className:"wrapper-review",children:n&&n.length>0?n.map((s,i)=>e.jsx(F,{item:s,userInfo:t,restaurantId:l,isFirst:i===0},Math.random())):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"리뷰가 아직 없어요."})]})})]})}const Q=["작성한 글","댓글 단 글"];function ee({userInfo:t}){const[n,l]=o.useState(window.localStorage.getItem("#2")||"작성한 글"),[a,s]=o.useState(null),[i,r]=o.useState({작성한글:0,댓글단글:0}),{nickName:c}=t,m=o.useRef([]);o.useEffect(()=>{const d=window.localStorage.getItem("#2"),u=[...document.querySelectorAll(".list-summary-community")];if(m.current=u,d){const h=Q.indexOf(d);h!==-1&&(u[h].classList.add("on"),l(d))}else u[0].classList.add("on"),l("작성한 글");y(c).then(h=>{r(g=>({...g,작성한글:h.posts.length}))}),S(c).then(h=>{r(g=>({...g,댓글단글:h.posts.length}))})},[]),o.useEffect(()=>{n==="작성한 글"?y(c).then(d=>{d.success===!0&&d.posts?s(d.posts):s(null)}):n==="댓글 단 글"&&S(c).then(d=>{d.success===!0&&d.posts?s(d.posts):s(null)})},[n]);function N(){m.current.forEach(d=>{d&&d.classList.remove("on")})}const y=o.useCallback(async d=>await(await fetch(`${x}/posts/my?boundary=post&owner=${d}`)).json(),[]),S=o.useCallback(async d=>await(await fetch(`${x}/posts/my?boundary=comment&owner=${d}`)).json(),[]);function f(d,u){var g,b;const h=d.currentTarget;N(),h.classList.add("on"),u==="작성한 글"?y(c).then(w=>{w.success===!0&&w.posts?s(w.posts):s(null)}):u==="댓글 단 글"&&S(c).then(w=>{w.success===!0&&w.posts?s(w.posts):s(null)}),(g=h.lastElementChild)!=null&&g.innerHTML&&window.localStorage.setItem("#2",(b=h.lastElementChild)==null?void 0:b.innerHTML)}return e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only",children:"내가 쓴 게시글 및 댓글"}),e.jsxs("ul",{className:"ul-summary-community",children:[e.jsxs("li",{className:`list-summary-community ${n==="작성한 글"?"on":""}`,onClick:d=>f(d,"작성한 글"),children:[e.jsx("p",{children:i.작성한글}),e.jsx("p",{children:"작성한 글"})]}),e.jsxs("li",{className:`list-summary-community ${n==="댓글 단 글"?"on":""}`,onClick:d=>f(d,"댓글 단 글"),children:[e.jsx("p",{children:i.댓글단글}),e.jsx("p",{children:"댓글 단 글"})]})]}),a&&a.length>0?e.jsx(U,{posts:a,limit:20}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"목록이 없어요."})]})]})}function se(){const t=j(),n=o.useRef(null),l=()=>{var r;(r=n.current)==null||r.click()},a=r=>{const c=r.target;if(c.files!==null){const m=c.files[0],N=q()+"."+m.type.replace("image/","");s(m,N)}};async function s(r,c){try{const m={name:`client/${c}`,type:r.type},S=(await(await fetch(`${x}/images/client`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})).json()).signedUrl;(await fetch(S,{method:"PUT",headers:{"Content-Type":r.type},body:r})).ok&&await i(c)}catch(m){console.error(m)}}async function i(r){try{await fetch(`${x}/users/edit/profile`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({profileImage:`client/${r}`})})}catch(c){console.error(c)}finally{t(E(!1)),window.location.reload()}}return e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"file",id:"fileInput",accept:"image/*",ref:n,onChange:a,style:{display:"none"}}),e.jsx("button",{type:"button",className:"button-groupname-order on",onClick:l,children:"변경"})]})}function te(){const t=j(),n=async()=>{try{await fetch(`${x}/users/edit/profile`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({profileImage:""})})}catch(l){console.error(l)}finally{t(E(!1)),window.location.reload()}};return e.jsx("button",{type:"button",className:"button-groupname-order on",onClick:n,children:"삭제"})}function ne(){const t=p(i=>i.profileSlice.profileImageModalOn),[n,l]=o.useState(!1),a=j();o.useEffect(()=>{l(t===!0)},[t]);function s(){const i=document.querySelector(".app");i==null||i.classList.remove("modal-mode"),a(E(!1))}return e.jsxs("article",{className:`modal-group-item ${n?"on":""}`,children:[e.jsx("h4",{children:"프로필 사진"}),e.jsxs("div",{className:"container-button",children:[e.jsx(se,{}),e.jsx(te,{})]}),e.jsx("button",{type:"button",className:"button-close",onClick:s,children:e.jsx("img",{src:O,alt:"X 아이콘",className:"img-close"})})]})}function ae(){const t=j(),[n,l]=o.useState(""),a=p(i=>i.profileSlice.prevNickName);o.useEffect(()=>{l(a)},[a]);const s=i=>{const r=i.target;l(r.value),t(L(r.value))};return e.jsxs("form",{className:"form-edit-nickName",onSubmit:i=>{i.preventDefault()},children:[e.jsxs("p",{className:"num-count-nickName",children:[e.jsx("span",{children:n.length}),"/",e.jsx("span",{children:"17"})]}),e.jsx("label",{htmlFor:"editNickNameInput",className:"sr-only",children:"닉네임"}),e.jsx("input",{type:"text",id:"editNickNameInput",onChange:s,value:n,minLength:1,maxLength:17})]})}function le(){return e.jsx("div",{className:"container-notice edit-nickName",children:e.jsx("em",{children:"한글, 영문, 숫자만 입력가능합니다."})})}function ie(t){return t.trim().length===0}function oe(){const t=p(f=>f.profileSlice.prevNickName),n=p(f=>f.profileSlice.nextNickName),[l,a]=o.useState(!0),[s,i]=o.useState(!1),[r,c]=o.useState(!0);o.useEffect(()=>{m(n),N(n)},[n]),o.useEffect(()=>{c(t!==n?!(l===!1&&s===!0):!0)},[l,s]);async function m(f){const u=await(await fetch(`${x}/users/check-nickname?nickname=${f}`)).json();return a(u.duplicated),u}function N(f){/^[ㄱ-힣a-zA-Z0-9\s]{1,17}$/g.test(f)&&!ie(f)?i(!0):i(!1)}const y=()=>{let f=n.trim();m(f).then(d=>{d.duplicated===!0?alert("닉네임 양옆 띄어쓰기를 제외하고 입력해주세요."):S(f)})};async function S(f){try{(await(await fetch(`${x}/users/edit/profile`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:f})})).json()).success&&window.location.reload()}catch(d){console.error(d)}}return e.jsx("button",{type:"button",className:"styled-button nickName",disabled:r,onClick:y,children:(()=>l?"이미 존재하는 닉네임입니다.":s?"완료":"올바른 닉네임을 입력하세요.")()})}function re(){const t=j(),n=p(i=>i.profileSlice.profileNickNameModalOn),[l,a]=o.useState(!1);o.useEffect(()=>{a(n===!0)},[n]);function s(){const i=document.querySelector(".app");i==null||i.classList.remove("modal-mode"),t(I(!1)),t(P("")),t(L(""))}return e.jsxs("article",{className:`modal-group-item ${l?"on":""}`,children:[e.jsx("h4",{children:"닉네임 변경"}),e.jsx(ae,{}),e.jsx(le,{}),e.jsx(oe,{}),e.jsx("button",{type:"button",className:"button-close",onClick:s,children:e.jsx("img",{src:O,alt:"X 아이콘",className:"img-close"})})]})}function ce(){const t=j(),[n,l]=o.useState(!0),[a,s]=o.useState(""),[i,r]=o.useState(""),[c,m]=o.useState(!1),[N,y]=o.useState(!1);o.useEffect(()=>{a===i?(m(!0),V(a)?y(!0):y(!1)):(m(!1),y(!1))},[a,i]),o.useEffect(()=>{l(!(c&&N))},[c,N]);const S=u=>{const h=u.target;s(h.value)},f=u=>{const h=u.target;r(h.value)},d=async()=>{try{(await(await fetch(`${x}/users/edit/password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a})})).json()).success&&(await(await fetch(`${x}/users/logout`,{method:"POST"})).json()).success?(alert(`비밀번호가 변경되었습니다.
로그인 페이지로 이동합니다.`),T("/login")):alert("다시 시도해주세요.")}catch(u){console.error(u)}finally{t(C(!1)),t(k(!1)),t(v(""));const u=document.querySelector(".app");u==null||u.classList.remove("modal-mode")}};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:u=>u.preventDefault(),className:"form-new-password",children:[e.jsx("p",{className:"txt-notice",children:"새로운 비밀번호를 입력해주세요."}),e.jsx("div",{className:"container-notice password",children:e.jsx("em",{children:"영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)"})}),e.jsx("label",{htmlFor:"nextPassword",className:"sr-only",children:"비밀번호"}),e.jsx("input",{type:"password",id:"nextPassword",onChange:S,placeholder:"비밀번호"}),e.jsx("label",{htmlFor:"confirmNextPassword",className:"sr-only",children:"비밀번호 재입력"}),e.jsx("input",{type:"password",id:"confirmNextPassword",onChange:f,placeholder:"비밀번호 재입력",minLength:8,maxLength:32})]}),e.jsx("button",{type:"button",onClick:d,disabled:n,className:"styled-button thin",children:(()=>c?N?"완료":"비밀번호 구성을 확인해주세요.":"두 비밀번호가 일치하지 않습니다.")()})]})}function de(){const t=j(),n=p(c=>c.profileSlice.userId),l=o.useRef(null),[a,s]=o.useState(""),i=c=>{const m=c.target;s(m.value)},r=async()=>{(await(await fetch(`${x}/users/check-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a})})).json()).success?t(k(!0)):(t(k(!1)),alert("틀린 비밀번호입니다."))};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:c=>c.preventDefault(),className:"form-current-password",children:[e.jsx("p",{className:"txt-notice",children:"그린맵 계정의 현재 비밀번호를 확인해주세요."}),e.jsx("label",{htmlFor:"readOnlyUserId",className:"sr-only",children:"아이디"}),e.jsx("input",{type:"text",id:"readOnlyUserId",readOnly:!0,defaultValue:n,className:"input-userid-in-profile"}),e.jsx("label",{htmlFor:"prevPassword",className:"sr-only",children:"현재 비밀번호"}),e.jsx("input",{type:"password",id:"prevPassword",onChange:i,ref:l,value:a})]}),e.jsx("button",{type:"button",onClick:r,className:"styled-button thin",children:"완료"})]})}function ue(){const t=j(),[n,l]=o.useState(!1),a=p(r=>r.profileSlice.profilePasswordModalOn),s=p(r=>r.profileSlice.passCurrentPassword);o.useEffect(()=>{l(a===!0)},[a]);function i(){const r=document.querySelector(".app");r==null||r.classList.remove("modal-mode"),t(C(!1)),t(k(!1)),t(v(""))}return e.jsxs("article",{className:`modal-group-item ${n?"on":""}`,children:[e.jsx("h4",{children:"비밀번호 재설정"}),s?e.jsx(ce,{}):e.jsx(de,{}),e.jsx("button",{type:"button",className:"button-close",onClick:i,children:e.jsx("img",{src:O,alt:"X 아이콘",className:"img-close"})})]})}function me(){const[t,n]=o.useState(!1),l=p(s=>s.reviewSlice.editDeleteNotifyModalOn),a=p(s=>s.reviewSlice.sameUserOwner);return o.useEffect(()=>{n(l===!0)},[l]),e.jsxs("article",{className:`modal-edit-delete-notify ${t?"on":""}`,children:[e.jsx("h4",{className:"sr-only",children:"수정, 삭제, 신고용 모달"}),e.jsx("ul",{children:a?e.jsxs(e.Fragment,{children:[e.jsx(fe,{}),e.jsx(he,{})]}):e.jsx("li",{children:" 🚨 신고하기"})})]})}function fe(){const t=j(),n=p(s=>s.reviewSlice.reviewId),l=p(s=>s.reviewSlice.restaurantId);function a(){T(`/search/${l}/reviews/${n}/edit`);const s=document.querySelector(".app");s==null||s.classList.remove("modal-mode"),t(M(!1))}return e.jsx("li",{onClick:a,children:"🩹 수정하기"})}function he(){const t=j(),n=p(s=>s.reviewSlice.reviewId),l=p(s=>s.reviewSlice.restaurantId);async function a(){try{(await(await fetch(`${x}/reviews/${n}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({restaurantId:l})})).json()).success?T(`/search/${l}`):alert("다시 시도해주세요.")}catch(s){console.error(s)}finally{const s=document.querySelector(".app");s==null||s.classList.remove("modal-mode"),t(M(!1))}}return e.jsx("li",{onClick:a,children:"🗑️ 삭제하기"})}function pe(){const t=p(i=>i.profileSlice.profileImageModalOn||i.profileSlice.profileNickNameModalOn||i.profileSlice.profilePasswordModalOn||i.reviewSlice.editDeleteNotifyModalOn),[n,l]=o.useState(!1),a=j();o.useEffect(()=>{l(t===!0)},[t]),o.useEffect(()=>(n&&document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}),[n]);function s(i){if(i.target.className==="app modal-mode"){const r=document.querySelector(".app");r==null||r.classList.remove("modal-mode"),a(E(!1)),a(I(!1)),a(P("")),a(L("")),a(C(!1)),a(k(!1)),a(v("")),a(M(!1)),a(J(!1)),a(W("")),a(B(""))}}return e.jsxs("div",{className:`modal-group ${n?"on":""}`,children:[e.jsx(ne,{}),e.jsx(re,{}),e.jsx(ue,{}),e.jsx(me,{})]})}function Re(t){const{isLoggedIn:n,info:l}=t.user,{reviews:a}=t;return o.useEffect(()=>{n===!1&&(alert("로그인 페이지로 이동합니다."),window.location.href="/login")},[]),n&&l&&e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"내 정보"}),e.jsx(xe,{userInfo:l,reviews:a}),e.jsx(R,{isLoggedIn:n}),e.jsx(pe,{})]})}function xe({userInfo:t,reviews:n}){const[l,a]=o.useState("프로필");o.useEffect(()=>{const i=window.localStorage.getItem("#1"),r=["프로필","식당 리뷰","커뮤니티 활동"],c=Array.from(document.querySelectorAll(".list-title"));i?(c[r.indexOf(i)].classList.add("on"),a(i)):c[0].classList.add("on")},[]);function s(i){const r=i.currentTarget;Array.from(document.querySelectorAll(".list-title")).forEach(m=>m.classList.remove("on")),r.classList.add("on"),a(r.innerText),window.localStorage.setItem("#1",r.innerText)}return e.jsxs("main",{className:"main-my",children:[e.jsxs("ul",{className:"ul-title-bar",children:[e.jsx("li",{className:"list-title",onClick:s,children:"프로필"}),e.jsx("li",{className:"list-title",onClick:s,children:"식당 리뷰"}),e.jsx("li",{className:"list-title",onClick:s,children:"커뮤니티 활동"})]}),(()=>{switch(l){case"프로필":return e.jsx(D,{userInfo:t});case"식당 리뷰":return e.jsx(Z,{userInfo:t,reviews:n});case"커뮤니티 활동":return e.jsx(ee,{userInfo:t});default:return e.jsx(D,{userInfo:t})}})()]})}export{Re as Page};
