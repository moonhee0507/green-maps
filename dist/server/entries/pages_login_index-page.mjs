import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { T as TopBar } from "../chunks/chunk-dcb05bf0.js";
import { a as useAppDispatch, u as useAppSelector } from "../chunks/chunk-0e4e6c3d.js";
import { L as LOGGING_IN, S as SET_ID } from "../chunks/chunk-1ccf3f37.js";
import { L as Link } from "../chunks/chunk-24b72a12.js";
import { A as API_URL } from "../chunks/chunk-94504c62.js";
import { navigate } from "vite-plugin-ssr/client/router";
import "react-redux";
import "../chunks/chunk-3e2eef8e.js";
import "@reduxjs/toolkit";
const imgKakao = "/images/icon-kakao.png";
function SelectStage({ setMove }) {
  const dispatch = useAppDispatch();
  const nextStage = () => {
    setMove(-100);
    dispatch(LOGGING_IN(true));
  };
  async function callAgreementScreen() {
    window.location.href = `${API_URL}/oauth/kakao`;
  }
  useEffect(() => {
    const queryString = window.location.search;
    const paramFromQueryString = new URLSearchParams(queryString);
    const authorizeCode = paramFromQueryString.get("code");
    try {
      if (authorizeCode) {
        getAccessTokenFromKakao(authorizeCode).then((data) => {
          if (data.success) {
            getKakaoUserData().then((data2) => {
              if (data2.success) {
                window.location.href = "/my";
              } else {
                console.error(`카카오 사용자 데이터 가져오기 실패`);
              }
            });
          } else {
            console.error(`카카오 API 토큰 요청에 실패했습니다.`);
          }
        });
      } else {
        console.error(`카카오 AuthorizeCode가 없습니다.`);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);
  async function getAccessTokenFromKakao(authorizeCode) {
    const res = await fetch(`${API_URL}/oauth/kakao/token?code=${authorizeCode}`, {
      credentials: "include",
      method: "GET"
    });
    const data = await res.json();
    return data;
  }
  async function getKakaoUserData() {
    const res = await fetch(`${API_URL}/oauth/kakao/users`, {
      credentials: "include",
      method: "GET"
    });
    const data = await res.json();
    return data;
  }
  return /* @__PURE__ */ jsxs("section", { className: "login-select-stage", children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "로그인 방식 선택" }),
    /* @__PURE__ */ jsx("div", { className: "container-rocket", children: /* @__PURE__ */ jsx("span", { children: "🚀" }) }),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: nextStage, className: "styled-button reuse-in-login", children: "로그인" }),
    /* @__PURE__ */ jsxs("button", { type: "button", className: "styled-button kakao-login", onClick: callAgreementScreen, children: [
      /* @__PURE__ */ jsx("img", { src: imgKakao, alt: "카카오 아이콘" }),
      /* @__PURE__ */ jsx("span", { children: "카카오 로그인" })
    ] }),
    /* @__PURE__ */ jsx(Link, { href: "/signup", className: "link-to-signup", children: "회원가입" })
  ] });
}
function IdStage({ setMove }) {
  const dispatch = useAppDispatch();
  const [id, setId] = useState("");
  const handlePrev = () => {
    setMove((prev) => prev + 100);
    dispatch(LOGGING_IN(false));
  };
  const handleNext = () => {
    setMove((prev) => prev - 100);
    dispatch(SET_ID(id));
  };
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return /* @__PURE__ */ jsxs("section", { className: "login-id-stage", children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "아이디 입력" }),
    /* @__PURE__ */ jsx("label", { htmlFor: "loginId", children: "아이디" }),
    /* @__PURE__ */ jsx("input", { type: "text", id: "loginId", onChange: handleChange }),
    /* @__PURE__ */ jsxs("div", { className: "button-group-move", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handlePrev, "aria-label": "이전 화면으로 이동", children: "첫 화면" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleNext, "aria-label": "다음 화면으로 이동", children: "비밀번호" })
    ] })
  ] });
}
function PasswordStage({ setMove }) {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.loginSlice.currentId);
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handlePrev = () => {
    setMove((prev) => prev + 100);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };
  async function handleClick() {
    dispatch(LOGGING_IN(false));
    try {
      const body = new URLSearchParams();
      body.append("userId", id);
      body.append("password", password);
      body.append("keepLogin", isChecked ? "true" : "false");
      const res = await fetch(`${API_URL}/users/login`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body.toString()
      });
      const data = await res.json();
      if (data.success) {
        window.alert("🎉🎉로그인에 성공했습니다🎉🎉");
        navigate("/search");
      } else {
        window.alert("로그인에 실패했습니다");
      }
    } catch (err) {
      console.error(err);
    }
  }
  return /* @__PURE__ */ jsxs("section", { className: "login-password-stage", children: [
    /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "비밀번호 입력" }),
    /* @__PURE__ */ jsx("label", { htmlFor: "loginPassword", children: "비밀번호" }),
    /* @__PURE__ */ jsx("input", { type: "password", id: "loginPassword", onChange: handlePasswordChange }),
    /* @__PURE__ */ jsx("label", { htmlFor: "loginPersist", children: "로그인 유지" }),
    /* @__PURE__ */ jsx("input", { type: "checkbox", id: "loginPersist", onChange: handleCheckChange }),
    /* @__PURE__ */ jsxs("div", { className: "button-group-move", children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handlePrev, "aria-label": "이전 화면으로 이동", children: "아이디" }),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, "aria-label": "다음 화면으로 이동", children: "로그인" })
    ] })
  ] });
}
function LoginMain() {
  const [move, setMove] = useState(0);
  return /* @__PURE__ */ jsx("main", { className: "main-login", children: /* @__PURE__ */ jsxs("div", { className: "login-stage-wrapper", style: { left: `${move}%`, transition: ".5s" }, children: [
    /* @__PURE__ */ jsx(SelectStage, { setMove }),
    /* @__PURE__ */ jsx(IdStage, { setMove }),
    /* @__PURE__ */ jsx(PasswordStage, { setMove })
  ] }) });
}
const documentProps = {
  title: "로그인 | Green Maps",
  description: "채식 식당 지도 서비스 로그인"
};
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
    /* @__PURE__ */ jsx(TopBar, { title: "로그인" }),
    /* @__PURE__ */ jsx(LoginMain, {})
  ] });
}
export {
  Page,
  documentProps
};
