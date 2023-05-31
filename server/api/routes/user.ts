import { Router, Request, Response } from 'express';
import User from '../../models/User.js';
import auth from '../../middleware/auth.js';
import Bookmark from '../../models/Bookmark.js';

const route = Router();

export default (app: Router) => {
    app.use('/users', route);

    route.get('/', auth, async (req: any, res: Response) => {
        try {
            const user = await User.findOne({ token: req.token }).exec();
            if (!user) res.json({ success: false, message: '사용자가 존재하지 않습니다.' });
            else res.status(200).json({ success: true, user: user });
        } catch (err: unknown) {
            console.error(err);
            if (err instanceof Error) res.status(500).json({ success: false, errorMessage: err.message });
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
                const bookmark = new Bookmark({ userId: req.body.userId, groupList: { name: '기본 그룹' } });
                bookmark.save();

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

        if (!user) return res.json({ success: false, errMessage: '사용자가 존재하지 않습니다.' });

        user.comparePassword(req.body.password, (err: Error | null, same: boolean | null) => {
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

    // 프로필 수정 -> 현재 비밀번호 확인
    route.post('/check-password', auth, async (req: Request, res: Response) => {
        try {
            const { password } = req.body;
            const user = await User.findOne({ token: req.cookies.auth });

            if (!user) {
                res.json({ success: false, message: '사용자가 존재하지 않습니다.' });
            } else {
                user.comparePassword(password, (err: Error | null, same: boolean | null) => {
                    if (!same) {
                        res.json({ success: false, message: '비밀번호가 일치하지 않습니다.' });
                    } else {
                        res.json({ success: true, message: '비밀번호가 일치합니다.' });
                    }
                });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.json({ success: false, errorMessage: err.message });
            }
        }
    });

    // 프로필 수정 -> 비밀번호 수정
    route.post('/edit/password', auth, async (req: Request, res: Response) => {
        try {
            const { password } = req.body;
            const user = await User.findOne({ token: req.cookies.auth });

            if (!user) {
                res.json({ success: false, message: '사용자가 존재하지 않습니다.' });
            } else {
                user.password = password;

                await user.save();
                res.status(200).json({ success: true, message: '비밀번호가 변경되었습니다.' });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.json({ success: false, errorMessage: err.message });
            }
        }
    });

    // logout
    route.post('/logout', (req: Request, res: Response) => {
        // expires, maxAge를 제외하고 res.cookie로 제공한 옵션과 동일해야 함
        try {
            res.clearCookie('auth', { httpOnly: true, secure: true, sameSite: 'strict' }).json({
                success: true,
                message: '로그아웃 되었습니다.',
            });
        } catch (err) {
            if (err instanceof Error) {
                console.error(err);
                if (err) res.json({ success: false, errorMessage: '로그아웃에 실패했습니다.' });
            }
        }
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

    route.patch('/update/bookmark', async (req: any, res: Response) => {
        try {
            const { userId, newGroupName, selectedRestaurant } = req.body;

            const user = await User.findOne({ userId: userId });

            if (!user) res.json({ success: false, message: '사용자가 존재하지 않습니다.' });
            else {
                user.bookmarkList.forEach((bookmark) => {
                    if (selectedRestaurant.includes(bookmark._id.toString())) {
                        bookmark.groupName = newGroupName;
                    }
                });

                await user.save();
                res.status(200).json({ success: true, message: '지정한 그룹으로 이동했습니다.' });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.json({ success: false, errorMessage: err.message });
            }
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

            if (!user) res.json({ success: false, message: '사용자가 존재하지 않습니다.' });
            else {
                res.status(200).json({ success: true, user: user });
            }
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

    // 프로필 사진, 닉네임 수정
    route.patch('/edit/profile', auth, async (req: Request, res: Response) => {
        try {
            const { profileImage, nickname } = req.body;
            const user = await User.findOne({ token: req.cookies.auth });

            if (user) {
                if (typeof profileImage === 'string') {
                    user.profileImage = profileImage;
                }

                if (typeof nickname === 'string') {
                    user.nickName = nickname;
                }

                await user.save();

                res.json({ success: true, message: '프로필 수정이 완료되었습니다.' });
            } else {
                res.json({ success: false, message: '사용자가 존재하지 않습니다.' });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.json({ success: false, errorMessage: err.message });
            }
        }
    });

    // 닉네임 중복 검사
    route.get('/check-nickname', async (req: Request, res: Response) => {
        try {
            const { nickname } = req.query;

            const existingUser = await User.findOne({ nickName: nickname });

            if (existingUser) {
                res.json({ duplicated: true });
            } else {
                res.json({ duplicated: false });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.json({ errorMessage: err.message });
            }
        }
    });
};
