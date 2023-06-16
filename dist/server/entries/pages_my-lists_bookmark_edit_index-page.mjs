import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-dcb05bf0.js";
import { i as imgClose } from "../chunks/chunk-0eea5c60.js";
import { a as useAppDispatch, u as useAppSelector } from "../chunks/chunk-0e4e6c3d.js";
import { E as EDIT_GROUP_MODAL, f as SET_TARGET_GROUP, I as ICON_STANDARD, S as SET_GROUP_NAME, g as COMPARE_ICON, O as ORDER_STANDARD, a as ORDER_MODAL } from "../chunks/chunk-1a5b0e59.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { I as IconSelection } from "../chunks/chunk-f2c28349.js";
import { navigate } from "vite-plugin-ssr/client/router";
import "react-redux";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-24b72a12.js";
import "../chunks/chunk-edfa0bc8.js";
function Notice() {
  return /* @__PURE__ */ jsx("div", { className: "container-notice", children: /* @__PURE__ */ jsx("em", { children: "기본 그룹은 편집할 수 없습니다." }) });
}
function GroupInfo({ groupInfo, bookmarkList }) {
  const { groupIcon, name } = groupInfo;
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (bookmarkList.length === 0)
      setCount(0);
    if (bookmarkList.length > 0) {
      const sameName = bookmarkList.filter((list) => list.groupName === name);
      setCount(sameName.length);
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "style-wrapper-groupname-info", children: [
    /* @__PURE__ */ jsx("div", { className: "container-groupicon", children: /* @__PURE__ */ jsx("img", { src: groupIcon, alt: "그룹 아이콘", style: { width: "100%", height: "100%" } }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "txt-groupname", children: name }),
      /* @__PURE__ */ jsxs("p", { className: "txt-restaurant-count", children: [
        "개수 ",
        /* @__PURE__ */ jsx("span", { className: "num-restaurant-count", children: count })
      ] })
    ] })
  ] });
}
const imgEdit = "/images/icon-edit.svg";
function ButtonGroup({ groupInfo, userInfo }) {
  const dispatch = useAppDispatch();
  function handleEdit() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
    dispatch(EDIT_GROUP_MODAL(true));
    dispatch(SET_TARGET_GROUP(groupInfo.name));
    dispatch(ICON_STANDARD(groupInfo.groupIcon));
  }
  async function handleDelete() {
    if (confirm("해당 그룹을 삭제하시겠습니까?")) {
      const userId = userInfo == null ? void 0 : userInfo.userId;
      const groupId = groupInfo._id;
      await fetch(`${API_URL}/bookmark/${groupId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId })
      }).then((res) => res.json()).then((data) => {
        if (data.success) {
          alert("북마크 그룹이 삭제되었습니다.");
          window.location.reload();
        } else {
          alert("다시 시도해주세요.");
        }
      });
    }
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("button", { className: "button-edit-group", type: "button", "aria-label": "그룹 수정 버튼", onClick: handleEdit, children: /* @__PURE__ */ jsx("img", { src: imgEdit, alt: "수정 아이콘" }) }),
    /* @__PURE__ */ jsx("button", { className: "button-delete-group", type: "button", "aria-label": "그룹 삭제 버튼", onClick: handleDelete, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "삭제 아이콘" }) })
  ] });
}
function GroupNameList({
  userInfo,
  bookmarkList,
  groupList
}) {
  const [arrGroupName, setArrGroupName] = useState(null);
  useEffect(() => {
    if (groupList !== null) {
      setArrGroupName(groupList);
    }
  }, [groupList]);
  return /* @__PURE__ */ jsx("ul", { children: arrGroupName !== null && arrGroupName.map((groupInfo) => {
    return /* @__PURE__ */ jsx(
      GroupNameListItem,
      {
        userInfo,
        groupInfo,
        bookmarkList
      },
      Math.random()
    );
  }) });
}
function GroupNameListItem({
  userInfo,
  groupInfo,
  bookmarkList
}) {
  return /* @__PURE__ */ jsx("li", { className: "li-bookmarkgroup reuse", children: /* @__PURE__ */ jsxs("div", { className: "style-wrapper-groupname", children: [
    /* @__PURE__ */ jsx(GroupInfo, { groupInfo, bookmarkList }),
    groupInfo.name !== "기본 그룹" && /* @__PURE__ */ jsx(ButtonGroup, { userInfo, groupInfo })
  ] }) });
}
function GroupNameInput() {
  const dispatch = useAppDispatch();
  const initialName = useAppSelector((state) => state.myListSlice.targetGroup);
  const groupName = useAppSelector((state) => state.myListSlice.groupName);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (groupName === null) {
      setInputValue(initialName);
    }
    if (groupName === "") {
      setInputValue("");
    }
  }, [groupName, initialName]);
  function handleChange(event) {
    setInputValue(event.target.value);
    dispatch(SET_GROUP_NAME(event.target.value));
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "groupNameForEdit", className: "sr-only", children: "그룹명" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        id: "groupNameForEdit",
        placeholder: "그룹명을 입력해 주세요.",
        maxLength: 20,
        minLength: 1,
        onChange: handleChange,
        value: inputValue
      }
    )
  ] });
}
function CompleteButton({ userInfo, groupList }) {
  const [show, setShow] = useState({ disabled: true });
  const groupName = useAppSelector((state) => state.myListSlice.groupName);
  const groupIcon = useAppSelector((state) => state.myListSlice.selectedIcon);
  const targetGroupName = useAppSelector((state) => state.myListSlice.targetGroup);
  const compareIcon = useAppSelector((state) => state.myListSlice.sameIcon);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (groupList !== null) {
      const originIcon = groupList.filter((list) => list.name === targetGroupName)[0].groupIcon;
      dispatch(COMPARE_ICON(originIcon === groupIcon));
    }
  }, [groupIcon]);
  useEffect(() => {
    if (groupName !== null && groupName !== "" && groupName !== targetGroupName || compareIcon === false) {
      setShow({ disabled: false });
    } else {
      setShow({ disabled: true });
    }
  }, [groupName, compareIcon, targetGroupName, compareIcon]);
  async function handleClick() {
    if (userInfo !== null && groupList !== null) {
      const arrGroupName = groupList.map((group) => group.name);
      if (arrGroupName.includes(groupName || targetGroupName)) {
        alert("중복된 그룹명은 사용할 수 없습니다.");
      } else {
        const { userId } = userInfo;
        const groupId = groupList.filter((list) => list.name === targetGroupName)[0]._id;
        const res = await fetch(`${API_URL}/bookmark/update`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId,
            groupId,
            name: groupName || targetGroupName,
            groupIcon
          })
        });
        const data = await res.json();
        if (data.success === true) {
          window.location.reload();
        } else {
          alert("다시 시도해주세요.");
        }
      }
    } else {
      alert("로그아웃 되었습니다.\n다시 로그인해주세요.");
      navigate("/login");
    }
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: `button-groupname-complete ${show ? "on" : ""}`, onClick: handleClick, children: "완료" });
}
function EditGroupModal({ userInfo, groupList }) {
  const dispatch = useAppDispatch();
  const editGroupModalOn = useAppSelector((state) => state.myListSlice.editGroupModalOn);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (editGroupModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [editGroupModalOn]);
  function handleClose() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.remove("modal-mode");
    dispatch(EDIT_GROUP_MODAL(false));
    dispatch(SET_GROUP_NAME(null));
    dispatch(ICON_STANDARD("/images/icon-star.svg"));
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "그룹 수정" }),
    /* @__PURE__ */ jsxs("form", { action: "", children: [
      /* @__PURE__ */ jsx(GroupNameInput, {}),
      /* @__PURE__ */ jsx(IconSelection, {}),
      /* @__PURE__ */ jsx(CompleteButton, { userInfo, groupList })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) })
  ] });
}
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
function ModalGroup({ userInfo, groupList }) {
  const on = useAppSelector((state) => state.myListSlice.editGroupModalOn);
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
      dispatch(EDIT_GROUP_MODAL(false));
      dispatch(SET_GROUP_NAME(null));
      dispatch(ICON_STANDARD("/images/icon-star.svg"));
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: `modal-group ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx(GroupOrderModal, {}),
    /* @__PURE__ */ jsx(EditGroupModal, { userInfo, groupList })
  ] });
}
function Page(pageContext) {
  const { isLoggedIn, info } = pageContext.user;
  const [groupList, setGroupList] = useState(null);
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch(`${API_URL}/bookmark/${info == null ? void 0 : info.userId}`);
        const data = await res.json();
        setGroupList(data.groupList);
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "그룹 목록 편집" }),
    /* @__PURE__ */ jsx(GroupListMain, { userInfo: info, groupList }),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn }),
    /* @__PURE__ */ jsx(ModalGroup, { userInfo: info, groupList })
  ] });
}
function GroupListMain({ userInfo, groupList }) {
  const { bookmarkList } = userInfo;
  return /* @__PURE__ */ jsx("main", { className: "main-group-list", children: /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "내 북마크 그룹 목록" }),
    /* @__PURE__ */ jsx(Notice, {}),
    /* @__PURE__ */ jsx(GroupNameList, { userInfo, bookmarkList, groupList })
  ] }) });
}
export {
  Page
};
