import { jsx } from "react/jsx-runtime";
const gifSpinner = "/images/spinner.gif";
function LoadingMain() {
  return /* @__PURE__ */ jsx("div", { style: { flexGrow: "1", position: "relative" }, children: /* @__PURE__ */ jsx(
    "img",
    {
      src: gifSpinner,
      alt: "로딩 이미지",
      style: {
        width: "50px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    }
  ) });
}
export {
  LoadingMain as L
};
