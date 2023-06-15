import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-8fde0b9b.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { M as ModalGroup } from "../chunks/chunk-8fc561e2.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-38c32a2a.js";
import { L as LoadingMain } from "../chunks/chunk-04f347b5.js";
import "../chunks/chunk-c407c4c8.js";
import "react-redux";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-24b72a12.js";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-0eea5c60.js";
import "../chunks/chunk-1baf884f.js";
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
const MyListMain = React.lazy(() => import("../chunks/chunk-85e1643b.js"));
function Page() {
  const [isLoggedIn, info] = useCheckLoginStatus();
  const [groupList, setGroupList] = useState(null);
  useEffect(() => {
    if (info) {
      try {
        (async () => {
          const res = await fetch(`${API_URL}/bookmark/${info == null ? void 0 : info.userId}`);
          const data = await res.json();
          setGroupList(data.groupList);
        })();
      } catch (err) {
        console.error(err);
      }
    }
  }, [info]);
  return isLoggedIn && info ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "내 식당 목록" }),
    /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: /* @__PURE__ */ jsx(MyListMain, { userInfo: info, groupList }) }),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn }),
    /* @__PURE__ */ jsx(ModalGroup, { userInfo: info })
  ] }) : /* @__PURE__ */ jsx(LoadingMain, {});
}
export {
  Page
};
