import{j as e,r as o}from"./chunk-0ad0329c.js";import{i as g}from"./chunk-dfbf6de9.js";import{A as j,b as y,u as v}from"./chunk-f5cf074f.js";import{i as k}from"./chunk-9ae07e36.js";import{E as b,S as E,a as S,b as I}from"./chunk-2b326172.js";function C(t){return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"작성자"}),e.jsx("dd",{className:"txt-review-owner",children:t.owner})]})}function $(t){var s,i;const{registeredAt:n}=t,c=g(n)?`${(s=n.split(". ").at(-1))==null?void 0:s.split(":")[0]}:${(i=n.split(". ").at(-1))==null?void 0:i.split(":")[1]}`:n.slice(0,13);return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"작성일자"}),e.jsx("dd",{className:"txt-review-date",children:c})]})}function L(t){const[n,c]=o.useState(0),s=[...t.photoList].sort((r,a)=>r.pick&&!a.pick?-1:!r.pick&&a.pick?1:0);function i(){c(r=>(r+1)%s.length)}function l(){c(r=>(r+s.length-1)%s.length)}return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"사진"}),e.jsx("dd",{className:"wrapper-review-img",children:e.jsxs("div",{className:"container-review-img",children:[e.jsx("p",{className:"txt-count-img","aria-label":"사진 개수 정보",children:`${n+1} / ${s.length}`}),e.jsx("button",{type:"button",className:"button-move-img prev",onClick:l}),s.map((r,a)=>e.jsx("img",{src:`https://moonhee-greenmaps.s3.ap-northeast-2.amazonaws.com/${r.src}`,style:{display:a===n?"block":"none"}},r._id)),e.jsx("button",{type:"button",className:"button-move-img next",onClick:i})]})})]})}function R(t){const{reviewId:n,like:c}=t,[s,i]=o.useState(null),[l,r]=o.useState(c?c.length:0),[a,d]=o.useState(!1);o.useEffect(()=>{u().then(m=>{i(m)}).catch(m=>console.error(m));async function u(){return(await(await fetch(`${j}/users/`,{credentials:"include",method:"GET"})).json()).user.userId}},[]),o.useEffect(()=>{c&&d(c.some(u=>u.user===s))},[s]);function h(){a?p():x(),d(!a)}async function x(){if((await fetch(`${j}/reviews/${n}/like`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:s})})).ok)r(l+1);else throw new Error}async function p(){if((await fetch(`${j}/reviews/${n}/like`,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:s})})).ok)r(l-1);else throw new Error}return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"좋아요"}),e.jsxs("dd",{className:"container-button-txt",children:[e.jsx("button",{className:"button-review-like",type:"button",onClick:h,children:e.jsx("img",{src:k,alt:"좋아요 이미지",className:`img-like review ${a?"on":""}`})}),e.jsx("span",{"aria-label":"좋아요 개수",children:l})]})]})}function f(t){return e.jsxs("dl",{children:[e.jsx("dt",{className:"sr-only",children:"내용"}),e.jsx("dd",{className:"txt-review-content",children:t.content})]})}function T({userInfo:t,owner:n,reviewId:c,restaurantId:s}){const i=y(),[l,r]=o.useState(null);o.useEffect(()=>{t&&r(t)},[t]);const a=()=>{const d=document.querySelector(".app");d==null||d.classList.add("modal-mode"),i(b(!0)),i(E((l==null?void 0:l.userId)===n)),i(S(c)),i(I(s))};return e.jsx("button",{className:"button-more reviewitem","aria-label":"더보기 버튼",onClick:a})}function P({item:t,userInfo:n,restaurantId:c,isFirst:s}){const{_id:i,owner:l,registeredAt:r,photo:a,content:d,like:h,restaurant:x}=t,[p]=o.useState(window.location.pathname==="/my"),u=o.useRef(null),m=v(w=>w.paginationSlice.currentPage);return o.useEffect(()=>{s&&u.current&&m!==1&&u.current.scrollIntoView({block:"center"})},[m]),e.jsxs("li",{ref:u,className:"list-review",children:[p?e.jsxs("p",{className:"txt-restaurant-in-my",children:[e.jsx("em",{children:typeof x!="string"?x.title:""}),"에 작성한 리뷰입니다."]}):null,e.jsxs("article",{className:"container-reviewitem",children:[e.jsx("h5",{className:"sr-only",children:"개별 리뷰"}),e.jsxs("dl",{children:[e.jsxs("div",{className:"style-wrapper-reviewitem",children:[e.jsx(C,{owner:l}),e.jsx($,{registeredAt:r}),e.jsx(T,{userInfo:n,owner:l,reviewId:i,restaurantId:c})]}),a&&a.length>0?e.jsxs(e.Fragment,{children:[e.jsx(L,{photoList:a}),e.jsxs("div",{className:"style-wrapper-reviewitem",children:[e.jsx(N,{reviewId:i,like:h||[]}),e.jsx(f,{content:d})]})]}):e.jsxs("div",{className:"style-wrapper-reviewitem only-text",children:[e.jsx(f,{content:d}),e.jsx(N,{reviewId:i,like:h||[]})]})]})]})]})}function N({reviewId:t,like:n}){return e.jsxs("dl",{className:"container-like-comment",children:[e.jsx(R,{reviewId:t,like:n}),e.jsx(_,{})]})}function _(){const t=()=>{window.alert("준비 중인 서비스입니다.")};return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"댓글"}),e.jsxs("dd",{className:"container-button-txt",children:[e.jsx("button",{type:"button","aria-label":"리뷰 댓글 쓰기",className:"button-review-comment",onClick:t}),e.jsx("span",{"aria-label":"댓글 개수",children:"0"})]})]})}export{P as R};
//# sourceMappingURL=chunk-16350cc7.js.map
