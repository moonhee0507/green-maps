import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect, useCallback } from "react";
import { T as TopBar } from "../chunks/chunk-13a8d2f6.js";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "vite-plugin-ssr/client/router";
import { P as PostList } from "../chunks/chunk-d5b7632a.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import "../chunks/chunk-c407c4c8.js";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-b328c29b.js";
import "isomorphic-dompurify";
import "../chunks/chunk-0c3eed3e.js";
function SearchInput() {
  const keyword = useSelector((state) => state.postSlice.KEYWORD);
  const inputElement = useRef(null);
  function handleSubmit() {
    var _a;
    const url = `/community/search/${(_a = inputElement.current) == null ? void 0 : _a.value}`;
    navigate(url, { keepScrollPosition: true });
  }
  return /* @__PURE__ */ jsxs("div", { className: "container-search-input", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "communitySearchResult", className: "sr-only", children: "게시글 검색하기" }),
    /* @__PURE__ */ jsx("input", { type: "search", id: "communitySearchResult", ref: inputElement, defaultValue: keyword }),
    /* @__PURE__ */ jsx("button", { onClick: handleSubmit, children: "검색" })
  ] });
}
function SelectBox() {
  const dispatch = useDispatch();
  function handleChange(event) {
    dispatch({ type: "postSlice/SUBJECT_STATE", SUBJECT: event == null ? void 0 : event.target.value });
  }
  return /* @__PURE__ */ jsxs("div", { className: "container-search-select", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "communitySearchSelect", className: "sr-only", children: "말머리 선택" }),
    /* @__PURE__ */ jsxs("select", { name: "subjects", id: "communitySearchSelect", onChange: handleChange, children: [
      /* @__PURE__ */ jsx("option", { value: "", children: "전체 게시판" }),
      /* @__PURE__ */ jsx("option", { value: "공지사항", children: "공지사항" }),
      /* @__PURE__ */ jsx("option", { value: "🥑채식얘기", children: "🥑채식얘기" }),
      /* @__PURE__ */ jsx("option", { value: "⚽운동얘기", children: "⚽운동얘기" })
    ] })
  ] });
}
function InputGroup() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(SearchInput, {}),
    /* @__PURE__ */ jsx(SelectBox, {})
  ] });
}
function BoundaryBox() {
  const dispatch = useDispatch();
  function handleChange(event) {
    dispatch({
      type: "postSlice/SEARCH_POOL",
      BOUNDARY: event.target.value
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "boundarySelect", children: "범위" }),
    /* @__PURE__ */ jsxs("select", { id: "boundarySelect", onChange: handleChange, children: [
      /* @__PURE__ */ jsx("option", { value: "tc", children: "제목+내용" }),
      /* @__PURE__ */ jsx("option", { value: "t", children: "제목" }),
      /* @__PURE__ */ jsx("option", { value: "c", children: "내용" }),
      /* @__PURE__ */ jsx("option", { value: "n", children: "글작성자" })
    ] })
  ] });
}
function OrderByBox() {
  const dispatch = useDispatch();
  function handleChange(event) {
    dispatch({
      type: "postSlice/SEARCH_ORDER",
      ORDERBY: event.target.value
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "orderBySelect", children: "정렬" }),
    /* @__PURE__ */ jsxs("select", { id: "orderBySelect", onChange: handleChange, children: [
      /* @__PURE__ */ jsx("option", { value: "latest", children: "최신순" }),
      /* @__PURE__ */ jsx("option", { value: "accuracy", children: "정확도" }),
      /* @__PURE__ */ jsx("option", { value: "comment", children: "댓글" })
    ] })
  ] });
}
function SelectBoxGroup() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(BoundaryBox, {}),
    /* @__PURE__ */ jsx(OrderByBox, {})
  ] });
}
function CommunityDetail() {
  const total = useSelector((state) => state.postSlice.post.TOTAL);
  return /* @__PURE__ */ jsxs("div", { className: "result-community-detail", children: [
    /* @__PURE__ */ jsx("p", { className: "txt-total-search", children: /* @__PURE__ */ jsxs("span", { children: [
      total || 0,
      "건"
    ] }) }),
    /* @__PURE__ */ jsx(SelectBoxGroup, {})
  ] });
}
function StickyComponent() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        position: "sticky",
        top: 0
      },
      children: [
        /* @__PURE__ */ jsx(InputGroup, {}),
        /* @__PURE__ */ jsx(CommunityDetail, {})
      ]
    }
  );
}
function ResultSection(props) {
  const { posts, limit } = props;
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "검색결과" }),
    /* @__PURE__ */ jsx(PostList, { posts, limit })
  ] });
}
function Page(pageProps) {
  var _a;
  const dispatch = useDispatch();
  dispatch({
    type: "postSlice/SEARCH",
    KEYWORD: ((_a = pageProps.routeParams) == null ? void 0 : _a.keyword) || ""
  });
  const [posts, setPosts] = useState(pageProps.postInfo.lists);
  const [window, setWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindow(true);
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "검색 결과" }),
    window && /* @__PURE__ */ jsx(SearchMain, { posts, limit })
  ] });
}
function SearchMain(props) {
  const { posts, limit } = props;
  return /* @__PURE__ */ jsxs("main", { className: "community-search-main", children: [
    /* @__PURE__ */ jsx(StickyComponent, {}),
    /* @__PURE__ */ jsx(ResultSection, { posts, limit })
  ] });
}
export {
  Page
};
