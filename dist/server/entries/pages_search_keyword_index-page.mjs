import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-2d95f3e8.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { a as useAppDispatch, u as useAppSelector } from "../chunks/chunk-c407c4c8.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { b as CATEGORIES, c as CategoryItem, R as RestaurantListItem } from "../chunks/chunk-448560a4.js";
import { A as ADD_SELECTED_CATEGORY, p as ADD_SELECTED_CERT, q as SET_ORDER_BY } from "../chunks/chunk-0a6e623f.js";
import { P as Pagination } from "../chunks/chunk-81aa5fb2.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-38c32a2a.js";
import "react-redux";
import "../chunks/chunk-f93684d4.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-24b72a12.js";
import "../chunks/chunk-6c356fa9.js";
import "vite-plugin-ssr/client/router";
import "../chunks/chunk-0eea5c60.js";
import "../chunks/chunk-db98b5a2.js";
function ApplyButton() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    const checkedNode = Array.from(
      document.querySelectorAll(".checkbox-category-filter")
    );
    const totalCategoryCount = checkedNode.length;
    const checkedCategoryName = checkedNode.filter((node) => node.checked === true).map((node) => node.value);
    if (checkedCategoryName.length === 0) {
      alert("업종을 선택해주세요.");
      return;
    }
    if (totalCategoryCount === checkedCategoryName.length) {
      dispatch(ADD_SELECTED_CATEGORY("*"));
    } else {
      dispatch(ADD_SELECTED_CATEGORY(checkedCategoryName));
    }
  };
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, className: "button-apply-filter", children: "적용" });
}
function CategoryFilter() {
  const dispatch = useAppDispatch();
  const [categoryList, _] = useState(() => {
    const tempList = Object.keys(CATEGORIES).filter((key) => key !== "기타");
    dispatch(ADD_SELECTED_CATEGORY([...tempList].sort()));
    return [...tempList].sort();
  });
  const checkboxRefs = useRef([]);
  useEffect(() => {
    checkboxRefs.current = Array(categoryList.length).fill(null).map(() => React.createRef());
  }, [categoryList]);
  const handleUncheck = () => {
    checkboxRefs.current.map((ref) => {
      if (ref.current !== null) {
        ref.current.checked = false;
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "container-filter", children: [
    /* @__PURE__ */ jsx("em", { className: "txt-filter-name", children: "업종" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { children: [
      /* @__PURE__ */ jsx(ApplyButton, {}),
      /* @__PURE__ */ jsxs("div", { className: "container-button-all", children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: handleUncheck, children: "전체 해제" }),
        /* @__PURE__ */ jsx("button", { type: "reset", children: "전체 선택" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "wrapper-checkbox-category reuse-in-result", children: categoryList.map((name, i) => {
        return /* @__PURE__ */ jsx(CategoryItem, { name, index: i, ref: checkboxRefs.current[i] }, Math.random());
      }) })
    ] }) })
  ] });
}
function CertFilter() {
  const dispatch = useAppDispatch();
  const certList = ["채식음식점", "채식가능음식점"];
  useEffect(() => {
    dispatch(ADD_SELECTED_CERT([]));
  }, []);
  const handleClick = () => {
    const checkedNode = Array.from(
      document.querySelectorAll(".checkbox-cert-filter")
    );
    const checkedCertName = checkedNode.filter((node) => node.checked === true).map((node) => node.value);
    dispatch(ADD_SELECTED_CERT(checkedCertName));
  };
  return /* @__PURE__ */ jsxs("div", { className: "container-filter", children: [
    /* @__PURE__ */ jsx("em", { className: "txt-filter-name", children: "채식 인증" }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, className: "button-apply-filter", children: "적용" }),
      /* @__PURE__ */ jsx("div", { className: "wrapper-checkbox-category reuse-in-result", children: certList.map((name, i) => {
        return /* @__PURE__ */ jsx(CertItem, { name, index: i }, Math.random());
      }) })
    ] }) })
  ] });
}
function CertItem({ name, index }) {
  const selectedCert = useAppSelector((state) => state.mapSlice.selectedCert);
  const [isChecked, setIsChecked] = useState(true);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    setIsChecked(selectedCert.includes(name));
  }, [selectedCert]);
  return /* @__PURE__ */ jsxs("div", { className: "container-check-cert", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        checked: isChecked,
        onChange: handleChange,
        id: `checkboxCert-${index}`,
        className: "checkbox-cert-filter",
        value: name
      }
    ),
    /* @__PURE__ */ jsx("label", { htmlFor: `checkboxCert-${index}`, children: name })
  ] });
}
function FilterSection() {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", "aria-label": "필터" }),
    /* @__PURE__ */ jsx(CategoryFilter, {}),
    /* @__PURE__ */ jsx(CertFilter, {})
  ] });
}
function SortSection() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(SET_ORDER_BY("relevance"));
  }, []);
  const handleChange = (event) => {
    dispatch(SET_ORDER_BY(event.target.value));
  };
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", "aria-label": "정렬" }),
    /* @__PURE__ */ jsx("div", { className: "container-sort", children: /* @__PURE__ */ jsxs("form", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "selectBoxSortInSearch", children: "정렬" }),
      /* @__PURE__ */ jsxs("select", { name: "", id: "selectBoxSortInSearch", onChange: handleChange, children: [
        /* @__PURE__ */ jsx("option", { value: "relevance", children: "관련도" }),
        /* @__PURE__ */ jsx("option", { value: "rating", children: "별점순" }),
        /* @__PURE__ */ jsx("option", { value: "review", children: "리뷰순" }),
        /* @__PURE__ */ jsx("option", { value: "distance", children: "거리순" })
      ] })
    ] }) })
  ] });
}
function ControlBox() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(FilterSection, {}),
    /* @__PURE__ */ jsx(SortSection, {})
  ] });
}
function ResultList({
  total,
  perPage,
  searchListInPage
}) {
  return /* @__PURE__ */ jsxs("div", { className: "wrapper-result-in-radius reuse-in-search", children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "검색 결과(",
      total,
      ")"
    ] }),
    searchListInPage.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(RestaurantList, { searchListInPage }),
      /* @__PURE__ */ jsx(Pagination, { count: total, perPage })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
      /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
      /* @__PURE__ */ jsx("p", { children: "검색 결과가 없어요." })
    ] })
  ] });
}
function RestaurantList({ searchListInPage }) {
  return /* @__PURE__ */ jsx("ul", { className: "ul-restaurant-in-radius reuse-in-search", children: searchListInPage.map((restaurantInfo, i) => {
    return /* @__PURE__ */ jsx(RestaurantListItem, { restaurantInfo, isFirst: i === 0 }, Math.random());
  }) });
}
function KeywordSearchResultMain({
  keyword,
  total,
  perPage,
  searchListInPage
}) {
  return /* @__PURE__ */ jsxs("main", { className: "main-search-result", children: [
    /* @__PURE__ */ jsx(ControlBox, {}),
    /* @__PURE__ */ jsx(ResultList, { total, perPage, searchListInPage })
  ] });
}
function Page(pageContext) {
  var _a;
  const [isLoggedIn, __] = useCheckLoginStatus();
  const keyword = ((_a = pageContext.routeParams) == null ? void 0 : _a.keyword) || "";
  const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
  const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
  const selectedCert = useAppSelector((state) => state.mapSlice.selectedCert);
  const orderBy = useAppSelector((state) => state.mapSlice.resultOrderBy);
  const currentLocation = useAppSelector((state) => state.mapSlice.currentLocation);
  const [searchListInPage, setSearchListInPage] = useState([]);
  const [total, setTotal] = useState(0);
  const [perPage, _] = useState(20);
  useEffect(() => {
    getListWithKeyword().then((data) => {
      if (data.success) {
        setSearchListInPage(data.lists);
        setTotal(data.total);
      }
    });
  }, [currentPage, selectedCategory, selectedCert, orderBy, currentLocation]);
  async function getListWithKeyword() {
    const res = await fetch(
      `${API_URL}/search/?keyword=${keyword}&page=${currentPage}&limit=${perPage}&orderBy=${orderBy}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          category: selectedCategory,
          cert: selectedCert,
          currentLocation: [currentLocation[1], currentLocation[0]]
        })
      }
    );
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: `${keyword} 🔍` }),
    /* @__PURE__ */ jsx(
      KeywordSearchResultMain,
      {
        keyword,
        total,
        perPage,
        searchListInPage
      }
    ),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn })
  ] });
}
export {
  Page
};
