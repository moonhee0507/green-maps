import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect, useCallback } from "react";
import { a as useAppDispatch, B as ButtonGoBack, u as useAppSelector } from "../chunks/chunk-a93f9e99.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { S as SET_RADIUS, C as CHANGE_RADIUS_MODAL, a as SET_SELECTED_SIDO, b as SET_CURRENT_LOCATION, c as CHANGE_REGION_MODAL, d as SET_SELECTED_SIGUNGU, e as SHOW_LIST_IN_REGION_MODAL, f as SET_LIST_IN_PAGE, g as SET_TOTAL_IN_REGION, N as NO_RESULT_MODAL, h as SET_CURRENT_SIDO, i as SET_CURRENT_SIGUNGU, R as RESET_LIST_IN_PAGE, j as RESET_TOTAL_IN_REGION, k as CATEGORY_FILTER_MODAL, l as SET_MAP_MODE, m as SET_RESULT_IN_RADIUS, n as SET_NEAREST_LIST, o as CHECK_LOCATION_ACCESS_MODAL } from "../chunks/chunk-0a6e623f.js";
import { a as appModalMode } from "../chunks/chunk-db98b5a2.js";
import { A as API_URL } from "../chunks/chunk-7d23cd09.js";
import { renderToString } from "react-dom/server";
import { s as store } from "../chunks/chunk-8621c645.js";
import { S as Stars } from "../chunks/chunk-82265d98.js";
import { R as RestaurantListItem, C as CategoryFilterModal, a as RestaurantList } from "../chunks/chunk-7552b4fe.js";
import { P as Pagination } from "../chunks/chunk-141dd3d3.js";
import { i as imgClose } from "../chunks/chunk-0eea5c60.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import "react-redux";
import "@reduxjs/toolkit";
import "redux";
import "../chunks/chunk-4ef07e33.js";
import "../chunks/chunk-9fb42db4.js";
import "../chunks/chunk-3e2eef8e.js";
import "../chunks/chunk-62270999.js";
import "../chunks/chunk-ef8ab02b.js";
import "../chunks/chunk-244a8cdd.js";
import "../chunks/chunk-6f77cb2d.js";
import "../chunks/chunk-702523f7.js";
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
const REGION = {
  서울: [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구"
  ],
  강원: [
    "강릉시",
    "고성군",
    "동해시",
    "삼척시",
    "속초시",
    "양구군",
    "양양군",
    "영월군",
    "원주시",
    "인제군",
    "정선군",
    "철원군",
    "춘천시",
    "태백시",
    "평창군",
    "홍천군",
    "화천군",
    "횡성군"
  ],
  경기: [
    "가평군",
    "고양시",
    "과천시",
    "광명시",
    "광주시",
    "구리시",
    "군포시",
    "김포시",
    "남양주시",
    "동두천시",
    "부천시",
    "성남시",
    "수원시",
    "시흥시",
    "안산시",
    "안성시",
    "안양시",
    "양주시",
    "양평군",
    "여주시",
    "연천군",
    "오산시",
    "용인시",
    "의왕시",
    "의정부시",
    "이천시",
    "파주시",
    "평택시",
    "포천시",
    "하남시",
    "화성시"
  ],
  경남: [
    "거제시",
    "거창군",
    "고성군",
    "김해시",
    "남해군",
    "밀양시",
    "사천시",
    "산청군",
    "양산시",
    "의령군",
    "진주시",
    "창녕군",
    "창원시",
    "통영시",
    "하동군",
    "함안군",
    "함양군",
    "합천군"
  ],
  경북: [
    "경산시",
    "경주시",
    "고령군",
    "구미시",
    "군위군",
    "김천시",
    "문경시",
    "봉화군",
    "상주시",
    "성주군",
    "안동시",
    "영덕군",
    "영양군",
    "영주시",
    "영천시",
    "예천군",
    "울릉군",
    "울진군",
    "의성군",
    "청도군",
    "청송군",
    "칠곡군",
    "포항시"
  ],
  광주: ["광산구", "남구", "동구", "북구", "서구"],
  대구: ["남구", "달서구", "달성군", "동구", "북구", "서구", "수성구", "중구"],
  대전: ["대덕구", "동구", "서구", "유성구", "중구"],
  부산: [
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구"
  ],
  세종: ["세종"],
  울산: ["남구", "동구", "북구", "울주군", "중구"],
  인천: ["강화군", "계양구", "남동구", "동구", "미추홀구", "부평구", "서구", "연수구", "옹진군", "중구"],
  전남: [
    "강진군",
    "고흥군",
    "곡성군",
    "광양시",
    "구례군",
    "나주시",
    "담양군",
    "목포시",
    "무안군",
    "보성군",
    "순천시",
    "신안군",
    "여수시",
    "영광군",
    "영암군",
    "완도군",
    "장성군",
    "장흥군",
    "진도군",
    "함평군",
    "해남군",
    "화순군"
  ],
  전북: [
    "고창군",
    "군산시",
    "김제시",
    "남원시",
    "무주군",
    "부안군",
    "순창군",
    "완주군",
    "익산시",
    "임실군",
    "장수군",
    "전주시",
    "정읍시",
    "진안군"
  ],
  제주: ["서귀포시", "제주시"],
  충남: [
    "계룡시",
    "공주시",
    "금산군",
    "논산시",
    "당진시",
    "보령시",
    "부여군",
    "서산시",
    "서천군",
    "아산시",
    "예산군",
    "천안시",
    "청양군",
    "태안군",
    "홍성군"
  ],
  충북: ["보은군", "영동군", "옥천군", "음성군", "제천시", "증평군", "진천군", "청주시", "충주시"]
};
function Sido() {
  const [sidoList] = useState(() => Object.keys(REGION).sort());
  return /* @__PURE__ */ jsx("div", { className: "container-sido", children: /* @__PURE__ */ jsx("ul", { children: sidoList.map((v) => {
    return /* @__PURE__ */ jsx(SidoListItem, { name: v }, Math.random());
  }) }) });
}
function SidoListItem({ name }) {
  const dispatch = useAppDispatch();
  const currentSido = useAppSelector((state) => state.mapSlice.currentSido);
  const selectedSido = useAppSelector((state) => state.mapSlice.selectedSido);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (selectedSido === "") {
      if (currentSido.includes(name)) {
        setOn(true);
      } else {
        setOn(false);
      }
    } else {
      if (selectedSido.includes(name)) {
        setOn(true);
      } else {
        setOn(false);
      }
    }
  }, [currentSido, selectedSido]);
  const handleClick = () => {
    dispatch(SET_SELECTED_SIDO(name));
  };
  return /* @__PURE__ */ jsx("li", { onClick: handleClick, children: /* @__PURE__ */ jsx("p", { className: `txt-sido ${on ? "on" : ""}`, children: name }) });
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
const { kakao: kakao$1 } = typeof window !== "undefined" ? window : global;
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
  kakao$1.maps.load(function() {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao$1.maps.LatLng(37.5666805, 126.9784147),
      // 지도의 중심좌표 <- 서울시청
      level: 7
      // 지도의 확대 레벨(1~14)
    };
    map = new kakao$1.maps.Map(mapContainer, mapOption);
  });
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        locPosition = new kakao$1.maps.LatLng(lat, lng);
        map.setCenter(locPosition);
        store.dispatch({ type: "mapSlice/SET_LOCATION_ACCESS", payload: true });
        store.dispatch(SET_CURRENT_LOCATION([lat, lng]));
        resolve(locPosition);
      });
    } else {
      locPosition = new kakao$1.maps.LatLng(37.5666805, 126.9784147);
      map.setLevel(5);
      store.dispatch({ type: "mapSlice/SET_LOCATION_ACCESS", payload: false });
      store.dispatch(SET_CURRENT_LOCATION([37.5666805, 126.9784147]));
      resolve(locPosition);
    }
    addBoundChangeEvent();
  });
}
function setCircle(radius = 500) {
  centerCircle = new kakao$1.maps.Circle({
    map,
    center: locPosition,
    radius: 25,
    strokeWeight: 3,
    strokeColor: "#007EEA",
    strokeStyle: "solid",
    fillColor: "#0000ff",
    fillOpacity: 1
  });
  radiusCircle = new kakao$1.maps.Circle({
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
  kakao$1.maps.event.addListener(map, "bounds_changed", function() {
    const polygon = getCurrentView();
    getListInCurrentView(polygon).then((res) => {
      paintVeganRestaurantMarker(res);
      store.dispatch({
        type: "mapSlice/CHANGED_CENTER",
        COUNT: res.length
      });
    });
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
    const marker = new kakao$1.maps.Marker({
      map,
      position: new kakao$1.maps.LatLng(list.location.coordinates[1], list.location.coordinates[0]),
      // 마커를 표시할 위치
      title: list.title,
      // 마커의 타이틀, 마커에 마우스를 올리면 타이틀 표시
      image: new kakao$1.maps.MarkerImage(list.certified ? imgCert : imgLocation, new kakao$1.maps.Size(24, 35))
      // 마커 이미지
    });
    arrMarker.push(marker);
    const infowindow = new kakao$1.maps.InfoWindow({ zIndex: 1, removable: true });
    const InfoWindowComponent = /* @__PURE__ */ jsx(InfoWindow, { restaurantInfo: list, isLoggedIn: isLoggedIn || false });
    infowindow.setContent(renderToString(InfoWindowComponent));
    arrInfowindow.push(infowindow);
  });
  addMarkerClickEvent(arrMarker, arrInfowindow);
}
function addMarkerClickEvent(arrMarker2, arrInfowindow2) {
  for (let i = 0; i < arrMarker2.length; i++) {
    kakao$1.maps.event.addListener(arrMarker2[i], "click", function() {
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
      convertCoords.push(new kakao$1.maps.LatLng(lat, lng));
    }
  }
  const bounds = new kakao$1.maps.LatLngBounds();
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
  map.setCenter(new kakao$1.maps.LatLng(lat, lng));
}
function checkLoginForInfoWindow(isLoggedInFromIndexPage) {
  isLoggedIn = isLoggedInFromIndexPage;
}
function Sigungu() {
  const currentSido = useAppSelector((state) => state.mapSlice.currentSido);
  const [sigunguList, setSigunguList] = useState(null);
  const selectedSido = useAppSelector((state) => state.mapSlice.selectedSido);
  useEffect(() => {
    if (selectedSido === "") {
      if (currentSido !== "") {
        const key = currentSido.slice(0, 2);
        const sortList = [...REGION[key]].sort();
        setSigunguList(sortList);
      } else {
        setSigunguList(null);
      }
    } else {
      const key = selectedSido.slice(0, 2);
      const sortList = [...REGION[key]].sort();
      setSigunguList(sortList);
    }
  }, [currentSido, selectedSido]);
  return /* @__PURE__ */ jsx("div", { className: "container-sigungu", children: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsx(
      SigunguListItem,
      {
        name: `${selectedSido !== "" ? selectedSido.slice(0, 2) : currentSido.slice(0, 2)} 전체`
      },
      Math.random()
    ),
    sigunguList && sigunguList.map((v) => {
      return /* @__PURE__ */ jsx(SigunguListItem, { name: v }, Math.random());
    })
  ] }) });
}
function SigunguListItem({ name }) {
  const dispatch = useAppDispatch();
  const selectedSido = useAppSelector((state) => state.mapSlice.selectedSido);
  const currentSido = useAppSelector((state) => state.mapSlice.currentSido);
  const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
  const handleClick = () => {
    appModalMode(false);
    dispatch(CHANGE_REGION_MODAL(false));
    dispatch(SET_SELECTED_SIGUNGU(name));
    getListInRegion().then((data) => {
      if (data.success && data.lists.length > 0) {
        const coordsInPage = [];
        for (let list of data.lists) {
          coordsInPage.push(list.location.coordinates);
        }
        moveToRegionInPage(coordsInPage);
        dispatch(SHOW_LIST_IN_REGION_MODAL(true));
        dispatch(SET_LIST_IN_PAGE(data.lists));
        dispatch(SET_TOTAL_IN_REGION(data.total));
      } else {
        dispatch(NO_RESULT_MODAL(true));
      }
    });
  };
  async function getListInRegion() {
    const sido = selectedSido === "" ? currentSido.slice(0, 2) : selectedSido.slice(0, 2);
    const sigungu = name.includes("전체") ? null : name;
    const res = await fetch(`${API_URL}/map/region?sido=${sido}&sigungu=${sigungu}&page=1&skip=10`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ category: selectedCategory })
      // 선택되어 있는 업종으로 필터링
    });
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsx("li", { onClick: handleClick, children: /* @__PURE__ */ jsx("p", { className: "txt-sido", children: name }) });
}
function ChangeRegionModal() {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const regionModalOn = useAppSelector((state) => state.mapSlice.regionModalOn);
  const currentLocation = useAppSelector((state) => state.mapSlice.currentLocation);
  useEffect(() => {
    if (regionModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [regionModalOn]);
  useEffect(() => {
    const [lat, lng] = currentLocation;
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < result.length; i++) {
          if (result[i].region_type === "H") {
            const addr = result[i].address_name;
            dispatch(SET_CURRENT_SIDO(addr.split(" ").shift() || ""));
            dispatch(SET_CURRENT_SIGUNGU(addr.split(" ")[1]));
            break;
          }
        }
      }
    });
  }, [currentLocation]);
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "지역선택" }),
    /* @__PURE__ */ jsxs("div", { className: "wrapper-region", children: [
      /* @__PURE__ */ jsx(Sido, {}),
      /* @__PURE__ */ jsx(Sigungu, {})
    ] })
  ] });
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
      /* @__PURE__ */ jsx(ChangeRegionModal, {}),
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
  const showListInRegionModalOn = useAppSelector((state) => state.mapSlice.showListInRegionModalOn);
  const handleClick = () => {
    dispatch(CATEGORY_FILTER_MODAL(true));
    if (showListInRegionModalOn === true) {
      dispatch(SHOW_LIST_IN_REGION_MODAL(false));
    }
  };
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, children: "업종 필터" });
}
function SelectRegion() {
  const dispatch = useAppDispatch();
  const mapMode = useAppSelector((state) => state.mapSlice.mapMode);
  function handleClick() {
    appModalMode(true);
    dispatch(CHANGE_REGION_MODAL(true));
    dispatch(SHOW_LIST_IN_REGION_MODAL(false));
    dispatch(SET_MAP_MODE("지역탐색 모드"));
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
    dispatch(CHANGE_RADIUS_MODAL(true));
    dispatch(SET_MAP_MODE("반경탐색 모드"));
  };
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
function KakaoMap({ isLoggedIn: isLoggedIn2 }) {
  const dispatch = useAppDispatch();
  const radius = useAppSelector((state) => state.mapSlice.radius);
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
  useEffect(() => {
    checkLoginForInfoWindow(isLoggedIn2);
    init().then((locPosition2) => {
      setIsInitialized(true);
      setCurrentLocation([locPosition2.getLng(), locPosition2.getLat()]);
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
function Page() {
  const dispatch = useAppDispatch();
  const [isLoggedIn2, setIsLoggedIn] = useState(false);
  const hasLocationAccess = useLocationAccess();
  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_URL}/users/`);
      const data = await res.json();
      if (data.success === true)
        setIsLoggedIn(true);
      else
        setIsLoggedIn(false);
    })();
  }, []);
  useEffect(() => {
    if (hasLocationAccess === "granted") {
      appModalMode(false);
      dispatch(CHECK_LOCATION_ACCESS_MODAL(false));
    } else if (hasLocationAccess === "denied" || hasLocationAccess === "prompt") {
      appModalMode(true);
      dispatch(CHECK_LOCATION_ACCESS_MODAL(true));
    }
  }, [hasLocationAccess]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SearchBar, {}),
    /* @__PURE__ */ jsx(MapView, { isLoggedIn: isLoggedIn2 }),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn: isLoggedIn2 }),
    /* @__PURE__ */ jsx(ModalGroup, {})
  ] });
}
function MapView({ isLoggedIn: isLoggedIn2 }) {
  return /* @__PURE__ */ jsxs("main", { className: "main-map", children: [
    /* @__PURE__ */ jsx(ControlButton, {}),
    /* @__PURE__ */ jsx(KakaoMap, { isLoggedIn: isLoggedIn2 }),
    /* @__PURE__ */ jsx(BackCurrentLocation, {}),
    /* @__PURE__ */ jsx(ResultInRadius, {})
  ] });
}
export {
  Page
};
