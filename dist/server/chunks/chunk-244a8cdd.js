import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    isLoggingIn: false
  },
  reducers: {
    // 로그인 화면 진입 중에는 톱바의 뒤로가기 숨기기
    LOGGING_IN: (state, action) => {
      state.isLoggingIn = action.payload;
    }
  }
});
const { LOGGING_IN } = loginSlice.actions;
const loginSlice$1 = loginSlice.reducer;
export {
  LOGGING_IN as L,
  loginSlice$1 as l
};
