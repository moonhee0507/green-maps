import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { a as useAppDispatch, u as useAppSelector } from "../chunks/chunk-a93f9e99.js";
import { S as SET_COMMENT } from "../chunks/chunk-9fb42db4.js";
import { T as TopBar } from "../chunks/chunk-3c9df877.js";
import DOMPurify from "isomorphic-dompurify";
import { A as API_URL } from "../chunks/chunk-7d23cd09.js";
import { i as imgHeart } from "../chunks/chunk-edfa0bc8.js";
import { i as isSameDay } from "../chunks/chunk-0c3eed3e.js";
import { E as EDIT_DELETE_NOTIFY_MODAL, S as SAME_USER_OWNER, a as SET_POST_ID, b as SET_ACCESS_TARGET, c as SET_COMMENT_ID, d as SET_EDIT_COMMENT_MODE } from "../chunks/chunk-f93684d4.js";
import { P as Pagination } from "../chunks/chunk-141dd3d3.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { a as appModalMode } from "../chunks/chunk-db98b5a2.js";
import "react-redux";
import "@reduxjs/toolkit";
function TextArea(props) {
  const htmlString = props.content;
  return /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: DOMPurify.sanitize(htmlString) }, style: { wordBreak: "keep-all" } });
}
function PostLikeButton(props) {
  const { postId, like } = props;
  const [userId, setUserId] = useState(null);
  const [likeCount, setLikeCount] = useState(like ? like.length : 0);
  const [buttonOn, setButtonOn] = useState(false);
  useEffect(() => {
    getUserId().then((userId2) => {
      setUserId(userId2);
    }).catch((err) => console.error(err));
    async function getUserId() {
      const res = await fetch(`${API_URL}/users`);
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
    const res = await fetch(`${API_URL}/posts/${postId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: userId })
    });
    if (res.ok)
      setLikeCount(likeCount + 1);
    else
      throw new Error();
  }
  async function delLike() {
    const res = await fetch(`${API_URL}/posts/${postId}/like`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: userId })
    });
    if (res.ok)
      setLikeCount(likeCount - 1);
    else
      throw new Error();
  }
  return /* @__PURE__ */ jsxs("button", { className: "button-like", type: "button", onClick: handleClick, style: { margin: "0 auto" }, children: [
    /* @__PURE__ */ jsx("img", { src: imgHeart, alt: "좋아요 이미지", className: `img-like review ${buttonOn ? "on" : ""}` }),
    /* @__PURE__ */ jsx("span", { style: { minWidth: "20px" }, children: likeCount })
  ] });
}
function MoreButton$1({ userInfo, owner, postId }) {
  const dispatch = useAppDispatch();
  const moreButtonRef = useRef(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (userInfo !== null)
      setUser(userInfo);
  }, [userInfo]);
  function handleClick() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
    dispatch(EDIT_DELETE_NOTIFY_MODAL(true));
    dispatch(SAME_USER_OWNER((user == null ? void 0 : user.nickName) === owner));
    dispatch(SET_POST_ID(postId));
    dispatch(SET_ACCESS_TARGET("post"));
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": "더보기 버튼",
      className: "button-more postitem",
      onClick: handleClick,
      ref: moreButtonRef
    }
  );
}
function ContentSection({ userInfo, postInfo }) {
  const { subject, content, like, owner, photo, registeredAt, comments, title, _id } = postInfo;
  return /* @__PURE__ */ jsxs("section", { className: "section-post-content", children: [
    /* @__PURE__ */ jsx("h3", { "aria-label": "게시글 제목", className: "txt-post-title", children: title }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { "aria-label": "작성자", className: "txt-post-owner", children: owner }),
      /* @__PURE__ */ jsxs("div", { className: "container-post-subinfo", children: [
        /* @__PURE__ */ jsx(LikeCount, { like }),
        /* @__PURE__ */ jsx(CommentCount, { comments }),
        /* @__PURE__ */ jsx(Time, { registeredAt })
      ] })
    ] }),
    /* @__PURE__ */ jsx(TextArea, { content }),
    /* @__PURE__ */ jsx(PostLikeButton, { postId: _id, like }),
    /* @__PURE__ */ jsx(MoreButton$1, { userInfo, owner, postId: _id })
  ] });
}
function LikeCount(props) {
  var _a;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "좋아요 개수" }),
    /* @__PURE__ */ jsx("dd", { className: "container-count-like", children: /* @__PURE__ */ jsx("span", { children: ((_a = props.like) == null ? void 0 : _a.length) || 0 }) })
  ] });
}
function CommentCount(props) {
  var _a;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "댓글 개수" }),
    /* @__PURE__ */ jsx("dd", { className: "container-count-comment", children: /* @__PURE__ */ jsx("span", { children: ((_a = props.comments) == null ? void 0 : _a.length) || 0 }) })
  ] });
}
function Time(props) {
  var _a, _b;
  const { registeredAt } = props;
  const date = isSameDay(registeredAt) ? `${(_a = registeredAt.split(". ").at(-1)) == null ? void 0 : _a.split(":")[0]}:${(_b = registeredAt.split(". ").at(-1)) == null ? void 0 : _b.split(":")[1]}` : registeredAt.slice(0, 13);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "작성 시간" }),
    /* @__PURE__ */ jsx("dd", { className: "container-post-time", children: /* @__PURE__ */ jsx("time", { dateTime: "", children: date }) })
  ] });
}
function SubmitButton(props) {
  const { postId, content } = props;
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    getUserId().then((userId2) => setUserId(userId2)).catch((err) => console.error(err));
    async function getUserId() {
      const res = await fetch(`${API_URL}/users/`);
      const data = await res.json();
      return data.user.nickName;
    }
  }, []);
  async function handleClick() {
    try {
      if (content !== null && content.length > 0) {
        const body = {
          owner: userId,
          content
        };
        const res = await fetch(`${API_URL}/posts/${postId}/comment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
        const data = await res.json();
        if (data.success === true) {
          window.location.reload();
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: handleClick,
      disabled: content !== null && content.length > 0 ? false : true,
      "aria-label": "댓글 등록 버튼"
    }
  );
}
function WriteComment({ postId }) {
  const [content, setContent] = useState(null);
  function handleChange(event) {
    setContent(event.target.value);
  }
  return /* @__PURE__ */ jsxs("form", { className: "form-create-comment", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "comment", className: "sr-only", children: "댓글 작성하기" }),
    /* @__PURE__ */ jsx("textarea", { id: "comment", onChange: handleChange, minLength: 1, maxLength: 100 }),
    /* @__PURE__ */ jsx(SubmitButton, { postId, content })
  ] });
}
function Notice() {
  return /* @__PURE__ */ jsx("div", { className: "container-notice comment", children: /* @__PURE__ */ jsx("em", { children: "게시글과 관련없는 홍보성 댓글과 저속한 표현의 비방성 댓글은 삭제될 수 있습니다." }) });
}
function MoreButton({
  userInfo,
  postId,
  comment
}) {
  const dispatch = useAppDispatch();
  const moreButtonRef = useRef(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (userInfo !== null)
      setUser(userInfo);
  }, [userInfo]);
  function handleClick() {
    const app = document.querySelector(".app");
    app == null ? void 0 : app.classList.add("modal-mode");
    dispatch(EDIT_DELETE_NOTIFY_MODAL(true));
    dispatch(SAME_USER_OWNER((user == null ? void 0 : user.nickName) === comment.owner));
    dispatch(SET_ACCESS_TARGET("comment"));
    dispatch(SET_POST_ID(postId));
    dispatch(SET_COMMENT_ID(comment._id));
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": "더보기 버튼",
      className: "button-more commentitem",
      onClick: handleClick,
      ref: moreButtonRef
    }
  );
}
function CommentList({
  userInfo,
  postId,
  comments
}) {
  return comments && comments.length > 0 ? /* @__PURE__ */ jsx("ul", { children: comments.map((comment, i) => {
    return /* @__PURE__ */ jsx(
      CommentListItem,
      {
        userInfo,
        postId,
        comment,
        isLast: i === comments.length - 1
      },
      i
    );
  }) }) : /* @__PURE__ */ jsxs("div", { className: "style-wrapper-no-review", children: [
    /* @__PURE__ */ jsx("div", { className: "txt-no-review", children: "😭" }),
    /* @__PURE__ */ jsx("p", { children: "댓글이 없어요." })
  ] });
}
function CommentListItem({
  userInfo,
  postId,
  comment,
  isLast
}) {
  var _a, _b;
  const { owner, content, like, registeredAt, updatedAt } = comment;
  const editMode = useAppSelector((state) => state.postSlice.editCommentMode);
  const date = isSameDay(registeredAt) ? `${(_a = registeredAt.split(". ").at(-1)) == null ? void 0 : _a.split(":")[0]}:${(_b = registeredAt.split(". ").at(-1)) == null ? void 0 : _b.split(":")[1]}` : registeredAt.slice(0, 13);
  const listElement = useRef(null);
  useEffect(() => {
    if (isLast && listElement.current) {
      listElement.current.scrollIntoView(false);
    }
  }, [isLast]);
  return /* @__PURE__ */ jsxs("li", { className: "li-commentitem", ref: listElement, children: [
    /* @__PURE__ */ jsxs("dl", { className: "wrapper-commentitem", children: [
      /* @__PURE__ */ jsxs("dl", { className: "container-owner-date", children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "댓글 작성자" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-owner", children: owner }),
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "게시 시간" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-date", children: date })
      ] }),
      /* @__PURE__ */ jsxs("dl", { children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "댓글 내용" }),
        editMode ? /* @__PURE__ */ jsx(TextareaForEdit, { content }) : /* @__PURE__ */ jsx("dd", { className: "txt-content", children: content })
      ] })
    ] }),
    editMode ? /* @__PURE__ */ jsx(EditCommentButton, { postId, commentId: comment._id }) : /* @__PURE__ */ jsx(MoreButton, { userInfo, postId, comment })
  ] });
}
function TextareaForEdit({ content }) {
  const [value, setValue] = useState(content);
  function handleChange(event) {
    setValue(event.target.value);
  }
  return /* @__PURE__ */ jsx("textarea", { id: "editCommentTextarea", onChange: handleChange, minLength: 1, maxLength: 100, value });
}
function EditCommentButton({ postId, commentId }) {
  function handleClick() {
    const textarea = document.getElementById("editCommentTextarea");
    if (textarea !== null) {
      editComment(textarea.value);
    }
  }
  async function editComment(content) {
    const res = await fetch(`${API_URL}/comments/${commentId}?postId=${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    });
    const data = await res.json();
    if (data.success) {
      alert("댓글이 수정되었습니다.");
    } else {
      alert("다시 시도해주세요.");
    }
    window.location.reload();
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: "button-more commentitem edit", onClick: handleClick, children: "수정" });
}
const perPage = 10;
function CommentSection({
  postId,
  comments,
  userInfo
}) {
  const dispatch = useAppDispatch();
  const paginatedComment = useAppSelector((state) => state.paginationSlice.comment);
  const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
  const [commentInPage, setCommentInPage] = useState(paginatedComment[currentPage - 1]);
  useEffect(() => {
    dispatch({ type: "paginationSlice/CURRENT_PAGE", currentPage: Object.keys(paginatedComment).length });
  }, [paginatedComment]);
  useEffect(() => {
    setCommentInPage(paginatedComment[currentPage - 1]);
  }, [paginatedComment, currentPage]);
  return /* @__PURE__ */ jsxs("section", { className: "section-post-comment", children: [
    comments && comments.length > 0 ? /* @__PURE__ */ jsxs("h3", { children: [
      "댓글 ",
      /* @__PURE__ */ jsxs("span", { children: [
        "(",
        comments.length,
        ")"
      ] })
    ] }) : /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "댓글" }),
    /* @__PURE__ */ jsx(Notice, {}),
    /* @__PURE__ */ jsx(WriteComment, { postId }),
    /* @__PURE__ */ jsx(CommentList, { postId, comments: commentInPage, userInfo }),
    comments && comments.length > perPage ? /* @__PURE__ */ jsx(Pagination, { count: comments.length, perPage }) : null
  ] });
}
function EditDeleteNotifyModal() {
  const [show, setShow] = useState(false);
  const editDeleteNotifyModalOn = useAppSelector((state) => state.postSlice.editDeleteNotifyModalOn);
  const sameUserOwner = useAppSelector((state) => state.postSlice.sameUserOwner);
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
  const postId = useAppSelector((state) => state.postSlice.postId);
  useAppSelector((state) => state.postSlice.commentId);
  const accessTarget = useAppSelector((state) => state.postSlice.accessTarget);
  function handleClick() {
    if (accessTarget === "post") {
      navigate(`/community/edit/${postId}`);
      appModalMode(false);
      dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    } else if (accessTarget === "comment") {
      dispatch(SET_EDIT_COMMENT_MODE(true));
      appModalMode(false);
      dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    }
  }
  return /* @__PURE__ */ jsx("li", { onClick: handleClick, children: "🩹 수정하기" });
}
function DELETE() {
  const dispatch = useAppDispatch();
  const postId = useAppSelector((state) => state.postSlice.postId);
  const commentId = useAppSelector((state) => state.postSlice.commentId);
  const accessTarget = useAppSelector((state) => state.postSlice.accessTarget);
  async function handleClick() {
    if (accessTarget === "post") {
      deletePost();
    } else if (accessTarget === "comment") {
      deleteComment();
    }
  }
  async function deletePost() {
    try {
      const res = await fetch(`${API_URL}/posts/${postId}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success) {
        navigate("/community");
      } else {
        alert("다시 시도해주세요.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      appModalMode(false);
      dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    }
  }
  async function deleteComment() {
    try {
      const res = await fetch(`${API_URL}/comments/${commentId}?postId=${postId}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success) {
        window.location.reload();
      } else {
        alert("다시 시도해주세요.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      appModalMode(false);
      dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    }
  }
  return /* @__PURE__ */ jsx("li", { onClick: handleClick, children: "🗑️ 삭제하기" });
}
function ModalGroup() {
  const on = useAppSelector((state) => state.postSlice.editDeleteNotifyModalOn);
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
      dispatch(SET_POST_ID(""));
    }
  }
  return /* @__PURE__ */ jsx("div", { className: `modal-group ${show ? "on" : ""}`, children: /* @__PURE__ */ jsx(EditDeleteNotifyModal, {}) });
}
function Page(pageProps) {
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState(null);
  const postInfo = pageProps.postInfo;
  const { subject, content, like, owner, photo, registeredAt, comments, title, _id } = postInfo;
  useEffect(() => {
    getUserInfo().then((data) => {
      if (data.success) {
        setUserInfo(data.user);
      }
    });
  }, []);
  useEffect(() => {
    const obj = {};
    for (let i = 0; i < comments.length; i = i + 10) {
      const arrPerPage = comments.slice(i, i + 10);
      obj[i / 10] = arrPerPage;
    }
    dispatch(SET_COMMENT(obj));
  }, [pageProps]);
  async function getUserInfo() {
    const res = await fetch(`${API_URL}/users`);
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: subject }),
    /* @__PURE__ */ jsxs("main", { className: "main-read-post", children: [
      /* @__PURE__ */ jsx(ContentSection, { userInfo, postInfo }),
      /* @__PURE__ */ jsx(CommentSection, { userInfo, postId: _id, comments })
    ] }),
    /* @__PURE__ */ jsx(ModalGroup, {})
  ] });
}
export {
  Page
};
