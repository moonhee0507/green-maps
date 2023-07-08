import { Router, Request, Response } from 'express';
import auth from '../../../middleware/auth.js';
import Post from '../../../models/Post.js';
import getPostsAggregate from '../../../middleware/getPostsAggregate.js';
import User from '../../../models/User.js';

const route = Router();

export default (app: Router) => {
    app.use('/posts', route);

    // 게시글 추가
    route.post('/', auth, async (req: any, res: Response) => {
        const user = await User.findOne({ token: req.cookies.auth });

        if (!user) {
            res.status(404).json({ success: false, message: '사용자가 존재하지 않습니다.' });
        } else {
            const post = new Post({ ...req.body, owner: { user_id: user._id } });

            await post
                .save()
                .then(() => {
                    return res.status(200).json({ success: true });
                })
                .catch((err) => res.json({ success: false, errorMessage: err.message }));
        }
    });

    // 게시글 수정
    route.patch('/:postId', auth, async (req: Request, res: Response) => {
        try {
            const { subject, title, content } = req.body;
            const updatedAt = new Intl.DateTimeFormat('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }).format(new Date());

            const post = await Post.findOneAndUpdate(
                {
                    _id: req.params.postId,
                },
                {
                    subject: subject,
                    title: title,
                    content: content,
                    updatedAt: updatedAt,
                },
                { new: true }
            );

            if (!post) res.status(404).json({ success: false, message: '해당 게시물을 찾을 수 없습니다.' });
            else res.status(200).json({ success: true, post: post, message: '게시물 수정이 완료되었습니다.' });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });

    // 게시글 삭제
    route.delete('/:postId', auth, async (req: Request, res: Response) => {
        try {
            await Post.deleteOne({ _id: req.params.postId }).then(
                (result: { acknowledged: boolean; deletedCount: number }) => {
                    if (result.acknowledged === true) {
                        return res.json({ success: true, message: '해당 게시물이 삭제되었습니다.' });
                    } else {
                        return res.status(404).json({ success: false, message: '해당 게시물이 존재하지 않습니다.' });
                    }
                }
            );
        } catch (err) {
            if (err instanceof Error) {
                return res.status(500).json({ success: false, message: err.message });
            }
        }
    });

    // 게시글 가져오기
    route.get('/', getPostsAggregate, async (req: Request, res: Response) => {
        res.json(res.locals.postAggregate);
    });

    route.get('/my', async (req: Request, res: Response) => {
        try {
            let post;
            if (req.query.boundary === 'post') {
                post = await Post.find({ owner: req.query.owner }).exec();
            } else if (req.query.boundary === 'comment') {
                post = await Post.find({ comments: { $elemMatch: { owner: req.query.owner } } }).exec();
            }

            if (post) res.status(200).json({ success: true, posts: post });
            else if (!post) res.status(404).json({ success: true, message: '쿼리 결과가 없습니다.' });
        } catch (err) {
            if (err instanceof Error) {
                console.error(err);
                res.status(500).json({ success: false, message: err.message });
            }
        }
    });

    route.get('/:postId', async (req: Request, res: Response) => {
        try {
            // const item = await Post.findById(req.params.postId).exec();
            const item = await Post.findById(req.params.postId)
                .populate({
                    path: 'owner.user_id',
                })
                .populate({
                    path: 'comments.owner.user_id',
                })
                .exec();

            if (!item) res.status(404).json({ success: false, message: '해당 게시물이 존재하지 않습니다.' });
            else res.status(200).json(item);
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
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
            const { user_id, content } = req.body;

            await Post.findOneAndUpdate(
                { _id: req.params.postId },
                {
                    $push: {
                        comments: {
                            // owner: req.body.owner,
                            owner: {
                                user_id: user_id,
                            },
                            content: content,
                        },
                    },
                }
            );

            res.status(200).json({ success: true });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });
};
