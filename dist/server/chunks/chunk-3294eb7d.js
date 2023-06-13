import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import { C as COPYRIGHT_URL } from "./chunk-dd72b177.js";
import { D as Distance } from "./chunk-16e381db.js";
import { u as useAppSelector, a as useAppDispatch } from "./chunk-c407c4c8.js";
import { navigate } from "vite-plugin-ssr/client/router";
import { k as CATEGORY_FILTER_MODAL, A as ADD_SELECTED_CATEGORY, e as SHOW_LIST_IN_REGION_MODAL } from "./chunk-0a6e623f.js";
import { i as imgClose } from "./chunk-0eea5c60.js";
import { a as appModalMode } from "./chunk-db98b5a2.js";
const CATEGORIES = {
  일식: {
    thumb: {
      src: "/images/category-japan.png",
      copyRight: "ultimatearm - Flaticon"
    },
    list: ["일식", "퓨전일식", "초밥,롤"]
  },
  "멕시칸/브라질": {
    thumb: {
      src: "images/category-south-america.png",
      copyRight: "Eucalyp - Flaticon"
    },
    list: ["멕시칸,브라질"]
  },
  샐러드: {
    thumb: {
      src: "images/category-salad.png",
      copyRight: "Victoruler - Flaticon"
    },
    list: ["샐러드"]
  },
  한식: {
    thumb: {
      src: "images/category-korea.png",
      copyRight: "Darius Dan - Flaticon"
    },
    list: [
      "한식",
      "분식",
      "한정식",
      "퓨전한식",
      "칼국수",
      "떡,한과",
      "떡볶이",
      "쌈밥",
      "한식뷔페",
      "돈까스,우동",
      "두부전문점",
      "찌개,전골",
      "도시락",
      "채식뷔페",
      "뷔페",
      "샤브샤브",
      "구내식당",
      "국수",
      "퓨전요리"
    ]
  },
  "인도/중동": {
    thumb: {
      src: "images/category-middle-east.png",
      copyRight: "cah nggunung - Flaticon"
    },
    list: ["인도/중동", "인도음식", "터키음식"]
  },
  양식: {
    thumb: {
      src: "images/category-west.png",
      copyRight: "pojok d - Flaticon"
    },
    list: ["양식", "이탈리안", "피자", "토스트", "햄버거", "패밀리레스토랑", "패스트푸드"]
  },
  카페: {
    thumb: {
      src: "images/category-cafe.png",
      copyRight: "Freepik - Flaticon"
    },
    list: [
      "베이커리",
      "까페",
      "카페",
      "커피전문점",
      "제과,베이커리",
      "디저트카페",
      "샌드위치",
      "갤러리카페",
      "테마카페",
      "아이스크림",
      "도넛",
      "북카페",
      "전통찻집",
      "스튜디오카페",
      "고양이카페"
    ]
  },
  술집: {
    thumb: {
      src: "images/category-drink.png",
      copyRight: "Good Ware - Flaticon"
    },
    list: ["술집", "호프,요리주점", "와인바", "일본식주점", "칵테일바"]
  },
  중식: {
    thumb: {
      src: "images/category-china.png",
      copyRight: "GOWI - Flaticon"
    },
    list: ["중국식", "중국요리", "중식", "아시아음식", "퓨전중식"]
  },
  동남아: {
    thumb: {
      src: "images/category-east-south-asia.png",
      copyRight: "Eucalyp - Flaticon"
    },
    list: ["동남아", "태국음식", "동남아음식"]
  },
  치킨: {
    thumb: {
      src: "images/category-chicken.png",
      copyRight: "Soni Sokell - Flaticon"
    },
    list: ["닭강정"]
  },
  해산물: {
    thumb: {
      src: "images/category-fish.png",
      copyRight: "fjstudio - Flaticon"
    },
    list: ["해물,생선", "참치회"]
  },
  죽: {
    thumb: {
      src: "images/category-porridge.png",
      copyRight: "Freepik - Flaticon"
    },
    list: ["죽"]
  },
  기타: {
    thumb: {
      src: "images/category-food.png",
      copyRight: "3ab2ou - Flaticon"
    },
    list: ["과일,채소가게", "식품판매", "생과일전문점", "교육,학문", "음식점", "식품가공,제조", "슈퍼마켓"]
  }
};
function getAppCategory(name) {
  if (name === "" || name === null)
    return "기타";
  for (const CATEGORY in CATEGORIES) {
    const categoryInfo = CATEGORIES[CATEGORY];
    if (categoryInfo.list.includes(name)) {
      return CATEGORY;
    }
  }
  return "기타";
}
function Thumb({ category }) {
  const [appCategory] = useState(() => getAppCategory(category));
  const [holder, setHolder] = useState("");
  const [src, setSrc] = useState("");
  useEffect(() => {
    const { copyRight, src: src2 } = CATEGORIES[appCategory].thumb;
    setHolder(copyRight);
    setSrc("/" + src2);
  }, [appCategory]);
  return /* @__PURE__ */ jsxs("div", { className: "container-img", children: [
    /* @__PURE__ */ jsx("a", { href: "/" + COPYRIGHT_URL, title: `${appCategory} icon`, children: /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
      "아이콘 제작자: ",
      holder
    ] }) }),
    src !== "" && /* @__PURE__ */ jsx("img", { src, alt: "카테고리 아이콘" })
  ] });
}
function DistanceContainer({ location }) {
  return /* @__PURE__ */ jsx("div", { className: "container-distance", children: /* @__PURE__ */ jsx(Distance, { location }) });
}
function useSwipeHook({ elRef, onDragMove }) {
  const dragMoveRef = useRef(null);
  dragMoveRef.current = onDragMove;
  useEffect(() => {
    let manager;
    import("hammerjs").then((module) => {
      const { DIRECTION_HORIZONTAL } = module;
      if (!elRef || !elRef.current) {
        console.error("useSwipe hook은 swipe 컨테이너를 참조해야 합니다.");
        return;
      }
      const container = elRef.current;
      manager = new Hammer.Manager(container);
      const Drag = new Hammer.Pan({ threshold: 10, direction: DIRECTION_HORIZONTAL });
      manager.add(Drag);
      manager.on("panmove", (event) => dragMoveRef.current && dragMoveRef.current(event));
      return () => {
        manager.off("panstart");
        manager.off("panmove");
      };
    });
  }, [dragMoveRef]);
}
const __FLEX_GAP__ = 10;
const __LI_WIDTH__ = 350;
const __BORDER__ = 1 * 2;
function RestaurantList() {
  const resultInRadius = useAppSelector((state) => state.mapSlice.resultInRadius);
  const nearest = useAppSelector((state) => state.mapSlice.nearest);
  const swipeContainerRef = useRef(null);
  const [dataInUse, setDataInUse] = useState(resultInRadius);
  useEffect(() => {
    if (resultInRadius.length > 0) {
      setDataInUse(resultInRadius);
    } else {
      setDataInUse(nearest);
    }
  }, [resultInRadius]);
  const [left, setLeft] = useState(0);
  const handleDragMove = (event) => {
    const deltaX = event.deltaX;
    setLeft((prevLeft) => {
      const newLeft = prevLeft + deltaX;
      if (newLeft > 0) {
        return 0;
      }
      const leftOfLastElement = (__FLEX_GAP__ + __LI_WIDTH__ + __BORDER__) * (dataInUse.length - 1) * -1;
      if (newLeft < leftOfLastElement) {
        return leftOfLastElement;
      }
      return newLeft;
    });
  };
  useSwipeHook({
    elRef: swipeContainerRef,
    onDragMove: handleDragMove
  });
  return /* @__PURE__ */ jsx("div", { className: "wrapper-swiper", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "container-swiper",
      ref: swipeContainerRef,
      style: { transform: `translateX(${left}px)`, transition: "1s" },
      children: /* @__PURE__ */ jsx("ul", { className: "ul-restaurant-in-radius", style: { gap: `${__FLEX_GAP__}px` }, children: dataInUse.map((restaurantInfo) => {
        return /* @__PURE__ */ jsx(RestaurantListItem, { restaurantInfo }, Math.random());
      }) })
    }
  ) });
}
function RestaurantListItem({ restaurantInfo, isFirst }) {
  const { _id, category, title, address, rating, reviews, certification, location } = restaurantInfo;
  const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);
  const liElement = useRef(null);
  useEffect(() => {
    if (isFirst && liElement.current) {
      liElement.current.scrollIntoView(false);
    }
  }, [isFirst, currentPage]);
  return /* @__PURE__ */ jsx("li", { style: { width: `${__LI_WIDTH__}px`, borderWidth: `${__BORDER__ / 2}px` }, ref: liElement, children: /* @__PURE__ */ jsxs("div", { onClick: () => navigate(`/search/${_id}`), children: [
    /* @__PURE__ */ jsx(Thumb, { category }),
    /* @__PURE__ */ jsx(DistanceContainer, { location: location.coordinates }),
    /* @__PURE__ */ jsx("div", { className: "container-right", children: /* @__PURE__ */ jsxs("dl", { children: [
      certification ? /* @__PURE__ */ jsxs("dl", { children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "채식 인증 내용" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-cert", children: certification })
      ] }) : null,
      /* @__PURE__ */ jsxs("dl", { children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "식당 이름" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-title", children: title }),
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "업종" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-category", children: category })
      ] }),
      /* @__PURE__ */ jsxs("dl", { children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "주소" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-address", children: address })
      ] }),
      /* @__PURE__ */ jsxs("dl", { className: "container-rating-count", children: [
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "평점" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-rating", children: rating }),
        /* @__PURE__ */ jsx("dt", { className: "sr-only", children: "리뷰 수" }),
        /* @__PURE__ */ jsx("dd", { className: "txt-count-comment", children: reviews ? reviews.length : 0 })
      ] })
    ] }) })
  ] }) });
}
function CloseButton() {
  const dispatch = useAppDispatch();
  function handleClose() {
    appModalMode(false);
    dispatch(CATEGORY_FILTER_MODAL(false));
  }
  return /* @__PURE__ */ jsx("button", { type: "button", className: "button-close", onClick: handleClose, children: /* @__PURE__ */ jsx("img", { src: imgClose, alt: "X 아이콘", className: "img-close" }) });
}
function SubmitButton() {
  const dispatch = useAppDispatch();
  const mapMode = useAppSelector((state) => state.mapSlice.mapMode);
  const handleClick = () => {
    const checkedNode = Array.from(
      document.querySelectorAll(".checkbox-category-filter")
    );
    const totalCategoryCount = checkedNode.length;
    const checkedCategoryName = checkedNode.filter((node) => node.checked === true).map((node) => node.value);
    if (checkedCategoryName.length === 0) {
      alert("업종을 선택해주세요.");
      return;
    }
    if (totalCategoryCount === checkedCategoryName.length) {
      dispatch(ADD_SELECTED_CATEGORY("*"));
    } else {
      dispatch(ADD_SELECTED_CATEGORY(checkedCategoryName));
    }
    if (mapMode === "지역탐색 모드") {
      dispatch(CATEGORY_FILTER_MODAL(false));
      dispatch(SHOW_LIST_IN_REGION_MODAL(true));
    } else if (mapMode === "반경탐색 모드") {
      dispatch(CATEGORY_FILTER_MODAL(false));
    }
  };
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: handleClick, className: "button-apply-filter", children: "적용하기" });
}
function CategoryFilterModal() {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const categoryFilterModalOn = useAppSelector((state) => state.mapSlice.categoryFilterModalOn);
  const [categoryList, _] = useState(() => {
    const tempList = Object.keys(CATEGORIES).filter((key) => key !== "기타");
    dispatch(ADD_SELECTED_CATEGORY([...tempList].sort()));
    return [...tempList].sort();
  });
  useEffect(() => {
    if (categoryFilterModalOn === true)
      setShow(true);
    else
      setShow(false);
  }, [categoryFilterModalOn]);
  const checkboxRefs = useRef([]);
  useEffect(() => {
    checkboxRefs.current = Array(categoryList.length).fill(null).map(() => React.createRef());
  }, [categoryList]);
  const handleUncheck = () => {
    checkboxRefs.current.map((ref) => {
      if (ref.current !== null) {
        ref.current.checked = false;
      }
    });
  };
  return /* @__PURE__ */ jsxs("article", { className: `modal-group-item ${show ? "on" : ""}`, children: [
    /* @__PURE__ */ jsx("h4", { children: "업종 필터" }),
    /* @__PURE__ */ jsxs("form", { children: [
      /* @__PURE__ */ jsxs("div", { className: "container-button-all-in-modal", children: [
        /* @__PURE__ */ jsx("button", { type: "button", onClick: handleUncheck, className: "button-all-category", children: "전체 해제" }),
        /* @__PURE__ */ jsx("button", { type: "reset", className: "button-all-category", children: "전체 선택" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "wrapper-checkbox-category", children: categoryList.map((name, i) => {
        return /* @__PURE__ */ jsx(CategoryItem, { name, index: i, ref: checkboxRefs.current[i] }, Math.random());
      }) }),
      /* @__PURE__ */ jsx(SubmitButton, {})
    ] }),
    /* @__PURE__ */ jsx(CloseButton, {})
  ] });
}
const CategoryItem = React.forwardRef(function CategoryItem2({ name, index }, ref) {
  const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    setIsChecked(selectedCategory.includes(name));
  }, [selectedCategory]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        checked: isChecked,
        onChange: handleCheckboxChange,
        id: `checkboxCategory-${index}`,
        className: "checkbox-category-filter",
        value: name,
        ref
      }
    ),
    /* @__PURE__ */ jsx("label", { htmlFor: `checkboxCategory-${index}`, children: name })
  ] });
});
export {
  CategoryFilterModal as C,
  RestaurantListItem as R,
  RestaurantList as a,
  CATEGORIES as b,
  CategoryItem as c
};
