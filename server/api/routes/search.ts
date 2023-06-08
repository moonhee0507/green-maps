import { Router, Request, Response } from 'express';
import Restaurant from '../../models/Restaurant.js';
import CATEGORIES from '../../../components/image/CATEGORY.js';

const route = Router();

export default (app: Router) => {
    app.use('/search', route);

    route.post('/', async (req: Request, res: Response) => {
        try {
            const keyword = req.query.keyword;
            const category = req.body.category;
            const cert = req.body.cert;

            const orderBy = req.query.orderBy || 'relevance'; // relevance, rating, review, distance
            const currentLocation = req.body.currentLocation;

            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 20;

            if (typeof keyword === 'string' && keyword !== '') {
                // 띄어쓰기 단위로 끊기
                const arrKeyword = keyword.split(' ');

                // /[keyword1|keyword2]/gi <= document 비교용 정규식
                const regex = new RegExp(arrKeyword.join('|'), 'i');

                // $in 사용 정규식배열
                const regexKeyword = arrKeyword.map((keyword) => new RegExp(keyword, 'i'));

                // 카테고리
                let categoryQuery: any = {
                    $match: {},
                };

                if (Array.isArray(category) && category.length > 0) {
                    const convertToRegisteredCategoryInSchema = [];

                    for (let i = 0; i < category.length; i++) {
                        convertToRegisteredCategoryInSchema.push(...CATEGORIES[category[i]].list);
                    }

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

                // 인증
                let certQuery: any = {
                    $match: {},
                };

                if (Array.isArray(cert) && cert.length > 0) {
                    certQuery = {
                        $match: {
                            certification: {
                                $in: cert,
                            },
                        },
                    };
                } else if (cert === '*') {
                    certQuery = {
                        $match: {},
                    };
                }

                // 정렬 - 별점순, 리뷰순, 거리순
                let sortQuery: any = {
                    $sort: {
                        accuracy: -1,
                        _id: 1, // 정렬 일관성
                    },
                };

                switch (orderBy) {
                    case 'rating':
                        sortQuery = {
                            $sort: {
                                rating: -1,
                                _id: 1,
                            },
                        };

                        break;
                    case 'review': // countReview 필드 추가
                        sortQuery = {
                            $sort: {
                                countReview: -1,
                                _id: 1,
                            },
                        };

                        break;

                    case 'distance':
                        sortQuery = {
                            $sort: {
                                distance: 1,
                                _id: 1,
                            },
                        };
                }

                // 거리
                const distanceQuery = {
                    $geoNear: {
                        spherical: true, //
                        near: {
                            type: 'Point',
                            coordinates: currentLocation,
                        },
                        distanceField: 'distance',
                    },
                };

                // 주소 7, 업종3, 이름2, 인증1 점수
                const aggregate = Restaurant.aggregate([
                    distanceQuery,
                    categoryQuery,
                    certQuery,
                    {
                        $match: {
                            $or: [
                                { title: { $in: regexKeyword } },
                                { address: { $in: regexKeyword } },
                                { certification: { $in: regexKeyword } },
                                { category: { $in: regexKeyword } },
                            ],
                        },
                    },
                    {
                        $addFields: {
                            countReview: {
                                $size: {
                                    $ifNull: ['$reviews', []],
                                },
                            },
                            distance: '$distance',
                            accuracy: {
                                $sum: [
                                    // 배열 내용을 모두 합산
                                    {
                                        $sum: {
                                            // title을 split한 배열을 돌면서 in 내부의 표현식을 처리
                                            $map: {
                                                input: {
                                                    $split: ['$title', ' '],
                                                },
                                                as: 'word', // 요소
                                                in: {
                                                    $cond: [
                                                        // 부울 표현식 평가(콜백함수)
                                                        {
                                                            $regexMatch: {
                                                                // 정규표현식에 매치되는지.
                                                                input: '$$word',
                                                                regex: regex,
                                                            },
                                                        },
                                                        2,
                                                        0,
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                    {
                                        $max: {
                                            $map: {
                                                input: {
                                                    $split: ['$address', ' '],
                                                },
                                                as: 'word',
                                                in: {
                                                    $cond: [
                                                        {
                                                            $regexMatch: {
                                                                input: '$$word',
                                                                regex: regex,
                                                            },
                                                        },
                                                        7,
                                                        0,
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                    {
                                        $sum: {
                                            $map: {
                                                input: {
                                                    $split: ['$certification', ' '],
                                                },
                                                as: 'word',
                                                in: {
                                                    $cond: [
                                                        {
                                                            $regexMatch: {
                                                                input: '$$word',
                                                                regex: regex,
                                                            },
                                                        },
                                                        1,
                                                        0,
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                    {
                                        $sum: {
                                            $map: {
                                                input: {
                                                    $split: ['$category', ' '],
                                                },
                                                as: 'word',
                                                in: {
                                                    $cond: [
                                                        {
                                                            $regexMatch: {
                                                                input: '$$word',
                                                                regex: regex,
                                                            },
                                                        },
                                                        3,
                                                        0,
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    sortQuery,
                    {
                        $skip: limit * (page - 1),
                    },
                    {
                        $limit: limit,
                    },
                ]);

                const totalAggregate = Restaurant.aggregate([
                    distanceQuery,
                    categoryQuery,
                    certQuery,
                    {
                        $match: {
                            $or: [
                                { title: { $in: regexKeyword } },
                                { address: { $in: regexKeyword } },
                                { certification: { $in: regexKeyword } },
                                { category: { $in: regexKeyword } },
                            ],
                        },
                    },
                    {
                        $addFields: {
                            countReview: {
                                $size: {
                                    $ifNull: ['$reviews', []],
                                },
                            },
                            distance: '$distance',
                            accuracy: {
                                $sum: [
                                    // 배열 내용을 모두 합산
                                    {
                                        $sum: {
                                            // title을 split한 배열을 돌면서 in 내부의 표현식을 처리
                                            $map: {
                                                input: {
                                                    $split: ['$title', ' '],
                                                },
                                                as: 'word', // 요소
                                                in: {
                                                    $cond: [
                                                        // 부울 표현식 평가(콜백함수)
                                                        {
                                                            $regexMatch: {
                                                                // 정규표현식에 매치되는지.
                                                                input: '$$word',
                                                                regex: regex,
                                                            },
                                                        },
                                                        2,
                                                        0,
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                    {
                                        $max: {
                                            $map: {
                                                input: {
                                                    $split: ['$address', ' '],
                                                },
                                                as: 'word',
                                                in: {
                                                    $cond: [
                                                        {
                                                            $regexMatch: {
                                                                input: '$$word',
                                                                regex: regex,
                                                            },
                                                        },
                                                        7,
                                                        0,
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                    {
                                        $sum: {
                                            $map: {
                                                input: {
                                                    $split: ['$certification', ' '],
                                                },
                                                as: 'word',
                                                in: {
                                                    $cond: [
                                                        {
                                                            $regexMatch: {
                                                                input: '$$word',
                                                                regex: regex,
                                                            },
                                                        },
                                                        1,
                                                        0,
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                    {
                                        $sum: {
                                            $map: {
                                                input: {
                                                    $split: ['$category', ' '],
                                                },
                                                as: 'word',
                                                in: {
                                                    $cond: [
                                                        {
                                                            $regexMatch: {
                                                                input: '$$word',
                                                                regex: regex,
                                                            },
                                                        },
                                                        3,
                                                        0,
                                                    ],
                                                },
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    sortQuery,
                ]);

                const result = await aggregate.exec();
                const totalCount = await totalAggregate.exec();

                res.status(200).json({
                    success: true,
                    total: totalCount.length,
                    currentPage: page,
                    perPage: limit,
                    lists: result,
                });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });
};
