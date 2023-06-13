import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { u as useAppSelector, B as ButtonGoBack } from "./chunk-c407c4c8.js";
import { useDispatch } from "react-redux";
import { A as API_URL } from "./chunk-dd72b177.js";
import { E as EDIT_MODE } from "./chunk-3e2eef8e.js";
function SubmitButton() {
  const dispatch = useDispatch();
  const editMode = useAppSelector((state) => state.postSlice.editMode);
  const postId = useAppSelector((state) => state.postSlice.postId);
  const subject = useAppSelector((state) => state.postSlice.SUBJECT);
  const owner = useAppSelector((state) => state.postSlice.NICKNAME);
  const title = useAppSelector((state) => state.postSlice.TITLE);
  const content = useAppSelector((state) => state.postSlice.CONTENT);
  const getUserInfo = useCallback(async () => {
    const res = await fetch(`${API_URL}/users/`);
    const data = await res.json();
    return data.user;
  }, []);
  useEffect(() => {
    getUserInfo().then((info) => {
      if (info) {
        dispatch({ type: "postSlice/OWNER_STATE", NICKNAME: info.nickName });
      } else {
        console.log("사용자 정보가 없습니다. 로그인 하세요.");
      }
    });
  }, [getUserInfo]);
  async function handleSubmit() {
    try {
      const body = {
        subject,
        owner,
        title,
        content
      };
      const res = await fetch(`${API_URL}/posts/${editMode ? postId : ""}`, {
        method: editMode ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (data.success) {
        alert("게시글이 등록되었습니다.");
      } else {
        alert("다시 시도해주세요.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      dispatch({ type: "postSlice/SUBJECT_STATE", SUBJECT: "" });
      dispatch(EDIT_MODE(false));
      history.back();
    }
  }
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: handleSubmit, children: "등록" });
}
function TopBar(props) {
  const [title] = useState(props.title);
  return /* @__PURE__ */ jsxs("div", { className: "top-bar", children: [
    /* @__PURE__ */ jsx(ButtonGoBack, {}),
    /* @__PURE__ */ jsx("h2", { className: "top-title", children: title }),
    title === "글 쓰기" || title === "글 수정" ? /* @__PURE__ */ jsx(SubmitButton, {}) : null
  ] });
}
export {
  TopBar as T
};
