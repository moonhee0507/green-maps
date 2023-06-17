import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { a as useAppSelector, u as useAppDispatch } from "./chunk-7f101d2c.js";
import { h as SHOW, A as ADD_GROUP_MODAL, a as ORDER_MODAL, e as DELETE_LIKELIST_MODAL } from "./chunk-1a5b0e59.js";
import { L as ListItem } from "./chunk-3b133073.js";
import { A as API_URL } from "./chunk-94504c62.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { a as appModalMode } from "./chunk-db98b5a2.js";
import "react-redux";
import "@reduxjs/toolkit";
import "./chunk-6c356fa9.js";
function Menu({ userInfo }) {
  const [bookmarkList, setBookmarkList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  useEffect(() => {
    if (userInfo !== null) {
      setBookmarkList(userInfo.bookmarkList);
      setLikeList(userInfo.likeList);
    }
  }, [userInfo]);
  const clicked = useAppSelector((state) => state.myListSlice.clicked);
  const dispatch = useAppDispatch();
  function handleClick(event) {
    var _a;
    const innerTxt = (_a = event.currentTarget.lastElementChild) == null ? void 0 : _a.innerHTML;
    if (typeof innerTxt === "string") {
      dispatch(SHOW(innerTxt));
    }
  }
  return /* @__PURE__ */ jsxs("ul", { className: "ul-summary-bookmark", children: [
    /* @__PURE__ */ jsxs("li", { onClick: handleClick, className: `list-summary-bookmark ${clicked === "북마크" ? "on" : ""}`, children: [
      /* @__PURE__ */ jsx("p", { children: userInfo && bookmarkList ? bookmarkList.length : 0 }),
      /* @__PURE__ */ jsx("p", { children: "북마크" })
    ] }),
    /* @__PURE__ */ jsxs("li", { onClick: handleClick, className: `list-summary-bookmark ${clicked === "좋아요" ? "on" : ""}`, children: [
      /* @__PURE__ */ jsx("p", { children: userInfo && likeList ? likeList.length : 0 }),
      /* @__PURE__ */ jsx("p", { children: "좋아요" })
    ] })
  ] });
}
function GroupNameList({ groupInfo, lists }) {
  const { name, registeredAt, groupIcon } = groupInfo;
  const [date] = useState(registeredAt.slice(0, 13));
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (lists.length === 0)
      setCount(0);
    if (lists.length > 0) {
      const sameName = lists.filter((list) => list.groupName === name);
      setCount(sameName.length);
    }
  }, []);
  return /* @__PURE__ */ jsx("li", { className: "li-bookmarkgroup", children: /* @__PURE__ */ jsx("a", { href: `/my-lists/bookmark/${name}`, children: /* @__PURE__ */ jsxs("div", { className: "style-wrapper-groupname", children: [
    /* @__PURE__ */ jsxs("div", { className: "style-wrapper-groupname-info", children: [
      /* @__PURE__ */ jsx("div", { className: "container-groupicon", children: /* @__PURE__ */ jsx("img", { src: groupIcon, alt: "그룹 아이콘", style: { width: "100%", height: "100%" } }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "txt-groupname", children: name }),
        /* @__PURE__ */ jsxs("p", { className: "txt-restaurant-count", children: [
          "개수 ",
          /* @__PURE__ */ jsx("span", { className: "num-restaurant-count", children: count })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "txt-group-date", children: date })
  ] }) }) });
}
function BookmarkList({ lists, groupList }) {
  const [registerOrder, setRegisterOrder] = useState(null);
  const [nameOrder, setNameOrder] = useState(null);
  useEffect(() => {
    if (groupList) {
      setRegisterOrder(groupList);
      setNameOrder([...groupList].sort((a, b) => a.name.localeCompare(b.name, "en")));
    }
  }, [groupList]);
  const sort = useAppSelector((state) => state.myListSlice.groupNameOrder);
  const dispatch = useAppDispatch();
  function handleAddGroup() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
    dispatch(ADD_GROUP_MODAL(true));
  }
  return groupList !== null ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("ul", { className: "ul-groupname", children: sort === "등록순" ? registerOrder == null ? void 0 : registerOrder.map((groupInfo) => {
      return /* @__PURE__ */ jsx(GroupNameList, { groupInfo, lists }, Math.random());
    }) : nameOrder == null ? void 0 : nameOrder.map((groupInfo) => {
      return /* @__PURE__ */ jsx(GroupNameList, { groupInfo, lists }, Math.random());
    }) }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-new-group", onClick: handleAddGroup, children: "새 그룹 추가" })
  ] }) : null;
}
function LikeList({ lists }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [registerOrder, setRegisterOrder] = useState([]);
  const [nameOrder, setNameOrder] = useState([]);
  useEffect(() => {
    const setData = async () => {
      const arr = [];
      for (const list of lists) {
        try {
          const data = await getRestaurant(list._id);
          arr.push(Object.assign(list, data));
        } catch (err) {
          console.error(`북마크 그룹에 저장된 식당 _id에 대한 정보를 가져오는 데 실패했습니다.`);
        }
      }
      setRestaurantData(arr);
    };
    setData();
  }, []);
  const sort = useAppSelector((state) => state.myListSlice.groupNameOrder);
  useEffect(() => {
    if (restaurantData.length !== 0) {
      setRegisterOrder(restaurantData);
      setNameOrder(
        [...restaurantData].sort((a, b) => a.restaurantInfo.title.localeCompare(b.restaurantInfo.title, "en"))
      );
    }
  }, [restaurantData]);
  async function getRestaurant(_id) {
    const res = await fetch(`${API_URL}/restaurants/${_id}`);
    const data = await res.json();
    return data;
  }
  return restaurantData && restaurantData.length > 0 ? /* @__PURE__ */ jsx("ul", { className: "ul-groupname", children: sort === "등록순" ? registerOrder.map((restaurant) => {
    return /* @__PURE__ */ jsx(ListItem, { list: restaurant }, Math.random());
  }) : nameOrder.map((restaurant) => {
    return /* @__PURE__ */ jsx(ListItem, { list: restaurant }, Math.random());
  }) }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
    /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
    /* @__PURE__ */ jsx("p", { children: "목록이 없어요." })
  ] });
}
function BookmarkDetail({ lists, groupList }) {
  const order = useAppSelector((state) => state.myListSlice.groupNameOrder);
  const dispatch = useAppDispatch();
  function handleOrder() {
    appModalMode(true);
    dispatch(ORDER_MODAL(true));
  }
  function handleEdit() {
    navigate("/my-lists/bookmark/edit");
  }
  return /* @__PURE__ */ jsxs("div", { className: "style-wrapper-bookmark-detail", children: [
    /* @__PURE__ */ jsxs("div", { className: "wrapper-groupcount-orderbox", children: [
      /* @__PURE__ */ jsxs("p", { className: "txt-bookmarkgroup", children: [
        "그룹 ",
        /* @__PURE__ */ jsx("span", { children: (groupList == null ? void 0 : groupList.length) || 1 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container-order-bookmarkgroup", children: /* @__PURE__ */ jsx("button", { type: "button", className: "button-order-bookmarkgroup", onClick: handleOrder, children: order }) })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-edit-bookmarkgroup", onClick: handleEdit, children: "편집하기" })
  ] });
}
function LikeDetail({ lists }) {
  const order = useAppSelector((state) => state.myListSlice.groupNameOrder);
  const dispatch = useAppDispatch();
  function handleOrder() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
    dispatch(ORDER_MODAL(true));
  }
  function handleEdit() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
    dispatch(DELETE_LIKELIST_MODAL(true));
  }
  return /* @__PURE__ */ jsxs("div", { className: "style-wrapper-bookmark-detail", children: [
    /* @__PURE__ */ jsxs("div", { className: "wrapper-groupcount-orderbox", children: [
      /* @__PURE__ */ jsxs("p", { className: "txt-bookmarkgroup", children: [
        "전체 ",
        /* @__PURE__ */ jsx("span", { children: lists.length })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container-order-bookmarkgroup", children: /* @__PURE__ */ jsx("button", { type: "button", className: "button-order-bookmarkgroup", onClick: handleOrder, children: order }) })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-edit-bookmarkgroup", onClick: handleEdit, children: "편집하기" })
  ] });
}
function ListSection({ userInfo, groupList }) {
  const { bookmarkList, likeList } = userInfo;
  const clicked = useAppSelector((state) => state.myListSlice.clicked);
  return /* @__PURE__ */ jsxs("section", { className: "section-mylists", children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "북마크 또는 좋아요한 식당 목록" }),
    clicked === "북마크" ? /* @__PURE__ */ jsx(BookmarkDetail, { lists: bookmarkList, groupList }) : /* @__PURE__ */ jsx(LikeDetail, { lists: likeList }),
    clicked === "북마크" ? /* @__PURE__ */ jsx(BookmarkList, { lists: bookmarkList, groupList }) : /* @__PURE__ */ jsx(LikeList, { lists: likeList })
  ] });
}
function MyListMain({
  userInfo,
  groupList
}) {
  return /* @__PURE__ */ jsxs("main", { className: "main-bookmark", children: [
    /* @__PURE__ */ jsx(Menu, { userInfo }),
    /* @__PURE__ */ jsx(ListSection, { userInfo, groupList })
  ] });
}
export {
  MyListMain as default
};
