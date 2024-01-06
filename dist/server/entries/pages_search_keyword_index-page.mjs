import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { T as TopBar } from "../chunks/chunk-ee5c6427.js";
import { N as NavBar } from "../chunks/chunk-13e0ca80.js";
import { a as useAppDispatch, u as useAppSelector } from "../chunks/chunk-0e4e6c3d.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { a as CATEGORIES, b as CategoryItem, R as RestaurantListItem } from "../chunks/chunk-4eefc2ac.js";
import { A as ADD_SELECTED_CATEGORY, m as ADD_SELECTED_CERT, n as SET_ORDER_BY, o as SET_SEARCH_RESULT_IN_PAGE } from "../chunks/chunk-e0b4dacb.js";
import { P as Pagination } from "../chunks/chunk-fd8cc104.js";
import { L as LoadingMain } from "../chunks/chunk-211f66dd.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-a882003a.js";
import "react-redux";
import "../chunks/chunk-055796d0.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-6c356fa9.js";
import "../chunks/chunk-0eea5c60.js";
import "../chunks/chunk-db98b5a2.js";
import "../chunks/chunk-e25a89db.js";
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
const CATEGORY_LIST = Object.keys(CATEGORIES).filter((key) => key !== "기타").sort();
function CategoryFilter() {
  const checkboxRefs = useRef([]);
  useEffect(() => {
    checkboxRefs.current = Array(CATEGORY_LIST.length).fill(null).map(() => React.createRef());
  }, []);
  const handleUncheckAll = () => {
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
        /* @__PURE__ */ jsx("button", { type: "button", onClick: handleUncheckAll, children: "전체 해제" }),
        /* @__PURE__ */ jsx("button", { type: "reset", children: "전체 선택" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "wrapper-checkbox-category reuse-in-result", children: CATEGORY_LIST.map((name, i) => {
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
        /* @__PURE__ */ jsx("option", { value: "relevance", children: "관련도순" }),
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
  const showResults = useCallback(({ exist }) => {
    if (!exist) {
      return /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
        /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
        /* @__PURE__ */ jsx("p", { children: "검색 결과가 없어요." })
      ] });
    }
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(RestaurantList, { searchListInPage }),
      /* @__PURE__ */ jsx(Pagination, { count: total ?? 0, perPage })
    ] });
  }, [total, searchListInPage, perPage]);
  return /* @__PURE__ */ jsxs("div", { className: "wrapper-result-in-radius reuse-in-search", children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "검색 결과(",
      total,
      ")"
    ] }),
    total === null ? /* @__PURE__ */ jsx(LoadingMain, {}) : showResults({ exist: total !== 0 })
  ] });
}
function RestaurantList({ searchListInPage }) {
  return /* @__PURE__ */ jsx("ul", { className: "ul-restaurant-in-radius reuse-in-search", children: searchListInPage.map((restaurantInfo, i) => {
    return /* @__PURE__ */ jsx(RestaurantListItem, { restaurantInfo, isFirst: i === 0 }, restaurantInfo._id);
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
const documentProps = {
  title: "채식 식당 검색 결과 | Green Maps",
  description: "채식 식당 지도 검색 페이지"
};
function Page(pageContext) {
  var _a;
  const dispatch = useAppDispatch();
  const [isLoggedIn, __] = useCheckLoginStatus();
  const keyword = ((_a = pageContext.routeParams) == null ? void 0 : _a.keyword) ?? "";
  const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
  const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
  const selectedCert = useAppSelector((state) => state.mapSlice.selectedCert);
  const orderBy = useAppSelector((state) => state.mapSlice.resultOrderBy);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchListInPage, setSearchListInPage] = useState([]);
  const [total, setTotal] = useState(null);
  const [perPage, _] = useState(20);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([longitude, latitude]);
      });
    }
  }, []);
  useEffect(() => {
    if (currentLocation !== null) {
      getListWithKeyword().then((data) => {
        if (data.success) {
          dispatch(SET_SEARCH_RESULT_IN_PAGE(data.lists));
          setSearchListInPage(data.lists);
          setTotal(data.total);
        }
      });
    }
  }, [keyword, currentPage, perPage, orderBy, selectedCategory, selectedCert, currentLocation]);
  const getListWithKeyword = useCallback(async () => {
    if (currentLocation === null)
      return {
        success: false,
        lists: [],
        total: 0
      };
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
          currentLocation
        })
      }
    );
    const data = await res.json();
    return data;
  }, [keyword, currentPage, perPage, orderBy, selectedCategory, selectedCert, currentLocation]);
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
  Page,
  documentProps
};
//# sourceMappingURL=pages_search_keyword_index-page.mjs.map
