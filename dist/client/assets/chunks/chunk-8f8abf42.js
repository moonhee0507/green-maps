import{r as c,j as r}from"./chunk-0ad0329c.js";import{R as n,a as u,u as p}from"./chunk-da345742.js";function a(t=n){const o=t===n?u:()=>c.useContext(t);return function(){const{store:s}=o();return s}}const g=a();function h(t=n){const o=t===n?g:a(t);return function(){return o().dispatch}}const l=h(),d=l,i=p;function x(){const t=i(s=>s.loginSlice.isLoggingIn),o=i(s=>s.signupSlice.isSigningUp);function e(){window.history.back()}return r.jsx("button",{className:"button-back",onClick:e,"aria-label":"뒤로가기",style:t||o?{visibility:"hidden"}:{}})}const R="https://api.green-maps.site/v1",S=typeof window<"u"&&"https://moonhee-greenmaps.s3.ap-northeast-2.amazonaws.com",k="https://www.flaticon.com/kr/icons";export{R as A,x as B,k as C,S as I,i as a,g as b,l as c,d as u};