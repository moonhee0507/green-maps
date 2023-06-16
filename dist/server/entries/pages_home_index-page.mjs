import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { L as LoadingMain } from "../chunks/chunk-fa126bd4.js";
import { i as imgLoading } from "../chunks/chunk-dfb70939.js";
const documentProps = {
  title: "홈 | Green Maps",
  description: "채식 식당 검색과 북마크 서비스"
};
const HomeMain = React.lazy(() => import("../chunks/chunk-bae06e2b.js"));
function Page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5e3);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return /* @__PURE__ */ jsxs(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: [
    isLoading ? /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          width: "50px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: "0.33"
        },
        children: /* @__PURE__ */ jsx("img", { src: imgLoading, alt: "로딩", style: { width: "100%" }, id: "__LOADING__" })
      }
    ) : null,
    /* @__PURE__ */ jsx(HomeMain, {})
  ] });
}
export {
  Page,
  documentProps
};
