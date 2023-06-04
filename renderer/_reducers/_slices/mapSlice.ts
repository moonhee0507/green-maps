import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../../server/models/Restaurant';

export type StateToGeolocation = 'prompt' | 'denied' | 'granted';

type InitialState = {
    PAINT: boolean;
    stateToGeolocation: StateToGeolocation;
    COUNT: number;
    radiusModalOn: boolean;
    radius: number;
    resultInRadius: Restaurant[];
    nearest: Restaurant[];
    checkGeolocationModalOn: boolean;
};

const initialState: InitialState = {
    PAINT: true,
    stateToGeolocation: 'prompt',
    COUNT: 0,
    radiusModalOn: false,
    radius: 500,
    resultInRadius: [],
    nearest: [],
    checkGeolocationModalOn: false,
};

const mapSlice = createSlice({
    name: 'mapSlice',
    initialState: initialState,
    reducers: {
        LOADED: (state, action: any) => {
            state.PAINT = action.PAINT;
        },
        SET_LOCATION_ACCESS: (state, action: PayloadAction<StateToGeolocation>) => {
            state.stateToGeolocation = action.payload;
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
        SET_NEAREST_LIST: (state, action: PayloadAction<Restaurant[]>) => {
            state.nearest = action.payload;
        },
        CHECK_LOCATION_ACCESS_MODAL: (state, action: PayloadAction<boolean>) => {
            state.checkGeolocationModalOn = action.payload;
        },
    },
});

export const {
    SET_LOCATION_ACCESS,
    CHANGE_RADIUS_MODAL,
    SET_RADIUS,
    SET_RESULT_IN_RADIUS,
    SET_NEAREST_LIST,
    CHECK_LOCATION_ACCESS_MODAL,
} = mapSlice.actions;

export default mapSlice.reducer;
