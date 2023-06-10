import { jsxs, jsx } from "react/jsx-runtime";
function Page({ is404 }) {
  if (is404) {
    return /* @__PURE__ */ jsxs("section", { className: "section-404", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "4️⃣0️⃣4️⃣",
        /* @__PURE__ */ jsx("span", { children: "Page Not Found" })
      ] }),
      /* @__PURE__ */ jsx(GoToHomeButton, {})
    ] });
  } else {
    return /* @__PURE__ */ jsxs("section", { className: "section-500", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        "5️⃣0️⃣0️⃣",
        /* @__PURE__ */ jsx("span", { children: "Internal Server Error" })
      ] }),
      /* @__PURE__ */ jsx(GoToHomeButton, {})
    ] });
  }
}
function GoToHomeButton() {
  return /* @__PURE__ */ jsx("a", { href: "/", className: "link-go-home", children: "홈으로 이동" });
}
export {
  Page
};
