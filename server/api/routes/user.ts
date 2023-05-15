import { Router, Request, Response } from 'express';
import User from '../../models/User.js';
import auth from '../../middleware/auth.js';
import cookieParser from 'cookie-parser';

const route = Router();

export default (app: Router) => {
    app.use('/users', route);

    route.get('/', auth, async (req: any, res: Response) => {
        try {
            const user = await User.findOne({ token: req.token }).exec();
            return res.status(200).json({ success: true, user: user });
        } catch (err) {
            console.error(err);
        }
    });

    /**
     * 홈화면에서 토큰 검증
     */
    route.post('/check-token', async (req: any, res: Response) => {
        try {
            const user = await User.findOne({ token: req.body.token }).exec();

            if (user) res.json({ auth: true, message: '검증된 토큰입니다.', user: user });
            else if (req.body.token === undefined) res.json({ auth: false, message: '쿠키에 토큰이 없습니다.' });
            else if (!user) res.json({ auth: false, message: '유효하지 않은 토큰입니다.' });
        } catch (err) {
            console.error(err);
        }
    });

    // signup
    route.post('/signup', (req: Request, res: Response) => {
        const user = new User(req.body);

        user.save()
            .then(() => {
                res.status(200).json({
                    success: true,
                });
            })
            .catch((err) => {
                res.json({ success: false, errorMessage: err.message });
            });
    });

    // login
    route.post('/login', async (req: Request, res: Response) => {
        const user = await User.findOne({ userId: req.body.userId });

        if (!user) return res.json({ success: false, errMessage: '해당 유저가 존재하지 않습니다' });

        user.comparePassword(req.body.password, (err: Error | null, same: any) => {
            if (!same) {
                return res.json({ success: false, errorMessage: '비밀번호가 일치하지 않습니다' });
            } else {
                user.generateToken((err?: Error | null, user?: any) => {
                    if (err) return res.status(400).send(err);
                    else {
                        res.cookie('auth', user.token, {
                            maxAge: 24 * 60 * 60 * 1000,
                            httpOnly: true, // 웹 서버에 의해서만 접근가능하게 함
                            secure: true, // https에서만 사용
                            sameSite: 'strict', // Set-Cookie의 SameSite 속성에 대한 값
                        })
                            .status(200)
                            .json({ success: true, keepLogin: req.body.keepLogin, user: user });
                    }
                });
            }
        });
    });

    // logout
    route.post('/logout', (req: Request, res: Response) => {
        // expires, maxAge를 제외하고 res.cookie로 제공한 옵션과 동일해야 함
        res.clearCookie('auth', { httpOnly: true, secure: true, sameSite: 'strict' }).json({
            message: '로그아웃 되었습니다.',
        });
    });

    // bookmark 추가
    route.post('/bookmark', auth, async (req: any, res: Response) => {
        try {
            const user = await User.findOneAndUpdate(
                { token: req.token },
                {
                    $push: {
                        bookmarkList: {
                            _id: req.body._id,
                        },
                    },
                },
                { new: true }
            );

            res.status(200).json({ success: true, user: user });
        } catch (err) {
            console.error(err);
        }
    });

    // bookmark 삭제
    route.delete('/bookmark/:id', auth, async (req: any, res: Response) => {
        try {
            const user = await User.findOneAndUpdate(
                { token: req.token },
                {
                    $pull: { bookmarkList: { _id: req.params.id } },
                },
                { new: true }
            );

            res.status(200).json({ success: true, user: user });
        } catch (err) {
            console.error(err);
        }
    });

    // like 추가
    route.post('/like', auth, async (req: any, res: Response) => {
        try {
            const user = await User.findOneAndUpdate(
                { token: req.token },
                {
                    $push: {
                        likeList: {
                            _id: req.body._id,
                        },
                    },
                },
                { new: true }
            );

            res.status(200).json({ success: true, user: user });
        } catch (err) {
            console.error(err);
        }
    });

    // like 삭제
    route.delete('/like/:id', auth, async (req: any, res: Response) => {
        try {
            const user = await User.findOneAndUpdate(
                { token: req.token },
                {
                    $pull: { likeList: { _id: req.params.id } },
                },
                { new: true }
            );

            res.status(200).json({ success: true, user: user });
        } catch (err) {
            console.error(err);
        }
    });
};
