import{r as l,j as e}from"./chunk-93156e5d.js";import{D as d}from"./chunk-ea155949.js";import{u}from"./chunk-1ef25d43.js";import{i as x}from"./chunk-dfbf6de9.js";function b(s){const{title:t}=s,n=u(o=>o.postSlice.KEYWORD),[c,r]=l.useState(t);return l.useEffect(()=>{if(n&&n!=="")if(t.includes(n)){const o=new RegExp(n,"gi"),i=t.replace(o,`<span style="color: blue;">${n}</span>`);r(i)}else r(t);else r(t)},[t,n]),e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"제목"}),n&&n!==""?e.jsx("dd",{className:"txt-postitem-title",dangerouslySetInnerHTML:{__html:d.sanitize(c)}}):e.jsx("dd",{className:"txt-postitem-title",children:t})]})}function S(s){const{content:t}=s,n=u(o=>o.postSlice.KEYWORD),[c,r]=l.useState(t);return l.useEffect(()=>{if(n&&n!=="")if(t.includes(n)){const o=new RegExp(n,"gi"),i=t.replace(o,`<span style="color: blue;">${n}</span>`);r(i)}else r(t);else r(t)},[t,n]),e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"내용"}),n&&n!==""?e.jsx("dd",{className:"txt-postitem-content",dangerouslySetInnerHTML:{__html:d.sanitize(c)}}):e.jsx("dd",{className:"txt-postitem-content",children:t})]})}function v({like:s,comments:t,registeredAt:n,owner:c}){return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"상세 내용"}),e.jsx("dd",{children:e.jsxs("dl",{className:"container-post-subinfo",children:[e.jsx(m,{like:s}),e.jsx(j,{comments:t}),e.jsx(h,{registeredAt:n}),e.jsx(p,{owner:c})]})})]})}function m({like:s}){return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"좋아요 개수"}),e.jsx("dd",{className:"container-count-like",children:e.jsx("span",{children:(s==null?void 0:s.length)||0})})]})}function j({comments:s}){return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"댓글 개수"}),e.jsx("dd",{className:"container-count-comment",children:e.jsx("span",{children:(s==null?void 0:s.length)||0})})]})}function h({registeredAt:s}){var n,c;const t=x(s)?`${(n=s.split(". ").at(-1))==null?void 0:n.split(":")[0]}:${(c=s.split(". ").at(-1))==null?void 0:c.split(":")[1]}`:s.slice(0,13);return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"작성 시간"}),e.jsx("dd",{className:"container-post-time",children:e.jsx("time",{dateTime:"",children:t})})]})}function p({owner:s}){return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"작성자"}),e.jsx("dd",{className:"txt-post-owner",children:typeof s=="string"?s:s==null?void 0:s.nickName})]})}function E(s){return e.jsxs(e.Fragment,{children:[e.jsx("dt",{className:"sr-only",children:"말머리"}),e.jsx("dd",{className:"txt-subject-in-community",children:s.subject})]})}function T(s){const t=l.useRef(null);return l.useEffect(()=>{const r=i=>{var a;(a=i.at(-1))!=null&&a.isIntersecting&&s()},o=document.querySelector(".main-community");return t.current=new IntersectionObserver(r,{root:o,rootMargin:"0px",threshold:.5}),()=>{var i;(i=t.current)==null||i.disconnect()}},[s]),[r=>{r&&t.current&&t.current.observe(r)},r=>{r&&t.current&&t.current.unobserve(r)}]}export{S as P,E as S,b as T,v as a,T as u};
//# sourceMappingURL=chunk-5abc8723.js.map