import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { a as useAppDispatch } from "../chunks/chunk-c407c4c8.js";
import { T as TopBar } from "../chunks/chunk-6657f1dd.js";
import { C as Create } from "../chunks/chunk-85ff833b.js";
import { A as API_URL } from "../chunks/chunk-7d23cd09.js";
import { E as EDIT_MODE } from "../chunks/chunk-3e2eef8e.js";
import "react-redux";
import "../chunks/chunk-7d531ddf.js";
import "draft-js";
import "draftjs-to-html";
import "@reduxjs/toolkit";
function Page(pageContext) {
  const dispatch = useAppDispatch();
  const { postId } = pageContext.routeParams;
  const [postInfo, setPostInfo] = useState(null);
  const [window, setWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindow(true);
    }
    (async () => {
      const res = await fetch(`${API_URL}/posts/${postId}`);
      const data = await res.json();
      setPostInfo(data);
    })();
    dispatch(EDIT_MODE(true));
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "글 수정" }),
    window && /* @__PURE__ */ jsx(Create, { postInfo })
  ] });
}
export {
  Page
};
