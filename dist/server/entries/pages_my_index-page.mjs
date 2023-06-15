import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useCallback } from "react";
import { T as TopBar } from "../chunks/chunk-45dccc61.js";
import { N as NavBar } from "../chunks/chunk-1ce52716.js";
import { I as IMG_URL, A as API_URL } from "../chunks/chunk-cd236232.js";
import { a as useAppDispatch, u as useAppSelector } from "../chunks/chunk-c407c4c8.js";
import { P as PROFILE_IMAGE_MODAL, a as PROFILE_NICKNAME_MODAL, S as SET_NICKNAME, b as PROFILE_PASSWORD_MODAL, c as SET_USERID, E as EDIT_NICKNAME, d as PASS_CURRENT_PASSWORD } from "../chunks/chunk-ef8ab02b.js";
import { R as ReviewListItem } from "../chunks/chunk-29db5cb0.js";
import { P as PostList } from "../chunks/chunk-d5b7632a.js";
import { r as randomizeFileName } from "../chunks/chunk-8649d624.js";
import { i as imgClose } from "../chunks/chunk-0eea5c60.js";
import { v as validatePassword } from "../chunks/chunk-22884288.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { E as EDIT_DELETE_NOTIFY_MODAL, S as SAME_USER_OWNER, a as SET_REVIEW_ID, b as SET_RESTAURANT_ID } from "../chunks/chunk-4ef07e33.js";
import "react-redux";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
import "../chunks/chunk-24b72a12.js";
import "../chunks/chunk-0c3eed3e.js";
import "../chunks/chunk-edfa0bc8.js";
import "../chunks/chunk-b328c29b.js";
import "isomorphic-dompurify";
function Notice$1({ host }) {
  return /* @__PURE__ */ jsx("div", { className: "container-notice profile", children: /* @__PURE__ */ jsx("em", { children: /* @__PURE__ */ jsxs("span", { children: [
    (() => {
      switch (host) {
        case "local":
          return "자체 계정";
        case "kakao":
          return "다음카카오 계정";
        case "naver":
          return "네이버 계정";
        default:
          return "자체 계정";
      }
    })(),
    " ",
    "회원 입니다."
  ] }) }) });
}
const defaultProfile = "/images/default-profile.png";
function MyProfile({ userInfo }) {
  return /* @__PURE__ */ jsxs("li", { className: "style-wrapper-profile", children: [
    /* @__PURE__ */ jsx(ProfileImage, { userInfo }),
    /* @__PURE__ */ jsx(ProfileDetail, { userInfo })
  ] });
}
function ProfileImage({ userInfo }) {
  const { profileImage } = userInfo;
  const [src, setSrc] = useState(defaultProfile);
  useEffect(() => {
    if (userInfo.profileImage) {
      if (profileImage.includes("http://")) {
        setSrc(profileImage);
      } else if (profileImage) {
        setSrc(`${IMG_URL}/${profileImage}`);
      }
    } else {
      setSrc(defaultProfile);
    }
  }, [userInfo]);
  return /* @__PURE__ */ jsxs("dl", { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "프로필 사진" }),
    /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsx("div", { className: "container-profile-img", children: /* @__PURE__ */ jsx("img", { src, alt: "프로필 사진" }) }) })
  ] });
}
function ProfileDetail({ userInfo }) {
  const { nickName, bookmarkList, likeList, userId } = userInfo;
  return /* @__PURE__ */ jsxs("dl", { className: "wrapper-id-bookmark", children: [
    /* @__PURE__ */ jsxs("dl", { className: "container-id-nick", children: [
      /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "아이디" }),
      /* @__PURE__ */ jsx("dd", { className: "txt-profile-userId", children: userId }),
      /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "닉네임" }),
      /* @__PURE__ */ jsx("dd", { className: "txt-profile-nickName", children: nickName })
    ] }),
    /* @__PURE__ */ jsxs("dl", { className: "container-profile-bookmark-like", children: [
      /* @__PURE__ */ jsx("dt", { children: "북마크" }),
      /* @__PURE__ */ jsx("dd", { className: "num-profile-bookmark", children: bookmarkList.length }),
      /* @__PURE__ */ jsx("dt", { children: "좋아요" }),
      /* @__PURE__ */ jsx("dd", { className: "num-profile-like", children: likeList.length })
    ] })
  ] });
}
function ProfileEdit({ userInfo }) {
  const { nickName, userId } = userInfo;
  const dispatch = useAppDispatch();
  const handleEditProfileImg = () => {
    modalModeOn();
    dispatch(PROFILE_IMAGE_MODAL(true));
  };
  const handleEditNickName = () => {
    modalModeOn();
    dispatch(PROFILE_NICKNAME_MODAL(true));
    dispatch(SET_NICKNAME(nickName));
  };
  const handleEditPassword = () => {
    modalModeOn();
    dispatch(PROFILE_PASSWORD_MODAL(true));
    dispatch(SET_USERID(userId));
  };
  function modalModeOn() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
  }
  return /* @__PURE__ */ jsxs("li", { className: "list-account", children: [
    /* @__PURE__ */ jsx("p", { children: "계정" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { onClick: handleEditProfileImg, className: "list-edit", children: "프로필 사진 변경" }),
      /* @__PURE__ */ jsx("li", { onClick: handleEditNickName, className: "list-edit", children: "닉네임 변경" }),
      /* @__PURE__ */ jsx("li", { onClick: handleEditPassword, className: "list-edit", children: "비밀번호 변경" })
    ] })
  ] });
}
function CustomerService() {
  return /* @__PURE__ */ jsxs("li", { className: "list-account", children: [
    /* @__PURE__ */ jsx("p", { children: "안내" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { className: "list-edit", children: /* @__PURE__ */ jsx("a", { href: "", children: "공지사항" }) }),
      /* @__PURE__ */ jsx("li", { className: "list-edit", children: /* @__PURE__ */ jsx("a", { href: "", children: "1:1 문의" }) }),
      /* @__PURE__ */ jsx("li", { className: "list-edit", children: /* @__PURE__ */ jsx("a", { href: "", children: "자주 찾는 질문" }) })
    ] })
  ] });
}
function ProfileSection({ userInfo }) {
  async function handleLogout() {
    if (userInfo.host === "kakao") {
      await fetch(`${API_URL}/oauth/kakao/logout`, {
        method: "POST"
      });
    }
    const res = await fetch(`${API_URL}/users/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.ok === true) {
      window.localStorage.removeItem("#1");
      window.localStorage.removeItem("#2");
      window.location.href = "/";
    }
  }
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "프로필" }),
    /* @__PURE__ */ jsx(Notice$1, { host: userInfo.host }),
    /* @__PURE__ */ jsxs("ul", { className: "ul-profile", children: [
      /* @__PURE__ */ jsx(MyProfile, { userInfo }),
      /* @__PURE__ */ jsx(ProfileEdit, { userInfo }),
      /* @__PURE__ */ jsx(CustomerService, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: "style-wrapper-logout", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: handleLogout, className: "styled-button", children: "로그아웃" }) })
  ] });
}
function MyReviewSection({ userInfo, reviews }) {
  const [restaurantId, setRestaurantId] = useState("");
  useEffect(() => {
    if (reviews && reviews.length > 0) {
      reviews.forEach((review) => {
        if (typeof review.restaurant === "string") {
          setRestaurantId(review.restaurant);
        } else {
          setRestaurantId(review.restaurant._id);
        }
      });
    }
  }, [reviews]);
  return /* @__PURE__ */ jsxs("section", { className: "section-review", children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "식당 리뷰" }),
    /* @__PURE__ */ jsx("div", { className: "wrapper-review", children: reviews && reviews.length > 0 ? reviews.map((review, i) => /* @__PURE__ */ jsx(
      ReviewListItem,
      {
        item: review,
        userInfo,
        restaurantId,
        isFirst: i === 0
      },
      Math.random()
    )) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
      /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
      /* @__PURE__ */ jsx("p", { children: "리뷰가 아직 없어요." })
    ] }) })
  ] });
}
const arrSummary = ["작성한 글", "댓글 단 글"];
function MyCommunitySection({ userInfo }) {
  const [showSection, setShowSection] = useState(window.localStorage.getItem("#2") || "작성한 글");
  const [posts, setPosts] = useState(null);
  const [summaryCounts, setSummaryCounts] = useState({ 작성한글: 0, 댓글단글: 0 });
  const { nickName } = userInfo;
  const listsRef = useRef([]);
  useEffect(() => {
    const $2 = window.localStorage.getItem("#2");
    const lists = [...document.querySelectorAll(".list-summary-community")];
    listsRef.current = lists;
    if ($2) {
      const index = arrSummary.indexOf($2);
      if (index !== -1) {
        lists[index].classList.add("on");
        setShowSection($2);
      }
    } else {
      lists[0].classList.add("on");
      setShowSection("작성한 글");
    }
    getMyPost(nickName).then((data) => {
      setSummaryCounts((prevCounts) => ({
        ...prevCounts,
        작성한글: data.posts.length
      }));
    });
    getMyComment(nickName).then((data) => {
      setSummaryCounts((prevCounts) => ({
        ...prevCounts,
        댓글단글: data.posts.length
      }));
    });
  }, []);
  useEffect(() => {
    if (showSection === "작성한 글") {
      getMyPost(nickName).then((data) => {
        if (data.success === true) {
          if (data.posts) {
            setPosts(data.posts);
          } else
            setPosts(null);
        } else
          setPosts(null);
      });
    } else if (showSection === "댓글 단 글") {
      getMyComment(nickName).then((data) => {
        if (data.success === true) {
          if (data.posts) {
            setPosts(data.posts);
          } else
            setPosts(null);
        } else
          setPosts(null);
      });
    }
  }, [showSection]);
  function initializeListStyle() {
    listsRef.current.forEach((list) => {
      if (list)
        list.classList.remove("on");
    });
  }
  const getMyPost = useCallback(async (nickName2) => {
    const res = await fetch(`${API_URL}/posts/my?boundary=post&owner=${nickName2}`);
    const data = await res.json();
    return data;
  }, []);
  const getMyComment = useCallback(async (nickName2) => {
    const res = await fetch(`${API_URL}/posts/my?boundary=comment&owner=${nickName2}`);
    const data = await res.json();
    return data;
  }, []);
  function handleListClick(event, type) {
    var _a, _b;
    const clickedNode = event.currentTarget;
    initializeListStyle();
    clickedNode.classList.add("on");
    if (type === "작성한 글") {
      getMyPost(nickName).then((data) => {
        if (data.success === true) {
          if (data.posts) {
            setPosts(data.posts);
          } else {
            setPosts(null);
          }
        } else {
          setPosts(null);
        }
      });
    } else if (type === "댓글 단 글") {
      getMyComment(nickName).then((data) => {
        if (data.success === true) {
          if (data.posts) {
            setPosts(data.posts);
          } else {
            setPosts(null);
          }
        } else {
          setPosts(null);
        }
      });
    }
    if ((_a = clickedNode.lastElementChild) == null ? void 0 : _a.innerHTML) {
      window.localStorage.setItem("#2", (_b = clickedNode.lastElementChild) == null ? void 0 : _b.innerHTML);
    }
  }
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "내가 쓴 게시글 및 댓글" }),
    /* @__PURE__ */ jsxs("ul", { className: "ul-summary-community", children: [
      /* @__PURE__ */ jsxs(
        "li",
        {
          className: `list-summary-community ${showSection === "작성한 글" ? "on" : ""}`,
          onClick: (event) => handleListClick(event, "작성한 글"),
          children: [
            /* @__PURE__ */ jsx("p", { children: summaryCounts["작성한글"] }),
            /* @__PURE__ */ jsx("p", { children: "작성한 글" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "li",
        {
          className: `list-summary-community ${showSection === "댓글 단 글" ? "on" : ""}`,
          onClick: (event) => handleListClick(event, "댓글 단 글"),
          children: [
            /* @__PURE__ */ jsx("p", { children: summaryCounts["댓글단글"] }),
            /* @__PURE__ */ jsx("p", { children: "댓글 단 글" })
          ]
        }
      )
    ] }),
    posts && posts.length > 0 ? /* @__PURE__ */ jsx(PostList, { posts, limit: 20 }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
      /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
      /* @__PURE__ */ jsx("p", { children: "목록이 없어요." })
    ] })
  ] });
}
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
    const res = await fetch(`${API_URL}/users/check-nickname?nickname=${nickName}`);
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: value1 })
      });
      const data = await res.json();
      if (data.success) {
        const res2 = await fetch(`${API_URL}/users/logout`, {
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
function Page(pageContext) {
  const { isLoggedIn, info } = pageContext.user;
  const { reviews } = pageContext;
  useEffect(() => {
    if (isLoggedIn === false) {
      alert("로그인 페이지로 이동합니다.");
      window.location.href = "/login";
    }
  }, []);
  return isLoggedIn && info && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "내 정보" }),
    /* @__PURE__ */ jsx(MyMain, { userInfo: info, reviews }),
    /* @__PURE__ */ jsx(NavBar, { isLoggedIn }),
    /* @__PURE__ */ jsx(ModalGroup, {})
  ] });
}
function MyMain({ userInfo, reviews }) {
  const [showSection, setShowSection] = useState("프로필");
  useEffect(() => {
    const $1 = window.localStorage.getItem("#1");
    const arrTitle = ["프로필", "식당 리뷰", "커뮤니티 활동"];
    const lists = Array.from(document.querySelectorAll(".list-title"));
    if ($1) {
      lists[arrTitle.indexOf($1)].classList.add("on");
      setShowSection($1);
    } else {
      lists[0].classList.add("on");
    }
  }, []);
  function handleClick(event) {
    const clickedNode = event.currentTarget;
    const lists = Array.from(document.querySelectorAll(".list-title"));
    lists.forEach((list) => list.classList.remove("on"));
    clickedNode.classList.add("on");
    setShowSection(clickedNode.innerText);
    window.localStorage.setItem("#1", clickedNode.innerText);
  }
  return /* @__PURE__ */ jsxs("main", { className: "main-my", children: [
    /* @__PURE__ */ jsxs("ul", { className: "ul-title-bar", children: [
      /* @__PURE__ */ jsx("li", { className: "list-title", onClick: handleClick, children: "프로필" }),
      /* @__PURE__ */ jsx("li", { className: "list-title", onClick: handleClick, children: "식당 리뷰" }),
      /* @__PURE__ */ jsx("li", { className: "list-title", onClick: handleClick, children: "커뮤니티 활동" })
    ] }),
    (() => {
      switch (showSection) {
        case "프로필":
          return /* @__PURE__ */ jsx(ProfileSection, { userInfo });
        case "식당 리뷰":
          return /* @__PURE__ */ jsx(MyReviewSection, { userInfo, reviews });
        case "커뮤니티 활동":
          return /* @__PURE__ */ jsx(MyCommunitySection, { userInfo });
        default:
          return /* @__PURE__ */ jsx(ProfileSection, { userInfo });
      }
    })()
  ] });
}
export {
  Page
};
