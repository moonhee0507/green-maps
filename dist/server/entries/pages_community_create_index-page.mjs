import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-3c9df877.js";
import { C as Create } from "../chunks/chunk-8a923251.js";
import "../chunks/chunk-a93f9e99.js";
import "react-redux";
import "../chunks/chunk-7d23cd09.js";
import "../chunks/chunk-f93684d4.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-89d24bdd.js";
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
