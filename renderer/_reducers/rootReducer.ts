import { combineReducers } from 'redux';
import { buttonSlice, mapSlice, reviewSlice, paginationSlice } from './index.js';

import type { ButtonSlice } from './_slices/buttonSlice.js';
import type { MapSlice } from './_slices/mapSlice.js';
import type { ReviewSlice } from './_slices/reviewSlice.js';
import type { PaginationSlice } from './_slices/paginationSlice.js';

export type RootState = {
    buttonSlice: ButtonSlice;
    mapSlice: MapSlice;
    reviewSlice: ReviewSlice;
    paginationSlice: PaginationSlice;
};

const rootReducer = combineReducers({
    buttonSlice: buttonSlice,
    mapSlice: mapSlice,
    reviewSlice: reviewSlice,
    paginationSlice: paginationSlice,
});

export default rootReducer;
