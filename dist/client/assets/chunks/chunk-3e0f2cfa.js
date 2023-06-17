import{r as i,j as e}from"./chunk-0ad0329c.js";import{u as p,b as h,A as b}from"./chunk-f5cf074f.js";import{h as g,A as y,a as N,e as L}from"./chunk-87bfa915.js";import{L as j}from"./chunk-81b7fed0.js";import{n as S}from"./chunk-621f058a.js";import{a as O}from"./chunk-3258e6a6.js";import"./chunk-da345742.js";import"./chunk-41308c4f.js";import"./chunk-1591098a.js";import"./chunk-bf08ca9a.js";function v({userInfo:a}){const[t,n]=i.useState([]),[c,o]=i.useState([]);i.useEffect(()=>{a!==null&&(n(a.bookmarkList),o(a.likeList))},[a]);const r=p(u=>u.myListSlice.clicked),m=h();function d(u){var l;const s=(l=u.currentTarget.lastElementChild)==null?void 0:l.innerHTML;typeof s=="string"&&m(g(s))}return e.jsxs("ul",{className:"ul-summary-bookmark",children:[e.jsxs("li",{onClick:d,className:`list-summary-bookmark ${r==="북마크"?"on":""}`,children:[e.jsx("p",{children:a&&t?t.length:0}),e.jsx("p",{children:"북마크"})]}),e.jsxs("li",{onClick:d,className:`list-summary-bookmark ${r==="좋아요"?"on":""}`,children:[e.jsx("p",{children:a&&c?c.length:0}),e.jsx("p",{children:"좋아요"})]})]})}function f({groupInfo:a,lists:t}){const{name:n,registeredAt:c,groupIcon:o}=a,[r]=i.useState(c.slice(0,13)),[m,d]=i.useState(0);return i.useEffect(()=>{if(t.length===0&&d(0),t.length>0){const u=t.filter(s=>s.groupName===n);d(u.length)}},[]),e.jsx("li",{className:"li-bookmarkgroup",children:e.jsx("a",{href:`/my-lists/bookmark/${n}`,children:e.jsxs("div",{className:"style-wrapper-groupname",children:[e.jsxs("div",{className:"style-wrapper-groupname-info",children:[e.jsx("div",{className:"container-groupicon",children:e.jsx("img",{src:o,alt:"그룹 아이콘",style:{width:"100%",height:"100%"}})}),e.jsxs("div",{children:[e.jsx("p",{className:"txt-groupname",children:n}),e.jsxs("p",{className:"txt-restaurant-count",children:["개수 ",e.jsx("span",{className:"num-restaurant-count",children:m})]})]})]}),e.jsx("div",{className:"txt-group-date",children:r})]})})})}function E({lists:a,groupList:t}){const[n,c]=i.useState(null),[o,r]=i.useState(null);i.useEffect(()=>{t&&(c(t),r([...t].sort((s,l)=>s.name.localeCompare(l.name,"en"))))},[t]);const m=p(s=>s.myListSlice.groupNameOrder),d=h();function u(){const s=document.querySelector(".app");s==null||s.classList.add("modal-mode"),d(y(!0))}return t!==null?e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"ul-groupname",children:m==="등록순"?n==null?void 0:n.map(s=>e.jsx(f,{groupInfo:s,lists:a},Math.random())):o==null?void 0:o.map(s=>e.jsx(f,{groupInfo:s,lists:a},Math.random()))}),e.jsx("button",{type:"button",className:"button-new-group",onClick:u,children:"새 그룹 추가"})]}):null}function w({lists:a}){const[t,n]=i.useState([]),[c,o]=i.useState([]),[r,m]=i.useState([]);i.useEffect(()=>{(async()=>{const l=[];for(const x of a)try{const k=await u(x._id);l.push(Object.assign(x,k))}catch{console.error("북마크 그룹에 저장된 식당 _id에 대한 정보를 가져오는 데 실패했습니다.")}n(l)})()},[]);const d=p(s=>s.myListSlice.groupNameOrder);i.useEffect(()=>{t.length!==0&&(o(t),m([...t].sort((s,l)=>s.restaurantInfo.title.localeCompare(l.restaurantInfo.title,"en"))))},[t]);async function u(s){return await(await fetch(`${b}/restaurants/${s}`)).json()}return t&&t.length>0?e.jsx("ul",{className:"ul-groupname",children:d==="등록순"?c.map(s=>e.jsx(j,{list:s},Math.random())):r.map(s=>e.jsx(j,{list:s},Math.random()))}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"목록이 없어요."})]})}function D({lists:a,groupList:t}){const n=p(m=>m.myListSlice.groupNameOrder),c=h();function o(){O(!0),c(N(!0))}function r(){S("/my-lists/bookmark/edit")}return e.jsxs("div",{className:"style-wrapper-bookmark-detail",children:[e.jsxs("div",{className:"wrapper-groupcount-orderbox",children:[e.jsxs("p",{className:"txt-bookmarkgroup",children:["그룹 ",e.jsx("span",{children:(t==null?void 0:t.length)||1})]}),e.jsx("div",{className:"container-order-bookmarkgroup",children:e.jsx("button",{type:"button",className:"button-order-bookmarkgroup",onClick:o,children:n})})]}),e.jsx("button",{type:"button",className:"button-edit-bookmarkgroup",onClick:r,children:"편집하기"})]})}function M({lists:a}){const t=p(r=>r.myListSlice.groupNameOrder),n=h();function c(){const r=document.querySelector(".app");r==null||r.classList.add("modal-mode"),n(N(!0))}function o(){const r=document.querySelector(".app");r==null||r.classList.add("modal-mode"),n(L(!0))}return e.jsxs("div",{className:"style-wrapper-bookmark-detail",children:[e.jsxs("div",{className:"wrapper-groupcount-orderbox",children:[e.jsxs("p",{className:"txt-bookmarkgroup",children:["전체 ",e.jsx("span",{children:a.length})]}),e.jsx("div",{className:"container-order-bookmarkgroup",children:e.jsx("button",{type:"button",className:"button-order-bookmarkgroup",onClick:c,children:t})})]}),e.jsx("button",{type:"button",className:"button-edit-bookmarkgroup",onClick:o,children:"편집하기"})]})}function C({userInfo:a,groupList:t}){const{bookmarkList:n,likeList:c}=a,o=p(r=>r.myListSlice.clicked);return e.jsxs("section",{className:"section-mylists",children:[e.jsx("h3",{className:"sr-only",children:"북마크 또는 좋아요한 식당 목록"}),o==="북마크"?e.jsx(D,{lists:n,groupList:t}):e.jsx(M,{lists:c}),o==="북마크"?e.jsx(E,{lists:n,groupList:t}):e.jsx(w,{lists:c})]})}function U({userInfo:a,groupList:t}){return e.jsxs("main",{className:"main-bookmark",children:[e.jsx(v,{userInfo:a}),e.jsx(C,{userInfo:a,groupList:t})]})}export{U as default};
