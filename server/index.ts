import express from 'express';
import './database.js';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { renderPage } from 'vite-plugin-ssr/server';
import { root } from './root.js';
import fetch from 'node-fetch';

const isProduction = process.env.NODE_ENV === 'production';

import routes from './api/index.js';
import { API_URL } from '../renderer/CONSTANT_URL/index.js';
import type { UserInfo } from './models/User.js';
import allowCors from './middleware/allowCors.js';

type PageContextInit = {
    urlOriginal: string;
    token: string | null;
    user?: {
        isLoggedIn: boolean;
        info: null | UserInfo;
    };
};

interface CheckTokenResponse {
    auth: boolean;
    message?: string;
    user?: UserInfo;
}

startServer();

async function startServer() {
    const app = express();
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.use('/api', routes());

    if (isProduction) {
        const sirv = (await import('sirv')).default;
        app.use(sirv(`${root}/dist/client`));
    } else {
        const vite = await import('vite');
        const viteDevMiddleware = (
            await vite.createServer({
                root,
                server: { middlewareMode: true },
            })
        ).middlewares;
        app.use(viteDevMiddleware);
    }

    app.get('*', async (req, res, next) => {
        let pageContextInit: PageContextInit = {
            urlOriginal: req.originalUrl,
            token: req.cookies.auth,
            user: {
                isLoggedIn: false,
                info: null,
            },
        };

        await checkToken(req.cookies.auth).then((data) => {
            if (data) {
                pageContextInit = {
                    ...pageContextInit,
                    user: {
                        isLoggedIn: data.auth,
                        info: data.user || null,
                    },
                };
            }
        });
        const pageContext = await renderPage(pageContextInit);
        console.log(pageContext);
        const { httpResponse } = pageContext;
        if (!httpResponse) return next();
        const { body, statusCode, contentType, earlyHints } = httpResponse;
        if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });

        res.status(statusCode).type(contentType).send(body);
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`🚀 ${PORT}번 포트 실행 중...`));
}

async function checkToken(token: string): Promise<CheckTokenResponse> {
    const res = await fetch(`${API_URL}/users/check-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token }),
    });

    const data = (await res.json()) as CheckTokenResponse;

    return data;
}
