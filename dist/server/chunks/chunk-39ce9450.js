import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { i as isSameDay } from "./chunk-0c3eed3e.js";
import { A as API_URL } from "./chunk-94504c62.js";
import { i as imgHeart } from "./chunk-edfa0bc8.js";
import { a as useAppDispatch, u as useAppSelector } from "./chunk-c407c4c8.js";
import { E as EDIT_DELETE_NOTIFY_MODAL, S as SAME_USER_OWNER, a as SET_REVIEW_ID, b as SET_RESTAURANT_ID } from "./chunk-4ef07e33.js";
function Owner(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "작성자" }),
    /* @__PURE__ */ jsx("dd", { className: "txt-review-owner", children: props.owner })
  ] });
}
function Date(props) {
  var _a, _b;
  const { registeredAt } = props;
  const date = isSameDay(registeredAt) ? `${(_a = registeredAt.split(". ").at(-1)) == null ? void 0 : _a.split(":")[0]}:${(_b = registeredAt.split(". ").at(-1)) == null ? void 0 : _b.split(":")[1]}` : registeredAt.slice(0, 13);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "작성일자" }),
    /* @__PURE__ */ jsx("dd", { className: "txt-review-date", children: date })
  ] });
}
function Image(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrSort = [...props.photoList].sort((a, b) => {
    if (a.pick && !b.pick) {
      return -1;
    } else if (!a.pick && b.pick) {
      return 1;
    } else {
      return 0;
    }
  });
  function handleNextButton() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arrSort.length);
  }
  function handlePrevButton() {
    setCurrentIndex((prevIndex) => (prevIndex + arrSort.length - 1) % arrSort.length);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "사진" }),
    /* @__PURE__ */ jsx("dd", { className: "wrapper-review-img", children: /* @__PURE__ */ jsxs("div", { className: "container-review-img", children: [
      /* @__PURE__ */ jsx("p", { className: "txt-count-img", "aria-label": "사진 개수 정보", children: `${currentIndex + 1} / ${arrSort.length}` }),
      /* @__PURE__ */ jsx("button", { type: "button", className: "button-move-img prev", onClick: handlePrevButton }),
      arrSort.map((item, i) => {
        return /* @__PURE__ */ jsx(
          "img",
          {
            src: `https://${"moonhee-greenmaps"}.s3.${"ap-northeast-2"}.amazonaws.com/${item.src}`,
            style: { display: i === currentIndex ? "block" : "none" }
          },
          i
        );
      }),
      /* @__PURE__ */ jsx("button", { type: "button", className: "button-move-img next", onClick: handleNextButton })
    ] }) })
  ] });
}
function ReviewLikeButton(props) {
  const { reviewId, like } = props;
  const [userId, setUserId] = useState(null);
  const [likeCount, setLikeCount] = useState(like ? like.length : 0);
  const [buttonOn, setButtonOn] = useState(false);
  useEffect(() => {
    getUserId().then((userId2) => {
      setUserId(userId2);
    }).catch((err) => console.error(err));
    async function getUserId() {
      const res = await fetch(`${API_URL}/users/`, {
        credentials: "include",
        method: "GET"
      });
      const data = await res.json();
      return data.user.userId;
    }
  }, []);
  useEffect(() => {
    if (like) {
      setButtonOn(like.some((userInfo) => userInfo.user === userId));
    }
  }, [userId]);
  function handleClick() {
    buttonOn ? delLike() : addLike();
    setButtonOn(buttonOn ? false : true);
  }
  async function addLike() {
    const res = await fetch(`${API_URL}/reviews/${reviewId}/like`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: userId })
    });
    if (res.ok) {
      setLikeCount(likeCount + 1);
    } else
      throw new Error();
  }
  async function delLike() {
    const res = await fetch(`${API_URL}/reviews/${reviewId}/like`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: userId })
    });
    if (res.ok) {
      setLikeCount(likeCount - 1);
    } else
      throw new Error();
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "좋아요" }),
    /* @__PURE__ */ jsxs("dd", { className: "container-button-txt", children: [
      /* @__PURE__ */ jsx("button", { className: "button-review-like", type: "button", onClick: handleClick, children: /* @__PURE__ */ jsx("img", { src: imgHeart, alt: "좋아요 이미지", className: `img-like review ${buttonOn ? "on" : ""}` }) }),
      /* @__PURE__ */ jsx("span", { "aria-label": "좋아요 개수", children: likeCount })
    ] })
  ] });
}
function Content(props) {
  return /* @__PURE__ */ jsxs("dl", { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "내용" }),
    /* @__PURE__ */ jsx("dd", { className: "txt-review-content", children: props.content })
  ] });
}
function MoreButton({
  userInfo,
  owner,
  reviewId,
  restaurantId
}) {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (userInfo)
      setUser(userInfo);
  }, [userInfo]);
  const handleClick = () => {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
    dispatch(EDIT_DELETE_NOTIFY_MODAL(true));
    dispatch(SAME_USER_OWNER((user == null ? void 0 : user.userId) === owner));
    dispatch(SET_REVIEW_ID(reviewId));
    dispatch(SET_RESTAURANT_ID(restaurantId));
  };
  return /* @__PURE__ */ jsx("button", { className: "button-more reviewitem", "aria-label": "더보기 버튼", onClick: handleClick });
}
function ReviewListItem({
  item,
  userInfo,
  restaurantId,
  isFirst
}) {
  const { _id, owner, registeredAt, photo, content, like, restaurant } = item;
  const [myPage] = useState(window.location.pathname === "/my");
  const listElement = useRef(null);
  const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
  useEffect(() => {
    if (isFirst && listElement.current) {
      if (currentPage !== 1) {
        listElement.current.scrollIntoView({ block: "center" });
      }
    }
  }, [currentPage]);
  return /* @__PURE__ */ jsxs("li", { ref: listElement, className: "list-review", children: [
    myPage ? /* @__PURE__ */ jsxs("p", { className: "txt-restaurant-in-my", children: [
      /* @__PURE__ */ jsx("em", { children: typeof restaurant !== "string" ? restaurant.title : "" }),
      "에 작성한 리뷰입니다."
    ] }) : null,
    /* @__PURE__ */ jsxs("article", { className: "container-reviewitem", children: [
      /* @__PURE__ */ jsx("h5", { className: "sr-only", children: "개별 리뷰" }),
      /* @__PURE__ */ jsxs("dl", { children: [
        /* @__PURE__ */ jsxs("div", { className: "style-wrapper-reviewitem", children: [
          /* @__PURE__ */ jsx(Owner, { owner }),
          /* @__PURE__ */ jsx(Date, { registeredAt }),
          /* @__PURE__ */ jsx(MoreButton, { userInfo, owner, reviewId: _id, restaurantId })
        ] }),
        photo && photo.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Image, { photoList: photo }),
          /* @__PURE__ */ jsxs("div", { className: "style-wrapper-reviewitem", children: [
            /* @__PURE__ */ jsx(ButtonGroup, { reviewId: _id, like: like || [] }),
            /* @__PURE__ */ jsx(Content, { content })
          ] })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-reviewitem only-text", children: [
          /* @__PURE__ */ jsx(Content, { content }),
          /* @__PURE__ */ jsx(ButtonGroup, { reviewId: _id, like: like || [] })
        ] })
      ] })
    ] })
  ] });
}
function ButtonGroup({ reviewId, like }) {
  return /* @__PURE__ */ jsxs("dl", { className: "container-like-comment", children: [
    /* @__PURE__ */ jsx(ReviewLikeButton, { reviewId, like }),
    /* @__PURE__ */ jsx(ReviewCommentButton, {})
  ] });
}
function ReviewCommentButton() {
  const handleClick = () => {
    window.alert("준비 중인 서비스입니다.");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "댓글" }),
    /* @__PURE__ */ jsxs("dd", { className: "container-button-txt", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": "리뷰 댓글 쓰기",
          className: "button-review-comment",
          onClick: handleClick
        }
      ),
      /* @__PURE__ */ jsx("span", { "aria-label": "댓글 개수", children: "0" })
    ] })
  ] });
}
export {
  ReviewListItem as R
};
