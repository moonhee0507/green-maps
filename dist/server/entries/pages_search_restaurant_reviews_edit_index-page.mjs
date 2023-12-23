import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-ee5c6427.js";
import { R as ReviewForm } from "../chunks/chunk-b18da1cb.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-a882003a.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { L as LoadingMain } from "../chunks/chunk-211f66dd.js";
import "../chunks/chunk-0e4e6c3d.js";
import "react-redux";
import "../chunks/chunk-055796d0.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-8649d624.js";
import "../chunks/chunk-26141d98.js";
import "redux";
import "../chunks/chunk-e0b4dacb.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
import "../chunks/chunk-e25a89db.js";
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
//# sourceMappingURL=pages_search_restaurant_reviews_edit_index-page.mjs.map
