import { Router, Request, Response } from 'express';
import auth from '../../../middleware/auth.js';
import Post from '../../../models/Post.js';
import getPostsAggregate from '../../../middleware/getPostsAggregate.js';

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
                        comments: {
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
