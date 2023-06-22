import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-8405f720.js";
import { R as ReviewForm } from "../chunks/chunk-78dc7273.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-0d31e55c.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { L as LoadingMain } from "../chunks/chunk-fa126bd4.js";
import "../chunks/chunk-7f101d2c.js";
import "react-redux";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-8649d624.js";
import "../chunks/chunk-042cff01.js";
import "redux";
import "../chunks/chunk-1643b273.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
import "../chunks/chunk-dfb70939.js";
import "vite-plugin-ssr/client/router";
const documentProps = {
  title: "리뷰 수정 | Green Maps",
  description: "채식 식당 리뷰 수정 페이지"
};
function Page(pageContext) {
  var _a, _b;
  const restaurantId = ((_a = pageContext.routeParams) == null ? void 0 : _a.restaurantId) || "";
  const reviewId = ((_b = pageContext.routeParams) == null ? void 0 : _b.reviewId) || "";
  const [restaurant, setRestaurant] = useState(null);
  const [review, setReview] = useState(null);
  const [_, userInfo] = useCheckLoginStatus();
  useEffect(() => {
    getMyReview().then((data) => {
      if (data.success) {
        setReview(data.review);
        setRestaurant(typeof data.review.restaurant === "object" ? data.review.restaurant : null);
      } else {
        setReview(null);
        setRestaurant(null);
      }
    });
  }, []);
  async function getMyReview() {
    const res = await fetch(`${API_URL}/reviews/${reviewId}`);
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsxs(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: [
    /* @__PURE__ */ jsx(TopBar, { title: "리뷰 수정" }),
    review && restaurant && /* @__PURE__ */ jsx(
      ReviewForm,
      {
        restaurantId,
        reviewId,
        title: restaurant.title,
        photos: review.photo,
        content: review.content,
        userInfo
      }
    )
  ] });
}
export {
  Page,
  documentProps
};
