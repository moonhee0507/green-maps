import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './_reducers/rootReducer.js';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export function getStore() {
    return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
