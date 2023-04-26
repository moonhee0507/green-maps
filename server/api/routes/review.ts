import { Router, Request, Response } from 'express';
import auth from '../../middleware/auth.js';
import Review from '../../models/Review.js';

const route = Router();

export default (app: Router) => {
    app.use('/reviews', route);
    // 리뷰 추가
    route.post('/', auth, (req: any, res: Response) => {
        const review = new Review(req.body);

        review
            .save()
            .then(() => {
                res.status(200).json({ success: true });
            })
            .catch((err) => res.json({ success: false, errorMessage: err.message }));
    });

    // 리뷰 수정

    // 리뷰 삭제

    // 리뷰 가져오기
};
