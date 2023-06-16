import { jsx } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { i as imgLoading, L as LoadingMain } from "../chunks/chunk-3818be5d.js";
const documentProps = {
  title: "홈 | Green Maps",
  description: "채식 식당 검색과 북마크 서비스"
};
const HomeMain = React.lazy(() => import("../chunks/chunk-bae06e2b.js"));
function Page() {
  useEffect(() => {
    const app = document.querySelector(".app");
    try {
      const LoadingElement = () => {
        const imgElement = document.createElement("img");
        imgElement.src = imgLoading;
        imgElement.alt = "좌표 생성 로딩";
        imgElement.style.width = "50px";
        imgElement.style.position = "absolute";
        imgElement.style.top = "50%";
        imgElement.style.left = "50%";
        imgElement.style.transform = "translate(-50%, -50%)";
        imgElement.id = "__LOADING__";
        return imgElement;
      };
      setTimeout(() => {
        if (app !== null) {
          app.appendChild(LoadingElement());
        }
      }, 5e3);
    } catch (error) {
    } finally {
      if (app) {
        const LoadingElement = document.getElementById("__LOADING__");
        if (LoadingElement) {
          app.removeChild(LoadingElement);
        }
      }
    }
  }, []);
  return /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: /* @__PURE__ */ jsx(HomeMain, {}) });
}
export {
  Page,
  documentProps
};
