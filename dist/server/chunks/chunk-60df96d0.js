import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect } from "react";
import { S as Subject, T as Title, P as PreviewText, a as PostItemDetail, u as useIntersectionObserver } from "./chunk-fbafafc9.js";
import { useStore, useDispatch } from "react-redux";
const PostListItem = forwardRef(PostListItem$1);
function PostListItem$1(props, ref) {
  const { postInfo } = props;
  const { _id, subject, owner, title, content, photo, like, registeredAt, comments } = postInfo;
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
  }, [observe, unobserve, target]);
  return /* @__PURE__ */ jsx("ul", { className: "wrapper-posts", children: posts.map((post, i) => {
    if (i === posts.length - 1) {
      return /* @__PURE__ */ jsx(PostListItem, { postInfo: post, ref: target }, i);
    } else
      return /* @__PURE__ */ jsx(PostListItem, { postInfo: post }, i);
  }) });
}
export {
  PostList as P
};
