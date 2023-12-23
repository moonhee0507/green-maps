import express from 'express';
import './database.js';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { renderPage } from 'vite-plugin-ssr/server';
import { root } from './root.js';
import fetch from 'node-fetch';

const isProduction = process.env.NODE_ENV === 'production';

import routes from './api/index.js';
import type { UserInfo } from './models/User.js';
import https from 'https';
import fs from 'fs-extra';

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

const sslOption = {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem'),
};

startServer();

async function startServer() {
    const app = express();

    const corsOptions: cors.CorsOptions = {
        origin: process.env.NODE_ENV === 'production' ? 'https://www.green-maps.site' : 'https://localhost:5000',
        methods: ['GET', 'OPTIONS', 'PATCH', 'DELETE', 'POST', 'PUT'],
        allowedHeaders: [
            'X-CSRF-Token',
            'X-Requested-With',
            'Accept',
            'Accept-Version',
            'Content-Length',
            'Content-MD5',
            'Content-Type',
            'Date',
            'X-Api-Version',
            'Cookie',
            'Cache-Control',
        ],
        credentials: true,
        optionsSuccessStatus: 200,
        maxAge: 10 * 60, // seconds
    };
    app.use(cors(corsOptions));
    app.options('*', cors(corsOptions));

    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.use('/v1', routes());

    const PORT = process.env.PORT || 5000;

    if (isProduction) {
        const sirv = (await import('sirv')).default;
        app.use(sirv(`${root}/dist/client`));

        app.listen(PORT, () => {
            console.log(`🚀 ${PORT}번 포트 실행 중...`);
        });
    } else {
        const vite = await import('vite');
        const viteDevMiddleware = (
            await vite.createServer({
                root,
                server: {
                    middlewareMode: true,
                    https: sslOption,
                    port: 5000,
                },
            })
        ).middlewares;

        app.use(viteDevMiddleware);

        const server = https.createServer(sslOption, app);

        server.listen(PORT, () => {
            console.log(`🚀 ${PORT}번 포트 실행 중...`);
        });
    }

    // 페이지 라우팅할때마다.
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
        const { httpResponse } = pageContext;
        if (!httpResponse) return next();
        const { body, statusCode, headers, earlyHints } = httpResponse;
        if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });

        res.status(statusCode);
        headers.forEach(([name, value]) => res.setHeader(name, value));
        res.send(body);
    });
}

async function checkToken(token: string): Promise<CheckTokenResponse> {
    const res = await fetch(
        `${isProduction ? 'https://api.green-maps.site/v1' : 'https://localhost:5000/v1'}/users/check-token`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token }),
        }
    );

    const data = (await res.json()) as CheckTokenResponse;

    return data;
}
