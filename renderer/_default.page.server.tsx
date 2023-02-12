import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { PageShell } from './PageShell';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import icon from '/icon.png';
import type { PageContextServer } from './types';

export { render };
export const passToClient = ['pageProps']; // 브라우저에서 pageContext를 사용하려면 passToClient를 사용해야

async function render(pageContext: PageContextServer) {
    let pageHtml;
    if (!pageContext.Page) {
        // SPA
        pageHtml = '';
    } else {
        // SSR
        const { Page, pageProps } = pageContext;
        pageHtml = ReactDOMServer.renderToString(
            <PageShell pageContext={pageContext}>
                <Page {...pageProps} />
            </PageShell>
        );
    }

    const { documentProps } = pageContext.exports;
    const title = (documentProps && documentProps.title) || 'Green Maps';
    const desc = (documentProps && documentProps.description) || '채식 식당 검색과 북마크는 그린 맵';

    const documentHtml = escapeInject`<!DOCTYPE html>
        <html lang="ko">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" href="${icon}" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="${desc}" />
                <title>${title}</title>
            </head>
            <body>
                <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
            </body>
        </html>`;

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        },
    };
}
