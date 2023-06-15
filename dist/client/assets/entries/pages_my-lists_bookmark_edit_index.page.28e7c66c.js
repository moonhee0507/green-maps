import{j as e,r as l}from"../chunks/chunk-0ad0329c.js";import{T as G}from"../chunks/chunk-7393fde3.js";import{i as f}from"../chunks/chunk-e8bc0b58.js";import{c as d,A as x,b as m}from"../chunks/chunk-0fac4abb.js";import{E as g,a as C,I as j,c as N,h as L,b as v,O as y}from"../chunks/chunk-dcab5b34.js";import{N as O}from"../chunks/chunk-5b1b7faa.js";import{I as w}from"../chunks/chunk-2e5a4929.js";import{n as I}from"../chunks/chunk-c949b376.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-3c838518.js";import"../chunks/chunk-9ae07e36.js";import"../chunks/chunk-af981888.js";function k(){return e.jsx("div",{className:"container-notice",children:e.jsx("em",{children:"기본 그룹은 편집할 수 없습니다."})})}function A({groupInfo:r,bookmarkList:s}){const{groupIcon:t,name:i}=r,[c,n]=l.useState(0);return l.useEffect(()=>{if(s.length===0&&n(0),s.length>0){const a=s.filter(o=>o.groupName===i);n(a.length)}},[]),e.jsxs("div",{className:"style-wrapper-groupname-info",children:[e.jsx("div",{className:"container-groupicon",children:e.jsx("img",{src:t,alt:"그룹 아이콘",style:{width:"100%",height:"100%"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"txt-groupname",children:i}),e.jsxs("p",{className:"txt-restaurant-count",children:["개수 ",e.jsx("span",{className:"num-restaurant-count",children:c})]})]})]})}const T="/images/icon-edit.svg";function M({groupInfo:r,userInfo:s}){const t=d();function i(){const n=document.querySelector(".app");n==null||n.classList.add("modal-mode"),t(g(!0)),t(C(r.name)),t(j(r.groupIcon))}async function c(){if(confirm("해당 그룹을 삭제하시겠습니까?")){const n=s==null?void 0:s.userId,a=r._id;await fetch(`${x}/bookmark/${a}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n})}).then(o=>o.json()).then(o=>{o.success?(alert("북마크 그룹이 삭제되었습니다."),window.location.reload()):alert("다시 시도해주세요.")})}}return e.jsxs("div",{children:[e.jsx("button",{className:"button-edit-group",type:"button","aria-label":"그룹 수정 버튼",onClick:i,children:e.jsx("img",{src:T,alt:"수정 아이콘"})}),e.jsx("button",{className:"button-delete-group",type:"button","aria-label":"그룹 삭제 버튼",onClick:c,children:e.jsx("img",{src:f,alt:"삭제 아이콘"})})]})}function R({userInfo:r,bookmarkList:s,groupList:t}){const[i,c]=l.useState(null);return l.useEffect(()=>{t!==null&&c(t)},[t]),e.jsx("ul",{children:i!==null&&i.map(n=>e.jsx(_,{userInfo:r,groupInfo:n,bookmarkList:s},Math.random()))})}function _({userInfo:r,groupInfo:s,bookmarkList:t}){return e.jsx("li",{className:"li-bookmarkgroup reuse",children:e.jsxs("div",{className:"style-wrapper-groupname",children:[e.jsx(A,{groupInfo:s,bookmarkList:t}),s.name!=="기본 그룹"&&e.jsx(M,{userInfo:r,groupInfo:s})]})})}function D(){const r=d(),s=m(a=>a.myListSlice.targetGroup),t=m(a=>a.myListSlice.groupName),[i,c]=l.useState("");l.useEffect(()=>{t===null&&c(s),t===""&&c("")},[t,s]);function n(a){c(a.target.value),r(N(a.target.value))}return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"groupNameForEdit",className:"sr-only",children:"그룹명"}),e.jsx("input",{type:"text",id:"groupNameForEdit",placeholder:"그룹명을 입력해 주세요.",maxLength:20,minLength:1,onChange:n,value:i})]})}function $({userInfo:r,groupList:s}){const[t,i]=l.useState({disabled:!0}),c=m(u=>u.myListSlice.groupName),n=m(u=>u.myListSlice.selectedIcon),a=m(u=>u.myListSlice.targetGroup),o=m(u=>u.myListSlice.sameIcon),p=d();l.useEffect(()=>{if(s!==null){const u=s.filter(h=>h.name===a)[0].groupIcon;p(L(u===n))}},[n]),l.useEffect(()=>{i(c!==null&&c!==""&&c!==a||o===!1?{disabled:!1}:{disabled:!0})},[c,o,a,o]);async function b(){if(r!==null&&s!==null)if(s.map(h=>h.name).includes(c||a))alert("중복된 그룹명은 사용할 수 없습니다.");else{const{userId:h}=r,S=s.filter(E=>E.name===a)[0]._id;(await(await fetch(`${x}/bookmark/update`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:h,groupId:S,name:c||a,groupIcon:n})})).json()).success===!0?window.location.reload():alert("다시 시도해주세요.")}else alert(`로그아웃 되었습니다.
다시 로그인해주세요.`),I("/login")}return e.jsx("button",{type:"button",className:`button-groupname-complete ${t?"on":""}`,onClick:b,children:"완료"})}function P({userInfo:r,groupList:s}){const t=d(),i=m(o=>o.myListSlice.editGroupModalOn),[c,n]=l.useState(!1);l.useEffect(()=>{n(i===!0)},[i]);function a(){const o=document.querySelector(".app");o==null||o.classList.remove("modal-mode"),t(g(!1)),t(N(null)),t(j("/images/icon-star.svg"))}return e.jsxs("article",{className:`modal-group-item ${c?"on":""}`,children:[e.jsx("h4",{children:"그룹 수정"}),e.jsxs("form",{action:"",children:[e.jsx(D,{}),e.jsx(w,{}),e.jsx($,{userInfo:r,groupList:s})]}),e.jsx("button",{type:"button",className:"button-close",onClick:a,children:e.jsx("img",{src:f,alt:"X 아이콘",className:"img-close"})})]})}function F(){const r=d(),s=m(o=>o.myListSlice.groupNameOrder),t=m(o=>o.myListSlice.orderModalOn),[i,c]=l.useState(!1);l.useEffect(()=>{c(t===!0)},[t]);function n(o){r(v(o.currentTarget.innerText)),a()}function a(){const o=document.querySelector(".app");o==null||o.classList.remove("modal-mode"),r(y(!1))}return e.jsxs("article",{className:`modal-group-item ${i?"on":""}`,children:[e.jsx("h4",{children:"정렬기준"}),e.jsxs("div",{className:"container-button",children:[e.jsx("button",{type:"button",onClick:n,className:`button-groupname-order ${s==="등록순"?"on":""}`,children:"등록순"}),e.jsx("button",{type:"button",onClick:n,className:`button-groupname-order ${s==="이름순"?"on":""}`,children:"이름순"})]}),e.jsx("button",{type:"button",className:"button-close",onClick:a,children:e.jsx("img",{src:f,alt:"X 아이콘",className:"img-close"})})]})}function q({userInfo:r,groupList:s}){const t=m(o=>o.myListSlice.editGroupModalOn),[i,c]=l.useState(!1),n=d();l.useEffect(()=>{c(t===!0)},[t]),l.useEffect(()=>(i&&document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}),[i]);function a(o){if(o.target.className==="app modal-mode"){const p=document.querySelector(".app");p==null||p.classList.remove("modal-mode"),n(y(!1)),n(g(!1)),n(N(null)),n(j("/images/icon-star.svg"))}}return e.jsxs("div",{className:`modal-group ${i?"on":""}`,children:[e.jsx(F,{}),e.jsx(P,{userInfo:r,groupList:s})]})}function oe(r){const{isLoggedIn:s,info:t}=r.user,[i,c]=l.useState(null);return l.useEffect(()=>{try{(async()=>{const a=await(await fetch(`${x}/bookmark/${t==null?void 0:t.userId}`)).json();c(a.groupList)})()}catch(n){console.error(n)}},[]),e.jsxs(e.Fragment,{children:[e.jsx(G,{title:"그룹 목록 편집"}),e.jsx(B,{userInfo:t,groupList:i}),e.jsx(O,{isLoggedIn:s}),e.jsx(q,{userInfo:t,groupList:i})]})}function B({userInfo:r,groupList:s}){const{bookmarkList:t}=r;return e.jsx("main",{className:"main-group-list",children:e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only",children:"내 북마크 그룹 목록"}),e.jsx(k,{}),e.jsx(R,{userInfo:r,bookmarkList:t,groupList:s})]})})}export{oe as Page};
