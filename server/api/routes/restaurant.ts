import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';

const route = Router();

export default (app: Router) => {
    app.use('/restaurants', route);

    route.get('/', async (req: Request, res: Response) => {
        const page = Number(req.query.page || 1);
        const limit = Number(req.query.limit || 20);

        try {
            const total = await Restaurant.countDocuments({});
            const lists = await Restaurant.find({})
                .sort({ address: -1 })
                .skip(limit * (page - 1))
                .limit(limit);

            res.json({
                total: total,
                countLimit: limit,
                currentPage: page,
                lists,
            });
        } catch (err) {
            console.error(err);
        }
    });

    route.get('/certificates', async (req: Request, res: Response) => {});
};
