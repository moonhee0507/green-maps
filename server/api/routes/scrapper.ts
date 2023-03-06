import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';

const route = Router();

export default (app: Router) => {
    app.use('/scrappers', route);

    route.post('/save', (req: Request, res: Response) => {
        const restaurant = new Restaurant(req.body);

        restaurant.save(async (err, restaurantInfo) => {
            if (err) {
                if (err.message.includes('E11000')) {
                    const filter = { address: req.body.address };
                    const update = { ...req.body };

                    await Restaurant.findOneAndUpdate(filter, update);
                }
            }
            return res.status(200).json({ saveSuccess: true });
        });
    });
};
