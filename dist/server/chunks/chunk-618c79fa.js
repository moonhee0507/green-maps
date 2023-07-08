import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import DOMPurify from "isomorphic-dompurify";
import { useSelector } from "react-redux";
import { i as isSameDay } from "./chunk-0c3eed3e.js";
function Title(props) {
  const { title } = props;
  const keyword = useSelector((state) => state.postSlice.KEYWORD);
  const [decoTitle, setDecoTitle] = useState(title);
  useEffect(() => {
    if (keyword && keyword !== "") {
      if (title.includes(keyword)) {
        const regex = new RegExp(keyword, "gi");
        const replaceWord = title.replace(regex, `<span style="color: blue;">${keyword}</span>`);
        setDecoTitle(replaceWord);
      } else {
        setDecoTitle(title);
      }
    } else {
      setDecoTitle(title);
    }
  }, [title, keyword]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "제목" }),
    keyword && keyword !== "" ? /* @__PURE__ */ jsx(
      "dd",
      {
        className: "txt-postitem-title",
        dangerouslySetInnerHTML: { __html: DOMPurify.sanitize(decoTitle) }
      }
    ) : /* @__PURE__ */ jsx("dd", { className: "txt-postitem-title", children: title })
  ] });
}
function PreviewText(props) {
  const { content } = props;
  const keyword = useSelector((state) => state.postSlice.KEYWORD);
  const [decoContent, setDecoContent] = useState(content);
  useEffect(() => {
    if (keyword && keyword !== "") {
      if (content.includes(keyword)) {
        const regex = new RegExp(keyword, "gi");
        const replaceWord = content.replace(regex, `<span style="color: blue;">${keyword}</span>`);
        setDecoContent(replaceWord);
      } else {
        setDecoContent(content);
      }
    } else {
      setDecoContent(content);
    }
  }, [content, keyword]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "내용" }),
    keyword && keyword !== "" ? /* @__PURE__ */ jsx(
      "dd",
      {
        className: "txt-postitem-content",
        dangerouslySetInnerHTML: { __html: DOMPurify.sanitize(decoContent) }
      }
    ) : /* @__PURE__ */ jsx("dd", { className: "txt-postitem-content", children: content })
  ] });
}
function PostItemDetail({
  like,
  comments,
  registeredAt,
  owner
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "상세 내용" }),
    /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsxs("dl", { className: "container-post-subinfo", children: [
      /* @__PURE__ */ jsx(LikeCount, { like }),
      /* @__PURE__ */ jsx(CommentCount, { comments }),
      /* @__PURE__ */ jsx(Time, { registeredAt }),
      /* @__PURE__ */ jsx(Owner, { owner })
    ] }) })
  ] });
}
function LikeCount({ like }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "좋아요 개수" }),
    /* @__PURE__ */ jsx("dd", { className: "container-count-like", children: /* @__PURE__ */ jsx("span", { children: (like == null ? void 0 : like.length) || 0 }) })
  ] });
}
function CommentCount({ comments }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "댓글 개수" }),
    /* @__PURE__ */ jsx("dd", { className: "container-count-comment", children: /* @__PURE__ */ jsx("span", { children: (comments == null ? void 0 : comments.length) || 0 }) })
  ] });
}
function Time({ registeredAt }) {
  var _a, _b;
  const date = isSameDay(registeredAt) ? `${(_a = registeredAt.split(". ").at(-1)) == null ? void 0 : _a.split(":")[0]}:${(_b = registeredAt.split(". ").at(-1)) == null ? void 0 : _b.split(":")[1]}` : registeredAt.slice(0, 13);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "작성 시간" }),
    /* @__PURE__ */ jsx("dd", { className: "container-post-time", children: /* @__PURE__ */ jsx("time", { dateTime: "", children: date }) })
  ] });
}
function Owner({ owner }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "작성자" }),
    /* @__PURE__ */ jsx("dd", { className: "txt-post-owner", children: typeof owner === "string" ? owner : owner == null ? void 0 : owner.nickName })
  ] });
}
function Subject(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "말머리" }),
    /* @__PURE__ */ jsx("dd", { className: "txt-subject-in-community", children: props.subject })
  ] });
}
function useIntersectionObserver(callback) {
  const observer = useRef(null);
  useEffect(() => {
    const handleIntersect = (entries) => {
      var _a;
      if ((_a = entries.at(-1)) == null ? void 0 : _a.isIntersecting) {
        callback();
      }
    };
    const root = document.querySelector(".main-community");
    observer.current = new IntersectionObserver(handleIntersect, {
      root,
      rootMargin: "0px",
      threshold: 0.5
    });
    return () => {
      var _a;
      (_a = observer.current) == null ? void 0 : _a.disconnect();
    };
  }, [callback]);
  const observe = (element) => {
    if (element && observer.current)
      observer.current.observe(element);
  };
  const unobserve = (element) => {
    if (element && observer.current)
      observer.current.unobserve(element);
  };
  return [observe, unobserve];
}
export {
  PreviewText as P,
  Subject as S,
  Title as T,
  PostItemDetail as a,
  useIntersectionObserver as u
};
//# sourceMappingURL=chunk-618c79fa.js.map
