import * as toolkitRaw from '@reduxjs/toolkit';
import rootReducer from '../_reducers/rootReducer.js';

const { configureStore } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

declare global {
    interface Window {
        __PRELOADED_STATE__: any;
    }
}

const PRELOADED_STATE = typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined;

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: PRELOADED_STATE,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
