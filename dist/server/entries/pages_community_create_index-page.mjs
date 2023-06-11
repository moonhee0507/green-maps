import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-604bb51d.js";
import { C as Create } from "../chunks/chunk-e4b4cc1a.js";
import "../chunks/chunk-9e5aff5e.js";
import "react-redux";
import "../chunks/chunk-7d23cd09.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-ff9881ad.js";
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
