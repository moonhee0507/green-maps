import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';
import { getStore } from './store/index.js';

export { render };
export const clientRouting = true;
export const hydrationCanBeAborted = true;

let root: any;

async function render(pageContext: PageContextClient) {
    const { Page, pageProps, routeParams, user } = pageContext;
    const store = getStore();

    console.log('😶‍🌫️😶‍🌫️ 클라이언트사이드 렌더링');

    const page = (
        <Provider store={store}>
            <PageShell pageContext={pageContext}>
                <Page {...pageProps} routeParams={routeParams} user={user} />
            </PageShell>
        </Provider>
    );

    const container = document.getElementById('page-view') as HTMLElement;
    // SPA
    if (container.innerHTML === '' || !pageContext.isHydration) {
        if (!root) {
            root = ReactDOM.createRoot(container);
        }
        root.render(page);
        // SSR
    } else {
        root = hydrateRoot(container, page);
    }
}
