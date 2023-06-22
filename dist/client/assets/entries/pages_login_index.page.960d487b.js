import{r,j as e}from"../chunks/chunk-0ad0329c.js";import{T as f}from"../chunks/chunk-fa93ea2c.js";import{b as g,A as p,u as w}from"../chunks/chunk-f5cf074f.js";import{L as x,S as k}from"../chunks/chunk-63b910cd.js";import{L as y}from"../chunks/chunk-3c838518.js";import{n as j}from"../chunks/chunk-621f058a.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-bf08ca9a.js";const b="/images/icon-kakao.png";function S({setMove:a}){const t=g(),c=()=>{a(-100),t(x(!0))};async function i(){window.location.href=`${p}/oauth/kakao`}r.useEffect(()=>{const o=window.location.search,h=new URLSearchParams(o).get("code");try{h?l(h).then(u=>{u.success?d().then(m=>{m.success?window.location.href="/my":console.error("카카오 사용자 데이터 가져오기 실패")}):console.error("카카오 API 토큰 요청에 실패했습니다.")}):console.error("카카오 AuthorizeCode가 없습니다.")}catch(u){console.error(u)}},[]);async function l(o){return await(await fetch(`${p}/oauth/kakao/token?code=${o}`,{credentials:"include",method:"GET"})).json()}async function d(){return await(await fetch(`${p}/oauth/kakao/users`,{credentials:"include",method:"GET"})).json()}return e.jsxs("section",{className:"login-select-stage",children:[e.jsx("h3",{className:"sr-only",children:"로그인 방식 선택"}),e.jsx("div",{className:"container-rocket",children:e.jsx("span",{children:"🚀"})}),e.jsx("button",{type:"button",onClick:c,className:"styled-button reuse-in-login",children:"로그인"}),e.jsxs("button",{type:"button",className:"styled-button kakao-login",onClick:i,children:[e.jsx("img",{src:b,alt:"카카오 아이콘"}),e.jsx("span",{children:"카카오 로그인"})]}),e.jsx(y,{href:"/signup",className:"link-to-signup",children:"회원가입"})]})}function C({setMove:a}){const t=g(),[c,i]=r.useState(""),l=()=>{a(n=>n+100),t(x(!1))},d=()=>{a(n=>n-100),t(k(c))},o=n=>{i(n.target.value)};return e.jsxs("section",{className:"login-id-stage",children:[e.jsx("h3",{className:"sr-only",children:"아이디 입력"}),e.jsx("label",{htmlFor:"loginId",children:"아이디"}),e.jsx("input",{type:"text",id:"loginId",onChange:o}),e.jsxs("div",{className:"button-group-move",children:[e.jsx("button",{type:"button",onClick:l,"aria-label":"이전 화면으로 이동",children:"첫 화면"}),e.jsx("button",{type:"button",onClick:d,"aria-label":"다음 화면으로 이동",children:"비밀번호"})]})]})}function N({setMove:a}){const t=g(),c=w(s=>s.loginSlice.currentId),[i,l]=r.useState(""),[d,o]=r.useState(!1),n=()=>{a(s=>s+100)},h=s=>{l(s.target.value)},u=s=>{o(s.target.checked)};async function m(){t(x(!1));try{const s=new URLSearchParams;s.append("userId",c),s.append("password",i),s.append("keepLogin",d?"true":"false"),(await(await fetch(`${p}/users/login`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:s.toString()})).json()).success?(window.alert("🎉🎉로그인에 성공했습니다🎉🎉"),j("/search")):window.alert("로그인에 실패했습니다")}catch(s){console.error(s)}}return e.jsxs("section",{className:"login-password-stage",children:[e.jsx("h3",{className:"sr-only",children:"비밀번호 입력"}),e.jsx("label",{htmlFor:"loginPassword",children:"비밀번호"}),e.jsx("input",{type:"password",id:"loginPassword",onChange:h}),e.jsx("label",{htmlFor:"loginPersist",children:"로그인 유지"}),e.jsx("input",{type:"checkbox",id:"loginPersist",onChange:u}),e.jsxs("div",{className:"button-group-move",children:[e.jsx("button",{type:"button",onClick:n,"aria-label":"이전 화면으로 이동",children:"아이디"}),e.jsx("button",{type:"button",onClick:m,"aria-label":"다음 화면으로 이동",children:"로그인"})]})]})}function P(){const[a,t]=r.useState(0);return e.jsx("main",{className:"main-login",children:e.jsxs("div",{className:"login-stage-wrapper",style:{left:`${a}%`,transition:".5s"},children:[e.jsx(S,{setMove:t}),e.jsx(C,{setMove:t}),e.jsx(N,{setMove:t})]})})}const D={title:"로그인 | Green Maps",description:"채식 식당 지도 서비스 로그인"};function K(){return r.useEffect(()=>{(async()=>(await(await fetch(`${p}/users`)).json()).success&&(alert("접근할 수 없는 페이지입니다."),j("/search")))()},[]),e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"로그인"}),e.jsx(P,{})]})}export{K as Page,D as documentProps};