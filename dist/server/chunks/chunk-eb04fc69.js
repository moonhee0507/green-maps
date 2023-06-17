import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef, useCallback } from "react";
import { I as IMG_URL, A as API_URL } from "./chunk-94504c62.js";
import { u as useAppDispatch } from "./chunk-7f101d2c.js";
import { P as PROFILE_IMAGE_MODAL, a as PROFILE_NICKNAME_MODAL, S as SET_NICKNAME, b as PROFILE_PASSWORD_MODAL, d as SET_USERID } from "./chunk-d2c63902.js";
import { a as appModalMode } from "./chunk-db98b5a2.js";
import { R as ReviewListItem } from "./chunk-27b00c15.js";
import { P as PostList } from "./chunk-97a06de1.js";
import "react-redux";
import "@reduxjs/toolkit";
import "./chunk-0c3eed3e.js";
import "./chunk-edfa0bc8.js";
import "./chunk-4ef07e33.js";
import "./chunk-fbafafc9.js";
import "isomorphic-dompurify";
function Notice({ host }) {
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
  const { nickName, userId, host } = userInfo;
  const dispatch = useAppDispatch();
  const handleEditProfileImg = () => {
    appModalMode(true);
    dispatch(PROFILE_IMAGE_MODAL(true));
  };
  const handleEditNickName = () => {
    appModalMode(true);
    dispatch(PROFILE_NICKNAME_MODAL(true));
    dispatch(SET_NICKNAME(nickName));
  };
  const handleEditPassword = () => {
    appModalMode(true);
    dispatch(PROFILE_PASSWORD_MODAL(true));
    dispatch(SET_USERID(userId));
  };
  return /* @__PURE__ */ jsxs("li", { className: "list-account", children: [
    /* @__PURE__ */ jsx("p", { children: "계정" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { onClick: handleEditProfileImg, className: "list-edit", children: "프로필 사진 변경" }),
      /* @__PURE__ */ jsx("li", { onClick: handleEditNickName, className: "list-edit", children: "닉네임 변경" }),
      host === "local" ? /* @__PURE__ */ jsx("li", { onClick: handleEditPassword, className: "list-edit", children: "비밀번호 변경" }) : null
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
        credentials: "include",
        method: "POST"
      });
    }
    const res = await fetch(`${API_URL}/users/logout`, {
      credentials: "include",
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
    /* @__PURE__ */ jsx(Notice, { host: userInfo.host }),
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
  MyMain as default
};
