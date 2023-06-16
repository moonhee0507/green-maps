import 'vite/modulepreload-polyfill';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import store from './store';
import { Provider } from 'react-redux';
import { PageShell } from './PageShell';
import icon512 from '/images/icon.png';
import icon192 from '/images/icon-192.png';
import type { PageContextServer } from './types';

export { onBeforeRender, render };

export const passToClient = [
    'pageProps',
    'PRELOADED_STATE',
    'routeParams',
    'token',
    'user',
    'groupName',
    'pageHtml',
    'reviews',
    'restaurantInfo',
    'postId',
];

async function render(pageContext: PageContextServer) {
    const { pageHtml } = pageContext;

    /**
     * SSR -> CSR로 전환시 hydrate error 해결
     * hydrate되는 html은 꼭 문자열이어야 함
     */
    const __PAGE_HTML__ = typeof pageHtml !== 'undefined' ? pageHtml : '';

    const { documentProps } = pageContext.exports;
    const title = (documentProps && documentProps.title) || 'Green Maps';
    const desc = (documentProps && documentProps.description) || '채식 식당 검색과 북마크는 그린 맵';

    const manifestUrl = import.meta.env.BASE_URL + 'app.webmanifest';
    const cssUrl = import.meta.env.BASE_URL + 'style/index.css';

    const PRELOADED_STATE = JSON.stringify(store);
    const LOGIN_MESSAGE = JSON.stringify('로그인이 필요한 서비스입니다.\n로그인하시겠습니까?');

    return escapeInject`<!DOCTYPE html>
    <html lang="ko">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" href=${icon512} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="${desc}" />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#00784a">
            <meta name="theme-color" media="(prefers-color-scheme: dark)"  content="#00784a">
            <link rel="manifest" href="${manifestUrl}" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap">
            <link rel="stylesheet" href="${cssUrl}" type="text/css" >
            <meta name="apple-mobile-web-app-capable" content="yes">
            <link rel="apple-touch-icon" href=${icon192}>
            <title>${title}</title>
        </head>
        <body>
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=136def8e37bfc98bffe8939cd80ab687&libraries=services,clusterer"></script>
            <div id="page-view">${dangerouslySkipEscape(__PAGE_HTML__)}</div>
            <script type="text/javascript">
                var global = global || window;
                window.__PRELOADED_STATE__ = ${dangerouslySkipEscape(PRELOADED_STATE)};
                
                const map = document.getElementById("map");
                if (map) {
                    map.addEventListener('touchmove', () => {});
                }

                const navBookmark = document.querySelector('.link-nav.no-login');
                if (navBookmark) {
                    navBookmark.addEventListener('click', () => {
                        const message = ${dangerouslySkipEscape(LOGIN_MESSAGE)};

                        if (confirm(message)) {
                            window.location.href = '/login';
                        }
                    });
                }
            </script>
    </html>`;
}

async function onBeforeRender(pageContext: PageContextServer) {
    const { Page, pageProps, routeParams, token, user, groupName, reviews, restaurantInfo, postId } = pageContext;

    let pageHtml;

    if (!Page) {
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

    const PRELOADED_STATE = store.getState();

    return {
        pageContext: {
            pageProps,
            PRELOADED_STATE,
            routeParams,
            token,
            user,
            groupName,
            pageHtml,
            reviews,
            restaurantInfo,
            postId,
        },
    };
}
