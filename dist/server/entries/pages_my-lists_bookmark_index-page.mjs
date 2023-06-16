import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-dcb05bf0.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { M as ModalGroup } from "../chunks/chunk-a600d156.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-38c32a2a.js";
import { L as LoadingMain } from "../chunks/chunk-04f347b5.js";
import "../chunks/chunk-0e4e6c3d.js";
import "react-redux";
import "../chunks/chunk-94504c62.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-24b72a12.js";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-0eea5c60.js";
import "../chunks/chunk-f2c28349.js";
import "../chunks/chunk-edfa0bc8.js";
import "vite-plugin-ssr/client/router";
import "../chunks/chunk-2043b788.js";
import "redux";
import "../chunks/chunk-0a6e623f.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
import "../chunks/chunk-db98b5a2.js";
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
  Page
};
