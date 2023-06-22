import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { L as LoadingMain } from "../chunks/chunk-fa126bd4.js";
import { i as imgLoading } from "../chunks/chunk-dfb70939.js";
const documentProps = {
  title: "홈 | Green Maps",
  description: "채식 식당 지도 서비스"
};
const HomeMain = React.lazy(() => import("../chunks/chunk-69f630df.js"));
function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const handleBeforeInstallPrompt = (event) => {
    event.preventDefault();
    setDeferredPrompt(event);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5e3);
    console.log("LCP 폴리필 테스트", test());
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  function test() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log("LCP:", lastEntry.startTime);
      console.log(lastEntry);
    });
    observer.observe({ type: "largest-contentful-paint", buffered: true });
  }
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
    /* @__PURE__ */ jsx(HomeMain, { deferredPrompt, setDeferredPrompt })
  ] });
}
export {
  Page,
  documentProps
};
