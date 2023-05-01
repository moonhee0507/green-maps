import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { Provider } from 'react-redux';
import { getStore } from './store.js';
import { PageShell } from './PageShell';
import icon from '/images/icon.png';
import type { PageContextServer } from './types';

export { render };
export const passToClient = ['pageProps', 'PRELOADED_STATE', 'routeParams'];

function render(pageContext: PageContextServer) {
    const store = getStore();
    const { Page, pageProps, routeParams } = pageContext;

    let pageHtml;

    if (!pageContext.Page) {
        // SPA
        pageHtml = '';
    } else {
        // SSR
        pageHtml = ReactDOMServer.renderToString(
            <Provider store={store}>
                <PageShell pageContext={pageContext}>
                    <Page {...pageProps} routeParams={routeParams} />
                </PageShell>
            </Provider>
        );
    }

    const { documentProps } = pageContext.exports;
    const title = (documentProps && documentProps.title) || 'Green Maps';
    const desc = (documentProps && documentProps.description) || '채식 식당 검색과 북마크는 그린 맵';

    const manifestUrl = import.meta.env.BASE_URL + 'manifest.json';
    const styleUrl = import.meta.env.BASE_URL + 'scss/index.css';

    const documentHtml = escapeInject`<!DOCTYPE html>
        <html lang="ko">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" href=${icon} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="${desc}" />
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#00784a">
                <meta name="theme-color" media="(prefers-color-scheme: dark)"  content="#00784a">
                <link rel="manifest" href="${manifestUrl}" />
                <link rel="stylesheet" href="${styleUrl}" type="text/css" />
                <title>${title}</title>
            </head>
            <body>
                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=136def8e37bfc98bffe8939cd80ab687&libraries=services,clusterer,drawing"></script>
                <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
                <script>
                    var global = global || window;
                </script>
            </body>
        </html>`;

    const PRELOADED_STATE = store.getState();

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
            pageProps,
            PRELOADED_STATE,
            routeParams,
        },
    };
}
