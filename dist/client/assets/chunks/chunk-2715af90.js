import{r as s,j as e}from"./chunk-0ad0329c.js";import{b as E,u as i}from"./chunk-f5cf074f.js";import{u as T}from"./chunk-aaa4175a.js";function A({postInfo:c}){const o=E(),[r,u]=s.useState(!1),[l,p]=s.useState("");i(t=>t.postSlice.editMode);const S=i(t=>t.postSlice.SUBJECT),[m,a]=s.useState(!1),[f,n]=T();s.useEffect(()=>{p(window.location.pathname),u(n!==null?n.role===9:!1)},[n]),s.useEffect(()=>{c!=null?o({type:"postSlice/SUBJECT_STATE",SUBJECT:c.subject}):o({type:"postSlice/SUBJECT_STATE",SUBJECT:""})},[c]);function d(t){return o({type:"postSlice/SUBJECT_STATE",SUBJECT:t.target.value}),o({type:"postSlice/POST_IN_PAGE",TOTAL:0,CURRENT_PAGE:1}),t.target.value}const h=()=>{a(!0)},j=()=>{a(!1)};return e.jsxs("div",{className:`${l==="/community"?"wrapper-subject":"wrapper-subject create"} ${m?"on":""}`,children:[e.jsx("label",{htmlFor:"selectSubject",className:l==="/community"?"":"sr-only",children:"말머리"}),e.jsxs("select",{name:"subjects",id:"selectSubject",onChange:d,value:S,onFocus:h,onBlur:j,children:[e.jsx("option",{value:"",children:l==="/community"?"-- 전체 --":"말머리 선택"}),l==="/community/create"&&r?e.jsx("option",{value:"공지사항",children:"공지사항"}):null,e.jsx("option",{value:"🥑채식얘기",children:"🥑채식얘기"}),e.jsx("option",{value:"⚽운동얘기",children:"⚽운동얘기"})]})]})}export{A as S};
