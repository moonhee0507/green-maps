import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TopBar } from "../chunks/chunk-dcb05bf0.js";
import { R as ReviewForm } from "../chunks/chunk-e68c2ea9.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-0d31e55c.js";
import "react";
import "../chunks/chunk-0e4e6c3d.js";
import "react-redux";
import "../chunks/chunk-94504c62.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-8649d624.js";
import "../chunks/chunk-29897a3a.js";
import "redux";
import "../chunks/chunk-346170b2.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
import "../chunks/chunk-dfb70939.js";
import "vite-plugin-ssr/client/router";
function Page(pageContext) {
  const { _id, title } = pageContext.restaurantInfo;
  const [_, userInfo] = useCheckLoginStatus();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "리뷰 작성" }),
    /* @__PURE__ */ jsx(ReviewForm, { restaurantId: _id, title, userInfo })
  ] });
}
export {
  Page
};
