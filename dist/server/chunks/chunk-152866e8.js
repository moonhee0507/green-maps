import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { i as imgHeart } from "./chunk-edfa0bc8.js";
import { a as useAppDispatch, u as useAppSelector } from "./chunk-c407c4c8.js";
import { I as ICON_STANDARD } from "./chunk-2c77b6c9.js";
const imgStar = "/images/icon-star.svg";
const imgBolt = "/images/icon-bolt.svg";
const imgCheck = "/images/icon-check.svg";
const imgEye = "/images/icon-eye.svg";
const imgSmile = "/images/icon-smile.svg";
const imgLightBulb = "/images/icon-lightbulb.svg";
const imgClover = "/images/icon-clover.svg";
const imgSquare = "/images/icon-square.svg";
const imgThumbsUp = "/images/icon-thumbs-up.svg";
const arrIcon = [
  imgStar,
  imgHeart,
  imgBolt,
  imgCheck,
  imgEye,
  imgSmile,
  imgLightBulb,
  imgClover,
  imgSquare,
  imgThumbsUp
];
function IconSelection() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { className: "txt-icon-selection", children: "아이콘 선택" }),
    /* @__PURE__ */ jsx("div", { className: "wrapper-icon-group", children: arrIcon.map((icon, i) => /* @__PURE__ */ jsx(IconContainer, { icon }, Math.random())) })
  ] });
}
function IconContainer({ icon }) {
  const dispatch = useAppDispatch();
  const selectedIcon = useAppSelector((state) => state.myListSlice.selectedIcon);
  function handleClick(event) {
    const arrStyleIcon = document.querySelectorAll(".style-icon");
    arrStyleIcon.forEach((dom) => {
      if (dom !== event.currentTarget.children[0]) {
        dom.classList.remove("on");
      }
    });
    dispatch(ICON_STANDARD(icon));
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const arrStyleIcon = document.querySelectorAll(".style-icon");
      arrStyleIcon.forEach((dom) => {
        if (dom !== event.currentTarget) {
          dom.classList.remove("on");
        }
      });
      dispatch(ICON_STANDARD(icon));
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "container-icon", onClick: handleClick, children: /* @__PURE__ */ jsx("div", { className: `style-icon ${icon === selectedIcon ? "on" : ""}`, tabIndex: 0, onKeyDown: handleKeyDown, children: /* @__PURE__ */ jsx("img", { src: icon, alt: "그룹 아이콘" }) }) });
}
export {
  IconSelection as I
};
