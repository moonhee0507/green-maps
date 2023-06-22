import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { L as LoadingMain } from "../chunks/chunk-fa126bd4.js";
import { i as imgLoading } from "../chunks/chunk-dfb70939.js";
const documentProps = {
  title: "홈 | Green Maps",
  description: "채식 식당 지도 서비스"
};
function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [Component, setComponent] = useState(() => LoadingMain);
  const handleBeforeInstallPrompt = (event) => {
    event.preventDefault();
    setDeferredPrompt(event);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5e3);
    setComponent(() => React.lazy(() => import("../chunks/chunk-69f630df.js")));
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  useEffect(() => {
    if (!isLoading) {
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    }
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, [isLoading]);
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
    /* @__PURE__ */ jsx(Component, { deferredPrompt, setDeferredPrompt })
  ] });
}
export {
  Page,
  documentProps
};
