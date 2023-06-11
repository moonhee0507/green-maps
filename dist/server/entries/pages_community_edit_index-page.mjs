import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { a as useAppDispatch } from "../chunks/chunk-a93f9e99.js";
import { T as TopBar } from "../chunks/chunk-3c9df877.js";
import { C as Create } from "../chunks/chunk-8a923251.js";
import { A as API_URL } from "../chunks/chunk-7d23cd09.js";
import { e as EDIT_MODE } from "../chunks/chunk-f93684d4.js";
import "react-redux";
import "../chunks/chunk-89d24bdd.js";
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
