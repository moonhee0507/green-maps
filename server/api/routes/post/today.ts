import { Router, Request, Response } from 'express';
import Post from '../../../models/Post.js';

const route = Router();

// 오늘 게시글 개수만 받음
export default (app: Router) => {
    app.use('/today', route);

    route.get('/:subjectName', async (req: Request, res: Response) => {
        try {
            const today = new Intl.DateTimeFormat('ko-KR', {
                dateStyle: 'medium',
            }).format(Date.now());

            // 말머리가 빈문자열이 아니면(말머리가 지정되면) 해당 말머리 중 오늘 날짜인 게시글을 가져오고
            // 말머리가 빈문자열이면 전체 게시글 중 오늘 날짜인 것을 가져옴
            const todayPost = await Post.find({ subject: req.params.subjectName, registeredAt: { $regex: today } });

            return res.json({ todayCount: todayPost.length });
        } catch (err) {
            console.error(err);
        }
    });

    route.get('/', async (req: Request, res: Response) => {
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
};
