import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        isLoggingIn: false,
    },
    reducers: {
        // 로그인 화면 진입 중에는 톱바의 뒤로가기 숨기기
        LOGGING_IN: (state, action: PayloadAction<boolean>) => {
            state.isLoggingIn = action.payload;
        },
    },
});

export const { LOGGING_IN } = loginSlice.actions;

export default loginSlice.reducer;
