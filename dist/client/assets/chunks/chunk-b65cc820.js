import{j as t,r as u}from"./chunk-0ad0329c.js";import{S}from"./chunk-e969e175.js";import{u as m}from"./chunk-da345742.js";import{A as x,c as g,a as y}from"./chunk-f5cf074f.js";import{S as T,T as N,P as C,a as P,u as b}from"./chunk-525dc8c4.js";import"./chunk-72fd2dbb.js";import"./chunk-4a7b83e5.js";import"./chunk-dfbf6de9.js";function A({isLoggedIn:e}){function s(){e?window.location.href="/community/create":confirm(`로그인이 필요한 서비스입니다.
로그인 하시겠습니까?`)&&(window.location.href="/login")}return t.jsx("button",{type:"button",className:"link-create",onClick:s,children:"글쓰기"})}function w(e){const s=m(r=>r.postSlice.post.TOTAL),i=m(r=>r.postSlice.SUBJECT),[o,n]=u.useState(0);return u.useEffect(()=>{r(i).then(a=>n(a.todayCount));async function r(a){const l=encodeURIComponent(a);return await(await fetch(`${x}/today/${l}`,{headers:{"Content-Type":"application/json"}})).json()}},[e.posts]),t.jsxs("div",{className:"container-newpost-selectbox",children:[t.jsxs("p",{className:"txt-postinfo",children:["새글 ",t.jsx("span",{children:o}),"/",s]}),t.jsx(S,{})]})}function R(){const[e,s]=u.useState(null),i=u.useRef(null);u.useEffect(()=>{o().then(n=>{n.total>=1?s(n.lists):s(null)})},[]);async function o(){return await(await fetch(`${x}/subjects/${encodeURIComponent("공지사항")}`,{headers:{"Cache-Control":"max-age=31536000"}})).json()}return t.jsxs("article",{className:"article-notice",children:[t.jsx("h3",{className:"sr-only",children:"공지사항"}),e!==null?t.jsx("ul",{className:"ul-notice",ref:i,children:e.map((n,r)=>t.jsx(E,{posts:n},Math.random()))}):null]})}function E({posts:e}){const{_id:s,title:i,registeredAt:o,updatedAt:n}=e;return t.jsx("li",{className:"li-notice",children:t.jsx("a",{href:`/community/${s}`,children:t.jsxs("p",{className:"txt-title",children:[t.jsx("span",{children:"[공지사항] "}),t.jsx("em",{children:i})]})})})}const f=u.forwardRef(I);function I(e,s){const{_id:i,subject:o,owner:n,title:r,content:a,photo:l,like:c,registeredAt:p,comments:h}=e.postInfo,j=U(a),d="80px";return t.jsx("li",{ref:s,children:t.jsxs("a",{href:`/community/${i}`,style:{width:"100%",display:"flex",padding:"20px"},children:[t.jsxs("dl",{style:{width:`calc(100% - ${l&&l.length>0?d:"0px"})`},children:[t.jsx(T,{subject:o}),t.jsx(N,{title:r}),t.jsx(C,{content:j}),t.jsx(P,{owner:n,like:c,registeredAt:p,comments:h})]}),l&&l.length>0?t.jsx("dd",{children:t.jsx("img",{src:l[0].src,alt:"",style:{width:d,height:d,objectFit:"cover"}})}):null]})})}function U(e){return e.replaceAll(/<[^>]*>/g,"").replaceAll(/&[a-zA-Z0-9]*;/g,"")}function _(e){const{posts:s,limit:i}=e,o=u.useRef(null),n=g(),r=y(),[a,l]=b(()=>{const c=Math.ceil(n.getState().postSlice.post.TOTAL/i);n.getState().postSlice.post.CURRENT_PAGE<c&&r({type:"postSlice/POST_IN_PAGE",TOTAL:n.getState().postSlice.post.TOTAL,CURRENT_PAGE:n.getState().postSlice.post.CURRENT_PAGE+1})});return u.useEffect(()=>{const c=Math.ceil(n.getState().postSlice.post.TOTAL/i),p=n.getState().postSlice.post.CURRENT_PAGE;p===c?l(o.current):p<c&&a(o.current)},[a,l]),t.jsx("ul",{className:"wrapper-posts",children:s.map((c,p)=>p===s.length-1?t.jsx(f,{postInfo:c,ref:o},c._id):t.jsx(f,{postInfo:c},c._id))})}function L(e){const{posts:s,limit:i}=e;return t.jsxs("section",{children:[t.jsx("h3",{className:"sr-only",children:"게시글 목록"}),t.jsx(R,{}),t.jsx(_,{posts:s,limit:i})]})}function v({posts:e,limit:s,isLoggedIn:i}){const o=u.useRef(null),[n,r]=u.useState(!1);function a(){var c;(c=o==null?void 0:o.current)==null||c.scrollTo({top:0,left:0,behavior:"auto"})}function l(){var c;((c=o==null?void 0:o.current)==null?void 0:c.scrollTop)===0?r(!1):r(!0)}return t.jsxs(t.Fragment,{children:[t.jsxs("main",{className:"main-community",ref:o,onScroll:l,children:[t.jsx(w,{posts:e}),t.jsx(L,{posts:e,limit:s})]}),n&&t.jsx("button",{id:"buttonGoUp",onClick:a,type:"button",children:"맨위로"})]})}function z({isLoggedIn:e,posts:s,limit:i}){return t.jsxs(t.Fragment,{children:[t.jsx(A,{isLoggedIn:e}),t.jsx(v,{posts:s,limit:i,isLoggedIn:e})]})}export{z as default};
//# sourceMappingURL=chunk-b65cc820.js.map
