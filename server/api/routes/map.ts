import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';
import CATEGORIES from '../../../components/image/CATEGORY.js';

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
            const category: string[] | '*' = req.body.category;

            let convertToRegisteredCategoryInSchema = [];

            if (Array.isArray(category) && category.length > 0) {
                for (let i = 0; i < category.length; i++) {
                    convertToRegisteredCategoryInSchema.push(...CATEGORIES[category[i]].list);
                }
            }

            const lists = await Restaurant.find({
                $and: [
                    {
                        location: {
                            $nearSphere: {
                                $geometry: {
                                    type: 'Point',
                                    coordinates: currentLocation,
                                },
                                $maxDistance: req.query.radius,
                            },
                        },
                    },
                    {
                        category: {
                            $in: convertToRegisteredCategoryInSchema,
                        },
                    },
                ],
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

    route.post('/region', async (req: Request, res: Response) => {
        try {
            const sido = req.query.sido;
            const sigungu = req.query.sigungu === 'null' ? '' : req.query.sigungu;

            const limit = Number(req.query.limit || 10);
            const page = Number(req.query.page || 1);

            const category: string[] | '*' = req.body.category;

            let categoryQuery: any = {
                $match: {},
            };

            if (Array.isArray(category) && category.length > 0) {
                const convertToRegisteredCategoryInSchema = [];

                for (let i = 0; i < category.length; i++) {
                    convertToRegisteredCategoryInSchema.push(...CATEGORIES[category[i]].list);
                }

                // Restaurant 스키마의 category에 convertToRegisteredCategoryInSchema 배열의 요소중 하나와 일치하는 것 거르기
                categoryQuery = {
                    $match: {
                        category: {
                            $in: convertToRegisteredCategoryInSchema,
                        },
                    },
                };
            } else if (category === '*') {
                categoryQuery = {
                    $match: {},
                };
            }

            // address를 split해서 0번지와 1번지를 새로운 필드에 저장(전체 데이터가 아니라 address에 region이 있는 데이터에 대해서만 작업)
            const countAggregate = Restaurant.aggregate([
                categoryQuery,
                {
                    $addFields: {
                        sido: {
                            $arrayElemAt: [{ $split: ['$address', ' '] }, 0],
                        },
                        sigungu: {
                            $arrayElemAt: [{ $split: ['$address', ' '] }, 1],
                        },
                    },
                },
                {
                    $match: {
                        $and: [{ sido: { $regex: sido } }, { sigungu: { $regex: sigungu } }],
                    },
                },
                {
                    $group: {
                        _id: null,
                        totalCount: { $sum: 1 },
                    },
                },
            ]);

            const totalCountResult = await countAggregate.exec();
            const totalCount = totalCountResult.length > 0 ? totalCountResult[0].totalCount : 0;

            const documentAggregate = Restaurant.aggregate([
                categoryQuery,
                {
                    $addFields: {
                        sido: {
                            $arrayElemAt: [{ $split: ['$address', ' '] }, 0],
                        },
                        sigungu: {
                            $arrayElemAt: [{ $split: ['$address', ' '] }, 1],
                        },
                    },
                },
                {
                    $match: {
                        $and: [{ sido: { $regex: sido } }, { sigungu: { $regex: sigungu } }],
                    },
                },
                {
                    $skip: limit * (page - 1),
                },
                {
                    $limit: limit,
                },
            ]);

            const documentResult = await documentAggregate.exec();

            res.json({
                success: true,
                total: totalCount,
                currentPage: page,
                lists: documentResult,
            });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });
};
