import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { a as useAppDispatch } from "../chunks/chunk-0e4e6c3d.js";
import { T as TopBar } from "../chunks/chunk-ee5c6427.js";
import { C as Create } from "../chunks/chunk-5ce00ba9.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { E as EDIT_MODE, S as SET_POST_ID } from "../chunks/chunk-055796d0.js";
import "react-redux";
import "../chunks/chunk-1967c84f.js";
import "../chunks/chunk-a882003a.js";
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
    dispatch(SET_POST_ID(postId));
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
//# sourceMappingURL=pages_community_edit_index-page.mjs.map
