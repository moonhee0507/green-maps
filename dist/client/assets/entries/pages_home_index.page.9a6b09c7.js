import{_ as u}from"../chunks/chunk-101896b7.js";import{r as t,R as i,j as e}from"../chunks/chunk-0ad0329c.js";import{L as a}from"../chunks/chunk-c9eff144.js";import{i as f}from"../chunks/chunk-0249643f.js";const E={title:"홈 | Green Maps",description:"채식 식당 지도 서비스"};function g(){const[s,l]=t.useState(!0),[p,r]=t.useState(null),[m,d]=t.useState(()=>a),n=o=>{o.preventDefault(),r(o)};return t.useEffect(()=>{const o=setTimeout(()=>{l(!1)},5e3);return d(()=>i.lazy(()=>u(()=>import("../chunks/chunk-36fbcff2.js"),["assets/chunks/chunk-36fbcff2.js","assets/chunks/chunk-0ad0329c.js"]))),()=>{clearTimeout(o)}},[]),t.useEffect(()=>(s||window.addEventListener("beforeinstallprompt",n),()=>{window.removeEventListener("beforeinstallprompt",n)}),[s]),e.jsxs(i.Suspense,{fallback:e.jsx(a,{}),children:[s?e.jsx("div",{style:{width:"50px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:"0.33"},children:e.jsx("img",{src:f,alt:"로딩",style:{width:"100%"},id:"__LOADING__"})}):null,e.jsx(m,{deferredPrompt:p,setDeferredPrompt:r})]})}export{g as Page,E as documentProps};
