import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-dcb05bf0.js";
import { C as Create } from "../chunks/chunk-d7ddf677.js";
import "../chunks/chunk-0e4e6c3d.js";
import "react-redux";
import "../chunks/chunk-94504c62.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-f40e4a8a.js";
import "../chunks/chunk-0d31e55c.js";
import "vite-plugin-ssr/client/router";
import "draft-js";
import "draftjs-to-html";
function Page() {
  const [window, setWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindow(true);
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "글 쓰기" }),
    window && /* @__PURE__ */ jsx(Create, {})
  ] });
}
export {
  Page
};
