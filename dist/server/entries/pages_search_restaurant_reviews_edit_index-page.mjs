import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TopBar } from "../chunks/chunk-3c9df877.js";
import { R as ReviewForm } from "../chunks/chunk-1fcf25b9.js";
import "react";
import "../chunks/chunk-a93f9e99.js";
import "react-redux";
import "../chunks/chunk-7d23cd09.js";
import "../chunks/chunk-f93684d4.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-8649d624.js";
import "../chunks/chunk-61934949.js";
import "redux";
import "../chunks/chunk-1d33add3.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-62270999.js";
import "../chunks/chunk-ef8ab02b.js";
import "../chunks/chunk-244a8cdd.js";
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
