<<<<<<<< HEAD:dist/client/assets/entries/pages_login_index.page.907124b3.js
import{r as l,j as s}from"../chunks/chunk-0ad0329c.js";import{T as k}from"../chunks/chunk-64857c89.js";import{c as p,A as h}from"../chunks/chunk-f6dd005f.js";import{L as x}from"../chunks/chunk-ef7fa417.js";import{L as y}from"../chunks/chunk-3c838518.js";import{n as j}from"../chunks/chunk-c949b376.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-af981888.js";const b="/images/icon-kakao.png";function w({setMove:t}){const e=p(),r=()=>{t(-100),e(x(!0))};async function c(){j("/api/oauth/kakao")}l.useEffect(()=>{const o=window.location.search,i=new URLSearchParams(o).get("code");i&&a(i).then(g=>{g.success&&u().then(m=>{m.success&&(window.location.href="/my")})})},[]);async function a(o){return await(await fetch(`${h}/oauth/kakao/token?code=${o}`)).json()}async function u(){return await(await fetch(`${h}/oauth/kakao/users`)).json()}return s.jsxs("section",{className:"login-select-stage",children:[s.jsx("h3",{className:"sr-only",children:"로그인 방식 선택"}),s.jsx("div",{className:"container-rocket",children:s.jsx("span",{children:"🚀"})}),s.jsx("button",{type:"button",onClick:r,className:"styled-button reuse-in-login",children:"로그인"}),s.jsxs("button",{type:"button",className:"styled-button kakao-login",onClick:c,children:[s.jsx("img",{src:b,alt:"카카오 아이콘"}),s.jsx("span",{children:"카카오 로그인"})]}),s.jsx(y,{href:"/signup",className:"link-to-signup",children:"회원가입"})]})}function N({setMove:t}){const e=p(),r=()=>{t(a=>a+100),e(x(!1))},c=()=>{t(a=>a-100)};return s.jsxs("section",{className:"login-id-stage",children:[s.jsx("h3",{className:"sr-only",children:"아이디 입력"}),s.jsx("label",{htmlFor:"loginId",children:"아이디"}),s.jsx("input",{type:"text",id:"loginId"}),s.jsxs("div",{className:"button-group-move",children:[s.jsx("button",{type:"button",onClick:r,"aria-label":"이전 화면으로 이동",children:"첫 화면"}),s.jsx("button",{type:"button",onClick:c,"aria-label":"다음 화면으로 이동",children:"비밀번호"})]})]})}function C({setMove:t}){const e=p(),[r,c]=l.useState(""),[a,u]=l.useState(!1),o=()=>{t(n=>n+100)},d=n=>{c(n.target.value)},i=n=>{u(n.target.checked)},g=()=>{e(x(!1)),m()};async function m(){try{const f={userId:document.getElementById("loginId").value,password:r,keepLogin:a};(await(await fetch(`${h}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})).json()).success?(alert("🎉🎉로그인에 성공했습니다🎉🎉"),j("/search")):alert("로그인에 실패했습니다")}catch(n){console.error(n)}}return s.jsxs("section",{className:"login-password-stage",children:[s.jsx("h3",{className:"sr-only",children:"비밀번호 입력"}),s.jsx("label",{htmlFor:"loginPassword",children:"비밀번호"}),s.jsx("input",{type:"password",id:"loginPassword",onChange:d}),s.jsx("label",{htmlFor:"loginPersist",children:"로그인 유지"}),s.jsx("input",{type:"checkbox",id:"loginPersist",onChange:i}),s.jsxs("div",{className:"button-group-move",children:[s.jsx("button",{type:"button",onClick:o,"aria-label":"이전 화면으로 이동",children:"아이디"}),s.jsx("button",{type:"button",onClick:g,"aria-label":"다음 화면으로 이동",children:"로그인"})]})]})}function S(){const[t,e]=l.useState(0);return s.jsx("main",{className:"main-login",children:s.jsxs("div",{className:"login-stage-wrapper",style:{left:`${t}%`,transition:".5s"},children:[s.jsx(w,{setMove:e}),s.jsx(N,{setMove:e}),s.jsx(C,{setMove:e})]})})}function O(){return l.useEffect(()=>{(async()=>{const e=await(await fetch(`${h}/users`)).json();console.log("로그인 페이지의 유저 체크",e),e.success&&(alert("접근할 수 없는 페이지입니다."),j("/search"))})()},[]),s.jsxs(s.Fragment,{children:[s.jsx(k,{title:"로그인"}),s.jsx(S,{})]})}export{O as Page};
========
import{r as l,j as s}from"../chunks/chunk-0ad0329c.js";import{T as k}from"../chunks/chunk-64857c89.js";import{c as p,A as h}from"../chunks/chunk-f6dd005f.js";import{L as x}from"../chunks/chunk-ef7fa417.js";import{L as y}from"../chunks/chunk-3c838518.js";import{n as j}from"../chunks/chunk-c949b376.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-af981888.js";const b="/images/icon-kakao.png";function w({setMove:t}){const e=p(),r=()=>{t(-100),e(x(!0))};async function c(){j("/api/oauth/kakao")}l.useEffect(()=>{const o=window.location.search,i=new URLSearchParams(o).get("code");i&&a(i).then(g=>{g.success&&u().then(m=>{m.success&&(window.location.href="/my")})})},[]);async function a(o){return await(await fetch(`${h}/oauth/kakao/token?code=${o}`)).json()}async function u(){return await(await fetch(`${h}/oauth/kakao/users`)).json()}return s.jsxs("section",{className:"login-select-stage",children:[s.jsx("h3",{className:"sr-only",children:"로그인 방식 선택"}),s.jsx("div",{className:"container-rocket",children:s.jsx("span",{children:"🚀"})}),s.jsx("button",{type:"button",onClick:r,className:"styled-button reuse-in-login",children:"로그인"}),s.jsxs("button",{type:"button",className:"styled-button kakao-login",onClick:c,children:[s.jsx("img",{src:b,alt:"카카오 아이콘"}),s.jsx("span",{children:"카카오 로그인"})]}),s.jsx(y,{href:"/signup",className:"link-to-signup",children:"회원가입"})]})}function N({setMove:t}){const e=p(),r=()=>{t(a=>a+100),e(x(!1))},c=()=>{t(a=>a-100)};return s.jsxs("section",{className:"login-id-stage",children:[s.jsx("h3",{className:"sr-only",children:"아이디 입력"}),s.jsx("label",{htmlFor:"loginId",children:"아이디"}),s.jsx("input",{type:"text",id:"loginId"}),s.jsxs("div",{className:"button-group-move",children:[s.jsx("button",{type:"button",onClick:r,"aria-label":"이전 화면으로 이동",children:"첫 화면"}),s.jsx("button",{type:"button",onClick:c,"aria-label":"다음 화면으로 이동",children:"비밀번호"})]})]})}function C({setMove:t}){const e=p(),[r,c]=l.useState(""),[a,u]=l.useState(!1),o=()=>{t(n=>n+100)},d=n=>{c(n.target.value)},i=n=>{u(n.target.checked)},g=()=>{e(x(!1)),m()};async function m(){try{const f={userId:document.getElementById("loginId").value,password:r,keepLogin:a};(await(await fetch(`${h}/users/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})).json()).success?(alert("🎉🎉로그인에 성공했습니다🎉🎉"),window.location.href="/search"):alert("로그인에 실패했습니다")}catch(n){console.error(n)}}return s.jsxs("section",{className:"login-password-stage",children:[s.jsx("h3",{className:"sr-only",children:"비밀번호 입력"}),s.jsx("label",{htmlFor:"loginPassword",children:"비밀번호"}),s.jsx("input",{type:"password",id:"loginPassword",onChange:d}),s.jsx("label",{htmlFor:"loginPersist",children:"로그인 유지"}),s.jsx("input",{type:"checkbox",id:"loginPersist",onChange:i}),s.jsxs("div",{className:"button-group-move",children:[s.jsx("button",{type:"button",onClick:o,"aria-label":"이전 화면으로 이동",children:"아이디"}),s.jsx("button",{type:"button",onClick:g,"aria-label":"다음 화면으로 이동",children:"로그인"})]})]})}function S(){const[t,e]=l.useState(0);return s.jsx("main",{className:"main-login",children:s.jsxs("div",{className:"login-stage-wrapper",style:{left:`${t}%`,transition:".5s"},children:[s.jsx(w,{setMove:e}),s.jsx(N,{setMove:e}),s.jsx(C,{setMove:e})]})})}function O(){return l.useEffect(()=>{(async()=>{const e=await(await fetch(`${h}/users`)).json();console.log("로그인 페이지의 유저 체크",e),e.success&&(alert("접근할 수 없는 페이지입니다."),j("/search"))})()},[]),s.jsxs(s.Fragment,{children:[s.jsx(k,{title:"로그인"}),s.jsx(S,{})]})}export{O as Page};
>>>>>>>> parent of f64bf25 (:sparkles: 클라우드타입 workflow 설정):dist/client/assets/entries/pages_login_index.page.1d19f58d.js
