import{j as e,r as d}from"../chunks/chunk-0ad0329c.js";import{T as b}from"../chunks/chunk-fa93ea2c.js";import{L as y}from"../chunks/chunk-3c838518.js";import{b as x,A as h}from"../chunks/chunk-f5cf074f.js";import{S as f}from"../chunks/chunk-370f01b3.js";import{a as N,b as w,v}from"../chunks/chunk-9bdd667e.js";import"../chunks/chunk-da345742.js";import"../chunks/chunk-41308c4f.js";function k({move:n,setMove:s}){const i=x(),c=()=>{s(-100),i(f(!0))};return e.jsxs("section",{className:"login-select-stage reuse-in-signup",style:n!==0?{visibility:"hidden"}:{},children:[e.jsx("h3",{className:"sr-only",children:"회원가입 안내"}),e.jsx("div",{className:"container-rocket reuse-in-signup",children:e.jsx("span",{children:"🥰"})}),e.jsx("p",{className:"txt-signup-info",children:"간편 회원가입을 진행합니다."}),e.jsx("button",{type:"button",onClick:c,children:"계속하기"}),e.jsxs("small",{children:["이미 회원이신가요? ",e.jsx(y,{href:"/login",children:"로그인"}),"하러 가기"]})]})}function I({move:n,setMove:s}){const i=x(),c=d.useRef(null),[r,l]=d.useState(""),u=()=>{s(t=>t+100),i(f(!1))},o=()=>{const t=c.current;t!==null&&(N(t.value)===!0?a(t.value):l("영문, 숫자 20자 이내의 아이디를 입력해주세요."))};async function a(t){(await(await fetch(`${h}/users/check-userId?userId=${t}`)).json()).duplicated===!1?(l(""),s(g=>g-100)):l("이미 존재하는 아이디입니다.")}return e.jsxs("section",{className:"signup-id-stage",style:n!==-100?{visibility:"hidden"}:{},children:[e.jsx("h3",{className:"sr-only",children:"아이디 입력"}),e.jsx("label",{htmlFor:"signupId",children:"아이디"}),e.jsx("input",{type:"text",id:"signupId",placeholder:"영문, 숫자 6~20자 이내",ref:c,minLength:6,maxLength:20,"aria-describedby":"desc-signup-id"}),e.jsx("em",{className:"txt-signup-message",id:"desc-signup-id",children:r}),e.jsxs("div",{className:"button-group-move",children:[e.jsx("button",{type:"button",onClick:u,"aria-label":"이전 화면으로 이동",children:"첫 화면"}),e.jsx("button",{type:"button",onClick:o,"aria-label":"다음 화면으로 이동",children:"닉네임"})]})]})}function P({move:n,setMove:s}){const i=d.useRef(null),[c,r]=d.useState(""),l=()=>{s(a=>a+100)},u=()=>{const a=i.current;a!==null&&(w(a.value)===!0?o(a.value):r("영문, 숫자, 한글 17자 이내의 닉네임을 입력해주세요."))};async function o(a){(await(await fetch(`${h}/users/check-nickname?nickname=${a}`)).json()).duplicated===!1?(r(""),s(m=>m-100)):r("이미 존재하는 닉네임입니다.")}return e.jsxs("section",{className:"signup-nickname-stage",style:n!==-200?{visibility:"hidden"}:{},children:[e.jsx("h3",{className:"sr-only",children:"닉네임 입력"}),e.jsx("label",{htmlFor:"signupNickName",children:"닉네임"}),e.jsx("input",{type:"text",id:"signupNickName",ref:i,placeholder:"영문, 숫자, 한글 17자 이내",minLength:1,maxLength:17,"aria-describedby":"desc-signup-nickname"}),e.jsx("em",{className:"txt-signup-message",id:"desc-signup-nickname",children:c}),e.jsxs("div",{className:"button-group-move",children:[e.jsx("button",{type:"button",onClick:l,"aria-label":"이전 화면으로 이동",children:"아이디"}),e.jsx("button",{type:"button",onClick:u,"aria-label":"다음 화면으로 이동",children:"비밀번호"})]})]})}function S({move:n,setMove:s}){const i=d.useRef(null),[c,r]=d.useState(""),l=()=>{s(o=>o+100)},u=()=>{const o=i.current;o!==null&&(v(o.value)===!0?(r(""),s(a=>a-100)):r("영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)하여 입력해주세요."))};return e.jsxs("section",{className:"signup-password-stage",style:n!==-300?{visibility:"hidden"}:{},children:[e.jsx("h3",{className:"sr-only",children:"비밀번호 입력"}),e.jsx("label",{htmlFor:"signupPassword",children:"비밀번호"}),e.jsx("input",{type:"password",id:"signupPassword",ref:i,placeholder:"영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)",minLength:8,maxLength:32,"aria-describedby":"desc-signup-password"}),e.jsx("em",{className:"txt-signup-message",id:"desc-signup-password",children:c}),e.jsxs("div",{className:"button-group-move",children:[e.jsx("button",{type:"button",onClick:l,"aria-label":"이전 화면으로 이동",children:"닉네임"}),e.jsx("button",{type:"button",onClick:u,"aria-label":"다음 화면으로 이동",children:"비밀번호 재입력"})]})]})}function C({move:n,setMove:s}){const i=x(),c=d.useRef(null),[r,l]=d.useState(""),u=()=>{s(t=>t+100)},o=()=>{const t=document.getElementById("signupPassword").value,p=c.current;p!==null&&(p.value===t?(l(""),i(f(!1)),a()):l("비밀번호가 일치하지 않습니다."))};async function a(){try{const t=document.getElementById("signupId").value,p=document.getElementById("signupPassword").value,m=document.getElementById("signupNickName").value,g={userId:t,password:p,nickName:m},j=await(await fetch(`${h}/users/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)})).json();j.success?(alert("🎉 회원가입에 성공했습니다"),window.location.href="/login"):(alert("회원가입에 실패했습니다"),console.error(j.errorMessage))}catch(t){console.error(t)}}return e.jsxs("section",{className:"signup-confirm-password-stage",style:n!==-400?{visibility:"hidden"}:{},children:[e.jsx("h3",{className:"sr-only",children:"비밀번호 재입력"}),e.jsx("label",{htmlFor:"signupConfirmPassword",children:"비밀번호 재입력"}),e.jsx("input",{type:"password",id:"signupConfirmPassword",ref:c,placeholder:"비밀번호 재입력",minLength:8,maxLength:32,"aria-describedby":"desc-signup-confirm-password"}),e.jsx("em",{className:"txt-signup-message",id:"desc-signup-confirm-password",children:r}),e.jsxs("div",{className:"button-group-move",children:[e.jsx("button",{type:"button",onClick:u,"aria-label":"이전 화면으로 이동",children:"비밀번호"}),e.jsx("button",{type:"button",onClick:o,"aria-label":"다음 화면으로 이동",children:"완료"})]})]})}function L(){const[n,s]=d.useState(0);return e.jsx("main",{className:"main-signup",children:e.jsxs("div",{className:"signup-stage-wrapper",style:{left:`${n}%`,transition:".5s"},children:[e.jsx(k,{move:n,setMove:s}),e.jsx(I,{move:n,setMove:s}),e.jsx(P,{move:n,setMove:s}),e.jsx(S,{move:n,setMove:s}),e.jsx(C,{move:n,setMove:s})]})})}const D={title:"회원가입 | Green Maps",description:"그린맵 회원가입 페이지"};function G(){return d.useEffect(()=>{(async()=>(await(await fetch(`${h}/users`)).json()).success&&(alert("접근할 수 없는 페이지입니다."),window.location.href="/search"))()},[]),e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"회원가입"}),e.jsx(L,{})]})}export{G as Page,D as documentProps};
//# sourceMappingURL=pages_signup_index.page.b743c3f2.js.map
