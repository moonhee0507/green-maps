import express from 'express';
import './database.js';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { renderPage } from 'vite-plugin-ssr/server';
import { root } from './root.js';

const isProduction = process.env.NODE_ENV === 'production';

import config from './config/index.js';
import routes from './api/index.js';

startServer();

async function startServer() {
    const app = express();

    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.use(config.api.prefix, routes());

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
        const pageContextInit = {
            urlOriginal: req.originalUrl,
            token: req.cookies.auth,
            user: {
                isLoggedIn: false,
                info: null,
            },
        };
        const pageContext = await renderPage(pageContextInit);
        const { httpResponse } = pageContext;
        if (!httpResponse) return next();
        const { body, statusCode, contentType, earlyHints } = httpResponse;
        if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
        res.status(statusCode).type(contentType).send(body);
    });

    app.listen(config.port, () => console.log(`🚀 ${config.port}번 포트 실행 중...`));
}
