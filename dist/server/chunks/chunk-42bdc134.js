import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { a as useAppDispatch, u as useAppSelector } from "./chunk-0e4e6c3d.js";
import { k as CATEGORY_FILTER_MODAL, C as CHANGE_RADIUS_MODAL, c as CHANGE_REGION_MODAL, e as SHOW_LIST_IN_REGION_MODAL, p as SET_MAP_MODE, q as SET_RESULT_IN_RADIUS, r as SET_NEAREST_LIST } from "./chunk-1643b273.js";
import { a as appModalMode } from "./chunk-db98b5a2.js";
import { i as init, c as clearCircle, s as setCircle, o as optimizeMapLevel, a as checkLoginForInfoWindow, m as moveToCurrentLocation } from "../entries/pages_search_index-page.mjs";
import { A as API_URL } from "./chunk-94504c62.js";
import { c as RestaurantList } from "./chunk-b2822bd5.js";
import "react-redux";
import "@reduxjs/toolkit";
import "vite-plugin-ssr/client/router";
import "react-dom/server";
import "./chunk-042cff01.js";
import "redux";
import "./chunk-4ef07e33.js";
import "./chunk-9fb42db4.js";
import "./chunk-3e2eef8e.js";
import "./chunk-1a5b0e59.js";
import "./chunk-d2c63902.js";
import "./chunk-1ccf3f37.js";
import "./chunk-6f77cb2d.js";
import "./chunk-e0988469.js";
import "./chunk-dfb70939.js";
import "./chunk-fd8cc104.js";
import "./chunk-0eea5c60.js";
import "./chunk-1ce52716.js";
import "./chunk-24b72a12.js";
import "./chunk-0d31e55c.js";
import "./chunk-fa126bd4.js";
import "./chunk-6c356fa9.js";
function ControlButton() {
  return /* @__PURE__ */ jsxs("div", { className: "wrapper-map-control-button", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-button-map-mode", children: [
      /* @__PURE__ */ jsx(ChangeRadius, {}),
      /* @__PURE__ */ jsx(SelectRegion, {})
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CategoryFilter, {}) })
  ] });
}
function CategoryFilter() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    initializeMapMode();
    dispatch(CATEGORY_FILTER_MODAL(true));
  };
  function initializeMapMode() {
    dispatch(CHANGE_RADIUS_MODAL(false));
    dispatch(CHANGE_REGION_MODAL(false));
    dispatch(SHOW_LIST_IN_REGION_MODAL(false));
    dispatch(CATEGORY_FILTER_MODAL(false));
  }
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, children: "업종 필터" });
}
function SelectRegion() {
  const dispatch = useAppDispatch();
  const mapMode = useAppSelector((state) => state.mapSlice.mapMode);
  function handleClick() {
    appModalMode(true);
    initializeMapMode();
    dispatch(CHANGE_REGION_MODAL(true));
    dispatch(SET_MAP_MODE("지역탐색 모드"));
  }
  function initializeMapMode() {
    dispatch(CHANGE_RADIUS_MODAL(false));
    dispatch(CHANGE_REGION_MODAL(false));
    dispatch(SHOW_LIST_IN_REGION_MODAL(false));
    dispatch(CATEGORY_FILTER_MODAL(false));
  }
  return /* @__PURE__ */ jsx("button", { onClick: handleClick, className: `button-map-mode ${mapMode === "지역탐색 모드" ? "on" : ""}`, children: "지역 탐색 모드" });
}
function ChangeRadius() {
  const dispatch = useAppDispatch();
  const mapMode = useAppSelector((state) => state.mapSlice.mapMode);
  const radius = useAppSelector((state) => state.mapSlice.radius);
  const [calcRadius, setCalcRadius] = useState(radius);
  const [unit, setUnit] = useState("m");
  useEffect(() => {
    if (radius < 1e3) {
      setCalcRadius(radius);
      setUnit("m");
    } else {
      setCalcRadius(radius / 1e3);
      setUnit("km");
    }
  }, [radius]);
  const handleClick = () => {
    appModalMode(true);
    initializeMapMode();
    dispatch(CHANGE_RADIUS_MODAL(true));
    dispatch(SET_MAP_MODE("반경탐색 모드"));
  };
  function initializeMapMode() {
    dispatch(CHANGE_RADIUS_MODAL(false));
    dispatch(CHANGE_REGION_MODAL(false));
    dispatch(SHOW_LIST_IN_REGION_MODAL(false));
    dispatch(CATEGORY_FILTER_MODAL(false));
  }
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: handleClick,
      className: `button-map-mode ${mapMode === "반경탐색 모드" ? "on" : ""}`,
      children: [
        /* @__PURE__ */ jsx("span", { children: "반경 " }),
        /* @__PURE__ */ jsx("span", { children: calcRadius }),
        /* @__PURE__ */ jsx("span", { children: unit }),
        /* @__PURE__ */ jsx("span", { children: " 탐색 모드" })
      ]
    }
  );
}
function KakaoMap({ isLoggedIn }) {
  const dispatch = useAppDispatch();
  const radius = useAppSelector((state) => state.mapSlice.radius);
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
  useEffect(() => {
    checkLoginForInfoWindow(isLoggedIn);
    init().then((locPosition) => {
      setIsInitialized(true);
      setCurrentLocation([locPosition.getLng(), locPosition.getLat()]);
    });
  }, []);
  const getListInRadius = useCallback(
    async (currentLocation2) => {
      if (Array.isArray(currentLocation2)) {
        const res = await fetch(`${API_URL}/map/within-radius-of?radius=${radius}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ currentLocation: currentLocation2, category: selectedCategory })
        });
        const data = await res.json();
        return data;
      }
    },
    [radius, selectedCategory, currentLocation]
  );
  const getNearestList = useCallback(
    async (currentLocation2) => {
      if (Array.isArray(currentLocation2)) {
        const count = 5;
        const res = await fetch(`${API_URL}/map/nearest?top=${count}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ currentLocation: currentLocation2 })
        });
        const data = await res.json();
        return data;
      }
    },
    [radius, currentLocation]
  );
  useEffect(() => {
    if (isInitialized) {
      clearCircle();
      setCircle(radius);
      if (currentLocation) {
        getListInRadius(currentLocation).then((data) => {
          if (data.success) {
            dispatch(SET_RESULT_IN_RADIUS(data.lists));
            optimizeMapLevel(radius);
          }
        });
        getNearestList(currentLocation).then((data) => {
          if (data.success) {
            dispatch(SET_NEAREST_LIST(data.lists));
          }
        });
      }
    }
  }, [radius, isInitialized, selectedCategory, currentLocation]);
  return /* @__PURE__ */ jsx("div", { id: "map" });
}
function BackCurrentLocation() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    moveToCurrentLocation();
    dispatch(SHOW_LIST_IN_REGION_MODAL(false));
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: handleClick,
      className: "button-move-to-my",
      title: "내 위치로",
      "aria-label": "내 위치로 이동 버튼"
    }
  );
}
function CountMessage() {
  const currentSido = useAppSelector((state) => state.mapSlice.currentSido);
  const currentSigungu = useAppSelector((state) => state.mapSlice.currentSigungu);
  const resultInRadius = useAppSelector((state) => state.mapSlice.resultInRadius);
  return resultInRadius.length > 0 ? /* @__PURE__ */ jsxs("p", { className: "txt-result-in-radius", children: [
    "내 위치(",
    `${currentSido} ${currentSigungu}`,
    ")에 검색된 식당 ",
    /* @__PURE__ */ jsx("span", { children: resultInRadius.length }),
    "개"
  ] }) : /* @__PURE__ */ jsxs("p", { className: "txt-result-in-radius", children: [
    "결과가 없어요!😥",
    /* @__PURE__ */ jsx("br", {}),
    "가장 가까운 식당 TOP 5"
  ] });
}
function ResultInRadius() {
  return /* @__PURE__ */ jsxs("div", { className: "wrapper-result-in-radius", children: [
    /* @__PURE__ */ jsx(CountMessage, {}),
    /* @__PURE__ */ jsx(RestaurantList, {})
  ] });
}
function MapView({ isLoggedIn }) {
  return /* @__PURE__ */ jsxs("main", { className: "main-map", children: [
    /* @__PURE__ */ jsx(ControlButton, {}),
    /* @__PURE__ */ jsx(KakaoMap, { isLoggedIn }),
    /* @__PURE__ */ jsx(BackCurrentLocation, {}),
    /* @__PURE__ */ jsx(ResultInRadius, {})
  ] });
}
export {
  MapView as default
};
