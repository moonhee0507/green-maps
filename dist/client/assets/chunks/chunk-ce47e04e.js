import{j as s,r as o}from"./chunk-0ad0329c.js";import{b as m,u as c,A as C}from"./chunk-f5cf074f.js";import{k as f,C as h,c as j,e as x,p as M,q as R,r as b}from"./chunk-b82d406b.js";import{a as g}from"./chunk-3258e6a6.js";import{i as A,c as N,s as E,o as I,a as _,m as k}from"../entries/pages_search_index.page.fb5ed880.js";import{c as T}from"./chunk-b3571705.js";import"./chunk-da345742.js";import"./chunk-41308c4f.js";import"./chunk-101896b7.js";import"./chunk-621f058a.js";import"./chunk-bf08ca9a.js";import"./chunk-a6e5261d.js";import"./chunk-2b326172.js";import"./chunk-f3107ac8.js";import"./chunk-87bfa915.js";import"./chunk-91c16fc8.js";import"./chunk-63b910cd.js";import"./chunk-370f01b3.js";import"./chunk-0a2493d9.js";import"./chunk-0249643f.js";import"./chunk-8275f212.js";import"./chunk-e8bc0b58.js";import"./chunk-5b1b7faa.js";import"./chunk-3c838518.js";import"./chunk-aaa4175a.js";import"./chunk-c9eff144.js";import"./chunk-1591098a.js";function O(){return s.jsxs("div",{className:"wrapper-map-control-button",children:[s.jsxs("div",{className:"container-button-map-mode",children:[s.jsx(D,{}),s.jsx(v,{})]}),s.jsx("div",{children:s.jsx(w,{})})]})}function w(){const t=m(),i=()=>{e(),t(f(!0))};function e(){t(h(!1)),t(j(!1)),t(x(!1)),t(f(!1))}return s.jsx("button",{type:"button",onClick:i,children:"업종 필터"})}function v(){const t=m(),i=c(l=>l.mapSlice.mapMode);function e(){g(!0),n(),t(j(!0)),t(M("지역탐색 모드"))}function n(){t(h(!1)),t(j(!1)),t(x(!1)),t(f(!1))}return s.jsx("button",{onClick:e,className:`button-map-mode ${i==="지역탐색 모드"?"on":""}`,children:"지역 탐색 모드"})}function D(){const t=m(),i=c(p=>p.mapSlice.mapMode),e=c(p=>p.mapSlice.radius),[n,l]=o.useState(e),[r,d]=o.useState("m");o.useEffect(()=>{e<1e3?(l(e),d("m")):(l(e/1e3),d("km"))},[e]);const u=()=>{g(!0),S(),t(h(!0)),t(M("반경탐색 모드"))};function S(){t(h(!1)),t(j(!1)),t(x(!1)),t(f(!1))}return s.jsxs("button",{type:"button",onClick:u,className:`button-map-mode ${i==="반경탐색 모드"?"on":""}`,children:[s.jsx("span",{children:"반경 "}),s.jsx("span",{children:n}),s.jsx("span",{children:r}),s.jsx("span",{children:" 탐색 모드"})]})}function $({isLoggedIn:t}){const i=m(),e=c(a=>a.mapSlice.radius),[n,l]=o.useState(!1),[r,d]=o.useState(null),u=c(a=>a.mapSlice.selectedCategory);o.useEffect(()=>{_(t),A().then(a=>{l(!0),d([a.getLng(),a.getLat()])})},[]);const S=o.useCallback(async a=>{if(Array.isArray(a))return await(await fetch(`${C}/map/within-radius-of?radius=${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentLocation:a,category:u})})).json()},[e,u,r]),p=o.useCallback(async a=>{if(Array.isArray(a))return await(await fetch(`${C}/map/nearest?top=5`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentLocation:a})})).json()},[e,r]);return o.useEffect(()=>{n&&(N(),E(e),r&&(S(r).then(a=>{a.success&&(i(R(a.lists)),I(e))}),p(r).then(a=>{a.success&&i(b(a.lists))})))},[e,n,u,r]),s.jsx("div",{id:"map"})}function z(){const t=m(),i=()=>{k(),t(x(!1))};return s.jsx("button",{type:"button",onClick:i,className:"button-move-to-my",title:"내 위치로","aria-label":"내 위치로 이동 버튼"})}function G(){const t=c(n=>n.mapSlice.currentSido),i=c(n=>n.mapSlice.currentSigungu),e=c(n=>n.mapSlice.resultInRadius);return e.length>0?s.jsxs("p",{className:"txt-result-in-radius",children:["내 위치(",`${t} ${i}`,")에 검색된 식당 ",s.jsx("span",{children:e.length}),"개"]}):s.jsxs("p",{className:"txt-result-in-radius",children:["결과가 없어요!😥",s.jsx("br",{}),"가장 가까운 식당 TOP 5"]})}function U(){return s.jsxs("div",{className:"wrapper-result-in-radius",children:[s.jsx(G,{}),s.jsx(T,{})]})}function ht({isLoggedIn:t}){return s.jsxs("main",{className:"main-map",children:[s.jsx(O,{}),s.jsx($,{isLoggedIn:t}),s.jsx(z,{}),s.jsx(U,{})]})}export{ht as default};