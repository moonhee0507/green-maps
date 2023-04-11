// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './_reducers';

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
