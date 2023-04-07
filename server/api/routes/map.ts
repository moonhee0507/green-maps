import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';

const route = Router();

export default (app: Router) => {
    app.use('/maps', route);

    route.post('/inner', async (req: Request, res: Response) => {
        console.log(req.body);
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
