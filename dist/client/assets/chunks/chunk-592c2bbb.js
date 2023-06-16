import{j as s,r as c}from"./chunk-0ad0329c.js";import{I as L,b as C,A as j}from"./chunk-f5cf074f.js";import{P,a as M,S as I,b as A,d as b}from"./chunk-91c16fc8.js";import{a as y}from"./chunk-3258e6a6.js";import{R as v}from"./chunk-9086f87d.js";import{P as R}from"./chunk-8f791488.js";import"./chunk-da345742.js";import"./chunk-41308c4f.js";import"./chunk-dfbf6de9.js";import"./chunk-9ae07e36.js";import"./chunk-2b326172.js";import"./chunk-abab299f.js";import"./chunk-4a7b83e5.js";function T({host:t}){return s.jsx("div",{className:"container-notice profile",children:s.jsx("em",{children:s.jsxs("span",{children:[(()=>{switch(t){case"local":return"자체 계정";case"kakao":return"다음카카오 계정";case"naver":return"네이버 계정";default:return"자체 계정"}})()," ","회원 입니다."]})})})}const w="/images/default-profile.png";function $({userInfo:t}){return s.jsxs("li",{className:"style-wrapper-profile",children:[s.jsx(O,{userInfo:t}),s.jsx(_,{userInfo:t})]})}function O({userInfo:t}){const{profileImage:l}=t,[r,n]=c.useState(w);return c.useEffect(()=>{t.profileImage?l.includes("http://")?n(l):l&&n(`${L}/${l}`):n(w)},[t]),s.jsxs("dl",{children:[s.jsx("dt",{className:"sr-only",children:"프로필 사진"}),s.jsx("dd",{children:s.jsx("div",{className:"container-profile-img",children:s.jsx("img",{src:r,alt:"프로필 사진"})})})]})}function _({userInfo:t}){const{nickName:l,bookmarkList:r,likeList:n,userId:e}=t;return s.jsxs("dl",{className:"wrapper-id-bookmark",children:[s.jsxs("dl",{className:"container-id-nick",children:[s.jsx("dt",{className:"sr-only",children:"아이디"}),s.jsx("dd",{className:"txt-profile-userId",children:e}),s.jsx("dt",{className:"sr-only",children:"닉네임"}),s.jsx("dd",{className:"txt-profile-nickName",children:l})]}),s.jsxs("dl",{className:"container-profile-bookmark-like",children:[s.jsx("dt",{children:"북마크"}),s.jsx("dd",{className:"num-profile-bookmark",children:r.length}),s.jsx("dt",{children:"좋아요"}),s.jsx("dd",{className:"num-profile-like",children:n.length})]})]})}function D({userInfo:t}){const{nickName:l,userId:r,host:n}=t,e=C(),a=()=>{y(!0),e(P(!0))},m=()=>{y(!0),e(M(!0)),e(I(l))},o=()=>{y(!0),e(A(!0)),e(b(r))};return s.jsxs("li",{className:"list-account",children:[s.jsx("p",{children:"계정"}),s.jsxs("ul",{children:[s.jsx("li",{onClick:a,className:"list-edit",children:"프로필 사진 변경"}),s.jsx("li",{onClick:m,className:"list-edit",children:"닉네임 변경"}),n==="local"?s.jsx("li",{onClick:o,className:"list-edit",children:"비밀번호 변경"}):null]})]})}function F(){return s.jsxs("li",{className:"list-account",children:[s.jsx("p",{children:"안내"}),s.jsxs("ul",{children:[s.jsx("li",{className:"list-edit",children:s.jsx("a",{href:"",children:"공지사항"})}),s.jsx("li",{className:"list-edit",children:s.jsx("a",{href:"",children:"1:1 문의"})}),s.jsx("li",{className:"list-edit",children:s.jsx("a",{href:"",children:"자주 찾는 질문"})})]})]})}function g({userInfo:t}){async function l(){t.host==="kakao"&&await fetch(`${j}/oauth/kakao/logout`,{method:"POST"}),(await fetch(`${j}/users/logout`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"}})).ok===!0&&(window.localStorage.removeItem("#1"),window.localStorage.removeItem("#2"),window.location.href="/")}return s.jsxs("section",{children:[s.jsx("h3",{className:"sr-only",children:"프로필"}),s.jsx(T,{host:t.host}),s.jsxs("ul",{className:"ul-profile",children:[s.jsx($,{userInfo:t}),s.jsx(D,{userInfo:t}),s.jsx(F,{})]}),s.jsx("div",{className:"style-wrapper-logout",children:s.jsx("button",{type:"button",onClick:l,className:"styled-button",children:"로그아웃"})})]})}function q({userInfo:t,reviews:l}){const[r,n]=c.useState("");return c.useEffect(()=>{l&&l.length>0&&l.forEach(e=>{typeof e.restaurant=="string"?n(e.restaurant):n(e.restaurant._id)})},[l]),s.jsxs("section",{className:"section-review",children:[s.jsx("h3",{className:"sr-only",children:"식당 리뷰"}),s.jsx("div",{className:"wrapper-review",children:l&&l.length>0?l.map((e,a)=>s.jsx(v,{item:e,userInfo:t,restaurantId:r,isFirst:a===0},Math.random())):s.jsxs("div",{className:"style-wrapper-no-review",children:[s.jsx("div",{className:"txt-no-review",children:"😭"}),s.jsx("p",{children:"리뷰가 아직 없어요."})]})})]})}const U=["작성한 글","댓글 단 글"];function G({userInfo:t}){const[l,r]=c.useState(window.localStorage.getItem("#2")||"작성한 글"),[n,e]=c.useState(null),[a,m]=c.useState({작성한글:0,댓글단글:0}),{nickName:o}=t,f=c.useRef([]);c.useEffect(()=>{const i=window.localStorage.getItem("#2"),u=[...document.querySelectorAll(".list-summary-community")];if(f.current=u,i){const d=U.indexOf(i);d!==-1&&(u[d].classList.add("on"),r(i))}else u[0].classList.add("on"),r("작성한 글");p(o).then(d=>{m(x=>({...x,작성한글:d.posts.length}))}),N(o).then(d=>{m(x=>({...x,댓글단글:d.posts.length}))})},[]),c.useEffect(()=>{l==="작성한 글"?p(o).then(i=>{i.success===!0&&i.posts?e(i.posts):e(null)}):l==="댓글 단 글"&&N(o).then(i=>{i.success===!0&&i.posts?e(i.posts):e(null)})},[l]);function E(){f.current.forEach(i=>{i&&i.classList.remove("on")})}const p=c.useCallback(async i=>await(await fetch(`${j}/posts/my?boundary=post&owner=${i}`)).json(),[]),N=c.useCallback(async i=>await(await fetch(`${j}/posts/my?boundary=comment&owner=${i}`)).json(),[]);function k(i,u){var x,S;const d=i.currentTarget;E(),d.classList.add("on"),u==="작성한 글"?p(o).then(h=>{h.success===!0&&h.posts?e(h.posts):e(null)}):u==="댓글 단 글"&&N(o).then(h=>{h.success===!0&&h.posts?e(h.posts):e(null)}),(x=d.lastElementChild)!=null&&x.innerHTML&&window.localStorage.setItem("#2",(S=d.lastElementChild)==null?void 0:S.innerHTML)}return s.jsxs("section",{children:[s.jsx("h3",{className:"sr-only",children:"내가 쓴 게시글 및 댓글"}),s.jsxs("ul",{className:"ul-summary-community",children:[s.jsxs("li",{className:`list-summary-community ${l==="작성한 글"?"on":""}`,onClick:i=>k(i,"작성한 글"),children:[s.jsx("p",{children:a.작성한글}),s.jsx("p",{children:"작성한 글"})]}),s.jsxs("li",{className:`list-summary-community ${l==="댓글 단 글"?"on":""}`,onClick:i=>k(i,"댓글 단 글"),children:[s.jsx("p",{children:a.댓글단글}),s.jsx("p",{children:"댓글 단 글"})]})]}),n&&n.length>0?s.jsx(R,{posts:n,limit:20}):s.jsxs("div",{className:"style-wrapper-no-review",children:[s.jsx("div",{className:"txt-no-review",children:"😭"}),s.jsx("p",{children:"목록이 없어요."})]})]})}function ts({userInfo:t,reviews:l}){const[r,n]=c.useState("프로필");c.useEffect(()=>{const a=window.localStorage.getItem("#1"),m=["프로필","식당 리뷰","커뮤니티 활동"],o=Array.from(document.querySelectorAll(".list-title"));a?(o[m.indexOf(a)].classList.add("on"),n(a)):o[0].classList.add("on")},[]);function e(a){const m=a.currentTarget;Array.from(document.querySelectorAll(".list-title")).forEach(f=>f.classList.remove("on")),m.classList.add("on"),n(m.innerText),window.localStorage.setItem("#1",m.innerText)}return s.jsxs("main",{className:"main-my",children:[s.jsxs("ul",{className:"ul-title-bar",children:[s.jsx("li",{className:"list-title",onClick:e,children:"프로필"}),s.jsx("li",{className:"list-title",onClick:e,children:"식당 리뷰"}),s.jsx("li",{className:"list-title",onClick:e,children:"커뮤니티 활동"})]}),(()=>{switch(r){case"프로필":return s.jsx(g,{userInfo:t});case"식당 리뷰":return s.jsx(q,{userInfo:t,reviews:l});case"커뮤니티 활동":return s.jsx(G,{userInfo:t});default:return s.jsx(g,{userInfo:t})}})()]})}export{ts as default};
