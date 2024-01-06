import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { T as TopBar } from "../chunks/chunk-ee5c6427.js";
import { R as ReviewForm } from "../chunks/chunk-b18da1cb.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-a882003a.js";
import "react";
import "../chunks/chunk-0e4e6c3d.js";
import "react-redux";
import "../chunks/chunk-94504c62.js";
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
  title: "채식 식당 리뷰 작성 | Green Maps",
  description: "채식 식당 리뷰 작성 페이지"
};
function Page(pageContext) {
  const { _id, title } = pageContext.restaurantInfo;
  const [_, userInfo] = useCheckLoginStatus();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "리뷰 작성" }),
    /* @__PURE__ */ jsx(ReviewForm, { restaurantId: _id, title, userInfo })
  ] });
}
export {
  Page,
  documentProps
};
//# sourceMappingURL=pages_search_restaurant_reviews_create_index-page.mjs.map
