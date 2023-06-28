import { jsxs, jsx } from "react/jsx-runtime";
import { u as useAppSelector, a as useAppDispatch } from "./chunk-0e4e6c3d.js";
import { a as ORDER_MODAL, M as MOVE_LIST_MODAL, f as SET_TARGET_GROUP } from "./chunk-1a5b0e59.js";
import { a as appModalMode } from "./chunk-db98b5a2.js";
import { B as BookmarkList } from "./chunk-ca5f525e.js";
import "react-redux";
import "@reduxjs/toolkit";
import "react";
import "./chunk-6c356fa9.js";
import "./chunk-94504c62.js";
function GroupDetail({ lists, groupName }) {
  const order = useAppSelector((state) => state.myListSlice.groupNameOrder);
  const dispatch = useAppDispatch();
  function handleOrder() {
    appModalMode(true);
    dispatch(ORDER_MODAL(true));
  }
  function handleEdit() {
    appModalMode(true);
    dispatch(MOVE_LIST_MODAL(true));
    dispatch(SET_TARGET_GROUP(groupName));
  }
  return /* @__PURE__ */ jsxs("div", { className: "style-wrapper-bookmark-detail", children: [
    /* @__PURE__ */ jsxs("div", { className: "wrapper-groupcount-orderbox", children: [
      /* @__PURE__ */ jsxs("p", { className: "txt-bookmarkgroup", children: [
        "전체 ",
        /* @__PURE__ */ jsx("span", { children: lists.length })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container-order-bookmarkgroup", children: /* @__PURE__ */ jsx("button", { type: "button", className: "button-order-bookmarkgroup", onClick: handleOrder, children: order }) })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-edit-bookmarkgroup", onClick: handleEdit, children: "편집하기" })
  ] });
}
function BookmarkListMain({
  info,
  lists,
  groupName
}) {
  return /* @__PURE__ */ jsxs("main", { className: "main-bookmarklist", children: [
    /* @__PURE__ */ jsx(GroupDetail, { lists, groupName }),
    /* @__PURE__ */ jsx(BookmarkList, { lists })
  ] });
}
export {
  BookmarkListMain as default
};
//# sourceMappingURL=chunk-98760f00.js.map
