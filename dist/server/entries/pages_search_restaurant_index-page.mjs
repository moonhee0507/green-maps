import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-8fde0b9b.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { u as useAppSelector, a as useAppDispatch } from "../chunks/chunk-c407c4c8.js";
import { E as EDIT_DELETE_NOTIFY_MODAL } from "../chunks/chunk-4ef07e33.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-4a5c6344.js";
import "react-redux";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-24b72a12.js";
function EditDeleteNotifyModal() {
  const [show, setShow] = useState(false);
  const editDeleteNotifyModalOn = useAppSelector((state) => state.reviewSlice.editDeleteNotifyModalOn);
  const sameUserOwner = useAppSelector((state) => state.reviewSlice.sameUserOwner);
  useEffect(() => {
    if (editDeleteNotifyModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [editDeleteNotifyModalOn]);
  return /* @__PURE__ */ jsxs("article", { className: `modal-edit-delete-notify ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { className: "sr-only", children: "수정, 삭제, 신고용 모달" }),
    /* @__PURE__ */ jsx("ul", { children: sameUserOwner ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(EDIT, {}),
      /* @__PURE__ */ jsx(DELETE, {})
    ] }) : /* @__PURE__ */ jsx("li", { children: " 🚨 신고하기" }) })
  ] });
}
function EDIT() {
  const dispatch = useAppDispatch();
  const reviewId = useAppSelector((state) => state.reviewSlice.reviewId);
  const restaurantId = useAppSelector((state) => state.reviewSlice.restaurantId);
  function handleClick() {
    navigate(`/search/${restaurantId}/reviews/${reviewId}/edit`);
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.remove("modal-mode");
    dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
  }
  return /* @__PURE__ */ jsx("li", { onClick: handleClick, children: "🩹 수정하기" });
}
function DELETE() {
  const dispatch = useAppDispatch();
  const reviewId = useAppSelector((state) => state.reviewSlice.reviewId);
  const restaurantId = useAppSelector((state) => state.reviewSlice.restaurantId);
  async function handleClick() {
    try {
      const res = await fetch(`${API_URL}/reviews/${reviewId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ restaurantId })
      });
      const data = await res.json();
      if (data.success) {
        navigate(`/search/${restaurantId}`);
      } else {
        alert("다시 시도해주세요.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      const app = document.querySelector(".app");
      app == null ? void 0 : app.classList.remove("modal-mode");
      dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    }
  }
  return /* @__PURE__ */ jsx("li", { onClick: handleClick, children: "🗑️ 삭제하기" });
}
function ModalGroup() {
  const on = useAppSelector((state) => state.reviewSlice.editDeleteNotifyModalOn);
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (on === true)
      setShow(true);
    else
      setShow(false);
  }, [on]);
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
      const app = document.querySelector(".app");
      app == null ? void 0 : app.classList.remove("modal-mode");
      dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    }
  }
  return /* @__PURE__ */ jsx("div", { className: `modal-group ${show ? "on" : ""}`, children: /* @__PURE__ */ jsx(EditDeleteNotifyModal, {}) });
}
const RestaurantDetail = React.lazy(() => import("../chunks/chunk-40844f01.js"));
function Page(pageContext) {
  var _a;
  const { routeParams } = pageContext;
  const [isLoggedIn, userInfo] = useCheckLoginStatus();
  const restaurantId = ((_a = pageContext.routeParams) == null ? void 0 : _a.restaurantId) || "";
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    getRestaurantList();
  }, [routeParams]);
  async function getRestaurantList() {
    const res = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
      headers: {
        "Cache-Control": "max-age=31536000"
      }
    });
    const data = await res.json();
    if (data.success) {
      setRestaurantInfo(data.restaurantInfo);
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "상세정보" }),
    /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(RestaurantDetail, { restaurantInfo, isLoggedIn, userInfo }) }),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn }),
    /* @__PURE__ */ jsx(ModalGroup, {})
  ] });
}
function Loading() {
  return /* @__PURE__ */ jsx("div", { children: "로딩중..." });
}
export {
  Page
};
