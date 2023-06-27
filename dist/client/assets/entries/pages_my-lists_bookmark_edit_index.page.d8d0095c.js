import{j as e,r as l}from"../chunks/chunk-0ad0329c.js";import{T as G}from"../chunks/chunk-fa93ea2c.js";import{i as h}from"../chunks/chunk-e8bc0b58.js";import{b as d,A as x,u as m}from"../chunks/chunk-f5cf074f.js";import{E as g,f as L,I as j,S as N,g as C,O as w,a as S}from"../chunks/chunk-87bfa915.js";import{N as k}from"../chunks/chunk-c6e08d5d.js";import{I as O}from"../chunks/chunk-d7506ad7.js";import{u as v}from"../chunks/chunk-72fd2dbb.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-9ae07e36.js";function I(){return e.jsx("div",{className:"container-notice",children:e.jsx("em",{children:"기본 그룹은 편집할 수 없습니다."})})}function A({groupInfo:a,bookmarkList:t}){const{groupIcon:s,name:c}=a,[r,n]=l.useState(0);return l.useEffect(()=>{if(t.length===0&&n(0),t.length>0){const i=t.filter(o=>o.groupName===c);n(i.length)}},[]),e.jsxs("div",{className:"style-wrapper-groupname-info",children:[e.jsx("div",{className:"container-groupicon",children:e.jsx("img",{src:s,alt:"그룹 아이콘",style:{width:"100%",height:"100%"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"txt-groupname",children:c}),e.jsxs("p",{className:"txt-restaurant-count",children:["개수 ",e.jsx("span",{className:"num-restaurant-count",children:r})]})]})]})}const M="/images/icon-edit.svg";function T({groupInfo:a,userInfo:t}){const s=d();function c(){const n=document.querySelector(".app");n==null||n.classList.add("modal-mode"),s(g(!0)),s(L(a.name)),s(j(a.groupIcon))}async function r(){if(confirm("해당 그룹을 삭제하시겠습니까?")){const n=t==null?void 0:t.userId,i=a._id;await fetch(`${x}/bookmark/${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n})}).then(o=>o.json()).then(o=>{o.success?(alert("북마크 그룹이 삭제되었습니다."),window.location.reload()):alert("다시 시도해주세요.")})}}return e.jsxs("div",{children:[e.jsx("button",{className:"button-edit-group",type:"button","aria-label":"그룹 수정 버튼",onClick:c,children:e.jsx("img",{src:M,alt:"수정 아이콘"})}),e.jsx("button",{className:"button-delete-group",type:"button","aria-label":"그룹 삭제 버튼",onClick:r,children:e.jsx("img",{src:h,alt:"삭제 아이콘"})})]})}function R({userInfo:a,bookmarkList:t,groupList:s}){const[c,r]=l.useState(null);return l.useEffect(()=>{s!==null&&r(s)},[s]),e.jsx("ul",{children:c!==null&&c.map(n=>e.jsx(_,{userInfo:a,groupInfo:n,bookmarkList:t},Math.random()))})}function _({userInfo:a,groupInfo:t,bookmarkList:s}){return e.jsx("li",{className:"li-bookmarkgroup reuse",children:e.jsxs("div",{className:"style-wrapper-groupname",children:[e.jsx(A,{groupInfo:t,bookmarkList:s}),t.name!=="기본 그룹"&&e.jsx(T,{userInfo:a,groupInfo:t})]})})}function D(){const a=d(),t=m(i=>i.myListSlice.targetGroup),s=m(i=>i.myListSlice.groupName),[c,r]=l.useState("");l.useEffect(()=>{s===null&&r(t),s===""&&r("")},[s,t]);function n(i){r(i.target.value),a(N(i.target.value))}return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"groupNameForEdit",className:"sr-only",children:"그룹명"}),e.jsx("input",{type:"text",id:"groupNameForEdit",placeholder:"그룹명을 입력해 주세요.",maxLength:20,minLength:1,onChange:n,value:c})]})}function $({userInfo:a,groupList:t}){const[s,c]=l.useState({disabled:!0}),r=m(u=>u.myListSlice.groupName),n=m(u=>u.myListSlice.selectedIcon),i=m(u=>u.myListSlice.targetGroup),o=m(u=>u.myListSlice.sameIcon),p=d();l.useEffect(()=>{if(t!==null){const u=t.filter(f=>f.name===i)[0].groupIcon;p(C(u===n))}},[n]),l.useEffect(()=>{c(r!==null&&r!==""&&r!==i||o===!1?{disabled:!1}:{disabled:!0})},[r,o,i,o]);async function y(){if(a!==null&&t!==null)if(t.map(f=>f.name).includes(r||i))alert("중복된 그룹명은 사용할 수 없습니다.");else{const{userId:f}=a,b=t.filter(E=>E.name===i)[0]._id;(await(await fetch(`${x}/bookmark/update`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:f,groupId:b,name:r||i,groupIcon:n})})).json()).success===!0?window.location.reload():alert("다시 시도해주세요.")}else alert(`로그아웃 되었습니다.
다시 로그인해주세요.`),window.location.href="/login"}return e.jsx("button",{type:"button",className:`button-groupname-complete ${s?"on":""}`,onClick:y,children:"완료"})}function P({userInfo:a,groupList:t}){const s=d(),c=m(o=>o.myListSlice.editGroupModalOn),[r,n]=l.useState(!1);l.useEffect(()=>{n(c===!0)},[c]);function i(){const o=document.querySelector(".app");o==null||o.classList.remove("modal-mode"),s(g(!1)),s(N(null)),s(j("/images/icon-star.svg"))}return e.jsxs("article",{className:`modal-group-item ${r?"on":""}`,children:[e.jsx("h4",{children:"그룹 수정"}),e.jsxs("form",{action:"",children:[e.jsx(D,{}),e.jsx(O,{}),e.jsx($,{userInfo:a,groupList:t})]}),e.jsx("button",{type:"button",className:"button-close",onClick:i,children:e.jsx("img",{src:h,alt:"X 아이콘",className:"img-close"})})]})}function B(){const a=d(),t=m(o=>o.myListSlice.groupNameOrder),s=m(o=>o.myListSlice.orderModalOn),[c,r]=l.useState(!1);l.useEffect(()=>{r(s===!0)},[s]);function n(o){a(w(o.currentTarget.innerText)),i()}function i(){const o=document.querySelector(".app");o==null||o.classList.remove("modal-mode"),a(S(!1))}return e.jsxs("article",{className:`modal-group-item ${c?"on":""}`,children:[e.jsx("h4",{children:"정렬기준"}),e.jsxs("div",{className:"container-button",children:[e.jsx("button",{type:"button",onClick:n,className:`button-groupname-order ${t==="등록순"?"on":""}`,children:"등록순"}),e.jsx("button",{type:"button",onClick:n,className:`button-groupname-order ${t==="이름순"?"on":""}`,children:"이름순"})]}),e.jsx("button",{type:"button",className:"button-close",onClick:i,children:e.jsx("img",{src:h,alt:"X 아이콘",className:"img-close"})})]})}function F({userInfo:a,groupList:t}){const s=m(o=>o.myListSlice.editGroupModalOn),[c,r]=l.useState(!1),n=d();l.useEffect(()=>{r(s===!0)},[s]),l.useEffect(()=>(c&&document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}),[c]);function i(o){if(o.target.className==="app modal-mode"){const p=document.querySelector(".app");p==null||p.classList.remove("modal-mode"),n(S(!1)),n(g(!1)),n(N(null)),n(j("/images/icon-star.svg"))}}return e.jsxs("div",{className:`modal-group ${c?"on":""}`,children:[e.jsx(B,{}),e.jsx(P,{userInfo:a,groupList:t})]})}const se={title:"북마크 그룹 목록 편집 | Green Maps",description:"북마크 그룹 목록 편집 페이지"};function ne(){const[a,t]=v(),[s,c]=l.useState(null);return l.useEffect(()=>{try{t&&(async()=>{const n=await(await fetch(`${x}/bookmark/${t.userId}`)).json();c(n.groupList)})()}catch(r){console.error(r)}},[t]),e.jsxs(e.Fragment,{children:[e.jsx(G,{title:"그룹 목록 편집"}),e.jsx(q,{userInfo:t,groupList:s}),e.jsx(k,{isLoggedIn:a}),e.jsx(F,{userInfo:t,groupList:s})]})}function q({userInfo:a,groupList:t}){const[s,c]=l.useState(null);return l.useEffect(()=>{c(a!==null?a.bookmarkList:null)},[a]),e.jsx("main",{className:"main-group-list",children:e.jsxs("section",{children:[e.jsx("h3",{className:"sr-only",children:"내 북마크 그룹 목록"}),e.jsx(I,{}),s&&t&&e.jsx(R,{userInfo:a,bookmarkList:s,groupList:t})]})})}export{ne as Page,se as documentProps};
//# sourceMappingURL=pages_my-lists_bookmark_edit_index.page.d8d0095c.js.map
