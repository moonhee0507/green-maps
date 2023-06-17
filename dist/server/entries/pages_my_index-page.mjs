import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useRef, useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-8405f720.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { u as useAppDispatch, a as useAppSelector } from "../chunks/chunk-7f101d2c.js";
import { P as PROFILE_IMAGE_MODAL, E as EDIT_NICKNAME, a as PROFILE_NICKNAME_MODAL, S as SET_NICKNAME, b as PROFILE_PASSWORD_MODAL, c as PASS_CURRENT_PASSWORD, d as SET_USERID } from "../chunks/chunk-d2c63902.js";
import { r as randomizeFileName } from "../chunks/chunk-8649d624.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { i as imgClose } from "../chunks/chunk-0eea5c60.js";
import { v as validatePassword } from "../chunks/chunk-22884288.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { E as EDIT_DELETE_NOTIFY_MODAL, S as SAME_USER_OWNER, a as SET_REVIEW_ID, b as SET_RESTAURANT_ID } from "../chunks/chunk-4ef07e33.js";
import { u as useCheckLoginStatus } from "../chunks/chunk-0d31e55c.js";
import { L as LoadingMain } from "../chunks/chunk-fa126bd4.js";
import "react-redux";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-24b72a12.js";
import "../chunks/chunk-dfb70939.js";
function EditImageButton() {
  const dispatch = useAppDispatch();
  const fileInput = useRef(null);
  const handleClick = () => {
    var _a;
    (_a = fileInput.current) == null ? void 0 : _a.click();
  };
  const handleChange = (event) => {
    const target = event.target;
    if (target.files !== null) {
      const file = target.files[0];
      const fileName = randomizeFileName() + "." + file.type.replace("image/", "");
      uploadImageToStorage(file, fileName);
    }
  };
  async function uploadImageToStorage(file, fileName) {
    try {
      const body = {
        name: `client/${fileName}`,
        type: file.type
      };
      const resUrl = await fetch(`${API_URL}/images/client`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await resUrl.json();
      const signedUrl = data.signedUrl;
      const res = await fetch(signedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type
        },
        body: file
      });
      if (res.ok) {
        await submitProfileImage(fileName);
      }
    } catch (err) {
      console.error(err);
    }
  }
  async function submitProfileImage(fileName) {
    try {
      await fetch(`${API_URL}/users/edit/profile`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ profileImage: `client/${fileName}` })
      });
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(PROFILE_IMAGE_MODAL(false));
      window.location.reload();
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        id: "fileInput",
        accept: "image/*",
        ref: fileInput,
        onChange: handleChange,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-groupname-order on", onClick: handleClick, children: "변경" })
  ] });
}
function DeleteImageButton() {
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    try {
      await fetch(`${API_URL}/users/edit/profile`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ profileImage: "" })
      });
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(PROFILE_IMAGE_MODAL(false));
      window.location.reload();
    }
  };
  return /* @__PURE__ */ jsx("button", { type: "button", className: "button-groupname-order on", onClick: handleClick, children: "삭제" });
}
function EditProfileImageModal() {
  const profileImageModalOn = useAppSelector((state) => state.profileSlice.profileImageModalOn);
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (profileImageModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [profileImageModalOn]);
  function handleClose() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.remove("modal-mode");
    dispatch(PROFILE_IMAGE_MODAL(false));
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "프로필 사진" }),
    /* @__PURE__ */ jsxs("div", { className: "container-button", children: [
      /* @__PURE__ */ jsx(EditImageButton, {}),
      /* @__PURE__ */ jsx(DeleteImageButton, {})
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) })
  ] });
}
function NickNameForm() {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const prevNickName = useAppSelector((state) => state.profileSlice.prevNickName);
  useEffect(() => {
    setInputValue(prevNickName);
  }, [prevNickName]);
  const handleChange = (event) => {
    const target = event.target;
    setInputValue(target.value);
    dispatch(EDIT_NICKNAME(target.value));
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: "form-edit-nickName",
      onSubmit: (event) => {
        event.preventDefault();
      },
      children: [
        /* @__PURE__ */ jsxs("p", { className: "num-count-nickName", children: [
          /* @__PURE__ */ jsx("span", { children: inputValue.length }),
          "/",
          /* @__PURE__ */ jsx("span", { children: "17" })
        ] }),
        /* @__PURE__ */ jsx("label", { htmlFor: "editNickNameInput", className: "sr-only", children: "닉네임" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "editNickNameInput",
            onChange: handleChange,
            value: inputValue,
            minLength: 1,
            maxLength: 17
          }
        )
      ]
    }
  );
}
function Notice() {
  return /* @__PURE__ */ jsx("div", { className: "container-notice edit-nickName", children: /* @__PURE__ */ jsx("em", { children: "한글, 영문, 숫자만 입력가능합니다." }) });
}
function isEmptyString(str) {
  return str.trim().length === 0;
}
function SubmitButton() {
  const prevNickName = useAppSelector((state) => state.profileSlice.prevNickName);
  const nextNickName = useAppSelector((state) => state.profileSlice.nextNickName);
  const [duplicate, setDuplicate] = useState(true);
  const [validString, setValidString] = useState(false);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    checkDuplicate(nextNickName);
    checkString(nextNickName);
  }, [nextNickName]);
  useEffect(() => {
    if (prevNickName !== nextNickName) {
      if (duplicate === false && validString === true) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else {
      setDisabled(true);
    }
  }, [duplicate, validString]);
  async function checkDuplicate(nickName) {
    const res = await fetch(`${API_URL}/users/check-nickname?nickname=${nickName}`, {
      credentials: "include",
      method: "GET"
    });
    const data = await res.json();
    setDuplicate(data.duplicated);
    return data;
  }
  function checkString(nickName) {
    const regex = /^[ㄱ-힣a-zA-Z0-9\s]{1,17}$/g;
    if (regex.test(nickName) && !isEmptyString(nickName)) {
      setValidString(true);
    } else {
      setValidString(false);
    }
  }
  const handleSubmit = () => {
    let nickname = nextNickName.trim();
    checkDuplicate(nickname).then((data) => {
      if (data.duplicated === true) {
        alert("닉네임 양옆 띄어쓰기를 제외하고 입력해주세요.");
      } else {
        editNickName(nickname);
      }
    });
  };
  async function editNickName(nickName) {
    try {
      const res = await fetch(`${API_URL}/users/edit/profile`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nickname: nickName })
      });
      const data = await res.json();
      if (data.success) {
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: "styled-button nickName", disabled, onClick: handleSubmit, children: (() => {
    if (duplicate) {
      return "이미 존재하는 닉네임입니다.";
    } else if (!validString) {
      return "올바른 닉네임을 입력하세요.";
    } else {
      return "완료";
    }
  })() });
}
function EditNickNameModal() {
  const dispatch = useAppDispatch();
  const profileNickNameModalOn = useAppSelector((state) => state.profileSlice.profileNickNameModalOn);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (profileNickNameModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [profileNickNameModalOn]);
  function handleClose() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.remove("modal-mode");
    dispatch(PROFILE_NICKNAME_MODAL(false));
    dispatch(SET_NICKNAME(""));
    dispatch(EDIT_NICKNAME(""));
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "닉네임 변경" }),
    /* @__PURE__ */ jsx(NickNameForm, {}),
    /* @__PURE__ */ jsx(Notice, {}),
    /* @__PURE__ */ jsx(SubmitButton, {}),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) })
  ] });
}
function NewPassword() {
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(true);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [isSame, setIsSame] = useState(false);
  const [validateString, setValidateString] = useState(false);
  useEffect(() => {
    if (value1 === value2) {
      setIsSame(true);
      if (validatePassword(value1)) {
        setValidateString(true);
      } else {
        setValidateString(false);
      }
    } else {
      setIsSame(false);
      setValidateString(false);
    }
  }, [value1, value2]);
  useEffect(() => {
    if (isSame && validateString) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [isSame, validateString]);
  const handleChangePW1 = (event) => {
    const target = event.target;
    setValue1(target.value);
  };
  const handleChangePW2 = (event) => {
    const target = event.target;
    setValue2(target.value);
  };
  const handleClick = async () => {
    try {
      const res = await fetch(`${API_URL}/users/edit/password`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: value1 })
      });
      const data = await res.json();
      if (data.success) {
        const res2 = await fetch(`${API_URL}/users/logout`, {
          credentials: "include",
          method: "POST"
        });
        const data2 = await res2.json();
        if (data2.success) {
          alert("비밀번호가 변경되었습니다.\n로그인 페이지로 이동합니다.");
          navigate("/login");
        } else {
          alert("다시 시도해주세요.");
        }
      } else {
        alert("다시 시도해주세요.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      dispatch(PROFILE_PASSWORD_MODAL(false));
      dispatch(PASS_CURRENT_PASSWORD(false));
      dispatch(SET_USERID(""));
      const app = document.querySelector(".app");
      app == null ? void 0 : app.classList.remove("modal-mode");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: (event) => event.preventDefault(), className: "form-new-password", children: [
      /* @__PURE__ */ jsx("p", { className: "txt-notice", children: "새로운 비밀번호를 입력해주세요." }),
      /* @__PURE__ */ jsx("div", { className: "container-notice password", children: /* @__PURE__ */ jsx("em", { children: "영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)" }) }),
      /* @__PURE__ */ jsx("label", { htmlFor: "nextPassword", className: "sr-only", children: "비밀번호" }),
      /* @__PURE__ */ jsx("input", { type: "password", id: "nextPassword", onChange: handleChangePW1, placeholder: "비밀번호" }),
      /* @__PURE__ */ jsx("label", { htmlFor: "confirmNextPassword", className: "sr-only", children: "비밀번호 재입력" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "password",
          id: "confirmNextPassword",
          onChange: handleChangePW2,
          placeholder: "비밀번호 재입력",
          minLength: 8,
          maxLength: 32
        }
      )
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, disabled, className: "styled-button thin", children: (() => {
      if (!isSame) {
        return "두 비밀번호가 일치하지 않습니다.";
      } else if (!validateString) {
        return "비밀번호 구성을 확인해주세요.";
      } else {
        return "완료";
      }
    })() })
  ] });
}
function CurrentPassword() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.profileSlice.userId);
  const inputElement = useRef(null);
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    const target = event.target;
    setValue(target.value);
  };
  const handleClick = async () => {
    const res = await fetch(`${API_URL}/users/check-password`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password: value })
    });
    const data = await res.json();
    if (data.success) {
      dispatch(PASS_CURRENT_PASSWORD(true));
    } else {
      dispatch(PASS_CURRENT_PASSWORD(false));
      alert("틀린 비밀번호입니다.");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: (event) => event.preventDefault(), className: "form-current-password", children: [
      /* @__PURE__ */ jsx("p", { className: "txt-notice", children: "그린맵 계정의 현재 비밀번호를 확인해주세요." }),
      /* @__PURE__ */ jsx("label", { htmlFor: "readOnlyUserId", className: "sr-only", children: "아이디" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "readOnlyUserId",
          readOnly: true,
          defaultValue: userId,
          className: "input-userid-in-profile"
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "prevPassword", className: "sr-only", children: "현재 비밀번호" }),
      /* @__PURE__ */ jsx("input", { type: "password", id: "prevPassword", onChange: handleChange, ref: inputElement, value })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, className: "styled-button thin", children: "완료" })
  ] });
}
function EditPasswordModal() {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const profilePasswordModalOn = useAppSelector((state) => state.profileSlice.profilePasswordModalOn);
  const passCurrentPassword = useAppSelector((state) => state.profileSlice.passCurrentPassword);
  useEffect(() => {
    if (profilePasswordModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [profilePasswordModalOn]);
  function handleClose() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.remove("modal-mode");
    dispatch(PROFILE_PASSWORD_MODAL(false));
    dispatch(PASS_CURRENT_PASSWORD(false));
    dispatch(SET_USERID(""));
  }
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "비밀번호 재설정" }),
    passCurrentPassword ? /* @__PURE__ */ jsx(NewPassword, {}) : /* @__PURE__ */ jsx(CurrentPassword, {}),
    /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) })
  ] });
}
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
  const on = useAppSelector(
    (state) => state.profileSlice.profileImageModalOn || state.profileSlice.profileNickNameModalOn || state.profileSlice.profilePasswordModalOn || state.reviewSlice.editDeleteNotifyModalOn
    // 리뷰 슬라이스 재사용
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
      dispatch(PROFILE_IMAGE_MODAL(false));
      dispatch(PROFILE_NICKNAME_MODAL(false));
      dispatch(SET_NICKNAME(""));
      dispatch(EDIT_NICKNAME(""));
      dispatch(PROFILE_PASSWORD_MODAL(false));
      dispatch(PASS_CURRENT_PASSWORD(false));
      dispatch(SET_USERID(""));
      dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
      dispatch(SAME_USER_OWNER(false));
      dispatch(SET_REVIEW_ID(""));
      dispatch(SET_RESTAURANT_ID(""));
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: `modal-group ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx(EditProfileImageModal, {}),
    /* @__PURE__ */ jsx(EditNickNameModal, {}),
    /* @__PURE__ */ jsx(EditPasswordModal, {}),
    /* @__PURE__ */ jsx(EditDeleteNotifyModal, {})
  ] });
}
const documentProps = {
  title: "내 정보 | Green Maps",
  description: "채식 식당 지도 서비스 마이 페이지"
};
const MyMain = React.lazy(() => import("../chunks/chunk-eb04fc69.js"));
function Page(pageContext) {
  const [isLoggedIn, info] = useCheckLoginStatus();
  const { reviews } = pageContext;
  return isLoggedIn && info ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "내 정보" }),
    /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: /* @__PURE__ */ jsx(MyMain, { userInfo: info, reviews }) }),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn }),
    /* @__PURE__ */ jsx(ModalGroup, {})
  ] }) : /* @__PURE__ */ jsx(LoadingMain, {});
}
export {
  Page,
  documentProps
};
