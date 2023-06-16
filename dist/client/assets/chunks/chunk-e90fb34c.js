import{r as h,j as e}from"./chunk-0ad0329c.js";import"./chunk-da345742.js";import{r as j}from"./chunk-c8344d66.js";import{I as w,a as y,A as x,u as g}from"./chunk-f5cf074f.js";import{s as N}from"./chunk-a6e5261d.js";import{i as E}from"./chunk-0249643f.js";function S({photos:a}){const c=h.useRef(null),l=()=>{var r;t.length>0?u([]):(r=c.current)==null||r.click()},[t,u]=h.useState(()=>{if(window.location.pathname.includes("/edit")&&a&&a.length>0){const m=[];for(let n of a)m.push([`${w}/${n.src}`,n.src.split(".").at(-1)]);return m}else return[]}),s=r=>{const m=r.target.files;if(r.target.files!==null){const n=[];for(let o of m)n.push([URL.createObjectURL(o),o.type]);u(n)}},d=y();return h.useEffect(()=>{var r;if(t){const m=[];for(let n of t){const o=j()+"."+((r=n[1])==null?void 0:r.replace("image/",""));m.push(o)}d({type:"reviewSlice/IMAGE_STATE",FILE_INFO:t,RANDOM_NAME:m})}},[t]),e.jsxs("fieldset",{className:"section-add-picture",children:[e.jsx("legend",{className:"sr-only",children:"사진 첨부"}),e.jsx("div",{className:"container-notice",children:e.jsx("em",{children:"음식 사진이나 메뉴판 사진을 첨부해주세요. (최대 3장)"})}),e.jsxs("ul",{className:"container-picture",children:[e.jsxs("li",{className:`list-add-picture ${t.length>0?"reset":""}`,onClick:l,children:[e.jsx("label",{className:"sr-only",htmlFor:"fileInput"}),e.jsx("input",{type:"file",id:"fileInput",accept:"image/*",onChange:s,style:{display:"none"},multiple:!0,ref:c})]}),e.jsx("li",{className:"list-picture","area-label":"추가한 이미지 리스트",children:t.length>0?e.jsx("img",{src:t[0][0],alt:"첫번째 이미지"}):null}),e.jsx("li",{className:"list-picture","area-label":"추가한 이미지 리스트",children:t.length>1?e.jsx("img",{src:t[1][0],alt:"두번째 이미지"}):null}),e.jsx("li",{className:"list-picture","area-label":"추가한 이미지 리스트",children:t.length>2?e.jsx("img",{src:t[2][0],alt:"세번째 이미지"}):null})]})]})}function T({title:a,content:c}){const l=y(),[t,u]=h.useState(()=>window.location.pathname.includes("/edit")?(l({type:"reviewSlice/TXT_REVIEW_STATE",CONTENT:c}),c):"");function s(d){u(d.currentTarget.value),l({type:"reviewSlice/TXT_REVIEW_STATE",CONTENT:d.currentTarget.value})}return e.jsxs("fieldset",{className:"section-write-review",children:[e.jsx("legend",{className:"sr-only",children:"글 작성"}),e.jsx("label",{className:"sr-only",htmlFor:"restaurantInput",children:"식당이름"}),e.jsx("input",{type:"text",value:a,id:"restaurantInput",readOnly:!0}),e.jsx("label",{htmlFor:"txtReview",className:"sr-only",children:"리뷰 작성란"}),e.jsx("textarea",{id:"txtReview",placeholder:`채식에 대한 이야기를 자유롭게 공유해주세요.
(10자이상 100자 이내)`,autoComplete:"on",maxLength:100,minLength:10,required:!0,onChange:s,value:t})]})}async function I(a,c){if(a.length===c.length)for(let l=0;l<a.length;l++){const t=await fetch(a[l][0]).then(s=>s.blob()).then(s=>new File([s],`${c[l]}`,{type:`${s.type}`})),u={name:`client/${c[l]}`,type:t.type};try{const r=(await(await fetch(`${x}/images/client`,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).json()).signedUrl;await fetch(r,{method:"PUT",headers:{"Content-Type":t.type},body:t})}catch(s){console.error(s)}}else throw Error("이미지 네이밍 처리에 오류가 발생했습니다.")}function b({restaurantId:a,reviewId:c,userInfo:l}){const[t]=h.useState(window.location.pathname.includes("/edit")),[u,s]=h.useState(!1);h.useEffect(()=>{const n=document.querySelector(".app"),o=()=>{const i=document.createElement("img");return i.src=E,i.alt="좌표 생성 로딩",i.style.width="50px",i.style.position="absolute",i.style.top="50%",i.style.left="50%",i.style.transform="translate(-50%, -50%)",i.id="__LOADING__",i};if(u)n!==null&&n.appendChild(o());else if(n!==null){const i=document.getElementById("__LOADING__");i&&n.removeChild(i)}},[u]);const d=g(n=>n.reviewSlice.CONTENT),r=g(n=>n.reviewSlice.image.RANDOM_NAME);async function m(){try{s(!0);let n=[];const o=N.getState().reviewSlice.image.FILE_INFO;if(o.length>0)if(o[0][0].includes("amazon")){if(o[0][0].includes("amazon")){const p=[];for(let f of o)p.push({src:"client/"+f[0].split("client/").at(-1),pick:!0});n=p}}else{await I(o,r);const p=[];for(let f=0;f<o.length;f++)p.push({src:`client/${r[f]}`,pick:!0});n=p}let i;t?i={restaurant:a,photo:n,content:d}:i={owner:l?l.userId:"",restaurant:a,photo:n,content:d};try{(await(await fetch(`${x}/reviews/${t?c+"/edit":""}`,{credentials:"include",method:t?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).json()).success===!0?alert("리뷰가 등록되었습니다."):alert(`리뷰 등록에 실패했습니다.
다시 시도해주세요.`)}catch(p){console.error(p)}finally{window.history.back()}}catch{console.error("handleSubmit Error")}finally{s(!1)}}return e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",onClick:m,className:"styled-button review",children:t?"수정 완료":"작성 완료"})})}function R({restaurantId:a,reviewId:c,title:l,photos:t,content:u,userInfo:s}){return e.jsx("main",{className:"wrapper-review",children:e.jsxs("form",{children:[e.jsx(S,{photos:t}),e.jsx(T,{title:l,content:u}),e.jsx(b,{restaurantId:a,reviewId:c,userInfo:s})]})})}export{R};