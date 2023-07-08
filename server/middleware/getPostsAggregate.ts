import { Response, NextFunction } from 'express';
import Post from '../models/Post.js';

export default async function getPostsAggregate(req: any, res: Response, next: NextFunction) {
    try {
        const page = Number(req.query.page || 1);
        const limit = Number(req.query.limit || 20);

        const subject = req.query.subject;
        const keyword = req.query.keyword;
        const boundary = req.query.boundary || 'tc';
        const orderBy = req.query.orderby || 'latest';

        let boundaryMatchStage = { $match: {} };
        let subjectMatchState = { $match: {} };

        if (subject) {
            subjectMatchState = {
                $match: {
                    subject: subject,
                },
            };
        }

        if (keyword) {
            switch (boundary) {
                case 'tc':
                    boundaryMatchStage = {
                        $match: {
                            $or: [
                                { title: { $regex: keyword, $options: 'i' } },
                                { content: { $regex: keyword, $options: 'i' } },
                            ],
                        },
                    };
                    break;

                case 't':
                    boundaryMatchStage = {
                        $match: { title: { $regex: keyword, $options: 'i' } },
                    };
                    break;

                case 'c':
                    boundaryMatchStage = {
                        $match: { content: { $regex: keyword, $options: 'i' } },
                    };
                    break;

                case 'n':
                    boundaryMatchStage = {
                        $match: { owner: { $regex: keyword, $options: 'i' } },
                    };
                    break;
            }
        }

        let sortStage: any = {
            $sort: {
                newRegisteredAt: -1,
            },
        };

        let addFieldForOrder: any = {
            $addFields: {},
        };

        switch (orderBy) {
            case 'accuracy':
                addFieldForOrder = {
                    $addFields: {
                        accuracy: {
                            $sum: [
                                {
                                    $sum: {
                                        $map: {
                                            input: {
                                                $split: ['$title', ' '],
                                            },
                                            as: 'word',
                                            in: {
                                                $cond: [
                                                    {
                                                        $regexMatch: {
                                                            input: '$$word',
                                                            regex: new RegExp(keyword, 'i'),
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
                                                $split: ['$content', ' '],
                                            },
                                            as: 'word',
                                            in: {
                                                $cond: [
                                                    {
                                                        $regexMatch: {
                                                            input: '$$word',
                                                            regex: new RegExp(keyword, 'i'),
                                                        },
                                                    },
                                                    1,
                                                    0,
                                                ],
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                };

                sortStage = {
                    $sort: {
                        accuracy: -1,
                        newRegisteredAt: -1,
                    },
                };
                break;

            case 'comment':
                addFieldForOrder = {
                    $addFields: {
                        countComment: {
                            $size: {
                                $ifNull: ['$comments', []],
                            },
                        },
                    },
                };

                sortStage = {
                    $sort: {
                        countComment: -1,
                        newRegisteredAt: -1,
                    },
                };
                break;
        }

        const aggregate = Post.aggregate([
            {
                $lookup: {
                    from: 'users', //
                    localField: 'owner.user_id',
                    foreignField: '_id',
                    as: 'owner.user_id',
                },
            },
            {
                $unwind: '$owner.user_id',
            },
            boundaryMatchStage,
            subjectMatchState,
            {
                $addFields: {
                    newRegisteredAt: {
                        $dateFromString: {
                            // date/time 문자열을 date 객체로 변환
                            dateString: {
                                // 바꿀 date/time 문자열
                                $replaceAll: {
                                    input: '$registeredAt',
                                    find: '. ',
                                    replacement: '-',
                                },
                            },
                        },
                    },
                },
            },
            addFieldForOrder,
            sortStage,
            {
                $skip: limit * (page - 1),
            },
            {
                $limit: limit,
            },
        ]);

        const lists = await aggregate.exec();

        const totalAggregate = Post.aggregate([
            {
                $lookup: {
                    from: 'users', //
                    localField: 'owner.user_id',
                    foreignField: '_id',
                    as: 'owner.user_id',
                },
            },
            {
                $unwind: '$owner.user_id',
            },
            boundaryMatchStage,
            subjectMatchState,
            {
                $count: 'count',
            },
        ]);

        const total = await totalAggregate;

        res.locals.postAggregate = {
            total: total[0]?.count || 0,
            countLimit: limit,
            currentPage: page,
            lists,
        };

        next();
    } catch (err) {
        next(err);
    }
}
