import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

export { getStore };

function getStore(PRELOADED_STATE?: any) {
    const store = createStore(
        testReducer,
        PRELOADED_STATE,
        devToolsEnhancer({ shouldHotReload: true, shouldCatchErrors: true })
    );
    return store;
}

function testReducer(state = { COLOR_MODE: 'LIGHT' }, action: any) {
    switch (action.type) {
        case 'LIGHT_MODE':
            return { COLOR_MODE: 'LIGHT' };
        case 'DARK_MODE':
            return { COLOR_MODE: 'DARK' };
        default:
            return state;
    }
}
