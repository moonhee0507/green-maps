import { combineReducers } from 'redux';
import { buttonSlice, mapSlice, reviewSlice, paginationSlice, postSlice } from './index.js';

import type { ButtonSlice } from './_slices/buttonSlice.js';
import type { MapSlice } from './_slices/mapSlice.js';
import type { ReviewSlice } from './_slices/reviewSlice.js';
import type { PaginationSlice } from './_slices/paginationSlice.js';
import type { PostSlice } from './_slices/postSlice.js';

export type RootState = {
    buttonSlice: ButtonSlice;
    mapSlice: MapSlice;
    reviewSlice: ReviewSlice;
    paginationSlice: PaginationSlice;
    postSlice: PostSlice;
};

const rootReducer = combineReducers({
    buttonSlice: buttonSlice,
    mapSlice: mapSlice,
    reviewSlice: reviewSlice,
    paginationSlice: paginationSlice,
    postSlice: postSlice,
});

export default rootReducer;
