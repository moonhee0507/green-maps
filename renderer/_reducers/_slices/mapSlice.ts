import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../../server/models/Restaurant';

export interface MapSlice {
    PAINT: boolean;
    COUNT: number;
}

type InitialState = {
    PAINT: boolean;
    COUNT: number;
    radiusModalOn: boolean;
    radius: number;
    resultInRadius: Restaurant[];
};

const initialState: InitialState = {
    PAINT: true,
    COUNT: 0,
    radiusModalOn: false,
    radius: 500,
    resultInRadius: [],
};

const mapSlice = createSlice({
    name: 'mapSlice',
    initialState: initialState,
    reducers: {
        LOADED: (state, action: any) => {
            state.PAINT = action.PAINT;
        },
        CHANGED_CENTER: (state, action: any) => {
            state.COUNT = action.COUNT;
        },
        CHANGE_RADIUS_MODAL: (state, action: PayloadAction<boolean>) => {
            state.radiusModalOn = action.payload;
        },
        SET_RADIUS: (state, action: PayloadAction<number>) => {
            state.radius = action.payload;
        },
        SET_RESULT_IN_RADIUS: (state, action: PayloadAction<Restaurant[]>) => {
            state.resultInRadius = action.payload;
        },
    },
});

export const { CHANGE_RADIUS_MODAL, SET_RADIUS, SET_RESULT_IN_RADIUS } = mapSlice.actions;

export default mapSlice.reducer;
