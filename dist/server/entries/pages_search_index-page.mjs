import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useRef, useState, useEffect } from "react";
import { a as useAppDispatch, B as ButtonGoBack, u as useAppSelector } from "../chunks/chunk-0e4e6c3d.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { S as SET_RADIUS, C as CHANGE_RADIUS_MODAL, a as SET_CURRENT_LOCATION, b as SET_LIST_IN_PAGE, c as SET_TOTAL_IN_REGION, d as SHOW_LIST_IN_REGION_MODAL, R as RESET_LIST_IN_PAGE, e as RESET_TOTAL_IN_REGION, f as CHANGE_REGION_MODAL, g as SET_SELECTED_SIDO, h as CATEGORY_FILTER_MODAL, N as NO_RESULT_MODAL, i as CHECK_LOCATION_ACCESS_MODAL } from "../chunks/chunk-346170b2.js";
import { a as appModalMode } from "../chunks/chunk-db98b5a2.js";
import { R as RestaurantListItem, C as CategoryFilterModal } from "../chunks/chunk-47ee53cb.js";
import { P as Pagination } from "../chunks/chunk-46ed95ec.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { renderToString } from "react-dom/server";
import { s as store } from "../chunks/chunk-29897a3a.js";
import { S as Stars } from "../chunks/chunk-82265d98.js";
import { i as imgLoading } from "../chunks/chunk-dfb70939.js";
import { i as imgClose } from "../chunks/chunk-0eea5c60.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-0d31e55c.js";
import { L as LoadingMain } from "../chunks/chunk-fa126bd4.js";
import "react-redux";
import "@reduxjs/toolkit";
import "../chunks/chunk-6c356fa9.js";
import "redux";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-3e2eef8e.js";
import "../chunks/chunk-1a5b0e59.js";
import "../chunks/chunk-d2c63902.js";
import "../chunks/chunk-1ccf3f37.js";
import "../chunks/chunk-6f77cb2d.js";
import "../chunks/chunk-24b72a12.js";
function SearchForm() {
  const inputElement = useRef(null);
  const [keyword, setKeyword] = useState("");
  function handleChange(event) {
    setKeyword(event.target.value);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "search-bar", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "searchRestaurant", className: "sr-only", children: "식당 검색하기" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "search",
          id: "searchRestaurant",
          onChange: handleChange,
          ref: inputElement,
          value: keyword
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(SearchButton, { keyword })
  ] });
}
function SearchButton({ keyword }) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (keyword.length === 0) {
      alert("검색어를 입력해주세요.");
    } else {
      dispatch({ type: "paginationSlice/CURRENT_PAGE", currentPage: 1 });
      navigate(`/search/keyword/${keyword}`);
    }
  };
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, "aria-label": "식당 검색 버튼", children: "🔍" });
}
function SearchBar() {
  return /* @__PURE__ */ jsxs("div", { className: "top-bar search", children: [
    /* @__PURE__ */ jsx(ButtonGoBack, {}),
    /* @__PURE__ */ jsx(SearchForm, {})
  ] });
}
function Radio({ radius }) {
  const dispatch = useAppDispatch();
  const selectedRadius = useAppSelector((state) => state.mapSlice.radius);
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
  const handleChange = (event) => {
    const target = event.target;
    appModalMode(false);
    dispatch(SET_RADIUS(Number(target.value)));
    dispatch(CHANGE_RADIUS_MODAL(false));
  };
  return /* @__PURE__ */ jsxs("div", { className: "container-radio-radius", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "radio",
        id: `radius-${radius}`,
        value: radius,
        name: "radius",
        onChange: handleChange,
        checked: radius === selectedRadius
      }
    ),
    /* @__PURE__ */ jsx("label", { htmlFor: `radius-${radius}`, children: calcRadius + unit })
  ] });
}
function ChangeRadiusModal() {
  const [show, setShow] = useState(false);
  const radiusModalOn = useAppSelector((state) => state.mapSlice.radiusModalOn);
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
  useEffect(() => {
    if (radiusModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [radiusModalOn]);
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "내 위치 검색 반경 선택" }),
    /* @__PURE__ */ jsxs("div", { className: "wrapper-select-radius", children: [
      /* @__PURE__ */ jsx("p", { className: "txt-selected-radius", children: /* @__PURE__ */ jsx("span", { children: calcRadius + unit }) }),
      /* @__PURE__ */ jsx("form", { className: "form-radius", children: [300, 500, 1e3, 2e3, 3e3].map((radius2) => {
        return /* @__PURE__ */ jsx(Radio, { radius: radius2 }, Math.random());
      }) })
    ] })
  ] });
}
async function getListInCurrentView(polygon) {
  const res = await fetch(`${API_URL}/map/current-view`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(polygon)
  });
  const data = await res.json();
  return data;
}
const imgPhoto = "/images/icon-image.svg";
function InfoWindow({
  restaurantInfo,
  isLoggedIn: isLoggedIn2
}) {
  const { _id, title, rating, reviews, address, certification, category } = restaurantInfo;
  return /* @__PURE__ */ jsx("div", { className: "wrapper-infowindow", children: /* @__PURE__ */ jsxs("dl", { children: [
    /* @__PURE__ */ jsxs("div", { className: "infowindow-left", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-title-cert", children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "식당 이름" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-title", children: /* @__PURE__ */ jsx("a", { href: `/search/${_id}`, children: title }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          certification ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "채식 인증 정보" }),
            /* @__PURE__ */ jsx("dd", { className: "txt-cert", children: certification })
          ] }) : null,
          /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "업종" }),
          /* @__PURE__ */ jsx("dd", { className: "txt-cert", children: category })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container-rating-review", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "별점" }),
          /* @__PURE__ */ jsxs("dd", { children: [
            /* @__PURE__ */ jsx("span", { className: "num-rating", children: rating }),
            /* @__PURE__ */ jsx("div", { className: "style-infowindow-star", children: /* @__PURE__ */ jsx(Stars, { rating }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: "리뷰" }),
          /* @__PURE__ */ jsx("dd", { children: reviews.length })
        ] })
      ] }),
      /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "주소" }),
      /* @__PURE__ */ jsx("dd", { className: "txt-address", children: address })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "infowindow-right", children: [
      /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "대표이미지" }),
      /* @__PURE__ */ jsxs("dd", { children: [
        /* @__PURE__ */ jsx("img", { src: imgPhoto, alt: "임시 이미지" }),
        /* @__PURE__ */ jsx("span", { children: "준비 중" })
      ] })
    ] })
  ] }) });
}
const imgLocation = "/images/map-location.png";
const imgCert = "/images/map-cert-location.png";
const { kakao } = typeof window !== "undefined" ? window : global;
let isLoggedIn = false;
let map;
let neLat;
let neLng;
let swLat;
let swLng;
let locPosition;
let centerCircle;
let radiusCircle;
const arrMarker = [];
const arrInfowindow = [];
function init() {
  kakao.maps.load(function() {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(37.5666805, 126.9784147),
      // 지도의 중심좌표 <- 서울시청
      level: 7
      // 지도의 확대 레벨(1~14)
    };
    map = new kakao.maps.Map(mapContainer, mapOption);
  });
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        locPosition = new kakao.maps.LatLng(lat, lng);
        map.setCenter(locPosition);
        store.dispatch({ type: "mapSlice/SET_LOCATION_ACCESS", payload: true });
        store.dispatch(SET_CURRENT_LOCATION([lat, lng]));
        resolve(locPosition);
      });
    } else {
      locPosition = new kakao.maps.LatLng(37.5666805, 126.9784147);
      map.setLevel(5);
      store.dispatch({ type: "mapSlice/SET_LOCATION_ACCESS", payload: false });
      store.dispatch(SET_CURRENT_LOCATION([37.5666805, 126.9784147]));
      resolve(locPosition);
    }
    addBoundChangeEvent();
  });
}
function setCircle(radius = 500) {
  centerCircle = new kakao.maps.Circle({
    map,
    center: locPosition,
    radius: 25,
    strokeWeight: 3,
    strokeColor: "#007EEA",
    strokeStyle: "solid",
    fillColor: "#0000ff",
    fillOpacity: 1
  });
  radiusCircle = new kakao.maps.Circle({
    map,
    center: locPosition,
    radius,
    strokeWeight: 2,
    strokeColor: "#7777ff",
    strokeStyle: "solid",
    fillColor: "#0000ff",
    fillOpacity: 0.08
  });
  centerCircle.setMap(map);
  radiusCircle.setMap(map);
}
function clearCircle() {
  if (centerCircle) {
    centerCircle.setMap(null);
  }
  if (radiusCircle) {
    radiusCircle.setMap(null);
  }
}
function addBoundChangeEvent() {
  let timeoutId;
  const app = document.querySelector(".app");
  const LoadingElement = () => {
    const imgElement = document.createElement("img");
    imgElement.src = imgLoading;
    imgElement.alt = "좌표 생성 로딩";
    imgElement.style.width = "50px";
    imgElement.style.position = "absolute";
    imgElement.style.top = "50%";
    imgElement.style.left = "50%";
    imgElement.style.transform = "translate(-50%, -50%)";
    imgElement.id = "__LOADING__";
    imgElement.style.zIndex = "9999";
    return imgElement;
  };
  kakao.maps.event.addListener(map, "bounds_changed", function() {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(async () => {
      if (app !== null) {
        app.appendChild(LoadingElement());
      }
      const polygon = getCurrentView();
      const res = await getListInCurrentView(polygon);
      paintVeganRestaurantMarker(res);
      if (app !== null) {
        const LoadingElement2 = document.getElementById("__LOADING__");
        if (LoadingElement2) {
          app.removeChild(LoadingElement2);
        }
      }
    }, 3e3);
  });
}
function getCurrentView() {
  neLat = map.getBounds().getNorthEast().getLat();
  neLng = map.getBounds().getNorthEast().getLng();
  swLat = map.getBounds().getSouthWest().getLat();
  swLng = map.getBounds().getSouthWest().getLng();
  return [
    [neLng, neLat],
    [swLng, neLat],
    [swLng, swLat],
    [neLng, swLat],
    [neLng, neLat]
  ];
}
async function paintVeganRestaurantMarker(restaurant) {
  restaurant.forEach((list) => {
    const marker = new kakao.maps.Marker({
      map,
      position: new kakao.maps.LatLng(list.location.coordinates[1], list.location.coordinates[0]),
      // 마커를 표시할 위치
      title: list.title,
      // 마커의 타이틀, 마커에 마우스를 올리면 타이틀 표시
      image: new kakao.maps.MarkerImage(list.certified ? imgCert : imgLocation, new kakao.maps.Size(24, 35))
      // 마커 이미지
    });
    arrMarker.push(marker);
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1, removable: true });
    const InfoWindowComponent = /* @__PURE__ */ jsx(InfoWindow, { restaurantInfo: list, isLoggedIn: isLoggedIn || false });
    infowindow.setContent(renderToString(InfoWindowComponent));
    arrInfowindow.push(infowindow);
  });
  addMarkerClickEvent(arrMarker, arrInfowindow);
}
function addMarkerClickEvent(arrMarker2, arrInfowindow2) {
  for (let i = 0; i < arrMarker2.length; i++) {
    kakao.maps.event.addListener(arrMarker2[i], "click", function() {
      removeAllInfowindow(arrInfowindow2);
      arrInfowindow2[i].open(map, arrMarker2[i]);
      map.panTo(arrMarker2[i].getPosition());
    });
  }
}
function removeAllInfowindow(arrInfowindow2) {
  for (let i = 0; i < arrInfowindow2.length; i++) {
    arrInfowindow2[i].close();
  }
}
function optimizeMapLevel(radius) {
  switch (radius) {
    case 300:
      map.setLevel(5);
      break;
    case 500:
      map.setLevel(5);
      break;
    case 1e3:
      map.setLevel(6);
      break;
    case 2e3:
      map.setLevel(7);
      break;
    case 3e3:
      map.setLevel(7);
      break;
    default:
      map.setLevel(5);
  }
}
function moveToRegionInPage(coordsInPage) {
  if (coordsInPage.length === 0) {
    return;
  }
  const convertCoords = [];
  for (let coord of coordsInPage) {
    const [lng, lat] = coord;
    if (lng !== 0 && lat !== 0) {
      convertCoords.push(new kakao.maps.LatLng(lat, lng));
    }
  }
  const bounds = new kakao.maps.LatLngBounds();
  for (let convertCoord of convertCoords) {
    bounds.extend(convertCoord);
  }
  paintBounds(bounds);
}
function paintBounds(bounds) {
  map.setBounds(bounds);
}
function moveToCurrentLocation() {
  const [lat, lng] = store.getState().mapSlice.currentLocation;
  map.setCenter(new kakao.maps.LatLng(lat, lng));
}
function checkLoginForInfoWindow(isLoggedInFromIndexPage) {
  isLoggedIn = isLoggedInFromIndexPage;
}
function ShowListInRegionModal() {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const showListInRegionModalOn = useAppSelector((state) => state.mapSlice.showListInRegionModalOn);
  const listInPage = useAppSelector((state) => state.mapSlice.listInPage);
  const totalInRegion = useAppSelector((state) => state.mapSlice.totalInRegion);
  const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
  const selectedSido = useAppSelector((state) => state.mapSlice.selectedSido);
  const selectedSigungu = useAppSelector((state) => state.mapSlice.selectedSigungu);
  const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
  useEffect(() => {
    if (showListInRegionModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [showListInRegionModalOn]);
  useEffect(() => {
    if (show === true) {
      getListInRegion().then((data) => {
        if (data.success && data.lists.length > 0) {
          const coordsInPage = [];
          for (let list of data.lists) {
            coordsInPage.push(list.location.coordinates);
          }
          moveToRegionInPage(coordsInPage);
          dispatch(SET_LIST_IN_PAGE(data.lists));
          dispatch(SET_TOTAL_IN_REGION(data.total));
        }
      });
    }
  }, [show, currentPage, selectedCategory]);
  async function getListInRegion() {
    const sido = selectedSido;
    const sigungu = selectedSigungu;
    const res = await fetch(`${API_URL}/map/region?sido=${sido}&sigungu=${sigungu}&page=${currentPage}&skip=10`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ category: selectedCategory })
    });
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsxs("h4", { children: [
      "지역 탐색 결과(",
      totalInRegion,
      ")"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "wrapper-result-in-radius reuse-in-region", children: listInPage.length > 0 ? /* @__PURE__ */ jsx("ul", { className: "ul-restaurant-in-radius reuse-in-region", children: listInPage.map((list, i) => {
      return /* @__PURE__ */ jsx(RestaurantListItem, { restaurantInfo: list, isFirst: i === 0 }, Math.random());
    }) }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
      /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
      /* @__PURE__ */ jsx("p", { children: "목록이 없어요." })
    ] }) }),
    /* @__PURE__ */ jsx(Pagination, { count: totalInRegion, perPage: 10 }),
    /* @__PURE__ */ jsx(CloseButton, {})
  ] });
}
function CloseButton() {
  const dispatch = useAppDispatch();
  function handleClose() {
    appModalMode(false);
    dispatch(SHOW_LIST_IN_REGION_MODAL(false));
    dispatch(RESET_LIST_IN_PAGE());
    dispatch(RESET_TOTAL_IN_REGION());
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) });
}
function ModalGroup() {
  const on = useAppSelector(
    (state) => state.mapSlice.radiusModalOn || state.mapSlice.checkGeolocationModalOn || state.mapSlice.regionModalOn || state.mapSlice.showListInRegionModalOn || state.mapSlice.categoryFilterModalOn
  );
  const on_mini = useAppSelector((state) => state.mapSlice.noResultModalOn);
  const [show, setShow] = useState(false);
  const [show_mini, setShow_mini] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (on === true)
      setShow(true);
    else
      setShow(false);
    if (on_mini === true)
      setShow_mini(true);
    else
      setShow_mini(false);
  }, [on, on_mini]);
  useEffect(() => {
    if (show) {
      document.addEventListener("click", handleClose);
    }
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [show]);
  function handleClose(event) {
    if (event.target.className === "app modal-mode") {
      appModalMode(false);
      dispatch(CHANGE_RADIUS_MODAL(false));
      dispatch(CHANGE_REGION_MODAL(false));
      dispatch(SET_SELECTED_SIDO(""));
      dispatch(CATEGORY_FILTER_MODAL(false));
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: `modal-group ${show ? "on" : ""}`, children: [
      /* @__PURE__ */ jsx(CheckGeolocationModal, {}),
      /* @__PURE__ */ jsx(ChangeRadiusModal, {}),
      /* @__PURE__ */ jsx(ShowListInRegionModal, {}),
      /* @__PURE__ */ jsx(CategoryFilterModal, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: `mini-modal-group ${show_mini ? "on" : ""}`, children: /* @__PURE__ */ jsx(NoResult, {}) })
  ] });
}
function CheckGeolocationModal() {
  const [show, setShow] = useState(false);
  const checkGeolocationModalOn = useAppSelector((state) => state.mapSlice.checkGeolocationModalOn);
  useEffect(() => {
    if (checkGeolocationModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [checkGeolocationModalOn]);
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { className: "sr-only", children: "위치 확인 요청" }),
    /* @__PURE__ */ jsxs("div", { className: "container-emoji-notice", children: [
      /* @__PURE__ */ jsx("div", { className: "emoji", children: "📢" }),
      /* @__PURE__ */ jsx("em", { children: "위치 권한을 허용해주세요." })
    ] })
  ] });
}
function NoResult() {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const noResultModalOn = useAppSelector((state) => state.mapSlice.noResultModalOn);
  useEffect(() => {
    if (noResultModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [noResultModalOn]);
  useEffect(() => {
    if (show === true) {
      setTimeout(() => {
        setShow(false);
        dispatch(NO_RESULT_MODAL(false));
      }, 2e3);
    }
  }, [show]);
  return /* @__PURE__ */ jsx("div", { className: `modal-no-result ${show ? "on" : ""}`, children: /* @__PURE__ */ jsx("p", { children: "결과가 없습니다 😥" }) });
}
function useLocationAccess() {
  const [locationAccess, setLocationAccess] = useState("prompt");
  useEffect(() => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      setLocationAccess(result.state);
      result.addEventListener("change", () => {
        setLocationAccess(result.state);
      });
    });
  }, []);
  return locationAccess;
}
const MapView = React.lazy(() => import("../chunks/chunk-dc42c106.js"));
function Page() {
  const dispatch = useAppDispatch();
  const [hasWindow, setHasWindow] = useState(false);
  const [isLoggedIn2, _] = useCheckLoginStatus();
  const hasLocationAccess = useLocationAccess();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    } else
      setHasWindow(false);
  }, []);
  useEffect(() => {
    if (hasWindow === true) {
      if (hasLocationAccess === "granted") {
        appModalMode(false);
        dispatch(CHECK_LOCATION_ACCESS_MODAL(false));
      } else if (hasLocationAccess === "denied" || hasLocationAccess === "prompt") {
        appModalMode(true);
        dispatch(CHECK_LOCATION_ACCESS_MODAL(true));
      }
    }
  }, [hasWindow, hasLocationAccess]);
  return hasWindow ? /* @__PURE__ */ jsxs(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: [
    /* @__PURE__ */ jsx(SearchBar, {}),
    /* @__PURE__ */ jsx(MapView, { isLoggedIn: isLoggedIn2 }),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn: isLoggedIn2 }),
    /* @__PURE__ */ jsx(ModalGroup, {})
  ] }) : /* @__PURE__ */ jsx(LoadingMain, {});
}
const index_page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
export {
  Page,
  checkLoginForInfoWindow as a,
  index_page as b,
  clearCircle as c,
  init as i,
  moveToCurrentLocation as m,
  optimizeMapLevel as o,
  setCircle as s
};
