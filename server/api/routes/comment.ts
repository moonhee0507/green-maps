import { Router, Request, Response } from 'express';
import auth from '../../middleware/auth.js';
import Post from '../../models/Post.js';

const route = Router();

export default (app: Router) => {
    app.use('/comments', route);

    route.post('/:commentId', auth, async (req: Request, res: Response) => {
        try {
            const updatedAt = new Intl.DateTimeFormat('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            }).format(new Date());

            const updatedPost = await Post.findOneAndUpdate(
                {
                    _id: req.query.postId,
                    'comments._id': req.params.commentId,
                },
                {
                    $set: {
                        'comments.$.content': req.body.content,
                        'comments.$.updatedAt': updatedAt,
                    },
                },
                { new: true }
            );

            if (!updatedPost) {
                return res.json({ success: false, errorMessage: '해당 댓글을 찾을 수 없습니다.' });
            } else {
                res.json({ success: true, updatedPost });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });

    route.delete('/:commentId', auth, async (req: Request, res: Response) => {
        try {
            await Post.findOneAndUpdate(
                {
                    _id: req.query.postId,
                },
                {
                    $pull: { comments: { _id: req.params.commentId } },
                }
            );

            res.status(200).json({ success: true, message: '댓글이 삭제되었습니다.' });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });
};
