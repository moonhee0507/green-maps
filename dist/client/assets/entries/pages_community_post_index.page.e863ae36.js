import{j as e,r as l,R as $}from"../chunks/chunk-0ad0329c.js";import{A as h,b as y,u as f}from"../chunks/chunk-f5cf074f.js";import{S as L}from"../chunks/chunk-f3107ac8.js";import{T as _}from"../chunks/chunk-fa93ea2c.js";import{D as M}from"../chunks/chunk-4a7b83e5.js";import{i as O}from"../chunks/chunk-9ae07e36.js";import{i as k}from"../chunks/chunk-dfbf6de9.js";import{a as g,S as b,b as S,c as I,d as P,e as D}from"../chunks/chunk-41308c4f.js";import{a as E}from"../chunks/chunk-3258e6a6.js";import{n as N}from"../chunks/chunk-621f058a.js";import{P as v}from"../chunks/chunk-8275f212.js";import{u as A}from"../chunks/chunk-aaa4175a.js";import{L as w}from"../chunks/chunk-c9eff144.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-bf08ca9a.js";import"../chunks/chunk-0249643f.js";function R(n){const t=n.content;return e.jsx("div",{dangerouslySetInnerHTML:{__html:M.sanitize(t)},style:{wordBreak:"keep-all"}})}function B(n){const{postId:t,like:o}=n,[a,s]=l.useState(null),[c,r]=l.useState(o?o.length:0),[i,d]=l.useState(!1);l.useEffect(()=>{p().then(j=>{s(j)}).catch(j=>console.error(j));async function p(){return(await(await fetch(`${h}/users`)).json()).user.userId}},[]),l.useEffect(()=>{o&&d(o.some(p=>p.user===a))},[a]);function u(){i?x():m(),d(!i)}async function m(){if((await fetch(`${h}/posts/${t}/like`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:a})})).ok)r(c+1);else throw new Error}async function x(){if((await fetch(`${h}/posts/${t}/like`,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:a})})).ok)r(c-1);else throw new Error}return e.jsxs("button",{className:"button-like",type:"button",onClick:u,style:{margin:"0 auto"},children:[e.jsx("img",{src:O,alt:"좋아요 이미지",className:`img-like review ${i?"on":""}`}),e.jsx("span",{style:{minWidth:"20px"},children:c})]})}function U({userInfo:n,owner:t,postId:o}){const a=y(),s=l.useRef(null),[c,r]=l.useState(null);l.useEffect(()=>{n!==null&&r(n)},[n]);function i(){E(!0),a(g(!0)),a(b((c==null?void 0:c.nickName)===t)),a(S(o)),a(I("post"))}return e.jsx("button",{type:"button","aria-label":"더보기 버튼",className:"button-more postitem",onClick:i,ref:s})}function F({userInfo:n,postInfo:t}){const{subject:o,content:a,like:s,owner:c,photo:r,registeredAt:i,comments:d,title:u,_id:m}=t;return e.jsxs("section",{className:"section-post-content",children:[e.jsx("h3",{"aria-label":"게시글 제목",className:"txt-post-title",children:u}),e.jsxs("div",{children:[e.jsx("p",{"aria-label":"작성자",className:"txt-post-owner",children:c}),e.jsxs("div",{className:"container-post-subinfo",children:[e.jsx(G,{like:s}),e.jsx(J,{comments:d}),e.jsx(W,{registeredAt:i})]})]}),e.jsx(R,{content:a}),e.jsx(B,{postId:m,like:s}),e.jsx(U,{userInfo:n,owner:c,postId:m})]})}function G(n){var t;return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"좋아요 개수"}),e.jsx("dd",{className:"container-count-like",children:e.jsx("span",{children:((t=n.like)==null?void 0:t.length)||0})})]})}function J(n){var t;return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"댓글 개수"}),e.jsx("dd",{className:"container-count-comment",children:e.jsx("span",{children:((t=n.comments)==null?void 0:t.length)||0})})]})}function W(n){var a,s;const{registeredAt:t}=n,o=k(t)?`${(a=t.split(". ").at(-1))==null?void 0:a.split(":")[0]}:${(s=t.split(". ").at(-1))==null?void 0:s.split(":")[1]}`:t.slice(0,13);return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"작성 시간"}),e.jsx("dd",{className:"container-post-time",children:e.jsx("time",{dateTime:"",children:o})})]})}function q(n){const{postId:t,content:o}=n;async function a(){return await(await fetch(`${h}/users/`,{credentials:"include",method:"GET"})).json()}function s(){a().then(r=>{r.success===!0?c(r.user.nickName):confirm(`로그인이 필요한 서비스입니다.
로그인 하시겠습니까?`)&&N("/login")})}async function c(r){try{if(o!==null&&o.length>0){const i={owner:r,content:o};(await(await fetch(`${h}/posts/${t}/comment`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).success===!0&&window.location.reload()}}catch(i){console.error(i)}}return e.jsx("button",{type:"button",onClick:s,disabled:!(o!==null&&o.length>0),"aria-label":"댓글 등록 버튼"})}function H({postId:n}){const[t,o]=l.useState(null);function a(s){o(s.target.value)}return e.jsxs("form",{className:"form-create-comment",children:[e.jsx("label",{htmlFor:"comment",className:"sr-only",children:"댓글 작성하기"}),e.jsx("textarea",{id:"comment",onChange:a,minLength:1,maxLength:100}),e.jsx(q,{postId:n,content:t})]})}function V(){return e.jsx("div",{className:"container-notice comment",children:e.jsx("em",{children:"게시글과 관련없는 홍보성 댓글과 저속한 표현의 비방성 댓글은 삭제될 수 있습니다."})})}function z({userInfo:n,postId:t,comment:o}){const a=y(),s=l.useRef(null),[c,r]=l.useState(null);l.useEffect(()=>{n!==null&&r(n)},[n]);function i(){const d=document.querySelector(".app");d==null||d.classList.add("modal-mode"),a(g(!0)),a(b((c==null?void 0:c.nickName)===o.owner)),a(I("comment")),a(S(t)),a(P(o._id))}return e.jsx("button",{type:"button","aria-label":"더보기 버튼",className:"button-more commentitem",onClick:i,ref:s})}function Y({userInfo:n,postId:t,comments:o}){return o&&o.length>0?e.jsx("ul",{children:o.map((a,s)=>e.jsx(K,{userInfo:n,postId:t,comment:a,isLast:s===o.length-1},a._id))}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"댓글이 없어요."})]})}function K({userInfo:n,postId:t,comment:o,isLast:a}){var p,j;const{owner:s,content:c,like:r,registeredAt:i,updatedAt:d}=o,u=f(C=>C.postSlice.editCommentMode),m=k(i)?`${(p=i.split(". ").at(-1))==null?void 0:p.split(":")[0]}:${(j=i.split(". ").at(-1))==null?void 0:j.split(":")[1]}`:i.slice(0,13),x=l.useRef(null);return l.useEffect(()=>{a&&x.current&&x.current.scrollIntoView(!1)},[a]),e.jsxs("li",{className:"li-commentitem",ref:x,children:[e.jsxs("dl",{className:"wrapper-commentitem",children:[e.jsxs("dl",{className:"container-owner-date",children:[e.jsx("dt",{className:"sr-only",children:"댓글 작성자"}),e.jsx("dd",{className:"txt-owner",children:s}),e.jsx("dt",{className:"sr-only",children:"게시 시간"}),e.jsx("dd",{className:"txt-date",children:m})]}),e.jsxs("dl",{children:[e.jsx("dt",{className:"sr-only",children:"댓글 내용"}),u?e.jsx(Q,{content:c}):e.jsx("dd",{className:"txt-content",children:c})]})]}),u?e.jsx(X,{postId:t,commentId:o._id}):e.jsx(z,{userInfo:n,postId:t,comment:o})]})}function Q({content:n}){const[t,o]=l.useState(n);function a(s){o(s.target.value)}return e.jsx("textarea",{id:"editCommentTextarea",onChange:a,minLength:1,maxLength:100,value:t})}function X({postId:n,commentId:t}){function o(){const s=document.getElementById("editCommentTextarea");s!==null&&a(s.value)}async function a(s){(await(await fetch(`${h}/comments/${t}?postId=${n}`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:s})})).json()).success?alert("댓글이 수정되었습니다."):alert("다시 시도해주세요."),window.location.reload()}return e.jsx("button",{type:"button",className:"button-more commentitem edit",onClick:o,children:"수정"})}const T=10;function Z({postId:n,comments:t,userInfo:o}){const a=y(),s=f(d=>d.paginationSlice.comment),c=f(d=>d.paginationSlice.currentPage),[r,i]=l.useState(s[c-1]);return l.useEffect(()=>{a({type:"paginationSlice/CURRENT_PAGE",currentPage:Object.keys(s).length})},[s]),l.useEffect(()=>{i(s[c-1])},[s,c]),e.jsxs("section",{className:"section-post-comment",children:[t&&t.length>0?e.jsxs("h3",{children:["댓글 ",e.jsxs("span",{children:["(",t.length,")"]})]}):e.jsx("h3",{className:"sr-only",children:"댓글"}),e.jsx(V,{}),e.jsx(H,{postId:n}),e.jsx(Y,{postId:n,comments:r,userInfo:o}),t&&t.length>T?e.jsx(v,{count:t.length,perPage:T}):null]})}function ee(){const[n,t]=l.useState(!1),o=f(s=>s.postSlice.editDeleteNotifyModalOn),a=f(s=>s.postSlice.sameUserOwner);return l.useEffect(()=>{t(o===!0)},[o]),e.jsxs("article",{className:`modal-edit-delete-notify ${n?"on":""}`,children:[e.jsx("h4",{className:"sr-only",children:"수정, 삭제, 신고용 모달"}),e.jsx("ul",{children:a?e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx(se,{})]}):e.jsx("li",{children:" 🚨 신고하기"})})]})}function te(){const n=y(),t=f(s=>s.postSlice.postId);f(s=>s.postSlice.commentId);const o=f(s=>s.postSlice.accessTarget);function a(){o==="post"?(N(`/community/edit/${t}`),E(!1),n(g(!1))):o==="comment"&&(n(D(!0)),E(!1),n(g(!1)))}return e.jsx("li",{onClick:a,children:"🩹 수정하기"})}function se(){const n=y(),t=f(i=>i.postSlice.postId),o=f(i=>i.postSlice.commentId),a=f(i=>i.postSlice.accessTarget);async function s(){a==="post"?c():a==="comment"&&r()}async function c(){try{(await(await fetch(`${h}/posts/${t}`,{credentials:"include",method:"DELETE"})).json()).success?N("/community"):alert("다시 시도해주세요.")}catch(i){console.error(i)}finally{E(!1),n(g(!1))}}async function r(){try{(await(await fetch(`${h}/comments/${o}?postId=${t}`,{credentials:"include",method:"DELETE"})).json()).success?window.location.reload():alert("다시 시도해주세요.")}catch(i){console.error(i)}finally{E(!1),n(g(!1))}}return e.jsx("li",{onClick:s,children:"🗑️ 삭제하기"})}function ne(){const n=f(c=>c.postSlice.editDeleteNotifyModalOn),[t,o]=l.useState(!1),a=y();l.useEffect(()=>{o(n===!0)},[n]),l.useEffect(()=>(t&&document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}),[t]);function s(c){if(c.target.className==="app modal-mode"){const r=document.querySelector(".app");r==null||r.classList.remove("modal-mode"),a(g(!1)),a(S(""))}}return e.jsx("div",{className:`modal-group ${t?"on":""}`,children:e.jsx(ee,{})})}const Ee={title:"게시글 | Green Maps",description:"채식 식당 지도 서비스 게시글 페이지"};function Se(n){var d;const t=((d=n.routeParams)==null?void 0:d.postId)||"",o=y(),[a,s]=A(),[c,r]=l.useState(null);l.useEffect(()=>{i().then(u=>{r(u||null)})},[]);async function i(){return await(await fetch(`${h}/posts/${t}`,{headers:{"Cache-Control":"max-age=31536000"}})).json()}return l.useEffect(()=>{if(c&&c.comments){const u={};for(let m=0;m<c.comments.length;m=m+10){const x=c.comments.slice(m,m+10);u[m/10]=x}o(L(u))}},[c]),c?e.jsxs($.Suspense,{fallback:e.jsx(w,{}),children:[e.jsx(_,{title:c.subject}),e.jsxs("main",{className:"main-read-post",children:[e.jsx(F,{userInfo:s,postInfo:c}),c.subject!=="공지사항"&&e.jsx(Z,{userInfo:s,postId:c._id,comments:c.comments})]}),e.jsx(ne,{})]}):e.jsx(w,{})}export{Se as Page,Ee as documentProps};