import { Router, Request, Response } from 'express';
import auth from '../../middleware/auth.js';
import Post from '../../models/Post.js';

const route = Router();

export default (app: Router) => {
    app.use('/posts', route);

    // 게시글 추가
    route.post('/', auth, (req: any, res: Response) => {
        const post = new Post(req.body);

        post.save()
            .then(() => {
                return res.status(200).json({ success: true });
            })
            .catch((err) => res.json({ success: false, errorMessage: err.message }));
    });

    // 게시글 수정

    // 게시글 삭제

    // 게시글 가져오기
    route.get('/', async (req: Request, res: Response) => {
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

            return res.json({
                total: total,
                countLimit: limit,
                currentPage: page,
                lists,
            });
        } catch (err) {
            console.error(err);
        }
    });

    route.get('/today', async (req: Request, res: Response) => {
        try {
            const today = new Intl.DateTimeFormat('ko-KR', {
                dateStyle: 'medium',
            }).format(Date.now());

            const todayPost = await Post.find({ registeredAt: { $regex: today } });

            return res.json({ todayCount: todayPost.length });
        } catch (err) {
            console.error(err);
        }
    });

    route.get('/:postId', async (req: Request, res: Response) => {
        try {
            const item = await Post.findById(req.params.postId).exec();
            res.status(200).json(item);
        } catch (err) {
            console.error(err);
        }
    });

    // 게시글 좋아요 추가
    route.post('/:postId/like', auth, async (req: Request, res: Response) => {
        try {
            await Post.findOneAndUpdate(
                { _id: req.params.postId },
                {
                    $push: {
                        like: {
                            user: req.body.user,
                        },
                    },
                }
            );

            return res.status(200).json({ success: true });
        } catch (err) {
            console.error(err);
        }
    });

    // 게시글 좋아요 삭제
    route.delete('/:postId/like', auth, async (req: Request, res: Response) => {
        try {
            await Post.findOneAndUpdate(
                { _id: req.params.postId },
                {
                    $pull: { like: { user: req.body.user } },
                }
            );

            return res.status(200).json({ success: true });
        } catch (err) {
            console.error(err);
        }
    });

    // 게시글 댓글 작성
    route.post('/:postId/comment', auth, async (req: Request, res: Response) => {
        try {
            await Post.findOneAndUpdate(
                { _id: req.params.postId },
                {
                    $push: {
                        reviews: {
                            owner: req.body.owner,
                            content: req.body.content,
                        },
                    },
                }
            );

            return res.status(200).json({ success: true });
        } catch (err) {
            console.error(err);
        }
    });
};
