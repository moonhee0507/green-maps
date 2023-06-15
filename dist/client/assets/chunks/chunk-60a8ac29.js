import{r as d,j as e}from"./chunk-0ad0329c.js";import{c as f,b as m,A as j}from"./chunk-0fac4abb.js";import{O as R,a as v,S as C,A as M,I as T,b as O,P as A,D,c as _,M as S,C as E,R as k,d as y,e as $}from"./chunk-87bfa915.js";import{i as L}from"./chunk-e8bc0b58.js";import{I}from"./chunk-744735f4.js";import{n as P}from"./chunk-c949b376.js";import{s as B}from"./chunk-dbf1858e.js";import{a as U}from"./chunk-3258e6a6.js";function H(){const s=f(),t=m(n=>n.myListSlice.groupNameOrder),a=m(n=>n.myListSlice.orderModalOn),[r,c]=d.useState(!1);d.useEffect(()=>{c(a===!0)},[a]);function l(n){s(R(n.currentTarget.innerText)),o()}function o(){const n=document.querySelector(".app");n==null||n.classList.remove("modal-mode"),s(v(!1))}return e.jsxs("article",{className:`modal-group-item ${r?"on":""}`,children:[e.jsx("h4",{children:"정렬기준"}),e.jsxs("div",{className:"container-button",children:[e.jsx("button",{type:"button",onClick:l,className:`button-groupname-order ${t==="등록순"?"on":""}`,children:"등록순"}),e.jsx("button",{type:"button",onClick:l,className:`button-groupname-order ${t==="이름순"?"on":""}`,children:"이름순"})]}),e.jsx("button",{type:"button",className:"button-close",onClick:o,children:e.jsx("img",{src:L,alt:"X 아이콘",className:"img-close"})})]})}function X(){const s=f(),t=m(l=>l.myListSlice.groupName),[a,r]=d.useState("");d.useEffect(()=>{t===""&&r("")},[t]);function c(l){r(l.target.value),s(C(l.target.value))}return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"groupName",className:"sr-only",children:"그룹명"}),e.jsx("input",{type:"text",id:"groupName",placeholder:"그룹명을 입력해 주세요.",maxLength:20,minLength:1,onChange:c,value:a})]})}function q({userInfo:s}){const[t,a]=d.useState({disabled:!0}),r=m(o=>o.myListSlice.groupName),c=m(o=>o.myListSlice.selectedIcon);d.useEffect(()=>{r!==null?r.length!==0?a({disabled:!1}):a({disabled:!0}):a({disabled:!0})},[r]);async function l(){if(s!==null){const{userId:o}=s,i=await(await fetch(`${j}/bookmark/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:o,name:r,groupIcon:c})})).json();console.log(i),i.success===!0?window.location.reload():alert("다시 시도해주세요.")}else alert(`로그아웃 되었습니다.
다시 로그인해주세요.`),P("/login")}return e.jsx("button",{type:"button",className:`button-groupname-complete ${t?"on":""}`,onClick:l,children:"완료"})}function F({userInfo:s}){const t=f(),a=m(o=>o.myListSlice.addGroupModalOn),[r,c]=d.useState(!1);d.useEffect(()=>{c(a===!0)},[a]);function l(){const o=document.querySelector(".app");o==null||o.classList.remove("modal-mode"),t(M(!1)),t(C("")),t(T("/images/icon-star.svg"))}return e.jsxs("article",{className:`modal-group-item ${r?"on":""}`,children:[e.jsx("h4",{children:"새 그룹 추가"}),e.jsxs("form",{children:[e.jsx(X,{}),e.jsx(I,{}),e.jsx(q,{userInfo:s})]}),e.jsx("button",{type:"button",className:"button-close",onClick:l,children:e.jsx("img",{src:L,alt:"X 아이콘",className:"img-close"})})]})}function K({bookmarkList:s}){return e.jsx("div",{children:s.length>0?s.map(t=>e.jsx(V,{list:t._id},Math.random())):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"목록이 없어요."})]})})}function V({list:s}){const t=f(),{_id:a,title:r,address:c,category:l}=s,[o,n]=d.useState(!1),i=m(h=>h.myListSlice.restaurantToMove),p=m(h=>h.myListSlice.countChecked);d.useEffect(()=>{p===0&&n(!1)},[p]);const u=h=>{if(n(h.target.checked),h.target.checked)t(O(1)),t(A([...i,a]));else{t(D(1));const x=[...i],g=x.indexOf(a);x.splice(g,1),t(_(x))}};return e.jsxs("label",{className:"label-bookmarklist",children:[e.jsx("input",{type:"checkbox",className:"checkbox-bookmarklist",checked:o,onChange:u}),e.jsx("div",{className:"wrapper-bookmarklist-edit",children:e.jsxs("dl",{children:[e.jsxs("dl",{className:"container-title-category",children:[e.jsx("dt",{className:"sr-only",children:"식당 이름"}),e.jsx("dd",{className:"txt-title",children:r}),e.jsx("dt",{className:"sr-only",children:"업종"}),e.jsx("dd",{className:"txt-category",children:l})]}),e.jsxs("dl",{children:[e.jsx("dt",{className:"sr-only",children:"주소"}),e.jsx("dd",{className:"txt-address",children:c})]})]})})]})}function J(){const s=f(),t=m(n=>n.myListSlice.countChecked),a=m(n=>n.myListSlice.restaurantToMove);function r(){s(S(!1)),s(E(!0))}async function c(){if(a.length>0){const n=a.map(i=>l(i));try{const i=await Promise.all(n);i.forEach((p,u)=>{u===i.length-1&&window.location.reload()})}catch(i){console.error("삭제 중 오류가 발생했습니다.",i)}}}async function l(n){return await(await fetch(`${j}/users/bookmark/${n}`,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"}})).json()}function o(){s(k()),s(y([]))}return e.jsxs("div",{className:"container-button-move",children:[e.jsx("button",{type:"reset",onClick:o,children:"선택 해제"}),e.jsxs("button",{type:"button",onClick:r,disabled:!t,children:[e.jsx("span",{className:"txt-copy-del",children:"복사"}),e.jsx("span",{children:t})]}),e.jsxs("button",{type:"button",disabled:!t,onClick:c,children:[e.jsx("span",{className:"txt-copy-del",children:"삭제"}),e.jsx("span",{children:t})]})]})}function W({userInfo:s}){const[t,a]=d.useState(!1),[r,c]=d.useState([]),l=m(i=>i.myListSlice.moveListModalOn);d.useEffect(()=>{a(l===!0)},[l]);const o=m(i=>i.myListSlice.targetGroup);d.useEffect(()=>{s!==null&&n().then(i=>{if(i.success){const p=B.getState().myListSlice.targetGroup,u=i.bookmarkList.filter(h=>h.groupName===p);c(u)}})},[o]);async function n(){return await(await fetch(`${j}/users/bookmark`,{credentials:"include",method:"GET"})).json()}return e.jsxs("article",{className:`modal-group-item ${t?"on":""}`,children:[e.jsx("h4",{children:"목록 편집"}),e.jsx(Y,{bookmarkList:r}),e.jsx(z,{})]})}function Y({bookmarkList:s}){return e.jsxs("form",{children:[e.jsx(K,{bookmarkList:s}),e.jsx(J,{})]})}function z(){const s=f();function t(){U(!1),s(S(!1)),s(k()),s(y([]))}return e.jsx("button",{type:"button",className:"button-close",onClick:t,children:e.jsx("img",{src:L,alt:"X 아이콘",className:"img-close"})})}function Q({userInfo:s,groupInfo:t,lists:a}){const{name:r,registeredAt:c,groupIcon:l}=t,[o]=d.useState(c.slice(0,13)),[n,i]=d.useState(0),[p,u]=d.useState(null);d.useEffect(()=>{if(a.length===0&&i(0),a.length>0){const N=a.filter(b=>b.groupName===r);i(N.length)}s!==null&&u(s)},[]);const h=m(N=>N.myListSlice.restaurantToMove);function x(){p!==null&&g(p.userId,r,h)}async function g(N,b,G){const w=await(await fetch(`${j}/users/update/bookmark`,{credentials:"include",method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:N,newGroupName:b,selectedRestaurant:G})})).json();w.success?(alert(`복사가 완료되었습니다.
복사가 완료된 원본은 삭제됩니다.`),window.location.href="/my-lists"):console.error(w)}return e.jsx("li",{className:"li-bookmarkgroup copy",children:e.jsx("button",{onClick:x,children:e.jsxs("div",{className:"style-wrapper-groupname",children:[e.jsxs("div",{className:"style-wrapper-groupname-info",children:[e.jsx("div",{className:"container-groupicon",children:e.jsx("img",{src:l,alt:"그룹 아이콘"})}),e.jsxs("div",{children:[e.jsx("p",{className:"txt-groupname",children:r}),e.jsxs("p",{className:"txt-restaurant-count",children:["개수 ",e.jsx("span",{className:"num-restaurant-count",children:n})]})]})]}),e.jsx("div",{className:"txt-group-date",children:o})]})})})}function Z(){const s=f();function t(){s(E(!1)),s(S(!0)),s(k()),s(y([]))}return e.jsx("button",{type:"button",className:"button-close",onClick:t,children:e.jsx("img",{src:L,alt:"X 아이콘",className:"img-close"})})}function ee({userInfo:s}){const t=m(u=>u.myListSlice.copyModalOn),a=m(u=>u.myListSlice.targetGroup),[r,c]=d.useState(!1),[l,o]=d.useState([]),[n,i]=d.useState([]);d.useEffect(()=>{c(t===!0)},[t]),d.useEffect(()=>{s!==null&&(p(s.userId).then(u=>{u.success&&o(u.groupList)}),i(s.bookmarkList))},[]);async function p(u){return await(await fetch(`${j}/bookmark/${u}`)).json()}return e.jsxs("article",{className:`modal-group-item ${r?"on":""}`,children:[e.jsx("h4",{children:"복사할 그룹 선택"}),l.length-1>0?e.jsx("ul",{className:"ul-groupname",children:l.filter(u=>u.name!==a).map(u=>e.jsx(Q,{groupInfo:u,lists:n,userInfo:s},Math.random()))}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"다른 그룹이 없어요."})]}),e.jsx(Z,{})]})}function se({list:s}){const t=f(),{_id:a,title:r,address:c,category:l}=s,[o,n]=d.useState(!1),i=m(h=>h.myListSlice.restaurantToMove),p=m(h=>h.myListSlice.countChecked);d.useEffect(()=>{p===0&&n(!1)},[p]);const u=h=>{if(n(h.target.checked),h.target.checked)t(O(1)),t(A([...i,a]));else{t(D(1));const x=[...i],g=x.indexOf(a);x.splice(g,1),t(_(x))}};return e.jsxs("label",{className:"label-bookmarklist",children:[e.jsx("input",{type:"checkbox",className:"checkbox-bookmarklist",checked:o,onChange:u}),e.jsx("div",{className:"wrapper-bookmarklist-edit",children:e.jsxs("dl",{children:[e.jsxs("dl",{className:"container-title-category",children:[e.jsx("dt",{className:"sr-only",children:"식당 이름"}),e.jsx("dd",{className:"txt-title",children:r}),e.jsx("dt",{className:"sr-only",children:"업종"}),e.jsx("dd",{className:"txt-category",children:l})]}),e.jsxs("dl",{children:[e.jsx("dt",{className:"sr-only",children:"주소"}),e.jsx("dd",{className:"txt-address",children:c})]})]})})]})}function te({likeList:s}){return e.jsx("div",{children:s.length>0?s.map(t=>e.jsx(se,{list:t._id},Math.random())):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"목록이 없어요."})]})})}function ne(){const s=f(),t=m(o=>o.myListSlice.countChecked),a=m(o=>o.myListSlice.restaurantToMove);async function r(){if(a.length>0){const o=a.map(n=>c(n));try{const n=await Promise.all(o);n.forEach((i,p)=>{p===n.length-1&&window.location.reload()})}catch(n){console.error("삭제 중 오류가 발생했습니다.",n)}}}async function c(o){return await(await fetch(`${j}/users/like/${o}`,{credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json"}})).json()}function l(){s(k()),s(y([]))}return e.jsxs("div",{className:"container-button-move like",children:[e.jsx("button",{type:"reset",onClick:l,children:"선택 해제"}),e.jsxs("button",{type:"button",disabled:!t,onClick:r,children:[e.jsx("span",{className:"txt-copy-del",children:"삭제"}),e.jsx("span",{children:t})]})]})}function oe({likeList:s}){return e.jsxs("form",{children:[e.jsx(te,{likeList:s}),e.jsx(ne,{})]})}function ae(){const s=f();function t(){const a=document.querySelector(".app");a==null||a.classList.remove("modal-mode"),s($(!1)),s(k()),s(y([]))}return e.jsx("button",{type:"button",className:"button-close",onClick:t,children:e.jsx("img",{src:L,alt:"X 아이콘",className:"img-close"})})}function ce({userInfo:s}){const[t,a]=d.useState(!1),[r,c]=d.useState([]),l=m(n=>n.myListSlice.deleteLikeListModalOn);d.useEffect(()=>{a(!!l)},[l]),d.useEffect(()=>{s!==null&&o().then(n=>{n.success&&c(n.likeList)})},[s]);async function o(){return await(await fetch(`${j}/users/like`,{credentials:"include",method:"GET"})).json()}return e.jsxs("article",{className:`modal-group-item ${t?"on":""}`,children:[e.jsx("h4",{children:"목록 삭제"}),e.jsx(oe,{likeList:r}),e.jsx(ae,{})]})}function xe({userInfo:s}){const t=m(o=>o.myListSlice.orderModalOn||o.myListSlice.addGroupModalOn||o.myListSlice.moveListModalOn||o.myListSlice.copyModalOn||o.myListSlice.deleteLikeListModalOn),[a,r]=d.useState(!1),c=f();d.useEffect(()=>{r(t===!0)},[t]),d.useEffect(()=>(a&&document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}),[a]);function l(o){if(o.target.className==="app modal-mode"){const n=document.querySelector(".app");n==null||n.classList.remove("modal-mode"),c(v(!1)),c(M(!1)),c(S(!1)),c(E(!1)),c($(!1)),c(C("")),c(T("/images/icon-star.svg")),c(k()),c(y([]))}}return e.jsxs("div",{className:`modal-group ${a?"on":""}`,children:[e.jsx(H,{}),e.jsx(F,{userInfo:s}),e.jsx(W,{userInfo:s}),e.jsx(ee,{userInfo:s}),e.jsx(ce,{userInfo:s})]})}export{xe as M};
