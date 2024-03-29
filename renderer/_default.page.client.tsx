import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';

export { render };
// export const clientRouting = false;
export const hydrationCanBeAborted = true;

let root: ReactDOM.Root;

async function render(pageContext: PageContextClient) {
    const { Page, pageProps, routeParams, token, user, reviews, restaurantInfo, postId, post } = pageContext;

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
                        post={post}
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

        root.render(page);
        // SSR
    } else {
        root = hydrateRoot(container, page);
    }
}
