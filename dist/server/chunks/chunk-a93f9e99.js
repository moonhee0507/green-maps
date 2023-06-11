import { jsx } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
const useAppDispatch = useDispatch;
const useAppSelector = useSelector;
function ButtonGoBack() {
  const isLoggingIn = useAppSelector((state) => state.loginSlice.isLoggingIn);
  const isSigningUp = useAppSelector((state) => state.signupSlice.isSigningUp);
  function goBack() {
    window.history.back();
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
