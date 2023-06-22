import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { B as ButtonGoBack, u as useAppSelector } from "../chunks/chunk-0e4e6c3d.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { useDispatch } from "react-redux";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-0d31e55c.js";
import { L as LoadingMain } from "../chunks/chunk-fa126bd4.js";
import "../chunks/chunk-24b72a12.js";
import "../chunks/chunk-dfb70939.js";
function SearchForm() {
  const [showInput, setShowInput] = useState(false);
  const inputElement = useRef(null);
  function moveToPage() {
    if (inputElement.current !== null) {
      const keyword = inputElement.current.value;
      if (keyword.length > 0) {
        const url = `/community/search/${keyword}`;
        navigate(url, { keepScrollPosition: true });
      } else {
        window.alert("검색어를 입력해주세요.");
      }
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "search-bar", children: /* @__PURE__ */ jsx("div", { children: showInput ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "searchItem", className: "sr-only", children: "게시글 검색하기" }),
      /* @__PURE__ */ jsx("input", { type: "search", id: "searchItem", ref: inputElement, autoFocus: true })
    ] }) : /* @__PURE__ */ jsx("h2", { className: "top-title", children: "게시판" }) }) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => showInput ? moveToPage() : setShowInput(true),
        "aria-label": "식당 검색 버튼",
        children: "🔍"
      }
    )
  ] });
}
function SearchBar() {
  return /* @__PURE__ */ jsxs("div", { className: "top-bar search", children: [
    /* @__PURE__ */ jsx(ButtonGoBack, {}),
    /* @__PURE__ */ jsx(SearchForm, {})
  ] });
}
const documentProps = {
  title: "커뮤니티 | Green Maps",
  description: "채식 식당 지도 서비스 커뮤니티"
};
const CommunityMain = React.lazy(() => import("../chunks/chunk-42c58b33.js"));
function Page(pageContext) {
  var _a, _b;
  const [isLoggedIn, _] = useCheckLoginStatus();
  const subject = useAppSelector((state) => state.postSlice.SUBJECT);
  const currentPage = useAppSelector((state) => state.postSlice.post.CURRENT_PAGE);
  const limit = 20;
  const [posts, setPosts] = useState(((_b = (_a = pageContext.pageProps) == null ? void 0 : _a.postProps) == null ? void 0 : _b.lists) || []);
  const getPosts = useCallback(async () => {
    try {
      const res = await fetch(
        `${API_URL}/${subject !== "" ? "subjects/" + subject : "posts"}?page=${currentPage}&limit=${limit}`,
        {
          credentials: "include",
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
  }, [currentPage, subject]);
  const dispatch = useDispatch();
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
  return /* @__PURE__ */ jsxs(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: [
    /* @__PURE__ */ jsx(SearchBar, {}),
    /* @__PURE__ */ jsx(CommunityMain, { isLoggedIn, posts, limit }),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn })
  ] });
}
export {
  Page,
  documentProps
};
