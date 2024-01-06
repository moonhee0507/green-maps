import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import { u as useAppSelector, B as ButtonGoBack } from "./chunk-0e4e6c3d.js";
import { useDispatch } from "react-redux";
import { A as API_URL } from "./chunk-94504c62.js";
import { E as EDIT_MODE } from "./chunk-055796d0.js";
function isEmptyString(str) {
  return str.trim().length === 0;
}
function SubmitButton() {
  const dispatch = useDispatch();
  const editMode = useAppSelector((state) => state.postSlice.editMode);
  const postId = useAppSelector((state) => state.postSlice.postId);
  const subject = useAppSelector((state) => state.postSlice.SUBJECT);
  const title = useAppSelector((state) => state.postSlice.TITLE);
  const content = useAppSelector((state) => state.postSlice.CONTENT);
  const getUserInfo = useCallback(async () => {
    const res = await fetch(`${API_URL}/users/`, {
      credentials: "include",
      method: "GET"
    });
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
  const handleSubmit = async () => {
    if (isEmptyString(subject)) {
      alert("말머리를 선택해주세요.");
    } else if (isEmptyString(title)) {
      alert("제목을 입력해주세요.");
    } else if (isEmptyString(content)) {
      alert("내용을 입력해주세요.");
    } else {
      try {
        const body = {
          subject,
          title,
          content
        };
        const res = await fetch(`${API_URL}/posts/${editMode ? postId : ""}`, {
          credentials: "include",
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
  };
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
  TopBar as T,
  isEmptyString as i
};
//# sourceMappingURL=chunk-ee5c6427.js.map
