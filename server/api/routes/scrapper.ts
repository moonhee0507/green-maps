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
                    const filter = { title: req.body.title, address: req.body.address };
                    const update = { ...req.body };

                    await Restaurant.findOneAndUpdate(filter, update);
                }
                console.log(err.message);
            }
            return res.status(200).json({ saveSuccess: true });
        });
    });
};
