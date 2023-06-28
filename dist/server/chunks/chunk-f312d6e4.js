import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { u as useAppSelector, a as useAppDispatch } from "./chunk-0e4e6c3d.js";
import { A as API_URL } from "./chunk-94504c62.js";
import { i as imgHeart } from "./chunk-edfa0bc8.js";
import { S as Stars } from "./chunk-e0988469.js";
import { R as ReviewListItem } from "./chunk-b0bdffa2.js";
import { P as Pagination } from "./chunk-fd8cc104.js";
import "./chunk-0c3eed3e.js";
import "./chunk-4ef07e33.js";
import "@reduxjs/toolkit";
const imgBookmark = "/images/icon-bookmark.svg";
function BookmarkButton({ restaurantId, isLoggedIn }) {
  const dispatch = useDispatch();
  const hasBookmarkList = useCallback(async () => {
    if (isLoggedIn) {
      const res = await fetch(`${API_URL}/users/`, {
        credentials: "include",
        method: "GET"
      });
      const data = await res.json();
      return data.user.bookmarkList.some((v) => {
        return restaurantId === v._id;
      });
    }
  }, [restaurantId, isLoggedIn]);
  const delBookmark = useCallback(async () => {
    if (isLoggedIn) {
      const res = await fetch(`${API_URL}/users/bookmark/${restaurantId}`, {
        credentials: "include",
        method: "DELETE"
      });
      if (res.ok) {
        dispatch({
          type: "buttonSlice/HAS_BOOKMARK_LIST",
          ON: false
        });
      } else
        console.error("북마크 취소에 실패했습니다.");
    }
  }, [restaurantId, isLoggedIn]);
  useEffect(() => {
    hasBookmarkList().then((bool) => {
      dispatch({
        type: "buttonSlice/HAS_BOOKMARK_LIST",
        ON: bool
      });
    });
  }, [hasBookmarkList, isLoggedIn]);
  function handleClick() {
    if (isLoggedIn) {
      hasBookmarkList().then((bool) => {
        return bool ? delBookmark() : addBookmark();
      });
    } else {
      if (confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?")) {
        window.location.href = `/login`;
      }
    }
  }
  async function addBookmark() {
    try {
      const res = await fetch(`${API_URL}/users/bookmark`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id: restaurantId })
      });
      if (res.ok) {
        dispatch({
          type: "buttonSlice/HAS_BOOKMARK_LIST",
          ON: true
        });
      } else
        throw new Error();
    } catch (err) {
      console.error(err);
    }
  }
  return /* @__PURE__ */ jsxs("button", { className: "button-bookmark", onClick: handleClick, type: "button", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: imgBookmark,
        alt: "북마크 이미지",
        className: useAppSelector((state) => {
          return state.buttonSlice.bookmark.ON ? "img-bookmark on" : "img-bookmark";
        })
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "txt-bookmark", children: "북마크" })
  ] });
}
function LikeButton({ restaurantId, isLoggedIn }) {
  const dispatch = useDispatch();
  const hasLikeList = useCallback(async () => {
    if (isLoggedIn) {
      const res = await fetch(`${API_URL}/users/`, {
        credentials: "include",
        method: "GET"
      });
      const data = await res.json();
      return data.user.likeList.some((v) => {
        return restaurantId === v._id;
      });
    }
  }, [restaurantId, isLoggedIn]);
  const delLike = useCallback(async () => {
    const res = await fetch(`${API_URL}/users/like/${restaurantId}`, {
      credentials: "include",
      method: "DELETE"
    });
    if (res.ok) {
      dispatch({
        type: "buttonSlice/HAS_LIKE_LIST",
        ON: false
      });
    } else
      console.error("좋아요 취소에 실패했습니다.");
  }, [restaurantId, isLoggedIn]);
  useEffect(() => {
    hasLikeList().then((bool) => {
      dispatch({
        type: "buttonSlice/HAS_LIKE_LIST",
        ON: bool
      });
    });
  }, [hasLikeList, isLoggedIn]);
  function handleClick() {
    if (isLoggedIn) {
      hasLikeList().then((bool) => {
        return bool ? delLike() : addLike();
      });
    } else {
      if (confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?")) {
        window.location.href = `/login`;
      }
    }
  }
  async function addLike() {
    try {
      const res = await fetch(`${API_URL}/users/like`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ _id: restaurantId })
      });
      if (res.ok) {
        dispatch({
          type: "buttonSlice/HAS_LIKE_LIST",
          ON: true
        });
      } else
        throw new Error();
    } catch (err) {
      console.error(err);
    }
  }
  return /* @__PURE__ */ jsxs("button", { className: "button-like", onClick: handleClick, type: "button", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: imgHeart,
        alt: "좋아요 이미지",
        className: useAppSelector((state) => {
          return state.buttonSlice.like.ON ? "img-like on" : "img-like";
        })
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "txt-like", children: "좋아요" })
  ] });
}
const imgShare = "/images/icon-share.svg";
function ShareButton() {
  const handleClick = () => {
    alert("준비 중인 서비스입니다.");
  };
  return /* @__PURE__ */ jsxs("button", { className: "button-share", onClick: handleClick, type: "button", children: [
    /* @__PURE__ */ jsx("img", { src: imgShare, alt: "공유하기 이미지", className: "img-share" }),
    /* @__PURE__ */ jsx("span", { className: "txt-share", children: "공유하기" })
  ] });
}
function ButtonContainer({ restaurantId, isLoggedIn }) {
  return /* @__PURE__ */ jsxs("div", { className: "container-bookmark-like-share", children: [
    /* @__PURE__ */ jsx(BookmarkButton, { restaurantId, isLoggedIn }),
    /* @__PURE__ */ jsx(LikeButton, { restaurantId, isLoggedIn }),
    /* @__PURE__ */ jsx(ShareButton, {})
  ] });
}
const imgCopy = "/images/icon-copy.svg";
function CopyButton(props) {
  const copy = () => {
    window.navigator.clipboard.writeText(props.address);
    alert("복사되었습니다.");
  };
  return /* @__PURE__ */ jsxs("button", { type: "button", onClick: copy, children: [
    /* @__PURE__ */ jsx("img", { src: imgCopy, alt: "주소 복사 아이콘", className: "img-copy" }),
    /* @__PURE__ */ jsx("span", { style: { fontSize: "13px" }, children: "복사" })
  ] });
}
function Title(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    props.cert ? /* @__PURE__ */ jsx("div", { className: "restaurant-cert", children: props.cert }) : null,
    /* @__PURE__ */ jsx("div", { className: "restaurant-category", children: props.category }),
    /* @__PURE__ */ jsx("h3", { className: "txt-restaurant-title", children: props.title }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("span", { className: "txt-restaurant-address", children: [
        props.address,
        " "
      ] }),
      /* @__PURE__ */ jsx(CopyButton, { address: props.address })
    ] })
  ] });
}
function PrimarySection({ restaurantInfo, isLoggedIn }) {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    if (restaurantInfo !== null) {
      setInfo(restaurantInfo);
    }
  }, [restaurantInfo]);
  return info ? /* @__PURE__ */ jsxs("section", { className: "section-primary", children: [
    /* @__PURE__ */ jsx(Title, { title: info.title, address: info.address, category: info.category, cert: info.certification }),
    /* @__PURE__ */ jsx(Stars, { rating: info.rating }),
    /* @__PURE__ */ jsx(ButtonContainer, { restaurantId: info._id, isLoggedIn })
  ] }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
    /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
    /* @__PURE__ */ jsx("p", { children: "목록이 없어요." })
  ] });
}
function LocationSection({ restaurantInfo }) {
  useEffect(() => {
    if (restaurantInfo !== null) {
      const { kakao } = window;
      const [lng, lat] = restaurantInfo.location.coordinates;
      const mapContainer = document.getElementById("miniMap");
      const mapOption = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 3
      };
      const map = new kakao.maps.Map(mapContainer, mapOption);
      var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(lat, lng)
      });
      marker.setMap(map);
    }
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "section-location", children: [
    /* @__PURE__ */ jsx("h4", { className: "sr-only", children: "위치" }),
    /* @__PURE__ */ jsxs("div", { className: "style-wrapper-location-address", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        restaurantInfo !== null ? restaurantInfo.address : "",
        " "
      ] }),
      /* @__PURE__ */ jsx(CopyButton, { address: restaurantInfo !== null ? restaurantInfo.address : "" })
    ] }),
    /* @__PURE__ */ jsx("div", { id: "miniMap" })
  ] });
}
function ReviewButton({ restaurantId, isLoggedIn }) {
  function handleClick() {
    if (isLoggedIn) {
      window.location.href = `/search/${restaurantId}/reviews/create`;
    } else {
      if (confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?")) {
        window.location.href = "/login";
      }
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "style-container-write-review", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, className: "styled-button", children: "리뷰 작성하기" }) });
}
function ReviewList({
  reviews,
  userInfo,
  restaurantId
}) {
  return /* @__PURE__ */ jsx("div", { className: "wrapper-review", children: reviews && reviews.length > 0 ? /* @__PURE__ */ jsx("ul", { children: reviews.map((review, i) => {
    return /* @__PURE__ */ jsx(
      ReviewListItem,
      {
        item: review,
        userInfo,
        restaurantId,
        isFirst: i === 0
      },
      review._id
    );
  }) }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
    /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
    /* @__PURE__ */ jsx("p", { children: "리뷰가 아직 없어요." })
  ] }) });
}
function ReviewSection({
  restaurantInfo,
  isLoggedIn,
  userInfo
}) {
  const { _id, reviews } = restaurantInfo;
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
  const [totalReview, setTotalReview] = useState(0);
  const [reviewInPage, setReviewInPage] = useState(null);
  useEffect(() => {
    dispatch({ type: "paginationSlice/CURRENT_PAGE", currentPage: 1 });
  }, [restaurantInfo]);
  const getTotalReview = useCallback(async () => {
    const res = await fetch(`${API_URL}/restaurants/${_id}/reviews`);
    const data = await res.json();
    return data;
  }, [restaurantInfo]);
  const getReviewInPage = useCallback(async () => {
    const res = await fetch(`${API_URL}/restaurants/${_id}?page=${currentPage}`);
    const data = await res.json();
    return data;
  }, [currentPage]);
  useEffect(() => {
    getTotalReview().then((data) => {
      if (data.success) {
        setTotalReview(data.reviews.total);
      }
    });
    getReviewInPage().then((data) => {
      if (data.success) {
        setReviewInPage(data.restaurantInfo.reviews);
      }
    });
  }, [restaurantInfo, currentPage]);
  return /* @__PURE__ */ jsxs("section", { className: "section-review", children: [
    /* @__PURE__ */ jsx("h4", { className: "sr-only", children: "리뷰" }),
    /* @__PURE__ */ jsx(ReviewButton, { restaurantId: _id, isLoggedIn }),
    /* @__PURE__ */ jsx(ReviewList, { reviews: reviewInPage, userInfo, restaurantId: _id }),
    reviews && reviews.length > 0 && /* @__PURE__ */ jsx(Pagination, { count: totalReview, perPage: 5 })
  ] });
}
function RestaurantDetail({
  restaurantInfo,
  isLoggedIn,
  userInfo
}) {
  return /* @__PURE__ */ jsx("main", { className: "wrapper-restaurant-detail", children: restaurantInfo ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PrimarySection, { restaurantInfo, isLoggedIn }),
    /* @__PURE__ */ jsx(LocationSection, { restaurantInfo }),
    /* @__PURE__ */ jsx(ReviewSection, { restaurantInfo, isLoggedIn, userInfo })
  ] }) : null });
}
export {
  RestaurantDetail as default
};
//# sourceMappingURL=chunk-f312d6e4.js.map
