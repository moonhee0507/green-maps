import{r as i,j as r}from"./chunk-93156e5d.js";function h(e){const[s]=i.useState(Number(e.rating)),a=5;try{if(a<s)throw new Error("해당 식당의 평점 데이터가 올바르지 않습니다.")}catch(t){console.error(t.message)}const[c,d]=i.useState(()=>{const t=Math.floor(s),n=s-t;return new Array(a).fill(0).map((x,o)=>o<=t-1?100:o===t?n*100:0)});return r.jsxs("div",{className:"container-rating",children:[c.map((t,n)=>r.jsx(l,{id:n+1,percent:t},n+1)),window.location.pathname!=="/search"&&r.jsxs("span",{children:["(",s.toFixed(1),")"]})]})}function l(e){return r.jsx(r.Fragment,{children:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:30,children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:`starSegre${e.id}`,gradientTransform:"rotate(0)",children:[r.jsx("stop",{offset:`${e.percent}%`,stopColor:"#fc0"}),r.jsx("stop",{offset:`${e.percent}%`,stopColor:"#d3d3d3"})]})}),r.jsx("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",fill:`url('#starSegre${e.id}')`})]})})}export{h as S};
//# sourceMappingURL=chunk-09c58e42.js.map