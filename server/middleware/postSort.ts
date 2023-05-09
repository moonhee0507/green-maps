import { Response, NextFunction } from 'express';
import Post from '../models/Post.js';

export async function getPostsAggregate(req: any, res: Response, next: NextFunction) {
    try {
        const page = Number(req.query.page || 1);
        const limit = Number(req.query.limit || 20);

        const aggregate = Post.aggregate([
            {
                $addFields: {
                    newRegisteredAt: {
                        $dateFromString: {
                            dateString: {
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
            {
                $sort: {
                    newRegisteredAt: -1,
                },
            },
            {
                $skip: limit * (page - 1),
            },
            {
                $limit: limit,
            },
        ]);

        const [lists, total] = await Promise.all([aggregate.exec(), Post.countDocuments({})]);

        res.locals.postAggregate = {
            total: total,
            countLimit: limit,
            currentPage: page,
            lists,
        };

        next();
    } catch (err) {
        next(err);
    }
}

export async function getSubjectPostsAggregate(req: any, res: Response, next: NextFunction) {
    try {
        const page = Number(req.query.page || 1);
        const limit = Number(req.query.limit || 20);

        const aggregate = Post.aggregate([
            {
                $match: {
                    subject: req.params.subjectName,
                },
            },
            {
                $addFields: {
                    newRegisteredAt: {
                        $dateFromString: {
                            dateString: {
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
            {
                $sort: {
                    newRegisteredAt: -1,
                },
            },
            {
                $skip: limit * (page - 1),
            },
            {
                $limit: limit,
            },
        ]);

        const [lists, total] = await Promise.all([
            aggregate.exec(),
            Post.countDocuments({ subject: req.params.subjectName }),
        ]);

        res.locals.postAggregate = {
            total: total,
            countLimit: limit,
            currentPage: page,
            lists,
        };

        const pageCount = Math.ceil(total / limit);

        if (pageCount < page) {
            throw new Error('없는 페이지입니다.');
        }

        next();
    } catch (err) {
        next(err);
    }
}
