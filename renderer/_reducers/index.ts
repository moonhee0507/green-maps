import { combineReducers } from 'redux';
import map from './map_reducer.js';
import { bookmark, like } from './button_reducer.js';
import { reviewForm } from './form_reducer.js';

const rootReducer = combineReducers({ map, bookmark, like, reviewForm });

export default rootReducer;
