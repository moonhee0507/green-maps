import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';

const route = Router();

export default (app: Router) => {
    app.use('/scrappers', route);

    route.post('/save', (req: Request, res: Response) => {
        try {
            const restaurant = new Restaurant(req.body);

            restaurant
                .save()
                .then((document) => {
                    if (Object.hasOwn(document, 'title')) {
                        res.status(200).json({ saveSuccess: true });
                    } else {
                        throw Error;
                    }
                })
                .catch(async (err) => {
                    if (err.message.includes('E11000')) {
                        const filter = { title: req.body.title, address: req.body.address };
                        const update = { ...req.body };

                        await Restaurant.findOneAndUpdate(filter, update);
                    }
                });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });
};
