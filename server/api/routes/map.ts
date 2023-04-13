import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';

const route = Router();

export default (app: Router) => {
    app.use('/map', route);

    route.post('/currentlist', async (req: Request, res: Response) => {
        try {
            const lists = await Restaurant.find({
                location: {
                    $geoWithin: {
                        $geometry: {
                            type: 'Polygon',
                            coordinates: [req.body],
                        },
                    },
                },
            });

            res.json(lists);
        } catch (err) {
            console.error(err);
        }
    });
};
