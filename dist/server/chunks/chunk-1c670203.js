import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { a as useAppDispatch, u as useAppSelector } from "./chunk-0e4e6c3d.js";
import { u as useCheckLoginStatus } from "./chunk-0d31e55c.js";
function SubjectBox({ postInfo }) {
  const dispatch = useAppDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  useAppSelector((state) => state.postSlice.editMode);
  const subject = useAppSelector((state) => state.postSlice.SUBJECT);
  const [isFocused, setIsFocused] = useState(false);
  const [_, userInfo] = useCheckLoginStatus();
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    if (userInfo !== null) {
      setIsAdmin(userInfo.role === 9);
    } else
      setIsAdmin(false);
  }, [userInfo]);
  useEffect(() => {
    if (postInfo !== null && postInfo !== void 0) {
      dispatch({ type: "postSlice/SUBJECT_STATE", SUBJECT: postInfo.subject });
    } else {
      dispatch({ type: "postSlice/SUBJECT_STATE", SUBJECT: "" });
    }
  }, [postInfo]);
  function handleChange(event) {
    dispatch({ type: "postSlice/SUBJECT_STATE", SUBJECT: event.target.value });
    dispatch({
      type: "postSlice/POST_IN_PAGE",
      TOTAL: 0,
      // 최상단에서 최종 결정됨
      CURRENT_PAGE: 1
    });
    return event.target.value;
  }
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${currentPath === "/community" ? "wrapper-subject" : "wrapper-subject create"} ${isFocused ? "on" : ""}`,
      children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "selectSubject", className: currentPath === "/community" ? "" : "sr-only", children: "말머리" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "subjects",
            id: "selectSubject",
            onChange: handleChange,
            value: subject,
            onFocus: handleFocus,
            onBlur: handleBlur,
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: currentPath === "/community" ? "-- 전체 --" : "말머리 선택" }),
              currentPath === "/community/create" && isAdmin ? /* @__PURE__ */ jsx("option", { value: "공지사항", children: "공지사항" }) : null,
              /* @__PURE__ */ jsx("option", { value: "🥑채식얘기", children: "🥑채식얘기" }),
              /* @__PURE__ */ jsx("option", { value: "⚽운동얘기", children: "⚽운동얘기" })
            ]
          }
        )
      ]
    }
  );
}
export {
  SubjectBox as S
};
