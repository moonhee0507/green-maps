import { combineReducers } from 'redux';
import { buttonSlice, mapSlice, reviewSlice, paginationSlice, postSlice } from './index.js';

const rootReducer = combineReducers({
    buttonSlice: buttonSlice,
    mapSlice: mapSlice,
    reviewSlice: reviewSlice,
    paginationSlice: paginationSlice,
    postSlice: postSlice,
});

export default rootReducer;
