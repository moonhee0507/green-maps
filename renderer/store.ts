// import { createStore } from 'redux';
import * as toolkitRaw from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './_reducers';

const { configureStore } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

const store = configureStore({
    reducer: rootReducer,
    devTools: { shouldHotReload: true, shouldCatchErrors: true },
});

export function getStore(PRELOADED_STATE?: any) {
    // const store = createStore(
    //     testReducer,
    //     PRELOADED_STATE,
    //     devToolsEnhancer({ shouldHotReload: true, shouldCatchErrors: true })
    // );
    // const store = configureStore({
    //     reducer: rootReducer,
    //     devTools: { shouldHotReload: true, shouldCatchErrors: true },
    // });
    return store;
}

export default store;
