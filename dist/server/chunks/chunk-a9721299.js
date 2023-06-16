import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "vite-plugin-ssr/client/router";
import { P as PostList } from "./chunk-60df96d0.js";
import "./chunk-fbafafc9.js";
import "isomorphic-dompurify";
import "./chunk-0c3eed3e.js";
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
    /* @__PURE__ */ jsxs("select", { id: "boundarySelect", onChange: handleChange, className: "select-community-search", children: [
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
    /* @__PURE__ */ jsxs("select", { id: "orderBySelect", onChange: handleChange, className: "select-community-search", children: [
      /* @__PURE__ */ jsx("option", { value: "latest", children: "최신순" }),
      /* @__PURE__ */ jsx("option", { value: "accuracy", children: "정확도" }),
      /* @__PURE__ */ jsx("option", { value: "comment", children: "댓글" })
    ] })
  ] });
}
function SelectBoxGroup() {
  return /* @__PURE__ */ jsxs("div", { className: "wrapper-selectbox-in-result", children: [
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
function SearchMain(props) {
  const { posts, limit } = props;
  return /* @__PURE__ */ jsxs("main", { className: "community-search-main", children: [
    /* @__PURE__ */ jsx(StickyComponent, {}),
    /* @__PURE__ */ jsx(ResultSection, { posts, limit })
  ] });
}
export {
  SearchMain as default
};
