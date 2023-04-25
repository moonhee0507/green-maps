import { combineReducers } from 'redux';
import map from './map_reducer.js';
import { bookmark, like } from './button_reducer.js';

const rootReducer = combineReducers({ map, bookmark, like });

export default rootReducer;
