import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { s as store } from "../chunks/chunk-042cff01.js";
import { Provider } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { P as PageContextProvider, L as Link } from "../chunks/chunk-24b72a12.js";
import "@reduxjs/toolkit";
import "redux";
import "../chunks/chunk-1643b273.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-3e2eef8e.js";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
const normalize = "";
function PageShell({ children, pageContext }) {
  return /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(BackgroundArea, {}),
    /* @__PURE__ */ jsx(App, { children })
  ] }) }) });
}
function Layout({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "layout", children });
}
function BackgroundArea() {
  return /* @__PURE__ */ jsx("div", { className: "left-area", children: /* @__PURE__ */ jsxs("div", { className: "txt-intro", children: [
    /* @__PURE__ */ jsx("strong", { children: "채식 식당 검색과 북마크 서비스" }),
    /* @__PURE__ */ jsx("h1", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: "그린 맵" }) })
  ] }) });
}
function App({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const __APP_Element__ = useRef(null);
  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);
  useEffect(() => {
    if (isMobile) {
      const element = __APP_Element__.current;
      if (element !== null) {
        element.style.height = window.innerHeight + "px";
      }
    }
  }, [isMobile]);
  return /* @__PURE__ */ jsx("div", { className: "app", ref: __APP_Element__, children });
}
const icon512 = "/images/icon.png";
const icon180 = "/images/icon-180.png";
const iconMask = "/images/icon-mask.png";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const passToClient = [
  "documentProps",
  "pageProps",
  "PRELOADED_STATE",
  "routeParams",
  "token",
  "user",
  "groupName",
  "pageHtml",
  "reviews",
  "restaurantInfo",
  "post",
  "postId",
  "urlPathname"
];
async function render(pageContext) {
  const { pageHtml } = pageContext;
  const __PAGE_HTML__ = typeof pageHtml !== "undefined" ? pageHtml : "";
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Green Maps";
  const desc = documentProps && documentProps.description || "채식 식당 지도 서비스";
  const manifestUrl = "/app.webmanifest";
  const cssUrl = "/style/index.css";
  const PRELOADED_STATE = JSON.stringify(store);
  const LOGIN_MESSAGE = JSON.stringify("로그인이 필요한 서비스입니다.\n로그인하시겠습니까?");
  return escapeInject(_a || (_a = __template(['<!DOCTYPE html>\n    <html lang="ko">\n        <head>\n            <link rel="stylesheet" href="', '" type="text/css">\n            <meta charset="UTF-8" />\n            <title>', '</title>\n            <meta name="author" content="moonhee0507" />\n            <link rel="icon" href="', '">\n            <meta name="description" content="', '" />\n            <link rel="apple-touch-icon" href="', '" sizes="180x180">\n            <link rel="mask-icon" href="', '" color="#00784a">\n            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#00784a">\n            <meta name="theme-color" media="(prefers-color-scheme: dark)"  content="#00784a">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n            <link rel="manifest" href="', '">\n            <link rel="preconnect" href="https://fonts.googleapis.com">\n            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap">\n            \n            <meta name="apple-mobile-web-app-capable" content="yes">\n\n            <meta property="og:image" content="', '">\n            <meta property="og:title" content="', '">\n            <meta property="og:description" content="', '" />\n            <meta property="og:url" content="https://www.green-maps.site/">\n\n            <meta property="twitter:image" content="', '">\n            <meta property="twitter:card" content="', '">\n            <meta property="twitter:title" content="Green Maps">\n            <meta property="twitter:description" content="', '">\n            <meta name="naver-site-verification" content="a3db4e78827a23b8b0d328ce26c6c74abb4d4a3a" />\n            <meta name="google-site-verification" content="BPU_wLaUb66NU-RLN8MSZzYqXkrTdN67ExNTPROn1YY" />\n            \n        </head>\n        <body>\n            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=136def8e37bfc98bffe8939cd80ab687&libraries=services,clusterer,drawing"><\/script>\n            <div id="page-view">', '</div>\n            <script type="text/javascript">\n                \n                window.__PRELOADED_STATE__ = ', `;
                
                const map = document.getElementById("map");
                if (map) {
                    map.addEventListener('touchmove', () => {});
                }

                const navBookmark = document.querySelector('.link-nav.no-login');
                if (navBookmark) {
                    navBookmark.addEventListener('click', () => {
                        const message = `, ";\n\n                        if (confirm(message)) {\n                            window.location.href = '/login';\n                        }\n                    });\n                }\n\n            <\/script>\n    </html>"])), cssUrl, title, icon512, desc, icon180, iconMask, manifestUrl, icon512, title, desc, icon512, icon512, desc, dangerouslySkipEscape(__PAGE_HTML__), dangerouslySkipEscape(PRELOADED_STATE), dangerouslySkipEscape(LOGIN_MESSAGE));
}
async function onBeforeRender(pageContext) {
  const { Page, pageProps, routeParams, token, user, groupName, reviews, restaurantInfo, post, postId, review } = pageContext;
  let pageHtml;
  if (!Page) {
    pageHtml = "";
  } else {
    pageHtml = ReactDOMServer.renderToString(
      /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps, routeParams, token, user }) }) })
    );
  }
  const PRELOADED_STATE = store.getState();
  return {
    pageContext: {
      pageProps,
      PRELOADED_STATE,
      routeParams,
      token,
      user,
      groupName,
      pageHtml,
      reviews,
      restaurantInfo,
      post,
      postId,
      review
    }
  };
}
export {
  onBeforeRender,
  passToClient,
  render
};
//# sourceMappingURL=renderer_default-page-server.mjs.map
