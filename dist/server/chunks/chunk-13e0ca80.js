import { jsx, jsxs } from "react/jsx-runtime";
function NavBar({ isLoggedIn }) {
  const checkLogin = () => {
    if (!isLoggedIn) {
      const message = "로그인이 필요한 서비스입니다.\n로그인하시겠습니까?";
      if (typeof window !== "undefined" && window.confirm(message)) {
        window.location.href = "/login";
      }
    }
  };
  return /* @__PURE__ */ jsx("nav", { className: "nav-bar", children: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "link-nav", children: /* @__PURE__ */ jsx("em", { children: "홈" }) }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/search", className: "link-nav", children: /* @__PURE__ */ jsx("em", { children: "식당검색" }) }) }),
    /* @__PURE__ */ jsx("li", { children: isLoggedIn ? /* @__PURE__ */ jsx("a", { href: "/my-lists", className: "link-nav", children: /* @__PURE__ */ jsx("em", { children: "북마크" }) }) : /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "link-nav no-login",
        style: { width: "100%", border: "0" },
        onClick: checkLogin,
        children: /* @__PURE__ */ jsx("em", { children: "북마크" })
      }
    ) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/community", className: "link-nav", children: /* @__PURE__ */ jsx("em", { children: "커뮤니티" }) }) }),
    /* @__PURE__ */ jsx("li", { children: isLoggedIn ? /* @__PURE__ */ jsx("a", { href: "/my", className: "link-nav my", children: /* @__PURE__ */ jsx("em", { children: "내 정보" }) }) : /* @__PURE__ */ jsx("a", { href: "/login", className: "link-nav", children: /* @__PURE__ */ jsx("em", { children: "로그인" }) }) })
  ] }) });
}
export {
  NavBar as N
};
//# sourceMappingURL=chunk-13e0ca80.js.map
