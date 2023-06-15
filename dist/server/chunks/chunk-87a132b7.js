import { jsxs, jsx } from "react/jsx-runtime";
import { S as SubjectBox } from "./chunk-62ae00a4.js";
import { useEffect, useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import { u as useAppSelector } from "./chunk-c407c4c8.js";
import * as draftJs from "draft-js";
import draftToHtml from "draftjs-to-html";
function Title({ postInfo }) {
  const dispatch = useDispatch();
  const title = useAppSelector((state) => state.postSlice.TITLE);
  useEffect(() => {
    if (postInfo !== null && postInfo !== void 0) {
      dispatch({ type: "postSlice/TITLE_STATE", TITLE: postInfo.title });
    } else {
      dispatch({ type: "postSlice/TITLE_STATE", TITLE: "" });
    }
  }, [postInfo]);
  function handleChange(event) {
    dispatch({ type: "postSlice/TITLE_STATE", TITLE: event.target.value });
  }
  return /* @__PURE__ */ jsxs("label", { className: "label-create-post-title", children: [
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "제목" }),
    /* @__PURE__ */ jsx("input", { type: "text", placeholder: "제목", maxLength: 30, onChange: handleChange, value: title })
  ] });
}
const reactDraftWysiwyg = "";
const toolbar = {
  options: ["inline", "blockType", "fontSize", "image"],
  inline: {
    inDropdown: false,
    options: ["bold", "italic", "underline", "strikethrough", "monospace"]
  },
  blockType: {
    inDropdown: false,
    options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"]
  },
  fontSize: {
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96]
  },
  image: {
    urlEnabled: true,
    uploadEnabled: true,
    alignmentEnabled: true,
    uploadCallback: void 0,
    previewImage: true,
    inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
    alt: { present: false, mandatory: false },
    defaultSize: {
      height: "auto",
      width: "auto"
    }
  }
};
const { EditorState, convertToRaw, convertFromHTML, ContentState } = draftJs.default ?? draftJs;
function TextEditor({ postInfo }) {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const [Component, setComponent] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    const loadComponent = async () => {
      const module = await import("react-draft-wysiwyg");
      setComponent(() => module.Editor);
    };
    loadComponent();
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (postInfo !== null && postInfo !== void 0) {
      dispatch({ type: "postSlice/CONTENT_STATE", CONTENT: postInfo.content });
      const blocksFromHTML = convertFromHTML(postInfo.content);
      const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
      setEditorState(EditorState.createWithContent(state));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [isMounted, postInfo]);
  const handleChange = (newEditorState) => {
    if (isMounted) {
      setEditorState(newEditorState);
      dispatch({
        type: "postSlice/CONTENT_STATE",
        CONTENT: draftToHtml(convertToRaw(newEditorState.getCurrentContent()))
      });
    }
  };
  if (!Component) {
    return /* @__PURE__ */ jsx(Loading, {});
  }
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Loading, {}), children: /* @__PURE__ */ jsx(Component, { editorState, onEditorStateChange: handleChange, toolbar }) });
}
function Loading() {
  return /* @__PURE__ */ jsx("div", { children: "텍스트 에디터 로드 중" });
}
function Content({ postInfo }) {
  return /* @__PURE__ */ jsxs("label", { className: "label-create-post-content", children: [
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "내용" }),
    /* @__PURE__ */ jsx(TextEditor, { postInfo })
  ] });
}
function Create({ postInfo }) {
  return /* @__PURE__ */ jsx("main", { className: "main-create-post", children: /* @__PURE__ */ jsxs("form", { className: "form-create-post", children: [
    /* @__PURE__ */ jsx(SubjectBox, { postInfo }),
    /* @__PURE__ */ jsx(Title, { postInfo }),
    /* @__PURE__ */ jsx(Content, { postInfo })
  ] }) });
}
export {
  Create as C
};
