import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { T as TopBar } from "../chunks/chunk-6657f1dd.js";
import { u as useAppSelector, a as useAppDispatch } from "../chunks/chunk-c407c4c8.js";
import { O as ORDER_MODAL, M as MOVE_LIST_MODAL, a as SET_TARGET_GROUP } from "../chunks/chunk-62270999.js";
import { B as BookmarkList, M as ModalGroup } from "../chunks/chunk-191bbaa0.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import "react";
import "react-redux";
import "../chunks/chunk-7d23cd09.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-0eea5c60.js";
import "../chunks/chunk-98410492.js";
import "../chunks/chunk-edfa0bc8.js";
import "vite-plugin-ssr/client/router";
import "../chunks/chunk-8621c645.js";
import "redux";
import "../chunks/chunk-0a6e623f.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-ef8ab02b.js";
import "../chunks/chunk-244a8cdd.js";
import "../chunks/chunk-6f77cb2d.js";
import "../chunks/chunk-702523f7.js";
import "../chunks/chunk-24b72a12.js";
function GroupDetail({ lists, groupName }) {
  const order = useAppSelector((state) => state.myListSlice.groupNameOrder);
  const dispatch = useAppDispatch();
  function handleOrder() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
    dispatch(ORDER_MODAL(true));
  }
  function handleEdit() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
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
function BookmarkListMain({ info, lists, groupName }) {
  return /* @__PURE__ */ jsxs("main", { className: "main-bookmarklist", children: [
    /* @__PURE__ */ jsx(GroupDetail, { lists, groupName }),
    /* @__PURE__ */ jsx(BookmarkList, { lists })
  ] });
}
function Page(pageContext) {
  const { routeParams, user } = pageContext;
  const { isLoggedIn, info } = user;
  const listHasGroupName = info == null ? void 0 : info.bookmarkList.filter((list) => list.groupName === (routeParams == null ? void 0 : routeParams.bookmarkGroupName));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: (routeParams == null ? void 0 : routeParams.bookmarkGroupName) || "" }),
    /* @__PURE__ */ jsx(
      BookmarkListMain,
      {
        info,
        groupName: (routeParams == null ? void 0 : routeParams.bookmarkGroupName) || "",
        lists: listHasGroupName || []
      }
    ),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn }),
    /* @__PURE__ */ jsx(ModalGroup, { userInfo: info })
  ] });
}
export {
  Page
};
