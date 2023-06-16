import { jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { L as LoadingMain } from "../chunks/chunk-3818be5d.js";
const documentProps = {
  title: "홈 | Green Maps",
  description: "채식 식당 검색과 북마크 서비스"
};
const HomeMain = React.lazy(() => import("../chunks/chunk-5311d76c.js"));
function Page() {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTrigger(true);
    }, 5e3);
  }, []);
  return trigger ? /* @__PURE__ */ jsx(React.Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMain, {}), children: /* @__PURE__ */ jsx(HomeMain, {}) }) : /* @__PURE__ */ jsx(LoadingMain, {});
}
export {
  Page,
  documentProps
};
