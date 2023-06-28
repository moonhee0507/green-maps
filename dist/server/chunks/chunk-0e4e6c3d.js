import { jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
const useAppDispatch = useDispatch;
const useAppSelector = useSelector;
function ButtonGoBack() {
  const isLoggingIn = useAppSelector((state) => state.loginSlice.isLoggingIn);
  const isSigningUp = useAppSelector((state) => state.signupSlice.isSigningUp);
  function goBack() {
    if (window.location.pathname.includes("/community/search/")) {
      window.location.href = "/community";
    } else {
      window.history.back();
    }
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "button-back",
      onClick: goBack,
      "aria-label": "뒤로가기",
      style: isLoggingIn || isSigningUp ? { visibility: "hidden" } : {}
    }
  );
}
export {
  ButtonGoBack as B,
  useAppDispatch as a,
  useAppSelector as u
};
//# sourceMappingURL=chunk-0e4e6c3d.js.map
