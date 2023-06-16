import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { s as store } from "../chunks/chunk-29897a3a.js";
import { Provider } from "react-redux";
import { P as PageContextProvider, L as Link } from "../chunks/chunk-24b72a12.js";
import "@reduxjs/toolkit";
import "redux";
import "../chunks/chunk-346170b2.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-3e2eef8e.js";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
import "react";
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
  return /* @__PURE__ */ jsx("div", { className: "app", children });
}
const icon512 = "/images/icon.png";
const icon192 = "/images/icon-192.png";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const passToClient = [
  "pageProps",
  "PRELOADED_STATE",
  "routeParams",
  "token",
  "user",
  "groupName",
  "pageHtml",
  "reviews",
  "restaurantInfo",
  "postId"
];
async function render(pageContext) {
  const { pageHtml } = pageContext;
  const __PAGE_HTML__ = typeof pageHtml !== "undefined" ? pageHtml : "";
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Green Maps";
  const desc = documentProps && documentProps.description || "채식 식당 검색과 북마크는 그린 맵";
  const manifestUrl = "/app.webmanifest";
  const cssUrl = "/style/index.css";
  const PRELOADED_STATE = JSON.stringify(store);
  const LOGIN_MESSAGE = JSON.stringify("로그인이 필요한 서비스입니다.\n로그인하시겠습니까?");
  return escapeInject(_a || (_a = __template(['<!DOCTYPE html>\n    <html lang="ko">\n        <head>\n            <meta charset="UTF-8" />\n            <link rel="icon" href=', ' />\n            <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n            <meta name="description" content="', '" />\n            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#00784a">\n            <meta name="theme-color" media="(prefers-color-scheme: dark)"  content="#00784a">\n            <link rel="manifest" href="', '" />\n            <link rel="preconnect" href="https://fonts.googleapis.com">\n            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap">\n            <link rel="stylesheet" href="', '" type="text/css" >\n            <meta name="apple-mobile-web-app-capable" content="yes">\n            <link rel="apple-touch-icon" href=', ">\n            <title>", '</title>\n        </head>\n        <body>\n            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=136def8e37bfc98bffe8939cd80ab687&libraries=services,clusterer"><\/script>\n            <div id="page-view">', '</div>\n            <script type="text/javascript">\n                var global = global || window;\n                window.__PRELOADED_STATE__ = ', `;
                
                const map = document.getElementById("map");
                if (map) {
                    map.addEventListener('touchmove', () => {});
                }

                const navBookmark = document.querySelector('.link-nav.no-login');
                if (navBookmark) {
                    navBookmark.addEventListener('click', () => {
                        const message = `, ";\n\n                        if (confirm(message)) {\n                            window.location.href = '/login';\n                        }\n                    });\n                }\n            <\/script>\n    </html>"])), icon512, desc, manifestUrl, cssUrl, icon192, title, dangerouslySkipEscape(__PAGE_HTML__), dangerouslySkipEscape(PRELOADED_STATE), dangerouslySkipEscape(LOGIN_MESSAGE));
}
async function onBeforeRender(pageContext) {
  const { Page, pageProps, routeParams, token, user, groupName, reviews, restaurantInfo, postId } = pageContext;
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
      postId
    }
  };
}
export {
  onBeforeRender,
  passToClient,
  render
};
