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
    loginSlice,
    signupSlice,
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
    loginSlice: loginSlice,
    signupSlice: signupSlice,
});

export default rootReducer;
