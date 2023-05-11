import { Router } from 'express';
import user from './routes/user.js';
import restaurant from './routes/restaurant.js';
import scrapper from './routes/scrapper.js';
import map from './routes/map.js';
import review from './routes/review.js';
import image from './routes/image.js';
import post from './routes/post/post.js';
import subject from './routes/post/subject.js';
import today from './routes/post/today.js';

export default () => {
    const app = Router();

    user(app);
    restaurant(app);
    scrapper(app);
    map(app);
    review(app);
    image(app);

    post(app);
    subject(app);
    today(app);

    return app;
};
