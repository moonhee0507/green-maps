import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { u as useAppSelector } from "./chunk-0e4e6c3d.js";
function Pagination({ count, perPage }) {
  const dispatch = useDispatch();
  const [globalWindow, setGlobalWindow] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setGlobalWindow(true);
    }
  }, []);
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [globalWindow]);
  const pageCount = Math.ceil(count / perPage);
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }
  const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
  function handlePrev() {
    dispatch({ type: "paginationSlice/CURRENT_PAGE", currentPage: currentPage - 1 });
  }
  function handleNext() {
    dispatch({ type: "paginationSlice/CURRENT_PAGE", currentPage: currentPage + 1 });
  }
  return /* @__PURE__ */ jsx("nav", { className: "wrapper-pagination", style: currentPath === "/search" ? { paddingBottom: "0" } : {}, children: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "aria-label": "이전 페이지 버튼",
        className: "button-prev-page",
        disabled: currentPage === 1 ? true : false,
        onClick: handlePrev
      }
    ) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("ol", { className: "container-pagination", children: pageNumbers.map((number) => {
      return /* @__PURE__ */ jsx(PageNumber, { number }, number);
    }) }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "aria-label": "다음 페이지 버튼",
        className: "button-next-page",
        disabled: currentPage === pageNumbers.pop() ? true : false,
        onClick: handleNext
      }
    ) })
  ] }) });
}
function PageNumber({ number }) {
  const dispatch = useDispatch();
  const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
  function handleClick(event) {
    dispatch({ type: "paginationSlice/CURRENT_PAGE", currentPage: Number(event.currentTarget.value) });
  }
  return /* @__PURE__ */ jsx(
    "li",
    {
      hidden: number <= Math.ceil(currentPage / 5) * 5 && number >= Math.ceil(currentPage / 5) * 5 - 4 ? false : true,
      children: /* @__PURE__ */ jsx(
        "button",
        {
          className: `button-page ${number === currentPage ? "on" : ""}`,
          type: "button",
          onClick: handleClick,
          value: number,
          children: number
        }
      )
    }
  );
}
export {
  Pagination as P
};
