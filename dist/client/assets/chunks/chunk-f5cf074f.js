import{r as c,j as r}from"./chunk-0ad0329c.js";import{R as n,a as u,u as p}from"./chunk-da345742.js";function a(t=n){const o=t===n?u:()=>c.useContext(t);return function(){const{store:s}=o();return s}}const m=a();function l(t=n){const o=t===n?m:a(t);return function(){return o().dispatch}}const g=l(),f=g,i=p;function w(){const t=i(s=>s.loginSlice.isLoggingIn),o=i(s=>s.signupSlice.isSigningUp);function e(){window.location.pathname.includes("/community/search/")?window.location.href="/community":window.history.back()}return r.jsx("button",{className:"button-back",onClick:e,"aria-label":"뒤로가기",style:t||o?{visibility:"hidden"}:{}})}const x="https://api.green-maps.site/v1",R=typeof window<"u"&&"https://moonhee-greenmaps.s3.ap-northeast-2.amazonaws.com",S="https://www.flaticon.com/kr/icons";export{x as A,w as B,S as C,R as I,g as a,f as b,m as c,i as u};
