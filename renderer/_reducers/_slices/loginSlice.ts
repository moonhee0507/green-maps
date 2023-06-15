import * as toolkitRaw from '@reduxjs/toolkit';

const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        isLoggingIn: false,
        currentId: '',
    },
    reducers: {
        // 로그인 화면 진입 중에는 톱바의 뒤로가기 숨기기
        LOGGING_IN: (state, action: toolkitRaw.PayloadAction<boolean>) => {
            state.isLoggingIn = action.payload;
        },
        SET_ID: (state, action: toolkitRaw.PayloadAction<string>) => {
            state.currentId = action.payload;
        },
    },
});

export const { LOGGING_IN, SET_ID } = loginSlice.actions;

export default loginSlice.reducer;
