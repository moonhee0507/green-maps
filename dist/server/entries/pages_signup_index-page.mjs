import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { T as TopBar } from "../chunks/chunk-2d95f3e8.js";
import { L as Link } from "../chunks/chunk-24b72a12.js";
import { a as useAppDispatch } from "../chunks/chunk-c407c4c8.js";
import { S as SIGNING_UP } from "../chunks/chunk-6f77cb2d.js";
import { a as validateId, b as validateNickName, v as validatePassword } from "../chunks/chunk-22884288.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { navigate } from "vite-plugin-ssr/client/router";
import "react-redux";
import "../chunks/chunk-f93684d4.js";
import "@reduxjs/toolkit";
function InfoStage({ move, setMove }) {
  const dispatch = useAppDispatch();
  const nextStage = () => {
    setMove(-100);
    dispatch(SIGNING_UP(true));
  };
  return /* @__PURE__ */ jsxs("section", { className: "login-select-stage reuse-in-signup", style: move !== 0 ? { visibility: "hidden" } : {}, children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "회원가입 안내" }),
    /* @__PURE__ */ jsx("div", { className: "container-rocket reuse-in-signup", children: /* @__PURE__ */ jsx("span", { children: "🥰" }) }),
    /* @__PURE__ */ jsx("p", { className: "txt-signup-info", children: "간편 회원가입을 진행합니다." }),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: nextStage, children: "계속하기" }),
    /* @__PURE__ */ jsxs("small", { children: [
      "이미 회원이신가요? ",
      /* @__PURE__ */ jsx(Link, { href: "/login", children: "로그인" }),
      "하러 가기"
    ] })
  ] });
}
function IdStage({ move, setMove }) {
  const dispatch = useAppDispatch();
  const idInput = useRef(null);
  const [message, setMessage] = useState("");
  const handlePrev = () => {
    setMove((prev) => prev + 100);
    dispatch(SIGNING_UP(false));
  };
  const handleNext = () => {
    const element = idInput.current;
    if (element !== null) {
      if (validateId(element.value) === true) {
        checkDuplicate(element.value);
      } else {
        setMessage("영문, 숫자 20자 이내의 아이디를 입력해주세요.");
      }
    }
  };
  async function checkDuplicate(id) {
    const res = await fetch(`${API_URL}/users/check-userId?userId=${id}`);
    const data = await res.json();
    if (data.duplicated === false) {
      setMessage("");
      setMove((prev) => prev - 100);
    } else {
      setMessage("이미 존재하는 아이디입니다.");
    }
  }
  return /* @__PURE__ */ jsxs("section", { className: "signup-id-stage", style: move !== -100 ? { visibility: "hidden" } : {}, children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "아이디 입력" }),
    /* @__PURE__ */ jsx("label", { htmlFor: "signupId", children: "아이디" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        id: "signupId",
        placeholder: "영문, 숫자 6~20자 이내",
        ref: idInput,
        minLength: 6,
        maxLength: 20
      }
    ),
    /* @__PURE__ */ jsx("em", { className: "txt-signup-message", children: message }),
    /* @__PURE__ */ jsxs("div", { className: "button-group-move", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handlePrev, "aria-label": "이전 화면으로 이동", children: "첫 화면" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleNext, "aria-label": "다음 화면으로 이동", children: "닉네임" })
    ] })
  ] });
}
function NickNameStage({ move, setMove }) {
  const nickNameInput = useRef(null);
  const [message, setMessage] = useState("");
  const handlePrev = () => {
    setMove((prev) => prev + 100);
  };
  const handleNext = () => {
    const element = nickNameInput.current;
    if (element !== null) {
      if (validateNickName(element.value) === true) {
        checkDuplicate(element.value);
      } else {
        setMessage("영문, 숫자, 한글 17자 이내의 닉네임을 입력해주세요.");
      }
    }
  };
  async function checkDuplicate(nickname) {
    const res = await fetch(`${API_URL}/users/check-nickname?nickname=${nickname}`);
    const data = await res.json();
    if (data.duplicated === false) {
      setMessage("");
      setMove((prev) => prev - 100);
    } else {
      setMessage("이미 존재하는 닉네임입니다.");
    }
  }
  return /* @__PURE__ */ jsxs("section", { className: "signup-nickname-stage", style: move !== -200 ? { visibility: "hidden" } : {}, children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "닉네임 입력" }),
    /* @__PURE__ */ jsx("label", { htmlFor: "signupNickName", children: "닉네임" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        id: "signupNickName",
        ref: nickNameInput,
        placeholder: "영문, 숫자, 한글 17자 이내",
        minLength: 1,
        maxLength: 17
      }
    ),
    /* @__PURE__ */ jsx("em", { className: "txt-signup-message", children: message }),
    /* @__PURE__ */ jsxs("div", { className: "button-group-move", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handlePrev, "aria-label": "이전 화면으로 이동", children: "아이디" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleNext, "aria-label": "다음 화면으로 이동", children: "비밀번호" })
    ] })
  ] });
}
function PasswordStage({ move, setMove }) {
  const passwordInput = useRef(null);
  const [message, setMessage] = useState("");
  const handlePrev = () => {
    setMove((prev) => prev + 100);
  };
  const handleNext = () => {
    const element = passwordInput.current;
    if (element !== null) {
      console.log(validatePassword(element.value));
      if (validatePassword(element.value) === true) {
        setMessage("");
        setMove((prev) => prev - 100);
      } else {
        setMessage("영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)하여 입력해주세요.");
      }
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "signup-password-stage", style: move !== -300 ? { visibility: "hidden" } : {}, children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "비밀번호 입력" }),
    /* @__PURE__ */ jsx("label", { htmlFor: "signupPassword", children: "비밀번호" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "password",
        id: "signupPassword",
        ref: passwordInput,
        placeholder: "영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)",
        minLength: 8,
        maxLength: 32
      }
    ),
    /* @__PURE__ */ jsx("em", { className: "txt-signup-message", children: message }),
    /* @__PURE__ */ jsxs("div", { className: "button-group-move", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handlePrev, "aria-label": "이전 화면으로 이동", children: "닉네임" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleNext, "aria-label": "다음 화면으로 이동", children: "비밀번호 재입력" })
    ] })
  ] });
}
function ConfirmPasswordStage({
  move,
  setMove
}) {
  const dispatch = useAppDispatch();
  const confirmPassword = useRef(null);
  const [message, setMessage] = useState("");
  const handlePrev = () => {
    setMove((prev) => prev + 100);
  };
  const handleClick = () => {
    const password = document.getElementById("signupPassword").value;
    const element = confirmPassword.current;
    if (element !== null) {
      if (element.value === password) {
        setMessage("");
        dispatch(SIGNING_UP(false));
        signup();
      } else {
        setMessage("비밀번호가 일치하지 않습니다.");
      }
    }
  };
  async function signup() {
    try {
      const userId = document.getElementById("signupId").value;
      const password = document.getElementById("signupPassword").value;
      const nickName = document.getElementById("signupNickName").value;
      const body = {
        userId,
        password,
        nickName
      };
      const res = await fetch(`${API_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (data.success) {
        alert("🎉 회원가입에 성공했습니다");
        navigate("/login");
      } else {
        alert("회원가입에 실패했습니다");
        console.error(data.errorMessage);
      }
    } catch (err) {
      console.error(err);
    }
  }
  return /* @__PURE__ */ jsxs("section", { className: "signup-confirm-password-stage", style: move !== -400 ? { visibility: "hidden" } : {}, children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "비밀번호 재입력" }),
    /* @__PURE__ */ jsx("label", { htmlFor: "signupConfirmPassword", children: "비밀번호 재입력" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "password",
        id: "signupConfirmPassword",
        ref: confirmPassword,
        placeholder: "비밀번호 재입력",
        minLength: 8,
        maxLength: 32
      }
    ),
    /* @__PURE__ */ jsx("em", { className: "txt-signup-message", children: message }),
    /* @__PURE__ */ jsxs("div", { className: "button-group-move", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handlePrev, "aria-label": "이전 화면으로 이동", children: "비밀번호" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, "aria-label": "다음 화면으로 이동", children: "완료" })
    ] })
  ] });
}
function SignupMain() {
  const [move, setMove] = useState(0);
  return /* @__PURE__ */ jsx("main", { className: "main-signup", children: /* @__PURE__ */ jsxs("div", { className: "signup-stage-wrapper", style: { left: `${move}%`, transition: ".5s" }, children: [
    /* @__PURE__ */ jsx(InfoStage, { move, setMove }),
    /* @__PURE__ */ jsx(IdStage, { move, setMove }),
    /* @__PURE__ */ jsx(NickNameStage, { move, setMove }),
    /* @__PURE__ */ jsx(PasswordStage, { move, setMove }),
    /* @__PURE__ */ jsx(ConfirmPasswordStage, { move, setMove })
  ] }) });
}
function Page() {
  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_URL}/users`);
      const data = await res.json();
      if (data.success) {
        alert("접근할 수 없는 페이지입니다.");
        navigate("/search");
      }
    })();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopBar, { title: "회원가입" }),
    /* @__PURE__ */ jsx(SignupMain, {})
  ] });
}
export {
  Page
};
