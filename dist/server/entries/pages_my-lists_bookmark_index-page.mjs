import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-c369dbb3.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { M as ModalGroup } from "../chunks/chunk-38aa6870.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-0d31e55c.js";
import { L as LoadingMain } from "../chunks/chunk-fa126bd4.js";
import "../chunks/chunk-0e4e6c3d.js";
import "react-redux";
import "../chunks/chunk-94504c62.js";
import "../chunks/chunk-f93684d4.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-24b72a12.js";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-0eea5c60.js";
import "../chunks/chunk-f2c28349.js";
import "../chunks/chunk-edfa0bc8.js";
import "vite-plugin-ssr/client/router";
import "../chunks/chunk-8ce92001.js";
import "redux";
import "../chunks/chunk-1643b273.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
import "../chunks/chunk-db98b5a2.js";
import "../chunks/chunk-dfb70939.js";
const documentProps = {
  title: "내 북마크 | Green Maps",
  description: "북마크 목록 페이지"
};
const BookmarkListMain = React.lazy(() => import("../chunks/chunk-98760f00.js"));
function Page(pageContext) {
  const { routeParams } = pageContext;
  const [isLoggedIn, info] = useCheckLoginStatus();
  const [listHasGroupName, setListHasGroupName] = useState([]);
  useEffect(() => {
    if (info !== null) {
      setListHasGroupName(info.bookmarkList.filter((list) => list.groupName === (routeParams == null ? void 0 : routeParams.bookmarkGroupName)));
    }
  }, [info]);
  return isLoggedIn ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: (routeParams == null ? void 0 : routeParams.bookmarkGroupName) || "" }),
    /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: /* @__PURE__ */ jsx(
      BookmarkListMain,
      {
        info,
        groupName: (routeParams == null ? void 0 : routeParams.bookmarkGroupName) || "",
        lists: listHasGroupName
      }
    ) }),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn }),
    /* @__PURE__ */ jsx(ModalGroup, { userInfo: info })
  ] }) : /* @__PURE__ */ jsx(LoadingMain, {});
}
export {
  Page,
  documentProps
};
