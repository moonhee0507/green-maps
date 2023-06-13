import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-bb1c8ea6.js";
import { C as Create } from "../chunks/chunk-270023dd.js";
import "../chunks/chunk-c407c4c8.js";
import "react-redux";
import "../chunks/chunk-dd72b177.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-301602cc.js";
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
