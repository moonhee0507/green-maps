import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const initialState = {
  ID: "",
  image: {
    FILE_INFO: [],
    RANDOM_NAME: []
  },
  CONTENT: "",
  editDeleteNotifyModalOn: false,
  sameUserOwner: false,
  reviewId: "",
  restaurantId: ""
};
const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {
    OWNER_STATE: (state, action) => {
      state.ID = action.ID;
    },
    IMAGE_STATE: (state, action) => {
      state.image.FILE_INFO = action.FILE_INFO;
      state.image.RANDOM_NAME = action.RANDOM_NAME;
    },
    TXT_REVIEW_STATE: (state, action) => {
      state.CONTENT = action.CONTENT;
    },
    EDIT_DELETE_NOTIFY_MODAL: (state, action) => {
      state.editDeleteNotifyModalOn = action.payload;
    },
    SAME_USER_OWNER: (state, action) => {
      state.sameUserOwner = action.payload;
    },
    SET_REVIEW_ID: (state, action) => {
      state.reviewId = action.payload;
    },
    SET_RESTAURANT_ID: (state, action) => {
      state.restaurantId = action.payload;
    }
  }
});
const { EDIT_DELETE_NOTIFY_MODAL, SAME_USER_OWNER, SET_REVIEW_ID, SET_RESTAURANT_ID } = reviewSlice.actions;
const reviewSlice$1 = reviewSlice.reducer;
export {
  EDIT_DELETE_NOTIFY_MODAL as E,
  SAME_USER_OWNER as S,
  SET_REVIEW_ID as a,
  SET_RESTAURANT_ID as b,
  reviewSlice$1 as r
};
//# sourceMappingURL=chunk-4ef07e33.js.map
