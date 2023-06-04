import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';
import { request } from 'http';

const route = Router();

export default (app: Router) => {
    app.use('/map', route);

    // 현재 화면 내에 있는 식당 가져오기(마커 표시용)
    route.post('/current-view', async (req: Request, res: Response) => {
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

    // 반경 내 식당을 가까운 순서대로 가져오기
    route.post('/within-radius-of', async (req: Request, res: Response) => {
        try {
            const currentLocation = req.body.currentLocation;

            const lists = await Restaurant.find({
                location: {
                    $nearSphere: {
                        $geometry: {
                            type: 'Point',
                            coordinates: currentLocation,
                        },
                        $maxDistance: req.query.radius,
                    },
                },
            });

            res.json({ success: true, lists: lists });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ errorMessage: err.message });
            }
        }
    });

    // 가장 가까운 식당 TOP n 가져오기
    route.post('/nearest', async (req: Request, res: Response) => {
        try {
            const currentLocation = req.body.currentLocation;

            const nearest = Restaurant.aggregate([
                {
                    $geoNear: {
                        near: {
                            type: 'Point',
                            coordinates: currentLocation,
                        },
                        distanceField: 'distance',
                    },
                },
                {
                    $limit: Number(req.query.top),
                },
            ]);

            const lists = await nearest;

            res.status(200).json({ success: true, lists: lists });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
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
