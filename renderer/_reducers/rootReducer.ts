import { combineReducers } from 'redux';
import { buttonSlice, mapSlice, formSlice, paginationSlice } from './index.js';

import type { ButtonSlice } from './_slices/buttonSlice.js';
import type { MapSlice } from './_slices/mapSlice.js';
import type { FormSlice } from './_slices/formSlice.js';
import type { PaginationSlice } from './_slices/paginationSlice.js';

export type RootState = {
    buttonSlice: ButtonSlice;
    mapSlice: MapSlice;
    formSlice: FormSlice;
    paginationSlice: PaginationSlice;
};

const rootReducer = combineReducers({
    buttonSlice: buttonSlice,
    mapSlice: mapSlice,
    formSlice: formSlice,
    paginationSlice: paginationSlice,
});

export default rootReducer;
