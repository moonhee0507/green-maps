import { Router } from 'express';
import user from './routes/user.js';
import restaurant from './routes/restaurant.js';
import scrapper from './routes/scrapper.js';

export default () => {
    const app = Router();
    user(app);
    restaurant(app);
    scrapper(app);

    return app;
};
