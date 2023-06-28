import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-dcb05bf0.js";
import { N as NavBar } from "../chunks/chunk-13e0ca80.js";
import { M as ModalGroup } from "../chunks/chunk-b3206142.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-b81d9a29.js";
import { L as LoadingMain } from "../chunks/chunk-211f66dd.js";
import "../chunks/chunk-0e4e6c3d.js";
import "react-redux";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-0eea5c60.js";
import "../chunks/chunk-f2c28349.js";
import "../chunks/chunk-edfa0bc8.js";
import "../chunks/chunk-042cff01.js";
import "redux";
import "../chunks/chunk-1643b273.js";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
import "../chunks/chunk-db98b5a2.js";
import "../chunks/chunk-e25a89db.js";
const documentProps = {
  title: "내 목록 | Green Maps",
  description: "북마크, 좋아요 표시한 채식 식당 목록"
};
const MyListMain = React.lazy(() => import("../chunks/chunk-767d2b2d.js"));
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
  Page,
  documentProps
};
//# sourceMappingURL=pages_my-lists_index-page.mjs.map
