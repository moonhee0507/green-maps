import{_ as f}from"../chunks/chunk-101896b7.js";import{R as l,r,j as t}from"../chunks/chunk-0ad0329c.js";import{L as d}from"../chunks/chunk-c9eff144.js";import{i as g}from"../chunks/chunk-0249643f.js";function v(){import.meta.url,import("_").catch(()=>1);async function*o(){}}const b={title:"홈 | Green Maps",description:"채식 식당 지도 서비스"},_=l.lazy(()=>f(()=>import("../chunks/chunk-36fbcff2.js"),["assets/chunks/chunk-36fbcff2.js","assets/chunks/chunk-0ad0329c.js"]));function y(){const[o,c]=r.useState(!0),[m,s]=r.useState(null),n=e=>{e.preventDefault(),s(e)};r.useEffect(()=>{const e=setTimeout(()=>{c(!1)},5e3);return console.log("LCP 폴리필 테스트",p()),()=>{clearTimeout(e)}},[]);function p(){new PerformanceObserver(u=>{const i=u.getEntries(),a=i[i.length-1];console.log("LCP:",a.startTime),console.log(a)}).observe({type:"largest-contentful-paint",buffered:!0})}return r.useEffect(()=>(o||window.addEventListener("beforeinstallprompt",n),()=>{window.removeEventListener("beforeinstallprompt",n)}),[o]),t.jsxs(l.Suspense,{fallback:t.jsx(d,{}),children:[o?t.jsx("div",{style:{width:"50px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:"0.33"},children:t.jsx("img",{src:g,alt:"로딩",style:{width:"100%"},id:"__LOADING__"})}):null,t.jsx(_,{deferredPrompt:m,setDeferredPrompt:s})]})}export{y as Page,v as __vite_legacy_guard,b as documentProps};