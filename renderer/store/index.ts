import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../_reducers/rootReducer.js';

declare global {
    interface Window {
        __PRELOADED_STATE__: any;
    }
}

const preloadedState = typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined;

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState,
});

export function getStore() {
    return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
