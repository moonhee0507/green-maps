import { createSlice } from '@reduxjs/toolkit';

export interface MapSlice {
    PAINT: boolean;
    COUNT: number;
}

const mapSlice = createSlice({
    name: 'mapSlice',
    initialState: {
        PAINT: true,
        COUNT: 0,
    },
    reducers: {
        LOADED: (state, action: any) => {
            state.PAINT = action.PAINT;
        },
        CHANGED_CENTER: (state, action: any) => {
            state.COUNT = action.COUNT;
        },
    },
});

export default mapSlice.reducer;
