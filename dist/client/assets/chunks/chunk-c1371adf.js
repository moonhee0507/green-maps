import{j as a}from"./chunk-93156e5d.js";import{R as n,a as r,c as u,u as p}from"./chunk-1ef25d43.js";function c(t=n){const s=t===n?r:u(t);return function(){const{store:o}=s();return o}}const m=c();function l(t=n){const s=t===n?m:c(t);return function(){return s().dispatch}}const g=l(),f=g,i=p;function w(){const t=i(o=>o.loginSlice.isLoggingIn),s=i(o=>o.signupSlice.isSigningUp);function e(){window.location.pathname.includes("/community/search/")?window.location.href="/community":window.history.back()}return a.jsx("button",{className:"button-back",onClick:e,"aria-label":"뒤로가기",style:t||s?{visibility:"hidden"}:{}})}const R="https://api.green-maps.site/v1",x=typeof window<"u"&&"https://moonhee-greenmaps.s3.ap-northeast-2.amazonaws.com",S="https://www.flaticon.com/kr/icons";export{R as A,w as B,S as C,x as I,g as a,i as b,m as c,f as u};
//# sourceMappingURL=chunk-c1371adf.js.map