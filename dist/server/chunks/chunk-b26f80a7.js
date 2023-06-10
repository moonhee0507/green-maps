import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { r as randomizeFileName } from "./chunk-8649d624.js";
import { I as IMG_URL, A as API_URL } from "./chunk-8c755a0c.js";
import { u as useAppSelector } from "./chunk-c407c4c8.js";
import { s as store } from "./chunk-70b2d03d.js";
function PictureSection({ photos }) {
  const fileInput = useRef(null);
  const handleClick = () => {
    var _a;
    if (images.length > 0) {
      setImages([]);
    } else {
      (_a = fileInput.current) == null ? void 0 : _a.click();
    }
  };
  const [images, setImages] = useState(() => {
    const inEditPage = window.location.pathname.includes("/edit");
    if (inEditPage && photos && photos.length > 0) {
      const temp = [];
      for (let photo of photos) {
        temp.push([`${IMG_URL}/${photo.src}`, photo.src.split(".").at(-1)]);
      }
      return temp;
    } else {
      return [];
    }
  });
  const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (event.target.files !== null) {
      const temp = [];
      for (let file of files) {
        temp.push([URL.createObjectURL(file), file.type]);
      }
      setImages(temp);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    var _a;
    if (images) {
      const temp = [];
      for (let image of images) {
        const fileName = randomizeFileName() + "." + ((_a = image[1]) == null ? void 0 : _a.replace("image/", ""));
        temp.push(fileName);
      }
      dispatch({ type: "reviewSlice/IMAGE_STATE", FILE_INFO: images, RANDOM_NAME: temp });
    }
  }, [images]);
  return /* @__PURE__ */ jsxs("fieldset", { className: "section-add-picture", children: [
    /* @__PURE__ */ jsx("legend", { className: "sr-only", children: "사진 첨부" }),
    /* @__PURE__ */ jsx("div", { className: "container-notice", children: /* @__PURE__ */ jsx("em", { children: "음식 사진이나 메뉴판 사진을 첨부해주세요. (최대 3장)" }) }),
    /* @__PURE__ */ jsxs("ul", { className: "container-picture", children: [
      /* @__PURE__ */ jsxs("li", { className: `list-add-picture ${images.length > 0 ? "reset" : ""}`, onClick: handleClick, children: [
        /* @__PURE__ */ jsx("label", { className: "sr-only", htmlFor: "fileInput" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            id: "fileInput",
            accept: "image/*",
            onChange: handleFileInputChange,
            style: { display: "none" },
            multiple: true,
            ref: fileInput
          }
        )
      ] }),
      /* @__PURE__ */ jsx("li", { className: "list-picture", "area-label": "추가한 이미지 리스트", children: images.length > 0 ? /* @__PURE__ */ jsx("img", { src: images[0][0], alt: "첫번째 이미지" }) : null }),
      /* @__PURE__ */ jsx("li", { className: "list-picture", "area-label": "추가한 이미지 리스트", children: images.length > 1 ? /* @__PURE__ */ jsx("img", { src: images[1][0], alt: "두번째 이미지" }) : null }),
      /* @__PURE__ */ jsx("li", { className: "list-picture", "area-label": "추가한 이미지 리스트", children: images.length > 2 ? /* @__PURE__ */ jsx("img", { src: images[2][0], alt: "세번째 이미지" }) : null })
    ] })
  ] });
}
function WriteSection({ title, content }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(() => {
    const editPage = window.location.pathname.includes("/edit");
    if (editPage) {
      dispatch({
        type: "reviewSlice/TXT_REVIEW_STATE",
        CONTENT: content
      });
      return content;
    } else {
      return "";
    }
  });
  function handleChange(event) {
    setValue(event.currentTarget.value);
    dispatch({
      type: "reviewSlice/TXT_REVIEW_STATE",
      CONTENT: event.currentTarget.value
    });
  }
  return /* @__PURE__ */ jsxs("fieldset", { className: "section-write-review", children: [
    /* @__PURE__ */ jsx("legend", { className: "sr-only", children: "글 작성" }),
    /* @__PURE__ */ jsx("label", { className: "sr-only", htmlFor: "restaurantInput", children: "식당이름" }),
    /* @__PURE__ */ jsx("input", { type: "text", value: title, id: "restaurantInput", readOnly: true }),
    /* @__PURE__ */ jsx("label", { htmlFor: "txtReview", className: "sr-only", children: "리뷰 작성란" }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        id: "txtReview",
        placeholder: "채식에 대한 이야기를 자유롭게 공유해주세요.\n(10자이상 100자 이내)",
        autoComplete: "on",
        maxLength: 100,
        minLength: 10,
        required: true,
        onChange: handleChange,
        value
      }
    )
  ] });
}
async function uploadImageToStorage(selectedImages, randomFileNames) {
  if (selectedImages.length === randomFileNames.length) {
    for (let i = 0; i < selectedImages.length; i++) {
      const file = await fetch(selectedImages[i][0]).then((res) => res.blob()).then((blob) => new File([blob], `${randomFileNames[i]}`, { type: `${blob.type}` }));
      const body = {
        name: `client/${randomFileNames[i]}`,
        type: file.type
      };
      try {
        const resUrl = await fetch(`${API_URL}/images/client`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
        const data = await resUrl.json();
        const signedUrl = data.signedUrl;
        await fetch(signedUrl, {
          method: "PUT",
          headers: {
            "Content-Type": file.type
          },
          body: file
        });
      } catch (err) {
        console.error(err);
      }
    }
  } else
    throw Error("이미지 네이밍 처리에 오류가 발생했습니다.");
}
function SubmitButton({
  restaurantId,
  reviewId,
  userInfo
}) {
  const [editPage] = useState(window.location.pathname.includes("/edit"));
  const content = useAppSelector((state) => state.reviewSlice.CONTENT);
  const { userId } = userInfo;
  const randomFileNames = useAppSelector((state) => state.reviewSlice.image.RANDOM_NAME);
  async function handleSubmit() {
    let photo = [];
    const selectedImages = store.getState().reviewSlice.image.FILE_INFO;
    if (selectedImages.length > 0) {
      if (!selectedImages[0][0].includes("https://")) {
        await uploadImageToStorage(selectedImages, randomFileNames);
        const temp = [];
        for (let i = 0; i < selectedImages.length; i++) {
          temp.push({ src: `client/${randomFileNames[i]}`, pick: true });
        }
        photo = temp;
      } else if (selectedImages[0][0].includes("https://")) {
        const temp = [];
        for (let selectedImage of selectedImages) {
          temp.push({ src: "client/" + selectedImage[0].split("client/").at(-1), pick: true });
        }
        photo = temp;
      }
    }
    let body;
    if (!editPage) {
      body = {
        owner: userId,
        restaurant: restaurantId,
        photo,
        content
      };
    } else {
      body = {
        restaurant: restaurantId,
        photo,
        content
      };
    }
    try {
      const res = await fetch(`${API_URL}/reviews/${editPage ? reviewId + "/edit" : ""}`, {
        method: editPage ? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      if (data.success === true) {
        alert("리뷰가 등록되었습니다.");
      } else {
        alert("리뷰 등록에 실패했습니다.\n다시 시도해주세요.");
      }
    } catch (e) {
      console.error(e);
    } finally {
      window.history.back();
    }
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("button", { type: "button", onClick: handleSubmit, className: "styled-button review", children: editPage ? "수정 완료" : "작성 완료" }) });
}
function ReviewForm({
  restaurantId,
  reviewId,
  title,
  photos,
  content,
  userInfo
}) {
  return /* @__PURE__ */ jsx("main", { className: "wrapper-review", children: /* @__PURE__ */ jsxs("form", { children: [
    /* @__PURE__ */ jsx(PictureSection, { photos }),
    /* @__PURE__ */ jsx(WriteSection, { title, content }),
    /* @__PURE__ */ jsx(SubmitButton, { restaurantId, reviewId, userInfo })
  ] }) });
}
export {
  ReviewForm as R
};
