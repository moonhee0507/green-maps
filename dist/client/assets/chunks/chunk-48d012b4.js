import{r as t,j as s}from"./chunk-0ad0329c.js";import{c as j,b as u,A as E}from"./chunk-0fac4abb.js";function A({postInfo:c}){const a=j(),[i,n]=t.useState(!1),[o,p]=t.useState("");u(e=>e.postSlice.editMode);const S=u(e=>e.postSlice.SUBJECT),[d,l]=t.useState(!1);t.useEffect(()=>{(async()=>{const r=await(await fetch(`${E}/users`)).json();r.success?n(r.user.role===9):n(!1)})()},[]),t.useEffect(()=>{p(window.location.pathname),c!=null?a({type:"postSlice/SUBJECT_STATE",SUBJECT:c.subject}):a({type:"postSlice/SUBJECT_STATE",SUBJECT:""})},[c]);function m(e){return a({type:"postSlice/SUBJECT_STATE",SUBJECT:e.target.value}),a({type:"postSlice/POST_IN_PAGE",TOTAL:0,CURRENT_PAGE:1}),console.log("event.currentTarget.focus",e.currentTarget.focus),e.target.value}const h=()=>{l(!0)},T=()=>{l(!1)};return s.jsxs("div",{className:`${o==="/community"?"wrapper-subject":"wrapper-subject create"} ${d?"on":""}`,children:[s.jsx("label",{htmlFor:"selectSubject",className:o==="/community"?"":"sr-only",children:"말머리"}),s.jsxs("select",{name:"subjects",id:"selectSubject",onChange:m,value:S,onFocus:h,onBlur:T,children:[s.jsx("option",{value:"",children:o==="/community"?"-- 전체 --":"말머리 선택"}),o==="/community/create"&&i?s.jsx("option",{value:"공지사항",children:"공지사항"}):null,s.jsx("option",{value:"🥑채식얘기",children:"🥑채식얘기"}),s.jsx("option",{value:"⚽운동얘기",children:"⚽운동얘기"})]})]})}export{A as S};
