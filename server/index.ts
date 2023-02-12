import express from 'express';
import './database.js';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { renderPage } from 'vite-plugin-ssr';
import { root } from './root.js';
const isProduction = process.env.NODE_ENV === 'production';

import User from './models/User.js';

startServer();

async function startServer() {
    const app = express();

    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());

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
        };
        const pageContext = await renderPage(pageContextInit);
        const { httpResponse } = pageContext;
        if (!httpResponse) return next();
        const { body, statusCode, contentType, earlyHints } = httpResponse;
        if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
        res.status(statusCode).type(contentType).send(body);
    });

    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`${port}번 포트에서 서버 실행 중...`);

    // signup
    app.post('/api/users/signup', (req, res) => {
        const user = new User(req.body);

        user.save((err: any, userInfo: any) => {
            if (err) return res.json({ success: false, errorMessage: err.message });
            return res.status(200).json({ success: true });
        });
    });

    // login
    app.post('/api/users/login', (req, res) => {
        User.findOne({ userId: req.body.userId }, (err: Error, user: any) => {
            if (!user) {
                return res.json({ success: false, errorMessage: '해당 유저가 존재하지 않습니다' });
            } else {
                user.comparePassword(req.body.password, (err: Error, same: any) => {
                    if (!same) {
                        return res.json({ success: false, errorMessage: '비밀번호가 일치하지 않습니다' });
                    } else {
                        user.generateToken((err: Error, user: any) => {
                            if (err) return res.status(400).send(err);
                            else {
                                res.cookie('x_auth', user.token).status(200).json({ success: true });
                            }
                        });
                    }
                });
            }
        });
    });
}
