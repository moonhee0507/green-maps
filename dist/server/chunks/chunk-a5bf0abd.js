import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { D as Distance } from "./chunk-6c356fa9.js";
import { A as API_URL } from "./chunk-94504c62.js";
import { u as useAppSelector } from "./chunk-c407c4c8.js";
function MoreButton({ restaurantId, restaurantTitle }) {
  const [show, setShow] = useState(false);
  const moreButtonRef = useRef(null);
  const clicked = useAppSelector((state) => state.myListSlice.clicked);
  function handleMoreButton() {
    setShow((prev) => !prev);
  }
  useEffect(() => {
    if (show) {
      window.addEventListener("click", clickOutside);
    }
    return () => {
      window.addEventListener("click", clickOutside);
    };
  }, [show]);
  function clickOutside(event) {
    const target = event.target;
    if (moreButtonRef.current && !moreButtonRef.current.contains(target)) {
      setShow(false);
    }
  }
  async function handleDelete() {
    try {
      const list = clicked === "북마크" ? "bookmark" : "like";
      if (confirm("해당 식당을 삭제하시겠습니까?")) {
        const res = await fetch(`${API_URL}/users/${list}/${restaurantId}`, {
          credentials: "include",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await res.json();
        if (data.success) {
          alert(`${restaurantTitle} 삭제가 완료되었습니다.`);
          window.location.reload();
        } else {
          alert("다시 시도해주세요.");
        }
      } else {
        setShow(false);
      }
    } catch (err) {
      console.error(err);
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "aria-label": "더보기 버튼",
        className: "button-more",
        onClick: handleMoreButton,
        ref: moreButtonRef
      }
    ),
    show && /* @__PURE__ */ jsx("div", { className: "container-more-option", children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { className: "list-option", onClick: handleDelete, children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "txt-delete", children: "삭제" }) }) }) }) })
  ] });
}
function BookmarkList({ lists }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [registerOrder, setRegisterOrder] = useState([]);
  const [nameOrder, setNameOrder] = useState([]);
  useEffect(() => {
    const setData = async () => {
      const arr = [];
      for (const list of lists) {
        try {
          if (typeof list._id === "string") {
            const data = await getRestaurant(list._id);
            arr.push(Object.assign(list, data));
          }
        } catch (err) {
          console.error(`북마크 그룹에 저장된 식당 _id에 대한 정보를 가져오는 데 실패했습니다.`);
        }
      }
      setRestaurantData(arr);
    };
    setData();
  }, [lists]);
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
function ListItem({ list }) {
  const { _id, title, location, address } = list.restaurantInfo;
  return /* @__PURE__ */ jsxs("li", { className: "list-restaurant-inbookmark", children: [
    /* @__PURE__ */ jsx("a", { href: `/search/${_id}`, children: /* @__PURE__ */ jsxs("div", { className: "container-restaurant-title-detail", children: [
      /* @__PURE__ */ jsxs("div", { className: "style-container-title-date", children: [
        /* @__PURE__ */ jsx("p", { className: "txt-title", children: title }),
        /* @__PURE__ */ jsx("span", { className: "txt-date", children: list.registeredAt.slice(0, 13) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Distance, { location: location.coordinates || [0, 0] }),
        /* @__PURE__ */ jsx("span", { className: "txt-address", children: address })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(MoreButton, { restaurantId: _id, restaurantTitle: title })
  ] });
}
export {
  BookmarkList as B,
  ListItem as L
};
