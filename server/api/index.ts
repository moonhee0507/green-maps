import { Router } from 'express';
import cors from 'cors';
import user from './routes/user.js';
import restaurant from './routes/restaurant.js';
import scrapper from './routes/scrapper.js';
import map from './routes/map.js';
import review from './routes/review.js';
import image from './routes/image.js';
import post from './routes/post/post.js';
import subject from './routes/post/subject.js';
import today from './routes/post/today.js';
import bookmark from './routes/bookmark.js';
import search from './routes/search.js';
import oauth from './routes/oauth.js';
import comment from './routes/comment.js';

export default () => {
    const app = Router();

    const corsOptions = {
        origin: true,
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
        preflightContinue: true,
    };
    app.use(cors(corsOptions));
    app.options('*', cors(corsOptions));

    user(app);
    restaurant(app);
    scrapper(app);
    map(app);
    review(app);
    image(app);

    post(app);
    subject(app);
    today(app);

    comment(app);

    bookmark(app);
    search(app);

    oauth(app);

    return app;
};
