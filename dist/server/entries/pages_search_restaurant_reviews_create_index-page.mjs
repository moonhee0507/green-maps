import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TopBar } from "../chunks/chunk-23e6a891.js";
import { R as ReviewForm } from "../chunks/chunk-b26f80a7.js";
import "react";
import "../chunks/chunk-c407c4c8.js";
import "react-redux";
import "../chunks/chunk-8c755a0c.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-8649d624.js";
import "../chunks/chunk-70b2d03d.js";
import "redux";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-62270999.js";
import "../chunks/chunk-ef8ab02b.js";
function Page(pageContext) {
  const { _id, title } = pageContext.restaurantInfo;
  const { user } = pageContext;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "리뷰 작성" }),
    /* @__PURE__ */ jsx(ReviewForm, { restaurantId: _id, title, userInfo: user.info })
  ] });
}
export {
  Page
};
