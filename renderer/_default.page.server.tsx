import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { Provider } from 'react-redux';
import { getStore } from './store/index.js';
import { PageShell } from './PageShell';
import icon from '/images/icon.png';
import type { PageContextServer } from './types';

export { render };
export const passToClient = ['pageProps', 'PRELOADED_STATE', 'routeParams', 'token', 'user'];

async function render(pageContext: PageContextServer) {
    const store = getStore();
    const { Page, pageProps, routeParams, token, user } = pageContext;

    console.log('🚀🚀 서버사이드 렌더링');

    let pageHtml;
    const PRELOADED_STATE = JSON.stringify(store.getState());

    if (!pageContext.Page) {
        // SPA
        pageHtml = '';
    } else {
        // SSR
        pageHtml = ReactDOMServer.renderToString(
            <Provider store={store}>
                <PageShell pageContext={pageContext}>
                    <Page {...pageProps} routeParams={routeParams} token={token} user={user} />
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
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
                <title>${title}</title>
            </head>
            <body>
                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=136def8e37bfc98bffe8939cd80ab687&libraries=services,clusterer,drawing"></script>
                <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
                <script>
                    var global = global || window;
                    window.__PRELOADED_STATE__ = ${dangerouslySkipEscape(PRELOADED_STATE)}
                </script>
        </html>`;

    const redirect = '/';

    return {
        documentHtml,
        pageContext: {
            pageProps,
            PRELOADED_STATE,
            routeParams,
            token,
            user,
            redirect,
        },
    };
}
