import { combineReducers } from 'redux';
import {
    buttonSlice,
    mapSlice,
    reviewSlice,
    paginationSlice,
    postSlice,
    authSlice,
    myListSlice,
    profileSlice,
} from './index.js';

const rootReducer = combineReducers({
    buttonSlice: buttonSlice,
    mapSlice: mapSlice,
    reviewSlice: reviewSlice,
    paginationSlice: paginationSlice,
    postSlice: postSlice,
    authSlice: authSlice,
    myListSlice: myListSlice,
    profileSlice: profileSlice,
});

export default rootReducer;
