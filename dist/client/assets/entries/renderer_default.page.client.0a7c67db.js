import{r as a,R as h,j as o}from"../chunks/chunk-0ad0329c.js";import{r as j,g as P,R}from"../chunks/chunk-02d17786.js";import{s as g}from"../chunks/chunk-a6e5261d.js";import{P as w,L as E}from"../chunks/chunk-3c838518.js";import"../chunks/chunk-41308c4f.js";import"../chunks/chunk-b82d406b.js";import"../chunks/chunk-2b326172.js";import"../chunks/chunk-f3107ac8.js";import"../chunks/chunk-87bfa915.js";import"../chunks/chunk-91c16fc8.js";import"../chunks/chunk-63b910cd.js";import"../chunks/chunk-370f01b3.js";function k(){import.meta.url,import("_").catch(()=>1);async function*t(){}}var m={},y,b=j;m.createRoot=b.createRoot,y=m.hydrateRoot=b.hydrateRoot;function L(){const t=P();let r=null,s=null;return{clear(){r=null,s=null},notify(){t(()=>{let e=r;for(;e;)e.callback(),e=e.next})},get(){let e=[],i=r;for(;i;)e.push(i),i=i.next;return e},subscribe(e){let i=!0,n=s={callback:e,next:null,prev:s};return n.prev?n.prev.next=n:r=n,function(){!i||r===null||(i=!1,n.next?n.next.prev=n.prev:s=n.prev,n.prev?n.prev.next=n.next:r=n.next)}}}}const x={notify(){},get:()=>[]};function M(t,r){let s,e=x;function i(S){return d(),e.subscribe(S)}function n(){e.notify()}function u(){l.onStateChange&&l.onStateChange()}function c(){return!!s}function d(){s||(s=r?r.addNestedSub(u):t.subscribe(u),e=L())}function f(){s&&(s(),s=void 0,e.clear(),e=x)}const l={addNestedSub:i,notifyNestedSubs:n,handleChangeWrapper:u,isSubscribed:c,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>e};return l}const N=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_=N?a.useLayoutEffect:a.useEffect;function v({store:t,context:r,children:s,serverState:e}){const i=a.useMemo(()=>{const c=M(t);return{store:t,subscription:c,getServerState:e?()=>e:void 0}},[t,e]),n=a.useMemo(()=>t.getState(),[t]);_(()=>{const{subscription:c}=i;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),n!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[i,n]);const u=r||R;return h.createElement(u.Provider,{value:i},s)}function C({children:t,pageContext:r}){return o.jsx(v,{store:g,children:o.jsx(w,{pageContext:r,children:o.jsxs(B,{children:[o.jsx(A,{}),o.jsx(I,{children:t})]})})})}function B({children:t}){return o.jsx("div",{className:"layout",children:t})}function A(){return o.jsx("div",{className:"left-area",children:o.jsxs("div",{className:"txt-intro",children:[o.jsx("strong",{children:"채식 식당 검색과 북마크 서비스"}),o.jsx("h1",{children:o.jsx(E,{href:"/",children:"그린 맵"})})]})})}function I({children:t}){const[r,s]=a.useState(!1),e=a.useRef(null);return a.useEffect(()=>{s(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))},[]),a.useEffect(()=>{if(r){const i=e.current;i!==null&&(i.style.height=window.innerHeight+"px")}},[r]),o.jsx("div",{className:"app",ref:e,children:t})}const K=!0,Q=!0;let p;async function X(t){const{Page:r,pageProps:s,routeParams:e,token:i,user:n,reviews:u,restaurantInfo:c,postId:d}=t,f=o.jsx(h.StrictMode,{children:o.jsx(v,{store:g,children:o.jsx(C,{pageContext:t,children:o.jsx(r,{...s,routeParams:e,token:i,user:n,reviews:u,restaurantInfo:c,postId:d})})})}),l=document.getElementById("page-view");l.innerHTML===""||!t.isHydration?(p||(p=m.createRoot(l)),p.render(f)):p=y(l,f)}export{k as __vite_legacy_guard,K as clientRouting,Q as hydrationCanBeAborted,X as render};
