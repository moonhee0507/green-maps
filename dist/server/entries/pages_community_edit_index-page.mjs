import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { u as useAppDispatch } from "../chunks/chunk-7f101d2c.js";
import { T as TopBar } from "../chunks/chunk-8405f720.js";
import { C as Create } from "../chunks/chunk-0d156c70.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { E as EDIT_MODE } from "../chunks/chunk-3e2eef8e.js";
import "react-redux";
import "../chunks/chunk-9812adcb.js";
import "../chunks/chunk-0d31e55c.js";
import "vite-plugin-ssr/client/router";
import "draft-js";
import "draftjs-to-html";
import "@reduxjs/toolkit";
const documentProps = {
  title: "게시글 수정 | Green Maps",
  description: "게시글 수정 페이지"
};
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
  Page,
  documentProps
};
