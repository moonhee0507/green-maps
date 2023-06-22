import{r,j as e}from"./chunk-0ad0329c.js";import"./chunk-02d17786.js";import{a as k,A as u,u as x,b as v}from"./chunk-ee696397.js";import{n as h}from"./chunk-54587732.js";import{i as N}from"./chunk-9ae07e36.js";import{S}from"./chunk-0a2493d9.js";import{R as g}from"./chunk-14df68f3.js";import{P as E}from"./chunk-76e51bf7.js";import"./chunk-4ee9bcfe.js";import"./chunk-dfbf6de9.js";import"./chunk-2b326172.js";import"./chunk-41308c4f.js";const C="/images/icon-bookmark.svg";function _({restaurantId:s,isLoggedIn:t}){const n=k(),a=r.useCallback(async()=>{if(t)return(await(await fetch(`${u}/users/`,{credentials:"include",method:"GET"})).json()).user.bookmarkList.some(m=>s===m._id)},[s,t]),c=r.useCallback(async()=>{t&&((await fetch(`${u}/users/bookmark/${s}`,{credentials:"include",method:"DELETE"})).ok?n({type:"buttonSlice/HAS_BOOKMARK_LIST",ON:!1}):console.error("북마크 취소에 실패했습니다."))},[s,t]);r.useEffect(()=>{a().then(i=>{n({type:"buttonSlice/HAS_BOOKMARK_LIST",ON:i})})},[a,t]);function d(){t?a().then(i=>i?c():o()):confirm(`로그인이 필요한 서비스입니다.
로그인 하시겠습니까?`)&&h("/login")}async function o(){try{if((await fetch(`${u}/users/bookmark`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:s})})).ok)n({type:"buttonSlice/HAS_BOOKMARK_LIST",ON:!0});else throw new Error}catch(i){console.error(i)}}return e.jsxs("button",{className:"button-bookmark",onClick:d,type:"button",children:[e.jsx("img",{src:C,alt:"북마크 이미지",className:x(i=>i.buttonSlice.bookmark.ON?"img-bookmark on":"img-bookmark")}),e.jsx("span",{className:"txt-bookmark",children:"북마크"})]})}function O({restaurantId:s,isLoggedIn:t}){const n=k(),a=r.useCallback(async()=>{if(t)return(await(await fetch(`${u}/users/`,{credentials:"include",method:"GET"})).json()).user.likeList.some(m=>s===m._id)},[s,t]),c=r.useCallback(async()=>{(await fetch(`${u}/users/like/${s}`,{credentials:"include",method:"DELETE"})).ok?n({type:"buttonSlice/HAS_LIKE_LIST",ON:!1}):console.error("좋아요 취소에 실패했습니다.")},[s,t]);r.useEffect(()=>{a().then(i=>{n({type:"buttonSlice/HAS_LIKE_LIST",ON:i})})},[a,t]);function d(){t?a().then(i=>i?c():o()):confirm(`로그인이 필요한 서비스입니다.
로그인 하시겠습니까?`)&&h("/login")}async function o(){try{if((await fetch(`${u}/users/like`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:s})})).ok)n({type:"buttonSlice/HAS_LIKE_LIST",ON:!0});else throw new Error}catch(i){console.error(i)}}return e.jsxs("button",{className:"button-like",onClick:d,type:"button",children:[e.jsx("img",{src:N,alt:"좋아요 이미지",className:x(i=>i.buttonSlice.like.ON?"img-like on":"img-like")}),e.jsx("span",{className:"txt-like",children:"좋아요"})]})}const T="/images/icon-share.svg";function R(){const s=()=>{alert("준비 중인 서비스입니다.")};return e.jsxs("button",{className:"button-share",onClick:s,type:"button",children:[e.jsx("img",{src:T,alt:"공유하기 이미지",className:"img-share"}),e.jsx("span",{className:"txt-share",children:"공유하기"})]})}function L({restaurantId:s,isLoggedIn:t}){return e.jsxs("div",{className:"container-bookmark-like-share",children:[e.jsx(_,{restaurantId:s,isLoggedIn:t}),e.jsx(O,{restaurantId:s,isLoggedIn:t}),e.jsx(R,{})]})}const B="/images/icon-copy.svg";function j(s){const t=()=>{window.navigator.clipboard.writeText(s.address),alert("복사되었습니다.")};return e.jsxs("button",{type:"button",onClick:t,children:[e.jsx("img",{src:B,alt:"주소 복사 아이콘",className:"img-copy"}),e.jsx("span",{style:{fontSize:"13px"},children:"복사"})]})}function A(s){return e.jsxs("div",{children:[s.cert?e.jsx("div",{className:"restaurant-cert",children:s.cert}):null,e.jsx("div",{className:"restaurant-category",children:s.category}),e.jsx("h3",{className:"txt-restaurant-title",children:s.title}),e.jsxs("div",{children:[e.jsxs("span",{className:"txt-restaurant-address",children:[s.address," "]}),e.jsx(j,{address:s.address})]})]})}function P({restaurantInfo:s,isLoggedIn:t}){const[n,a]=r.useState(null);return r.useEffect(()=>{s!==null&&a(s)},[s]),n?e.jsxs("section",{className:"section-primary",children:[e.jsx(A,{title:n.title,address:n.address,category:n.category,cert:n.certification}),e.jsx(S,{rating:n.rating}),e.jsx(L,{restaurantId:n._id,isLoggedIn:t})]}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"목록이 없어요."})]})}function $({restaurantInfo:s}){return r.useEffect(()=>{if(s!==null){const{kakao:n}=window,[a,c]=s.location.coordinates,d=document.getElementById("miniMap"),o={center:new n.maps.LatLng(c,a),level:3},i=new n.maps.Map(d,o);var t=new n.maps.Marker({position:new n.maps.LatLng(c,a)});t.setMap(i)}},[]),e.jsxs("section",{className:"section-location",children:[e.jsx("h4",{className:"sr-only",children:"위치"}),e.jsxs("div",{className:"style-wrapper-location-address",children:[e.jsxs("span",{children:[s!==null?s.address:""," "]}),e.jsx(j,{address:s!==null?s.address:""})]}),e.jsx("div",{id:"miniMap"})]})}function K({restaurantId:s,isLoggedIn:t}){function n(){t?h(`/search/${s}/reviews/create`):confirm(`로그인이 필요한 서비스입니다.
로그인 하시겠습니까?`)&&h("/login")}return e.jsx("div",{className:"style-container-write-review",children:e.jsx("button",{type:"button",onClick:n,className:"styled-button",children:"리뷰 작성하기"})})}function M({reviews:s,userInfo:t,restaurantId:n}){return e.jsx("div",{className:"wrapper-review",children:s&&s.length>0?e.jsx("ul",{children:s.map((a,c)=>e.jsx(g,{item:a,userInfo:t,restaurantId:n,isFirst:c===0},a._id))}):e.jsxs("div",{className:"style-wrapper-no-review",children:[e.jsx("div",{className:"txt-no-review",children:"😭"}),e.jsx("p",{children:"리뷰가 아직 없어요."})]})})}function H({restaurantInfo:s,isLoggedIn:t,userInfo:n}){const{_id:a,reviews:c}=s,d=v(),o=x(l=>l.paginationSlice.currentPage),[i,p]=r.useState(0),[m,f]=r.useState(null);r.useEffect(()=>{d({type:"paginationSlice/CURRENT_PAGE",currentPage:1})},[s]);const w=r.useCallback(async()=>await(await fetch(`${u}/restaurants/${a}/reviews`)).json(),[s]),y=r.useCallback(async()=>await(await fetch(`${u}/restaurants/${a}?page=${o}`)).json(),[o]);return r.useEffect(()=>{w().then(l=>{l.success&&p(l.reviews.total)}),y().then(l=>{l.success&&f(l.restaurantInfo.reviews)})},[s,o]),e.jsxs("section",{className:"section-review",children:[e.jsx("h4",{className:"sr-only",children:"리뷰"}),e.jsx(K,{restaurantId:a,isLoggedIn:t}),e.jsx(M,{reviews:m,userInfo:n,restaurantId:a}),c&&c.length>0&&e.jsx(E,{count:i,perPage:5})]})}function Z({restaurantInfo:s,isLoggedIn:t,userInfo:n}){return e.jsx("main",{className:"wrapper-restaurant-detail",children:s?e.jsxs(e.Fragment,{children:[e.jsx(P,{restaurantInfo:s,isLoggedIn:t}),e.jsx($,{restaurantInfo:s}),e.jsx(H,{restaurantInfo:s,isLoggedIn:t,userInfo:n})]}):null})}export{Z as default};