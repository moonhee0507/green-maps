import{r as n}from"./chunk-0ad0329c.js";import{A as c}from"./chunk-f5cf074f.js";function u(){const[s,o]=n.useState(!1),[i,t]=n.useState(null);return n.useEffect(()=>{(async()=>{try{const e=await(await fetch(`${c}/users/`,{credentials:"include",method:"GET"})).json();e.success===!0?(o(!0),t(e.user)):(o(!1),t(null),window.location.pathname==="/my"&&(window.location.href="/login"),window.location.pathname==="/my-lists"&&(window.location.href="/login"))}catch{o(!1),t(null),window.location.pathname==="/my"&&(window.location.href="/login"),window.location.pathname==="/my-lists"&&(window.location.href="/login")}})()},[]),[s,i]}export{u};
//# sourceMappingURL=chunk-72fd2dbb.js.map
