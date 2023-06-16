import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect, useCallback } from "react";
import { T as TopBar } from "../chunks/chunk-dcb05bf0.js";
import { useDispatch, useSelector } from "react-redux";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { L as LoadingMain } from "../chunks/chunk-04f347b5.js";
import "../chunks/chunk-0e4e6c3d.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
const SearchMain = React.lazy(() => import("../chunks/chunk-72b126ee.js"));
function Page(pageProps) {
  var _a;
  const dispatch = useDispatch();
  dispatch({
    type: "postSlice/SEARCH",
    KEYWORD: ((_a = pageProps.routeParams) == null ? void 0 : _a.keyword) || ""
  });
  const [posts, setPosts] = useState([]);
  const [window, setWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindow(true);
      setPosts(pageProps.postInfo.lists);
    }
  }, []);
  const keyword = useSelector((state) => state.postSlice.KEYWORD);
  const subject = useSelector((state) => state.postSlice.SUBJECT);
  const currentPage = useSelector((state) => state.postSlice.post.CURRENT_PAGE);
  const boundary = useSelector((state) => state.postSlice.BOUNDARY);
  const orderBy = useSelector((state) => state.postSlice.ORDERBY);
  const limit = 20;
  const getPosts = useCallback(async () => {
    try {
      const res = await fetch(
        `${API_URL}/posts?keyword=${keyword}&subject=${encodeURIComponent(
          subject
        )}&page=${currentPage}&limit=${limit}&boundary=${boundary}&orderby=${orderBy}`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }, [keyword, subject, currentPage, boundary, orderBy]);
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data.currentPage === 1 ? data.lists : [...posts, ...data.lists]);
      dispatch({
        type: "postSlice/POST_IN_PAGE",
        TOTAL: data.total,
        CURRENT_PAGE: data.currentPage
      });
    });
  }, [getPosts]);
  return window ? /* @__PURE__ */ jsxs(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: [
    /* @__PURE__ */ jsx(TopBar, { title: "검색 결과" }),
    /* @__PURE__ */ jsx(SearchMain, { posts, limit })
  ] }) : /* @__PURE__ */ jsx(LoadingMain, {});
}
export {
  Page
};
