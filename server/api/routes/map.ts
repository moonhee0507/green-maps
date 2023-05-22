import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';

const route = Router();

export default (app: Router) => {
    app.use('/map', route);

    // 현재 화면 내에 있는 식당 가져오기
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

    // 거리 계산하기
    route.post('/distance', async (req: Request, res: Response) => {
        const currentLocation = req.body.currentLocation;
        const targetLocation = req.body.targetLocation;

        const aggregate = Restaurant.aggregate([
            {
                $geoNear: {
                    spherical: false,
                    near: {
                        type: 'Point',
                        coordinates: currentLocation,
                    },
                    key: 'location',
                    distanceField: 'distance',
                    query: {
                        'location.coordinates': targetLocation,
                    },
                },
            },
        ]);

        const result = await aggregate.exec();

        res.json({ distance: result[0].distance });
    });
};
