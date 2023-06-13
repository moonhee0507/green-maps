import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-816f2648.js";
import { C as Create } from "../chunks/chunk-a4dbf15b.js";
import "../chunks/chunk-c407c4c8.js";
import "react-redux";
import "../chunks/chunk-6e20e889.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-fca20313.js";
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
