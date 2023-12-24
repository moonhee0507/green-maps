import{j as e,r as o}from"./chunk-93156e5d.js";import{i as y}from"./chunk-dfbf6de9.js";import{A as f,u as N,b as v}from"./chunk-c1371adf.js";import{i as k}from"./chunk-9ae07e36.js";import{E as b,S as E,a as S,b as I}from"./chunk-c4b708ad.js";function C(t){return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"작성자"}),e.jsx("dd",{className:"txt-review-owner",children:t.owner})]})}function $(t){var s,r;const{registeredAt:n}=t,l=y(n)?`${(s=n.split(". ").at(-1))==null?void 0:s.split(":")[0]}:${(r=n.split(". ").at(-1))==null?void 0:r.split(":")[1]}`:n.slice(0,13);return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"작성일자"}),e.jsx("dd",{className:"txt-review-date",children:l})]})}function L(t){const[n,l]=o.useState(0),s=[...t.photoList].sort((i,a)=>i.pick&&!a.pick?-1:!i.pick&&a.pick?1:0);function r(){l(i=>(i+1)%s.length)}function c(){l(i=>(i+s.length-1)%s.length)}return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"사진"}),e.jsx("dd",{className:"wrapper-review-img",children:e.jsxs("div",{className:"container-review-img",children:[e.jsx("p",{className:"txt-count-img","aria-label":"사진 개수 정보",children:`${n+1} / ${s.length}`}),e.jsx("button",{type:"button",className:"button-move-img prev",onClick:c}),s.map((i,a)=>e.jsx("img",{loading:"lazy",src:`https://moonhee-greenmaps.s3.ap-northeast-2.amazonaws.com/${i.src}`,style:{display:a===n?"block":"none"}},i._id)),e.jsx("button",{type:"button",className:"button-move-img next",onClick:r})]})})]})}function R(t){const{reviewId:n,like:l}=t,[s,r]=o.useState(null),[c,i]=o.useState(l?l.length:0),[a,d]=o.useState(!1);o.useEffect(()=>{u();async function u(){try{const p=await(await fetch(`${f}/users`)).json();p.success?r(p.user.userId):r(null)}catch(m){console.error(m)}}},[]),o.useEffect(()=>{l&&d(l.some(u=>u.user===s))},[s]);function x(){a?j():h(),d(!a)}async function h(){if((await fetch(`${f}/reviews/${n}/like`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:s})})).ok)i(c+1);else throw new Error}async function j(){if((await fetch(`${f}/reviews/${n}/like`,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:s})})).ok)i(c-1);else throw new Error}return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"좋아요"}),e.jsxs("dd",{className:"container-button-txt",children:[e.jsx("button",{className:"button-review-like",type:"button",onClick:x,children:e.jsx("img",{src:k,alt:"좋아요 이미지",className:`img-like review ${a?"on":""}`})}),e.jsx("span",{"aria-label":"좋아요 개수",children:c})]})]})}function w(t){return e.jsxs("dl",{children:[e.jsx("dt",{className:"sr-only",children:"내용"}),e.jsx("dd",{className:"txt-review-content",children:t.content})]})}function _({userInfo:t,owner:n,reviewId:l,restaurantId:s}){const r=N(),[c,i]=o.useState(null);o.useEffect(()=>{t&&i(t)},[t]);const a=()=>{const d=document.querySelector(".app");d==null||d.classList.add("modal-mode"),r(b(!0)),r(E((c==null?void 0:c.userId)===n)),r(S(l)),r(I(s))};return e.jsx("button",{className:"button-more reviewitem","aria-label":"더보기 버튼",onClick:a})}function P({item:t,userInfo:n,restaurantId:l,isFirst:s}){const{_id:r,owner:c,registeredAt:i,photo:a,content:d,like:x,restaurant:h}=t,[j]=o.useState(window.location.pathname==="/my"),u=o.useRef(null),m=v(p=>p.paginationSlice.currentPage);return o.useEffect(()=>{s&&u.current&&m!==1&&u.current.scrollIntoView({block:"center"})},[m]),e.jsxs("li",{ref:u,className:"list-review",children:[j?e.jsxs("p",{className:"txt-restaurant-in-my",children:[e.jsx("em",{children:typeof h!="string"?h.title:""}),"에 작성한 리뷰입니다."]}):null,e.jsxs("article",{className:"container-reviewitem",children:[e.jsx("h5",{className:"sr-only",children:"개별 리뷰"}),e.jsxs("dl",{children:[e.jsxs("div",{className:"style-wrapper-reviewitem",children:[e.jsx(C,{owner:c}),e.jsx($,{registeredAt:i}),e.jsx(_,{userInfo:n,owner:c,reviewId:r,restaurantId:l})]}),a&&a.length>0?e.jsxs(e.Fragment,{children:[e.jsx(L,{photoList:a}),e.jsxs("div",{className:"style-wrapper-reviewitem",children:[e.jsx(g,{reviewId:r,like:x||[]}),e.jsx(w,{content:d})]})]}):e.jsxs("div",{className:"style-wrapper-reviewitem only-text",children:[e.jsx(w,{content:d}),e.jsx(g,{reviewId:r,like:x||[]})]})]})]})]})}function g({reviewId:t,like:n}){return e.jsxs("dl",{className:"container-like-comment",children:[e.jsx(R,{reviewId:t,like:n}),e.jsx(T,{})]})}function T(){const t=()=>{window.alert("준비 중인 서비스입니다.")};return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"댓글"}),e.jsxs("dd",{className:"container-button-txt",children:[e.jsx("button",{type:"button","aria-label":"리뷰 댓글 쓰기",className:"button-review-comment",onClick:t}),e.jsx("span",{"aria-label":"댓글 개수",children:"0"})]})]})}export{P as R};
//# sourceMappingURL=chunk-41879ac8.js.map