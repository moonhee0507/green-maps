import { Router, Response, NextFunction } from 'express';
import Restaurant from '../../models/Restaurant.js';
import { PostSearchReq } from '../types.js';
import { setSearchCategoryQuery, setSearchCertQuery, setSearchDistanceQuery, setSearchSortQuery } from '../../middleware/setSearchRestaurantQuery.js';
import { createCalcAccuracyQuery } from '../../utils/searchUtils.js';

const route = Router();

export default (app: Router) => {
    app.use('/search', route);

    route.post(
        '/', 
        setSearchCategoryQuery, 
        setSearchCertQuery, 
        setSearchSortQuery, 
        setSearchDistanceQuery, 
        async (req: PostSearchReq, res: Response, next: NextFunction) => {
        try {
            const keyword = req.query.keyword;

            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 20;

            if (keyword) {
                // 띄어쓰기 단위로 끊기
                const arrKeyword = keyword.split(' ');

                // /[keyword1|keyword2]/gi <= document 비교용 정규식
                const regex = new RegExp(arrKeyword.join('|'), 'i');

                // $in 사용 정규식배열
                const regexKeyword = arrKeyword.map((keyword) => new RegExp(keyword, 'i'));

                // 카테고리
                const categoryQuery = req.categoryQuery;

                // 인증
                const certQuery = req.certQuery;

                // 정렬 - 별점순, 리뷰순, 거리순
                const sortQuery = req.sortQuery;

                // 거리
                const distanceQuery = req.distanceQuery;

                const matchStage = {
                    $match: {
                        $or: [
                            { title: { $in: regexKeyword } },
                            { address: { $in: regexKeyword } },
                            { certification: { $in: regexKeyword } },
                            { category: { $in: regexKeyword } },
                        ],
                    },
                }

                if (categoryQuery && certQuery && sortQuery && distanceQuery) {
                    // 주소 7, 업종3, 이름2, 인증1
                    const aggregate = Restaurant.aggregate([
                        distanceQuery,
                        categoryQuery,
                        certQuery,
                        matchStage,
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
                                        {
                                            $sum: createCalcAccuracyQuery({
                                                    columnName: "$title",
                                                    regex,
                                                    trueVal: 2,
                                                    falseVal: 0
                                                })
                                        },
                                        {
                                            $max: createCalcAccuracyQuery({
                                                columnName: "$address",
                                                regex,
                                                trueVal: 7,
                                                falseVal: 0
                                            })
                                        },
                                        {
                                            $sum: createCalcAccuracyQuery({
                                                columnName: "$certification",
                                                regex,
                                                trueVal: 1,
                                                falseVal: 0
                                            })
                                        },
                                        {
                                            $sum: createCalcAccuracyQuery({
                                                columnName: "$category",
                                                regex,
                                                trueVal: 3,
                                                falseVal: 0
                                            })
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
                        matchStage,
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
                                        {
                                            $sum: createCalcAccuracyQuery({
                                                    columnName: "$title",
                                                    regex,
                                                    trueVal: 2,
                                                    falseVal: 0
                                                })
                                        },
                                        {
                                            $max: createCalcAccuracyQuery({
                                                columnName: "$address",
                                                regex,
                                                trueVal: 7,
                                                falseVal: 0
                                            })
                                        },
                                        {
                                            $sum: createCalcAccuracyQuery({
                                                columnName: "$certification",
                                                regex,
                                                trueVal: 1,
                                                falseVal: 0
                                            })
                                        },
                                        {
                                            $sum: createCalcAccuracyQuery({
                                                columnName: "$category",
                                                regex,
                                                trueVal: 3,
                                                falseVal: 0
                                            })
                                        },
                                    ],
                                },
                            },
                        },
                        sortQuery,
                    ]);

                    const result = await aggregate.exec();
                    const totalCount = await totalAggregate.exec();
    
                    return res.status(200).json({
                        success: true,
                        total: totalCount.length,
                        currentPage: page,
                        perPage: limit,
                        lists: result,
                    });
                }
            }

            return res.status(400).json({
                success: false,
                message: 'Search word was not passed.'
            })
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });
};
