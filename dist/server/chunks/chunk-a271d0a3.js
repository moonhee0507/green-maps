import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, forwardRef } from "react";
import { S as SubjectBox } from "./chunk-7cd0f7a8.js";
import { useSelector, useStore, useDispatch } from "react-redux";
import { A as API_URL } from "./chunk-94504c62.js";
import { S as Subject, T as Title, P as PreviewText, a as PostItemDetail, u as useIntersectionObserver } from "./chunk-fbafafc9.js";
import "./chunk-7f101d2c.js";
import "./chunk-b81d9a29.js";
import "isomorphic-dompurify";
import "./chunk-0c3eed3e.js";
function ButtonGroup({ isLoggedIn }) {
  function goToWrite() {
    if (isLoggedIn) {
      window.location.href = `/community/create`;
    } else {
      if (confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?")) {
        window.location.href = `/login`;
      }
    }
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: "link-create", onClick: goToWrite, children: "글쓰기" });
}
function CommunityDetail(props) {
  const total = useSelector((state) => state.postSlice.post.TOTAL);
  const subject = useSelector((state) => state.postSlice.SUBJECT);
  const [todayCount, setTodayCount] = useState(0);
  useEffect(() => {
    getTodayCount(subject).then((res) => setTodayCount(res.todayCount));
    async function getTodayCount(subjectName) {
      const encodeSubjectName = encodeURIComponent(subjectName);
      const res = await fetch(`${API_URL}/today/${encodeSubjectName}`, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      const count = await res.json();
      return count;
    }
  }, [props.posts]);
  return /* @__PURE__ */ jsxs("div", { className: "container-newpost-selectbox", children: [
    /* @__PURE__ */ jsxs("p", { className: "txt-postinfo", children: [
      "새글 ",
      /* @__PURE__ */ jsx("span", { children: todayCount }),
      "/",
      total
    ] }),
    /* @__PURE__ */ jsx(SubjectBox, {})
  ] });
}
function NoticePostOnly() {
  const [notices, setNotices] = useState(null);
  const ulElement = useRef(null);
  useEffect(() => {
    getNotice().then((data) => {
      if (data.total >= 1) {
        setNotices(data.lists);
      } else {
        setNotices(null);
      }
    });
  }, []);
  async function getNotice() {
    const subjectName = "공지사항";
    const res = await fetch(`${API_URL}/subjects/${encodeURIComponent(subjectName)}`, {
      headers: {
        "Cache-Control": "max-age=31536000"
      }
    });
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsxs("article", { className: "article-notice", children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "공지사항" }),
    notices !== null ? /* @__PURE__ */ jsx("ul", { className: "ul-notice", ref: ulElement, children: notices.map((notice, index) => {
      return /* @__PURE__ */ jsx(NoticeListItem, { posts: notice }, Math.random());
    }) }) : null
  ] });
}
function NoticeListItem({ posts }) {
  const { _id, title, registeredAt, updatedAt } = posts;
  return /* @__PURE__ */ jsx("li", { className: "li-notice", children: /* @__PURE__ */ jsx("a", { href: `/community/${_id}`, children: /* @__PURE__ */ jsxs("p", { className: "txt-title", children: [
    /* @__PURE__ */ jsx("span", { children: "[공지사항] " }),
    /* @__PURE__ */ jsx("em", { children: title })
  ] }) }) });
}
const PostListItem = forwardRef(PostListItem$1);
function PostListItem$1(props, ref) {
  const { _id, subject, owner, title, content, photo, like, registeredAt, comments } = props.postInfo;
  const removeTagContent = removeUnnecessaryString(content);
  const imageSize = "80px";
  return /* @__PURE__ */ jsx("li", { ref, children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: `/community/${_id}`,
      style: {
        width: "100%",
        display: "flex",
        padding: "20px"
      },
      children: [
        /* @__PURE__ */ jsxs(
          "dl",
          {
            style: {
              width: `calc(100% - ${photo && photo.length > 0 ? imageSize : "0px"})`
            },
            children: [
              /* @__PURE__ */ jsx(Subject, { subject }),
              /* @__PURE__ */ jsx(Title, { title }),
              /* @__PURE__ */ jsx(PreviewText, { content: removeTagContent }),
              /* @__PURE__ */ jsx(PostItemDetail, { owner, like, registeredAt, comments })
            ]
          }
        ),
        photo && photo.length > 0 ? /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: photo[0].src,
            alt: "",
            style: {
              width: imageSize,
              height: imageSize,
              objectFit: "cover"
            }
          }
        ) }) : null
      ]
    }
  ) });
}
function removeUnnecessaryString(html) {
  return html.replaceAll(/<[^>]*>/g, "").replaceAll(/&[a-zA-Z0-9]*;/g, "");
}
function PostList(props) {
  const { posts, limit } = props;
  const target = useRef(null);
  const store = useStore();
  const dispatch = useDispatch();
  const [observe, unobserve] = useIntersectionObserver(() => {
    const lastPage = Math.ceil(store.getState().postSlice.post.TOTAL / limit);
    const currentPage = store.getState().postSlice.post.CURRENT_PAGE;
    if (currentPage < lastPage) {
      dispatch({
        type: "postSlice/POST_IN_PAGE",
        TOTAL: store.getState().postSlice.post.TOTAL,
        CURRENT_PAGE: store.getState().postSlice.post.CURRENT_PAGE + 1
      });
    }
  });
  useEffect(() => {
    const lastPage = Math.ceil(store.getState().postSlice.post.TOTAL / limit);
    const currentPage = store.getState().postSlice.post.CURRENT_PAGE;
    if (currentPage === lastPage) {
      unobserve(target.current);
    } else if (currentPage < lastPage) {
      observe(target.current);
    }
  }, [observe, unobserve]);
  return /* @__PURE__ */ jsx("ul", { className: "wrapper-posts", children: posts.map((post, i) => {
    if (i === posts.length - 1) {
      return /* @__PURE__ */ jsx(PostListItem, { postInfo: post, ref: target }, post._id);
    } else
      return /* @__PURE__ */ jsx(PostListItem, { postInfo: post }, post._id);
  }) });
}
function PostSection(props) {
  const { posts, limit } = props;
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "게시글 목록" }),
    /* @__PURE__ */ jsx(NoticePostOnly, {}),
    /* @__PURE__ */ jsx(PostList, { posts, limit })
  ] });
}
function Community({ posts, limit, isLoggedIn }) {
  const mainElement = useRef(null);
  const [scroll, setScroll] = useState(false);
  function clickGoUpButton() {
    var _a;
    (_a = mainElement == null ? void 0 : mainElement.current) == null ? void 0 : _a.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  function handleScroll() {
    var _a;
    if (((_a = mainElement == null ? void 0 : mainElement.current) == null ? void 0 : _a.scrollTop) === 0)
      setScroll(false);
    else
      setScroll(true);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("main", { className: "main-community", ref: mainElement, onScroll: handleScroll, children: [
      /* @__PURE__ */ jsx(CommunityDetail, { posts }),
      /* @__PURE__ */ jsx(PostSection, { posts, limit })
    ] }),
    scroll && /* @__PURE__ */ jsx("button", { id: "buttonGoUp", onClick: clickGoUpButton, type: "button", children: "맨위로" })
  ] });
}
function CommunityMain({
  isLoggedIn,
  posts,
  limit
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ButtonGroup, { isLoggedIn }),
    /* @__PURE__ */ jsx(Community, { posts, limit, isLoggedIn })
  ] });
}
export {
  CommunityMain as default
};
//# sourceMappingURL=chunk-a271d0a3.js.map
