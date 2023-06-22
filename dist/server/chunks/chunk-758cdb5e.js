import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { a as useAppDispatch, u as useAppSelector } from "./chunk-0e4e6c3d.js";
import { O as ORDER_STANDARD, a as ORDER_MODAL, S as SET_GROUP_NAME, A as ADD_GROUP_MODAL, I as ICON_STANDARD, b as INCREASE_CHECKED, P as PUSH_RESTAURANT_LIST, D as DECREASE_CHECKED, c as DELETE_RESTAURANT_LIST, M as MOVE_LIST_MODAL, C as COPY_MODAL, R as RESET_CHECKED, d as RESET_RESTAURANT_LIST, e as DELETE_LIKELIST_MODAL } from "./chunk-1a5b0e59.js";
import { i as imgClose } from "./chunk-0eea5c60.js";
import { I as IconSelection } from "./chunk-f2c28349.js";
import { A as API_URL } from "./chunk-94504c62.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { s as store } from "./chunk-042cff01.js";
import { a as appModalMode } from "./chunk-db98b5a2.js";
function GroupOrderModal() {
  const dispatch = useAppDispatch();
  const orderStandard = useAppSelector((state) => state.myListSlice.groupNameOrder);
  const orderModalOn = useAppSelector((state) => state.myListSlice.orderModalOn);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (orderModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [orderModalOn]);
  function handleOrder(event) {
    dispatch(ORDER_STANDARD(event.currentTarget.innerText));
    handleClose();
  }
  function handleClose() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.remove("modal-mode");
    dispatch(ORDER_MODAL(false));
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "정렬기준" }),
    /* @__PURE__ */ jsxs("div", { className: "container-button", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: handleOrder,
          className: `button-groupname-order ${orderStandard === "등록순" ? "on" : ""}`,
          children: "등록순"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: handleOrder,
          className: `button-groupname-order ${orderStandard === "이름순" ? "on" : ""}`,
          children: "이름순"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) })
  ] });
}
function GroupNameInput() {
  const dispatch = useAppDispatch();
  const groupName = useAppSelector((state) => state.myListSlice.groupName);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (groupName === "") {
      setInputValue("");
    }
  }, [groupName]);
  function handleChange(event) {
    setInputValue(event.target.value);
    dispatch(SET_GROUP_NAME(event.target.value));
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "groupName", className: "sr-only", children: "그룹명" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        id: "groupName",
        placeholder: "그룹명을 입력해 주세요.",
        maxLength: 20,
        minLength: 1,
        onChange: handleChange,
        value: inputValue
      }
    )
  ] });
}
function CompleteButton({ userInfo }) {
  const [show, setShow] = useState({ disabled: true });
  const groupName = useAppSelector((state) => state.myListSlice.groupName);
  const groupIcon = useAppSelector((state) => state.myListSlice.selectedIcon);
  useEffect(() => {
    if (groupName !== null) {
      if (groupName.length !== 0)
        setShow({ disabled: false });
      else
        setShow({ disabled: true });
    } else {
      setShow({ disabled: true });
    }
  }, [groupName]);
  async function handleClick() {
    if (userInfo !== null) {
      const { userId } = userInfo;
      const res = await fetch(`${API_URL}/bookmark/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, name: groupName, groupIcon })
      });
      const data = await res.json();
      if (data.success === true) {
        window.location.reload();
      } else {
        alert("다시 시도해주세요.");
      }
    } else {
      alert("로그아웃 되었습니다.\n다시 로그인해주세요.");
      navigate("/login");
    }
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: `button-groupname-complete ${show ? "on" : ""}`, onClick: handleClick, children: "완료" });
}
function AddGroupModal({ userInfo }) {
  const dispatch = useAppDispatch();
  const addGroupModalOn = useAppSelector((state) => state.myListSlice.addGroupModalOn);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (addGroupModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [addGroupModalOn]);
  function handleClose() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.remove("modal-mode");
    dispatch(ADD_GROUP_MODAL(false));
    dispatch(SET_GROUP_NAME(""));
    dispatch(ICON_STANDARD("/images/icon-star.svg"));
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "새 그룹 추가" }),
    /* @__PURE__ */ jsxs("form", { children: [
      /* @__PURE__ */ jsx(GroupNameInput, {}),
      /* @__PURE__ */ jsx(IconSelection, {}),
      /* @__PURE__ */ jsx(CompleteButton, { userInfo })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) })
  ] });
}
function List$1({ bookmarkList }) {
  return /* @__PURE__ */ jsx("div", { children: bookmarkList.length > 0 ? bookmarkList.map((list) => {
    return /* @__PURE__ */ jsx(ListItem$1, { list: list._id }, Math.random());
  }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
    /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
    /* @__PURE__ */ jsx("p", { children: "목록이 없어요." })
  ] }) });
}
function ListItem$1({ list }) {
  const dispatch = useAppDispatch();
  const { _id, title, address, category } = list;
  const [isChecked, setIsChecked] = useState(false);
  const restaurantToMove = useAppSelector((state) => state.myListSlice.restaurantToMove);
  const countChecked = useAppSelector((state) => state.myListSlice.countChecked);
  useEffect(() => {
    if (countChecked === 0) {
      setIsChecked(false);
    }
  }, [countChecked]);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      dispatch(INCREASE_CHECKED(1));
      dispatch(PUSH_RESTAURANT_LIST([...restaurantToMove, _id]));
    } else {
      dispatch(DECREASE_CHECKED(1));
      const newArray = [...restaurantToMove];
      const index = newArray.indexOf(_id);
      newArray.splice(index, 1);
      dispatch(DELETE_RESTAURANT_LIST(newArray));
    }
  };
  return /* @__PURE__ */ jsxs("label", { className: "label-bookmarklist", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        className: "checkbox-bookmarklist",
        checked: isChecked,
        onChange: handleCheckboxChange
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "wrapper-bookmarklist-edit", children: /* @__PURE__ */ jsxs("dl", { children: [
      /* @__PURE__ */ jsxs("dl", { className: "container-title-category", children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "식당 이름" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-title", children: title }),
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "업종" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-category", children: category })
      ] }),
      /* @__PURE__ */ jsxs("dl", { children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "주소" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-address", children: address })
      ] })
    ] }) })
  ] });
}
function ButtonGroup$1() {
  const dispatch = useAppDispatch();
  const countChecked = useAppSelector((state) => state.myListSlice.countChecked);
  const restaurantToDelete = useAppSelector((state) => state.myListSlice.restaurantToMove);
  function handleCopy() {
    dispatch(MOVE_LIST_MODAL(false));
    dispatch(COPY_MODAL(true));
  }
  async function handleDelete() {
    if (restaurantToDelete.length > 0) {
      const deletePromise = restaurantToDelete.map((item) => deleteBookmarks(item));
      try {
        const result = await Promise.all(deletePromise);
        result.forEach((_, i) => {
          if (i === result.length - 1)
            window.location.reload();
        });
      } catch (err) {
        console.error("삭제 중 오류가 발생했습니다.", err);
      }
    }
  }
  async function deleteBookmarks(id) {
    const res = await fetch(`${API_URL}/users/bookmark/${id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    return data;
  }
  function clearCheckbox() {
    dispatch(RESET_CHECKED());
    dispatch(RESET_RESTAURANT_LIST([]));
  }
  return /* @__PURE__ */ jsxs("div", { className: "container-button-move", children: [
    /* @__PURE__ */ jsx("button", { type: "reset", onClick: clearCheckbox, children: "선택 해제" }),
    /* @__PURE__ */ jsxs("button", { type: "button", onClick: handleCopy, disabled: countChecked ? false : true, children: [
      /* @__PURE__ */ jsx("span", { className: "txt-copy-del", children: "복사" }),
      /* @__PURE__ */ jsx("span", { children: countChecked })
    ] }),
    /* @__PURE__ */ jsxs("button", { type: "button", disabled: countChecked ? false : true, onClick: handleDelete, children: [
      /* @__PURE__ */ jsx("span", { className: "txt-copy-del", children: "삭제" }),
      /* @__PURE__ */ jsx("span", { children: countChecked })
    ] })
  ] });
}
function MoveListModal({ userInfo }) {
  const [show, setShow] = useState(false);
  const [bookmarkListInSameGroup, setBookmarkListInSameGroup] = useState([]);
  const moveListModalOn = useAppSelector((state) => state.myListSlice.moveListModalOn);
  useEffect(() => {
    if (moveListModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [moveListModalOn]);
  const groupName = useAppSelector((state) => state.myListSlice.targetGroup);
  useEffect(() => {
    if (userInfo !== null) {
      getBookmarkList().then((data) => {
        if (data.success) {
          const groupName2 = store.getState().myListSlice.targetGroup;
          const sameGroup = data.bookmarkList.filter((list) => list.groupName === groupName2);
          setBookmarkListInSameGroup(sameGroup);
        }
      });
    }
  }, [groupName]);
  async function getBookmarkList() {
    const res = await fetch(`${API_URL}/users/bookmark`, {
      credentials: "include",
      method: "GET"
    });
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "목록 편집" }),
    /* @__PURE__ */ jsx(Form$1, { bookmarkList: bookmarkListInSameGroup }),
    /* @__PURE__ */ jsx(CloseButton$2, {})
  ] });
}
function Form$1({ bookmarkList }) {
  return /* @__PURE__ */ jsxs("form", { children: [
    /* @__PURE__ */ jsx(List$1, { bookmarkList }),
    /* @__PURE__ */ jsx(ButtonGroup$1, {})
  ] });
}
function CloseButton$2() {
  const dispatch = useAppDispatch();
  function handleClose() {
    appModalMode(false);
    dispatch(MOVE_LIST_MODAL(false));
    dispatch(RESET_CHECKED());
    dispatch(RESET_RESTAURANT_LIST([]));
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) });
}
function GroupNameList({
  userInfo,
  groupInfo,
  lists
}) {
  const { name, registeredAt, groupIcon } = groupInfo;
  const [date] = useState(registeredAt.slice(0, 13));
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (lists.length === 0)
      setCount(0);
    if (lists.length > 0) {
      const sameName = lists.filter((list) => list.groupName === name);
      setCount(sameName.length);
    }
    if (userInfo !== null) {
      setUser(userInfo);
    }
  }, []);
  const restaurantToMove = useAppSelector((state) => state.myListSlice.restaurantToMove);
  function handleCopy() {
    if (user !== null) {
      submit(user.userId, name, restaurantToMove);
    }
  }
  async function submit(userId, newGroupName, selectedRestaurant) {
    const res = await fetch(`${API_URL}/users/update/bookmark`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        newGroupName,
        selectedRestaurant
      })
    });
    const data = await res.json();
    if (data.success) {
      alert("복사가 완료되었습니다.\n복사가 완료된 원본은 삭제됩니다.");
      window.location.href = "/my-lists";
    } else {
      console.error(data);
    }
  }
  return /* @__PURE__ */ jsx("li", { className: "li-bookmarkgroup copy", children: /* @__PURE__ */ jsx("button", { onClick: handleCopy, children: /* @__PURE__ */ jsxs("div", { className: "style-wrapper-groupname", children: [
    /* @__PURE__ */ jsxs("div", { className: "style-wrapper-groupname-info", children: [
      /* @__PURE__ */ jsx("div", { className: "container-groupicon", children: /* @__PURE__ */ jsx("img", { src: groupIcon, alt: "그룹 아이콘" }) }),
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
function CloseButton$1() {
  const dispatch = useAppDispatch();
  function handleClose() {
    dispatch(COPY_MODAL(false));
    dispatch(MOVE_LIST_MODAL(true));
    dispatch(RESET_CHECKED());
    dispatch(RESET_RESTAURANT_LIST([]));
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) });
}
function WhereToCopyModal({ userInfo }) {
  const copyModalOn = useAppSelector((state) => state.myListSlice.copyModalOn);
  const targetGroup = useAppSelector((state) => state.myListSlice.targetGroup);
  const [show, setShow] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [bookmarkList, setBookmarkList] = useState([]);
  useEffect(() => {
    if (copyModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [copyModalOn]);
  useEffect(() => {
    if (userInfo !== null) {
      getBookmarkGroupList(userInfo.userId).then((data) => {
        if (data.success) {
          setGroupList(data.groupList);
        }
      });
      setBookmarkList(userInfo.bookmarkList);
    }
  }, []);
  async function getBookmarkGroupList(userId) {
    const res = await fetch(`${API_URL}/bookmark/${userId}`);
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "복사할 그룹 선택" }),
    groupList.length - 1 > 0 ? /* @__PURE__ */ jsx("ul", { className: "ul-groupname", children: groupList.filter((groupInfo) => groupInfo.name !== targetGroup).map((groupInfo) => {
      return /* @__PURE__ */ jsx(
        GroupNameList,
        {
          groupInfo,
          lists: bookmarkList,
          userInfo
        },
        Math.random()
      );
    }) }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
      /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
      /* @__PURE__ */ jsx("p", { children: "다른 그룹이 없어요." })
    ] }),
    /* @__PURE__ */ jsx(CloseButton$1, {})
  ] });
}
function ListItem({ list }) {
  const dispatch = useAppDispatch();
  const { _id, title, address, category } = list;
  const [isChecked, setIsChecked] = useState(false);
  const restaurantToDelete = useAppSelector((state) => state.myListSlice.restaurantToMove);
  const countChecked = useAppSelector((state) => state.myListSlice.countChecked);
  useEffect(() => {
    if (countChecked === 0) {
      setIsChecked(false);
    }
  }, [countChecked]);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      dispatch(INCREASE_CHECKED(1));
      dispatch(PUSH_RESTAURANT_LIST([...restaurantToDelete, _id]));
    } else {
      dispatch(DECREASE_CHECKED(1));
      const newArray = [...restaurantToDelete];
      const index = newArray.indexOf(_id);
      newArray.splice(index, 1);
      dispatch(DELETE_RESTAURANT_LIST(newArray));
    }
  };
  return /* @__PURE__ */ jsxs("label", { className: "label-bookmarklist", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        className: "checkbox-bookmarklist",
        checked: isChecked,
        onChange: handleCheckboxChange
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "wrapper-bookmarklist-edit", children: /* @__PURE__ */ jsxs("dl", { children: [
      /* @__PURE__ */ jsxs("dl", { className: "container-title-category", children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "식당 이름" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-title", children: title }),
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "업종" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-category", children: category })
      ] }),
      /* @__PURE__ */ jsxs("dl", { children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "주소" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-address", children: address })
      ] })
    ] }) })
  ] });
}
function List({ likeList }) {
  return /* @__PURE__ */ jsx("div", { children: likeList.length > 0 ? likeList.map((list) => {
    return /* @__PURE__ */ jsx(ListItem, { list: list._id }, Math.random());
  }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
    /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
    /* @__PURE__ */ jsx("p", { children: "목록이 없어요." })
  ] }) });
}
function ButtonGroup() {
  const dispatch = useAppDispatch();
  const countChecked = useAppSelector((state) => state.myListSlice.countChecked);
  const restaurantToDelete = useAppSelector((state) => state.myListSlice.restaurantToMove);
  async function handleDelete() {
    if (restaurantToDelete.length > 0) {
      const deletePromise = restaurantToDelete.map((item) => deleteLikeList(item));
      try {
        const result = await Promise.all(deletePromise);
        result.forEach((_, i) => {
          if (i === result.length - 1)
            window.location.reload();
        });
      } catch (err) {
        console.error("삭제 중 오류가 발생했습니다.", err);
      }
    }
  }
  async function deleteLikeList(id) {
    const res = await fetch(`${API_URL}/users/like/${id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    return data;
  }
  function clearCheckbox() {
    dispatch(RESET_CHECKED());
    dispatch(RESET_RESTAURANT_LIST([]));
  }
  return /* @__PURE__ */ jsxs("div", { className: "container-button-move like", children: [
    /* @__PURE__ */ jsx("button", { type: "reset", onClick: clearCheckbox, children: "선택 해제" }),
    /* @__PURE__ */ jsxs("button", { type: "button", disabled: countChecked ? false : true, onClick: handleDelete, children: [
      /* @__PURE__ */ jsx("span", { className: "txt-copy-del", children: "삭제" }),
      /* @__PURE__ */ jsx("span", { children: countChecked })
    ] })
  ] });
}
function Form({ likeList }) {
  return /* @__PURE__ */ jsxs("form", { children: [
    /* @__PURE__ */ jsx(List, { likeList }),
    /* @__PURE__ */ jsx(ButtonGroup, {})
  ] });
}
function CloseButton() {
  const dispatch = useAppDispatch();
  function handleClose() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.remove("modal-mode");
    dispatch(DELETE_LIKELIST_MODAL(false));
    dispatch(RESET_CHECKED());
    dispatch(RESET_RESTAURANT_LIST([]));
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) });
}
function DeleteMultiLike({ userInfo }) {
  const [show, setShow] = useState(false);
  const [likeList, setLikeList] = useState([]);
  const deleteLikeListModelOn = useAppSelector((state) => state.myListSlice.deleteLikeListModalOn);
  useEffect(() => {
    if (deleteLikeListModelOn)
      setShow(true);
    else
      setShow(false);
  }, [deleteLikeListModelOn]);
  useEffect(() => {
    if (userInfo !== null) {
      getLikeList().then((data) => {
        if (data.success) {
          setLikeList(data.likeList);
        }
      });
    }
  }, [userInfo]);
  async function getLikeList() {
    const res = await fetch(`${API_URL}/users/like`, {
      credentials: "include",
      method: "GET"
    });
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "목록 삭제" }),
    /* @__PURE__ */ jsx(Form, { likeList }),
    /* @__PURE__ */ jsx(CloseButton, {})
  ] });
}
function ModalGroup({ userInfo }) {
  const on = useAppSelector(
    (state) => state.myListSlice.orderModalOn || state.myListSlice.addGroupModalOn || state.myListSlice.moveListModalOn || state.myListSlice.copyModalOn || state.myListSlice.deleteLikeListModalOn
  );
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
      dispatch(ORDER_MODAL(false));
      dispatch(ADD_GROUP_MODAL(false));
      dispatch(MOVE_LIST_MODAL(false));
      dispatch(COPY_MODAL(false));
      dispatch(DELETE_LIKELIST_MODAL(false));
      dispatch(SET_GROUP_NAME(""));
      dispatch(ICON_STANDARD("/images/icon-star.svg"));
      dispatch(RESET_CHECKED());
      dispatch(RESET_RESTAURANT_LIST([]));
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: `modal-group ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx(GroupOrderModal, {}),
    /* @__PURE__ */ jsx(AddGroupModal, { userInfo }),
    /* @__PURE__ */ jsx(MoveListModal, { userInfo }),
    /* @__PURE__ */ jsx(WhereToCopyModal, { userInfo }),
    /* @__PURE__ */ jsx(DeleteMultiLike, { userInfo })
  ] });
}
export {
  ModalGroup as M
};
