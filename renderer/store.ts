import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './_reducers/rootReducer.js';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export function getStore() {
    return store;
}

export default store;
