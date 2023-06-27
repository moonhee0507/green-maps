import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const signupSlice = createSlice({
  name: "signupSlice",
  initialState: {
    isSigningUp: false
  },
  reducers: {
    SIGNING_UP: (state, action) => {
      state.isSigningUp = action.payload;
    }
  }
});
const { SIGNING_UP } = signupSlice.actions;
const signupSlice$1 = signupSlice.reducer;
export {
  SIGNING_UP as S,
  signupSlice$1 as s
};
//# sourceMappingURL=chunk-6f77cb2d.js.map
