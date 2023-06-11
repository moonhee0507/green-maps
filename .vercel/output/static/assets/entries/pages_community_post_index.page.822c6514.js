import{j as e,r}from"../chunks/chunk-0ad0329c.js";import{A as p,c as E,b as u}from"../chunks/chunk-f6dd005f.js";import{S as O}from"../chunks/chunk-0defb547.js";import{T as _}from"../chunks/chunk-f401e884.js";import{D as M}from"../chunks/chunk-4a7b83e5.js";import{i as D}from"../chunks/chunk-9ae07e36.js";import{i as k}from"../chunks/chunk-dfbf6de9.js";import{E as y,S as b,a as w,b as I,c as v,d as P}from"../chunks/chunk-8da5e704.js";import{P as A}from"../chunks/chunk-6ed56ac3.js";import{n as $}from"../chunks/chunk-c949b376.js";import{a as C}from"../chunks/chunk-3258e6a6.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-af981888.js";function U(n){const t=n.content;return e.jsx("div",{dangerouslySetInnerHTML:{__html:M.sanitize(t)},style:{wordBreak:"keep-all"}})}function R(n){const{postId:t,like:o}=n,[c,s]=r.useState(null),[i,l]=r.useState(o?o.length:0),[a,d]=r.useState(!1);r.useEffect(()=>{f().then(h=>{s(h)}).catch(h=>console.error(h));async function f(){return(await(await fetch(`${p}/users`)).json()).user.userId}},[]),r.useEffect(()=>{o&&d(o.some(f=>f.user===c))},[c]);function x(){a?m():j(),d(!a)}async function j(){if((await fetch(`${p}/posts/${t}/like`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:c})})).ok)l(i+1);else throw new Error}async function m(){if((await fetch(`${p}/posts/${t}/like`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:c})})).ok)l(i-1);else throw new Error}return e.jsxs("button",{className:"button-like",type:"button",onClick:x,style:{margin:"0 auto"},children:[e.jsx("img",{src:D,alt:"좋아요 이미지",className:`img-like review ${a?"on":""}`}),e.jsx("span",{style:{minWidth:"20px"},children:i})]})}function B({userInfo:n,owner:t,postId:o}){const c=E(),s=r.useRef(null),[i,l]=r.useState(null);r.useEffect(()=>{n!==null&&l(n)},[n]);function a(){const d=document.querySelector(".app");d==null||d.classList.add("modal-mode"),c(y(!0)),c(b((i==null?void 0:i.nickName)===t)),c(w(o)),c(I("post"))}return e.jsx("button",{type:"button","aria-label":"더보기 버튼",className:"button-more postitem",onClick:a,ref:s})}function F({userInfo:n,postInfo:t}){const{subject:o,content:c,like:s,owner:i,photo:l,registeredAt:a,comments:d,title:x,_id:j}=t;return e.jsxs("section",{className:"section-post-content",children:[e.jsx("h3",{"aria-label":"게시글 제목",className:"txt-post-title",children:x}),e.jsxs("div",{children:[e.jsx("p",{"aria-label":"작성자",className:"txt-post-owner",children:i}),e.jsxs("div",{className:"container-post-subinfo",children:[e.jsx(J,{like:s}),e.jsx(q,{comments:d}),e.jsx(G,{registeredAt:a})]})]}),e.jsx(U,{content:c}),e.jsx(R,{postId:j,like:s}),e.jsx(B,{userInfo:n,owner:i,postId:j})]})}function J(n){var t;return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"좋아요 개수"}),e.jsx("dd",{className:"container-count-like",children:e.jsx("span",{children:((t=n.like)==null?void 0:t.length)||0})})]})}function q(n){var t;return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"댓글 개수"}),e.jsx("dd",{className:"container-count-comment",children:e.jsx("span",{children:((t=n.comments)==null?void 0:t.length)||0})})]})}function G(n){var c,s;const{registeredAt:t}=n,o=k(t)?`${(c=t.split(". ").at(-1))==null?void 0:c.split(":")[0]}:${(s=t.split(". ").at(-1))==null?void 0:s.split(":")[1]}`:t.slice(0,13);return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"작성 시간"}),e.jsx("dd",{className:"container-post-time",children:e.jsx("time",{dateTime:"",children:o})})]})}function W(n){const{postId:t,content:o}=n,[c,s]=r.useState(null);r.useEffect(()=>{l().then(a=>s(a)).catch(a=>console.error(a));async function l(){return(await(await fetch(`${p}/users/`)).json()).user.nickName}},[]);async function i(){try{if(o!==null&&o.length>0){const l={owner:c,content:o};(await(await fetch(`${p}/posts/${t}/comment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json()).success===!0&&window.location.reload()}}catch(l){console.error(l)}}return e.jsx("button",{type:"button",onClick:i,disabled:!(o!==null&&o.length>0),"aria-label":"댓글 등록 버튼"})}function H({postId:n}){const[t,o]=r.useState(null);function c(s){o(s.target.value)}return e.jsxs("form",{className:"form-create-comment",children:[e.jsx("label",{htmlFor:"comment",className:"sr-only",children:"댓글 작성하기"}),e.jsx("textarea",{id:"comment",onChange:c,minLength:1,maxLength:100}),e.jsx(W,{postId:n,content:t})]})}function V(){return e.jsx("div",{className:"container-notice comment",children:e.jsx("em",{children:"게시글과 관련없는 홍보성 댓글과 저속한 표현의 비방성 댓글은 삭제될 수 있습니다."})})}function z({userInfo:n,postId:t,comment:o}){const c=E(),s=r.useRef(null),[i,l]=r.useState(null);r.useEffect(()=>{n!==null&&l(n)},[n]);function a(){const d=document.querySelector(".app");d==null||d.classList.add("modal-mode"),c(y(!0)),c(b((i==null?void 0:i.nickName)===o.owner)),c(I("comment")),c(w(t)),c(v(o._id))}return e.jsx("button",{type:"button","aria-label":"더보기 버튼",className:"button-more commentitem",onClick:a,ref:s})}function Y({userInfo:n,postId:t,comments:o}){return o&&o.length>0?e.jsx("ul",{children:o.map((c,s)=>e.jsx(K,{userInfo:n,postId:t,comment:c,isLast:s===o.length-1},s))}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"댓글이 없어요."})]})}function K({userInfo:n,postId:t,comment:o,isLast:c}){var f,h;const{owner:s,content:i,like:l,registeredAt:a,updatedAt:d}=o,x=u(N=>N.postSlice.editCommentMode),j=k(a)?`${(f=a.split(". ").at(-1))==null?void 0:f.split(":")[0]}:${(h=a.split(". ").at(-1))==null?void 0:h.split(":")[1]}`:a.slice(0,13),m=r.useRef(null);return r.useEffect(()=>{c&&m.current&&m.current.scrollIntoView(!1)},[c]),e.jsxs("li",{className:"li-commentitem",ref:m,children:[e.jsxs("dl",{className:"wrapper-commentitem",children:[e.jsxs("dl",{className:"container-owner-date",children:[e.jsx("dt",{className:"sr-only",children:"댓글 작성자"}),e.jsx("dd",{className:"txt-owner",children:s}),e.jsx("dt",{className:"sr-only",children:"게시 시간"}),e.jsx("dd",{className:"txt-date",children:j})]}),e.jsxs("dl",{children:[e.jsx("dt",{className:"sr-only",children:"댓글 내용"}),x?e.jsx(Q,{content:i}):e.jsx("dd",{className:"txt-content",children:i})]})]}),x?e.jsx(X,{postId:t,commentId:o._id}):e.jsx(z,{userInfo:n,postId:t,comment:o})]})}function Q({content:n}){const[t,o]=r.useState(n);function c(s){o(s.target.value)}return e.jsx("textarea",{id:"editCommentTextarea",onChange:c,minLength:1,maxLength:100,value:t})}function X({postId:n,commentId:t}){function o(){const s=document.getElementById("editCommentTextarea");s!==null&&c(s.value)}async function c(s){(await(await fetch(`${p}/comments/${t}?postId=${n}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:s})})).json()).success?alert("댓글이 수정되었습니다."):alert("다시 시도해주세요."),window.location.reload()}return e.jsx("button",{type:"button",className:"button-more commentitem edit",onClick:o,children:"수정"})}const T=10;function Z({postId:n,comments:t,userInfo:o}){const c=E(),s=u(d=>d.paginationSlice.comment),i=u(d=>d.paginationSlice.currentPage),[l,a]=r.useState(s[i-1]);return r.useEffect(()=>{c({type:"paginationSlice/CURRENT_PAGE",currentPage:Object.keys(s).length})},[s]),r.useEffect(()=>{a(s[i-1])},[s,i]),e.jsxs("section",{className:"section-post-comment",children:[t&&t.length>0?e.jsxs("h3",{children:["댓글 ",e.jsxs("span",{children:["(",t.length,")"]})]}):e.jsx("h3",{className:"sr-only",children:"댓글"}),e.jsx(V,{}),e.jsx(H,{postId:n}),e.jsx(Y,{postId:n,comments:l,userInfo:o}),t&&t.length>T?e.jsx(A,{count:t.length,perPage:T}):null]})}function ee(){const[n,t]=r.useState(!1),o=u(s=>s.postSlice.editDeleteNotifyModalOn),c=u(s=>s.postSlice.sameUserOwner);return r.useEffect(()=>{t(o===!0)},[o]),e.jsxs("article",{className:`modal-edit-delete-notify ${n?"on":""}`,children:[e.jsx("h4",{className:"sr-only",children:"수정, 삭제, 신고용 모달"}),e.jsx("ul",{children:c?e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx(se,{})]}):e.jsx("li",{children:" 🚨 신고하기"})})]})}function te(){const n=E(),t=u(s=>s.postSlice.postId);u(s=>s.postSlice.commentId);const o=u(s=>s.postSlice.accessTarget);function c(){o==="post"?($(`/community/edit/${t}`),C(!1),n(y(!1))):o==="comment"&&(n(P(!0)),C(!1),n(y(!1)))}return e.jsx("li",{onClick:c,children:"🩹 수정하기"})}function se(){const n=E(),t=u(a=>a.postSlice.postId),o=u(a=>a.postSlice.commentId),c=u(a=>a.postSlice.accessTarget);async function s(){c==="post"?i():c==="comment"&&l()}async function i(){try{(await(await fetch(`${p}/posts/${t}`,{method:"DELETE"})).json()).success?$("/community"):alert("다시 시도해주세요.")}catch(a){console.error(a)}finally{C(!1),n(y(!1))}}async function l(){try{(await(await fetch(`${p}/comments/${o}?postId=${t}`,{method:"DELETE"})).json()).success?window.location.reload():alert("다시 시도해주세요.")}catch(a){console.error(a)}finally{C(!1),n(y(!1))}}return e.jsx("li",{onClick:s,children:"🗑️ 삭제하기"})}function ne(){const n=u(i=>i.postSlice.editDeleteNotifyModalOn),[t,o]=r.useState(!1),c=E();r.useEffect(()=>{o(n===!0)},[n]),r.useEffect(()=>(t&&document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}),[t]);function s(i){if(i.target.className==="app modal-mode"){const l=document.querySelector(".app");l==null||l.classList.remove("modal-mode"),c(y(!1)),c(w(""))}}return e.jsx("div",{className:`modal-group ${t?"on":""}`,children:e.jsx(ee,{})})}function je(n){const t=E(),[o,c]=r.useState(null),s=n.postInfo,{subject:i,content:l,like:a,owner:d,photo:x,registeredAt:j,comments:m,title:f,_id:h}=s;r.useEffect(()=>{N().then(S=>{S.success&&c(S.user)})},[]),r.useEffect(()=>{const S={};for(let g=0;g<m.length;g=g+10){const L=m.slice(g,g+10);S[g/10]=L}t(O(S))},[n]);async function N(){return await(await fetch(`${p}/users`)).json()}return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:i}),e.jsxs("main",{className:"main-read-post",children:[e.jsx(F,{userInfo:o,postInfo:s}),e.jsx(Z,{userInfo:o,postId:h,comments:m})]}),e.jsx(ne,{})]})}export{je as Page};
