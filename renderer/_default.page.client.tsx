import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';

export { render };
export const clientRouting = true;
export const hydrationCanBeAborted = true;

let root: any;

async function render(pageContext: PageContextClient) {
    const { Page, pageProps, routeParams, token, user, reviews, restaurantInfo, postId, documentProps } = pageContext;

    const page = (
        <React.StrictMode>
            <Provider store={store}>
                <PageShell pageContext={pageContext}>
                    <Page
                        {...pageProps}
                        routeParams={routeParams}
                        token={token}
                        user={user}
                        reviews={reviews}
                        restaurantInfo={restaurantInfo}
                        postId={postId}
                    />
                </PageShell>
            </Provider>
        </React.StrictMode>
    );

    const container = document.getElementById('page-view') as HTMLElement;
    // SPA
    if (container.innerHTML === '' || !pageContext.isHydration) {
        if (!root) {
            root = ReactDOM.createRoot(container);
        }

        document.title = documentProps?.title || 'Green Maps';

        const meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        meta.setAttribute('content', documentProps?.description || '채식 식당 지도 서비스');

        root.render(page);
        // SSR
    } else {
        root = hydrateRoot(container, page);
    }
}
