import{r,j as e}from"../chunks/chunk-0ad0329c.js";import{T as f}from"../chunks/chunk-682fc6e6.js";import{c as m,A as u,b as k}from"../chunks/chunk-20d0bcf6.js";import{L as x,S as w}from"../chunks/chunk-63b910cd.js";import{L as y}from"../chunks/chunk-3c838518.js";import{n as j}from"../chunks/chunk-c949b376.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-af981888.js";const b="/images/icon-kakao.png";function S({setMove:n}){const t=m(),c=()=>{n(-100),t(x(!0))};async function i(){j("/api/oauth/kakao")}r.useEffect(()=>{const o=window.location.search,h=new URLSearchParams(o).get("code");h&&l(h).then(p=>{p.success&&d().then(g=>{g.success&&(window.location.href="/my")})})},[]);async function l(o){return await(await fetch(`${u}/oauth/kakao/token?code=${o}`)).json()}async function d(){return await(await fetch(`${u}/oauth/kakao/users`)).json()}return e.jsxs("section",{className:"login-select-stage",children:[e.jsx("h3",{className:"sr-only",children:"로그인 방식 선택"}),e.jsx("div",{className:"container-rocket",children:e.jsx("span",{children:"🚀"})}),e.jsx("button",{type:"button",onClick:c,className:"styled-button reuse-in-login",children:"로그인"}),e.jsxs("button",{type:"button",className:"styled-button kakao-login",onClick:i,children:[e.jsx("img",{src:b,alt:"카카오 아이콘"}),e.jsx("span",{children:"카카오 로그인"})]}),e.jsx(y,{href:"/signup",className:"link-to-signup",children:"회원가입"})]})}function C({setMove:n}){const t=m(),[c,i]=r.useState(""),l=()=>{n(a=>a+100),t(x(!1))},d=()=>{n(a=>a-100),t(w(c))},o=a=>{i(a.target.value)};return e.jsxs("section",{className:"login-id-stage",children:[e.jsx("h3",{className:"sr-only",children:"아이디 입력"}),e.jsx("label",{htmlFor:"loginId",children:"아이디"}),e.jsx("input",{type:"text",id:"loginId",onChange:o}),e.jsxs("div",{className:"button-group-move",children:[e.jsx("button",{type:"button",onClick:l,"aria-label":"이전 화면으로 이동",children:"첫 화면"}),e.jsx("button",{type:"button",onClick:d,"aria-label":"다음 화면으로 이동",children:"비밀번호"})]})]})}function N({setMove:n}){const t=m(),c=k(s=>s.loginSlice.currentId),[i,l]=r.useState(""),[d,o]=r.useState(!1),a=()=>{n(s=>s+100)},h=s=>{l(s.target.value)},p=s=>{o(s.target.checked)};async function g(){t(x(!1));try{const s=new URLSearchParams;s.append("userId",c),s.append("password",i),s.append("keepLogin",d?"true":"false"),(await(await fetch(`${u}/users/login`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:s.toString()})).json()).success?(window.alert("🎉🎉로그인에 성공했습니다🎉🎉"),j("/search")):window.alert("로그인에 실패했습니다")}catch(s){console.error(s)}}return e.jsxs("section",{className:"login-password-stage",children:[e.jsx("h3",{className:"sr-only",children:"비밀번호 입력"}),e.jsx("label",{htmlFor:"loginPassword",children:"비밀번호"}),e.jsx("input",{type:"password",id:"loginPassword",onChange:h}),e.jsx("label",{htmlFor:"loginPersist",children:"로그인 유지"}),e.jsx("input",{type:"checkbox",id:"loginPersist",onChange:p}),e.jsxs("div",{className:"button-group-move",children:[e.jsx("button",{type:"button",onClick:a,"aria-label":"이전 화면으로 이동",children:"아이디"}),e.jsx("button",{type:"button",onClick:g,"aria-label":"다음 화면으로 이동",children:"로그인"})]})]})}function P(){const[n,t]=r.useState(0);return e.jsx("main",{className:"main-login",children:e.jsxs("div",{className:"login-stage-wrapper",style:{left:`${n}%`,transition:".5s"},children:[e.jsx(S,{setMove:t}),e.jsx(C,{setMove:t}),e.jsx(N,{setMove:t})]})})}function G(){return r.useEffect(()=>{(async()=>{const t=await(await fetch(`${u}/users`)).json();console.log("로그인 페이지의 유저 체크",t),t.success&&(alert("접근할 수 없는 페이지입니다."),j("/search"))})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"로그인"}),e.jsx(P,{})]})}export{G as Page};
