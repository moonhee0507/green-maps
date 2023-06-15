import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TopBar } from "../chunks/chunk-2d95f3e8.js";
import { R as ReviewForm } from "../chunks/chunk-7e8a6c43.js";
import "react";
import "../chunks/chunk-c407c4c8.js";
import "react-redux";
import "../chunks/chunk-94504c62.js";
import "../chunks/chunk-f93684d4.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-8649d624.js";
import "../chunks/chunk-d9782bd8.js";
import "redux";
import "../chunks/chunk-0a6e623f.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-2c77b6c9.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
function Page(pageContext) {
  const { review, user } = pageContext;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "리뷰 수정" }),
    /* @__PURE__ */ jsx(
      ReviewForm,
      {
        restaurantId: review.restaurant._id,
        reviewId: review._id,
        title: review.restaurant.title,
        photos: review.photo,
        content: review.content,
        userInfo: user.info
      }
    )
  ] });
}
export {
  Page
};
