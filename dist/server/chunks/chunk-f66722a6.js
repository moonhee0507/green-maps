import { jsxs, jsx } from "react/jsx-runtime";
const imgLoading = "/images/splash.webp";
function HomeMain({
  deferredPrompt,
  setDeferredPrompt
}) {
  const handleClick = () => {
    window.location.href = `/search`;
  };
  return /* @__PURE__ */ jsxs(
    "main",
    {
      className: "home-content",
      style: { background: `url(${imgLoading}) no-repeat center center/cover` },
      onClick: handleClick,
      children: [
        /* @__PURE__ */ jsx("div", { className: "container-title", children: /* @__PURE__ */ jsxs("h2", { children: [
          /* @__PURE__ */ jsx("span", { children: "Green" }),
          /* @__PURE__ */ jsx("span", { children: "Maps" })
        ] }) }),
        /* @__PURE__ */ jsxs("section", { className: "section-desc-service", children: [
          /* @__PURE__ */ jsx("h3", { children: "이런 서비스에요!" }),
          /* @__PURE__ */ jsxs("div", { className: "container-desc-service", children: [
            /* @__PURE__ */ jsx("p", { children: "전국 2400개의 채식 식당을 찾을 수 있어요." }),
            /* @__PURE__ */ jsx("p", { children: "북마크를 그룹으로 관리해요." }),
            /* @__PURE__ */ jsx("p", { children: "채식 식당에 대한 후기를 남길 수 있어요." }),
            /* @__PURE__ */ jsx("p", { children: "게시판을 통해 소통해요!" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "sudo-circle" })
      ]
    }
  );
}
export {
  HomeMain as default
};
//# sourceMappingURL=chunk-f66722a6.js.map
