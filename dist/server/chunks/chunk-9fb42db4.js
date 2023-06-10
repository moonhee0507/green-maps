import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState: {
    review: {},
    currentPage: 1,
    comment: {}
  },
  reducers: {
    CURRENT_PAGE: (state, action) => {
      state.currentPage = action.currentPage;
    },
    SET_COMMENT: (state, action) => {
      state.comment = action.payload;
    }
  }
});
const { SET_COMMENT } = paginationSlice.actions;
const paginationSlice$1 = paginationSlice.reducer;
export {
  SET_COMMENT as S,
  paginationSlice$1 as p
};
