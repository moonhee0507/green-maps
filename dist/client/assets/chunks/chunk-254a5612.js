import{r as n,j as c}from"./chunk-0ad0329c.js";import{a as f,b as e,A as r,B as h}from"./chunk-f6dd005f.js";import"./chunk-da345742.js";import{E as m}from"./chunk-41308c4f.js";function y(){const o=f(),s=e(t=>t.postSlice.editMode),l=e(t=>t.postSlice.postId),p=e(t=>t.postSlice.SUBJECT),u=e(t=>t.postSlice.NICKNAME),d=e(t=>t.postSlice.TITLE),S=e(t=>t.postSlice.CONTENT),a=n.useCallback(async()=>(await(await fetch(`${r}/users/`)).json()).user,[]);n.useEffect(()=>{a().then(t=>{t?o({type:"postSlice/OWNER_STATE",NICKNAME:t.nickName}):console.log("사용자 정보가 없습니다. 로그인 하세요.")})},[a]);async function T(){try{const t={subject:p,owner:u,title:d,content:S},i=await(await fetch(`${r}/posts/${s?l:""}`,{method:s?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json();console.log(i),i.success?alert("게시글이 등록되었습니다."):alert("다시 시도해주세요.")}catch(t){console.error(t)}finally{o({type:"postSlice/SUBJECT_STATE",SUBJECT:""}),o(m(!1)),history.back()}}return c.jsx("button",{type:"button",onClick:T,children:"등록"})}function x(o){const[s]=n.useState(o.title);return c.jsxs("div",{className:"top-bar",children:[c.jsx(h,{}),c.jsx("h2",{className:"top-title",children:s}),s==="글 쓰기"||s==="글 수정"?c.jsx(y,{}):null]})}export{x as T};
