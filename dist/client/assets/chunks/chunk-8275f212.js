import{r as c,j as e}from"./chunk-0ad0329c.js";import"./chunk-da345742.js";import{a as u,u as p}from"./chunk-f5cf074f.js";function m({count:a,perPage:o}){const n=u(),[r,i]=c.useState(!1),[d,g]=c.useState("");c.useEffect(()=>{typeof window<"u"&&i(!0)},[]),c.useEffect(()=>{g(window.location.pathname)},[r]);const h=Math.ceil(a/o),l=[];for(let t=1;t<=h;t++)l.push(t);const s=p(t=>t.paginationSlice.currentPage);function f(){n({type:"paginationSlice/CURRENT_PAGE",currentPage:s-1})}function x(){n({type:"paginationSlice/CURRENT_PAGE",currentPage:s+1})}return e.jsx("nav",{className:"wrapper-pagination",style:d==="/search"?{padding:"10px 0 0"}:{},children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("button",{type:"button","aria-label":"이전 페이지 버튼",className:"button-prev-page",disabled:s===1,onClick:f})}),e.jsx("li",{children:e.jsx("ol",{className:"container-pagination",children:l.map(t=>e.jsx(P,{number:t},t))})}),e.jsx("li",{children:e.jsx("button",{type:"button","aria-label":"다음 페이지 버튼",className:"button-next-page",disabled:s===l.pop(),onClick:x})})]})})}function P({number:a}){const o=u(),n=p(i=>i.paginationSlice.currentPage);function r(i){o({type:"paginationSlice/CURRENT_PAGE",currentPage:Number(i.currentTarget.value)})}return e.jsx("li",{hidden:!(a<=Math.ceil(n/5)*5&&a>=Math.ceil(n/5)*5-4),children:e.jsx("button",{className:`button-page ${a===n?"on":""}`,type:"button",onClick:r,value:a,children:a})})}export{m as P};
//# sourceMappingURL=chunk-8275f212.js.map
