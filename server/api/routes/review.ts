import { Router, Request, Response } from 'express';
import auth from '../../middleware/auth.js';
import Review from '../../models/Review.js';

const route = Router();

export default (app: Router) => {
    app.use('/reviews', route);

    // 리뷰 추가
    route.post('/', auth, (req: any, res: Response) => {
        const review = new Review(req.body);

        console.log(review);
        review
            .save()
            .then(() => {
                return res.status(200).json({ success: true });
            })
            .catch((err) => res.json({ success: false, errorMessage: err.message }));
    });

    // 리뷰 수정

    // 리뷰 삭제

    // 리뷰 가져오기
    route.get('/:restaurantId', async (req: Request, res: Response) => {
        try {
            const review = await Review.find({ restaurant: req.params.restaurantId }).exec();

            return res.status(200).json({ review: review });
        } catch (err) {
            console.error(err);
        }
    });

    // 리뷰 좋아요 추가
    route.post('/:reviewId/like', auth, async (req: Request, res: Response) => {
        try {
            await Review.findOneAndUpdate(
                { _id: req.params.reviewId },
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

    // 리뷰 좋아요 삭제
    route.delete('/:reviewId/like', auth, async (req: Request, res: Response) => {
        try {
            await Review.findOneAndUpdate(
                { _id: req.params.reviewId },
                {
                    $pull: { like: { user: req.body.user } },
                }
            );

            return res.status(200).json({ success: true });
        } catch (err) {
            console.error(err);
        }
    });
};
