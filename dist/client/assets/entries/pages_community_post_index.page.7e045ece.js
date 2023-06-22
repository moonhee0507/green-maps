import{j as e,r as l,R as $}from"../chunks/chunk-0ad0329c.js";import{A as h,b as y,u as f}from"../chunks/chunk-f5cf074f.js";import{S as L}from"../chunks/chunk-f3107ac8.js";import{T as _}from"../chunks/chunk-fa93ea2c.js";import{D as M}from"../chunks/chunk-4a7b83e5.js";import{i as O}from"../chunks/chunk-9ae07e36.js";import{i as k}from"../chunks/chunk-dfbf6de9.js";import{a as g,S as b,b as S,c as I,d as P,e as D}from"../chunks/chunk-41308c4f.js";import{a as E}from"../chunks/chunk-3258e6a6.js";import{n as N}from"../chunks/chunk-621f058a.js";import{P as v}from"../chunks/chunk-8275f212.js";import{u as A}from"../chunks/chunk-aaa4175a.js";import{L as w}from"../chunks/chunk-c9eff144.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-bf08ca9a.js";import"../chunks/chunk-0249643f.js";function R(s){const t=s.content;return e.jsx("div",{dangerouslySetInnerHTML:{__html:M.sanitize(t)},style:{wordBreak:"keep-all",marginTop:"40px"}})}function B(s){const{postId:t,like:n}=s,[o,c]=l.useState(null),[r,i]=l.useState(n?n.length:0),[a,d]=l.useState(!1);l.useEffect(()=>{p().then(j=>{c(j)}).catch(j=>console.error(j));async function p(){return(await(await fetch(`${h}/users`)).json()).user.userId}},[]),l.useEffect(()=>{n&&d(n.some(p=>p.user===o))},[o]);function u(){a?x():m(),d(!a)}async function m(){if((await fetch(`${h}/posts/${t}/like`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:o})})).ok)i(r+1);else throw new Error}async function x(){if((await fetch(`${h}/posts/${t}/like`,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:o})})).ok)i(r-1);else throw new Error}return e.jsxs("button",{className:"button-like",type:"button",onClick:u,style:{margin:"60px auto 0px"},children:[e.jsx("img",{src:O,alt:"좋아요 이미지",className:`img-like review ${a?"on":""}`}),e.jsx("span",{style:{minWidth:"20px"},children:r})]})}function U({userInfo:s,owner:t,postId:n}){const o=y(),c=l.useRef(null),[r,i]=l.useState(null);l.useEffect(()=>{s!==null&&i(s)},[s]);function a(){E(!0),o(g(!0)),o(b((r==null?void 0:r.nickName)===t)),o(S(n)),o(I("post"))}return e.jsx("button",{type:"button","aria-label":"더보기 버튼",className:"button-more postitem",onClick:a,ref:c})}function F({userInfo:s,postInfo:t}){const{subject:n,content:o,like:c,owner:r,photo:i,registeredAt:a,comments:d,title:u,_id:m}=t;return e.jsxs("section",{className:"section-post-content",children:[e.jsx("h3",{"aria-label":"게시글 제목",className:"txt-post-title",children:u}),e.jsxs("div",{children:[e.jsx("p",{"aria-label":"작성자",className:"txt-post-owner",children:r}),e.jsxs("div",{className:"container-post-subinfo",children:[e.jsx(G,{like:c}),e.jsx(J,{comments:d}),e.jsx(W,{registeredAt:a})]})]}),e.jsx(R,{content:o}),e.jsx(B,{postId:m,like:c}),e.jsx(U,{userInfo:s,owner:r,postId:m})]})}function G(s){var t;return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"좋아요 개수"}),e.jsx("dd",{className:"container-count-like",children:e.jsx("span",{children:((t=s.like)==null?void 0:t.length)||0})})]})}function J(s){var t;return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"댓글 개수"}),e.jsx("dd",{className:"container-count-comment",children:e.jsx("span",{children:((t=s.comments)==null?void 0:t.length)||0})})]})}function W(s){var o,c;const{registeredAt:t}=s,n=k(t)?`${(o=t.split(". ").at(-1))==null?void 0:o.split(":")[0]}:${(c=t.split(". ").at(-1))==null?void 0:c.split(":")[1]}`:t.slice(0,13);return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"작성 시간"}),e.jsx("dd",{className:"container-post-time",children:e.jsx("time",{dateTime:"",children:n})})]})}function q(s){const{postId:t,content:n}=s;async function o(){return await(await fetch(`${h}/users/`,{credentials:"include",method:"GET"})).json()}function c(){o().then(i=>{i.success===!0?r(i.user.nickName):confirm(`로그인이 필요한 서비스입니다.
로그인 하시겠습니까?`)&&N("/login")})}async function r(i){try{if(n!==null&&n.length>0){const a={owner:i,content:n};(await(await fetch(`${h}/posts/${t}/comment`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json()).success===!0&&window.location.reload()}}catch(a){console.error(a)}}return e.jsx("button",{type:"button",onClick:c,disabled:!(n!==null&&n.length>0),"aria-label":"댓글 등록 버튼"})}function H({postId:s}){const[t,n]=l.useState(null);function o(c){n(c.target.value)}return e.jsxs("form",{className:"form-create-comment",children:[e.jsx("label",{htmlFor:"comment",className:"sr-only",children:"댓글 작성하기"}),e.jsx("textarea",{id:"comment",onChange:o,minLength:1,maxLength:100}),e.jsx(q,{postId:s,content:t})]})}function V(){return e.jsx("div",{className:"container-notice comment",children:e.jsx("em",{children:"게시글과 관련없는 홍보성 댓글과 저속한 표현의 비방성 댓글은 삭제될 수 있습니다."})})}function z({userInfo:s,postId:t,comment:n}){const o=y(),c=l.useRef(null),[r,i]=l.useState(null);l.useEffect(()=>{s!==null&&i(s)},[s]);function a(){const d=document.querySelector(".app");d==null||d.classList.add("modal-mode"),o(g(!0)),o(b((r==null?void 0:r.nickName)===n.owner)),o(I("comment")),o(S(t)),o(P(n._id))}return e.jsx("button",{type:"button","aria-label":"더보기 버튼",className:"button-more commentitem",onClick:a,ref:c})}function Y({userInfo:s,postId:t,comments:n}){return n&&n.length>0?e.jsx("ul",{children:n.map((o,c)=>e.jsx(K,{userInfo:s,postId:t,comment:o,isLast:c===n.length-1},o._id))}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"댓글이 없어요."})]})}function K({userInfo:s,postId:t,comment:n,isLast:o}){var p,j;const{owner:c,content:r,like:i,registeredAt:a,updatedAt:d}=n,u=f(C=>C.postSlice.editCommentMode),m=k(a)?`${(p=a.split(". ").at(-1))==null?void 0:p.split(":")[0]}:${(j=a.split(". ").at(-1))==null?void 0:j.split(":")[1]}`:a.slice(0,13),x=l.useRef(null);return l.useEffect(()=>{o&&x.current&&x.current.scrollIntoView(!1)},[o]),e.jsxs("li",{className:"li-commentitem",ref:x,children:[e.jsxs("dl",{className:"wrapper-commentitem",children:[e.jsxs("dl",{className:"container-owner-date",children:[e.jsx("dt",{className:"sr-only",children:"댓글 작성자"}),e.jsx("dd",{className:"txt-owner",children:c}),e.jsx("dt",{className:"sr-only",children:"게시 시간"}),e.jsx("dd",{className:"txt-date",children:m})]}),e.jsxs("dl",{children:[e.jsx("dt",{className:"sr-only",children:"댓글 내용"}),u?e.jsx(Q,{content:r}):e.jsx("dd",{className:"txt-content",children:r})]})]}),u?e.jsx(X,{postId:t,commentId:n._id}):e.jsx(z,{userInfo:s,postId:t,comment:n})]})}function Q({content:s}){const[t,n]=l.useState(s);function o(c){n(c.target.value)}return e.jsx("textarea",{id:"editCommentTextarea",onChange:o,minLength:1,maxLength:100,value:t})}function X({postId:s,commentId:t}){function n(){const c=document.getElementById("editCommentTextarea");c!==null&&o(c.value)}async function o(c){(await(await fetch(`${h}/comments/${t}?postId=${s}`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c})})).json()).success?alert("댓글이 수정되었습니다."):alert("다시 시도해주세요."),window.location.reload()}return e.jsx("button",{type:"button",className:"button-more commentitem edit",onClick:n,children:"수정"})}const T=10;function Z({postId:s,comments:t,userInfo:n}){const o=y(),c=f(d=>d.paginationSlice.comment),r=f(d=>d.paginationSlice.currentPage),[i,a]=l.useState(c[r-1]);return l.useEffect(()=>{o({type:"paginationSlice/CURRENT_PAGE",currentPage:Object.keys(c).length})},[c]),l.useEffect(()=>{a(c[r-1])},[c,r]),e.jsxs("section",{className:"section-post-comment",children:[t&&t.length>0?e.jsxs("h3",{children:["댓글 ",e.jsxs("span",{children:["(",t.length,")"]})]}):e.jsx("h3",{className:"sr-only",children:"댓글"}),e.jsx(V,{}),e.jsx(H,{postId:s}),e.jsx(Y,{postId:s,comments:i,userInfo:n}),t&&t.length>T?e.jsx(v,{count:t.length,perPage:T}):null]})}function ee(){const[s,t]=l.useState(!1),n=f(c=>c.postSlice.editDeleteNotifyModalOn),o=f(c=>c.postSlice.sameUserOwner);return l.useEffect(()=>{t(n===!0)},[n]),e.jsxs("article",{className:`modal-edit-delete-notify ${s?"on":""}`,children:[e.jsx("h4",{className:"sr-only",children:"수정, 삭제, 신고용 모달"}),e.jsx("ul",{children:o?e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx(se,{})]}):e.jsx("li",{children:" 🚨 신고하기"})})]})}function te(){const s=y(),t=f(c=>c.postSlice.postId);f(c=>c.postSlice.commentId);const n=f(c=>c.postSlice.accessTarget);function o(){n==="post"?(N(`/community/edit/${t}`),E(!1),s(g(!1))):n==="comment"&&(s(D(!0)),E(!1),s(g(!1)))}return e.jsx("li",{onClick:o,children:"🩹 수정하기"})}function se(){const s=y(),t=f(a=>a.postSlice.postId),n=f(a=>a.postSlice.commentId),o=f(a=>a.postSlice.accessTarget);async function c(){o==="post"?r():o==="comment"&&i()}async function r(){try{(await(await fetch(`${h}/posts/${t}`,{credentials:"include",method:"DELETE"})).json()).success?N("/community"):alert("다시 시도해주세요.")}catch(a){console.error(a)}finally{E(!1),s(g(!1))}}async function i(){try{(await(await fetch(`${h}/comments/${n}?postId=${t}`,{credentials:"include",method:"DELETE"})).json()).success?window.location.reload():alert("다시 시도해주세요.")}catch(a){console.error(a)}finally{E(!1),s(g(!1))}}return e.jsx("li",{onClick:c,children:"🗑️ 삭제하기"})}function ne(){const s=f(r=>r.postSlice.editDeleteNotifyModalOn),[t,n]=l.useState(!1),o=y();l.useEffect(()=>{n(s===!0)},[s]),l.useEffect(()=>(t&&document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[t]);function c(r){if(r.target.className==="app modal-mode"){const i=document.querySelector(".app");i==null||i.classList.remove("modal-mode"),o(g(!1)),o(S(""))}}return e.jsx("div",{className:`modal-group ${t?"on":""}`,children:e.jsx(ee,{})})}const Ee={title:"게시글 | Green Maps",description:"채식 식당 지도 서비스 게시글 페이지"};function Se(s){const{routeParams:t}=s,n=(t==null?void 0:t.postId)||"",o=y(),[c,r]=A(),[i,a]=l.useState(null);l.useEffect(()=>{d().then(u=>{a(u||null)})},[]);async function d(){return await(await fetch(`${h}/posts/${n}`,{headers:{"Cache-Control":"max-age=31536000"}})).json()}return l.useEffect(()=>{if(i&&i.comments){const u={};for(let m=0;m<i.comments.length;m=m+10){const x=i.comments.slice(m,m+10);u[m/10]=x}o(L(u))}},[i]),i?e.jsxs($.Suspense,{fallback:e.jsx(w,{}),children:[e.jsx(_,{title:i.subject}),e.jsxs("main",{className:"main-read-post",children:[e.jsx(F,{userInfo:r,postInfo:i}),i.subject!=="공지사항"&&e.jsx(Z,{userInfo:r,postId:i._id,comments:i.comments})]}),e.jsx(ne,{})]}):e.jsx(w,{})}export{Se as Page,Ee as documentProps};
