import { combineReducers } from 'redux';
import { buttonSlice, mapSlice, formSlice } from './index.js';

import type { ButtonSlice } from './_slices/buttonSlice.js';
import type { MapSlice } from './_slices/mapSlice.js';
import type { FormSlice } from './_slices/formSlice.js';

export type RootState = {
    buttonSlice: ButtonSlice;
    mapSlice: MapSlice;
    formSlice: FormSlice;
};

const rootReducer = combineReducers({
    buttonSlice: buttonSlice,
    mapSlice: mapSlice,
    formSlice: formSlice,
});

export default rootReducer;
