import { Router, Request, Response } from 'express';
import fetch from 'node-fetch';
import User from '../../models/User.js';
import checkTargetId from '../../middleware/checkTargetId.js';
import Bookmark from '../../models/Bookmark.js';

const route = Router();

export default (app: Router) => {
    app.use('/oauth', route);

    route.get('/kakao', async (req: Request, res: Response) => {
        try {
            res.redirect(
                `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}`
            );
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });

    // 토큰 받기(로그인)
    route.get('/kakao/token', async (req: Request, res: Response) => {
        try {
            const response = await fetch(
                `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code=${req.query.code}&client_secret=${process.env.KAKAO_CLIENT_SECRET}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded:charset=utf-8',
                    },
                }
            );

            const data = (await response.json()) as {
                token_type: string;
                access_token: string;
                expires_in: number; // 초단위
                refresh_token: string;
                refresh_token_expires_in: number;
                scope?: string;
            };

            if (Object.hasOwn(data, 'access_token')) {
                res.cookie('kakaoAccessToken', data.access_token, {
                    maxAge: data.expires_in * 1000,
                    httpOnly: true, // 웹 서버에 의해서만 접근가능하게 함
                    secure: true, // https에서만 사용
                    sameSite: 'strict', // Set-Cookie의 SameSite 속성에 대한 값
                })
                    .status(200)
                    .json({
                        success: true,
                        accessToken: data.access_token,
                        host: 'kakao',
                        message: '카카오 액세스 토큰을 쿠키에 저장했습니다.',
                    });
            } else {
                res.json({ success: false, message: '토큰 요청에 실패했습니다.' });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });

    // 사용자 정보 가져오기(회원가입+로그인 또는 로그인 처리)
    route.get('/kakao/users', checkTargetId, async (req: any, res: Response) => {
        // 미들웨어로 등록된 사용자인지 확인
        try {
            const response = await fetch(
                `https://kapi.kakao.com/v2/user/me?target_id_type=user_id&target_id=${req.targetId}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `KakaoAK ${process.env.KAKAO_ADMIN}`,
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                    },
                }
            );

            const data = (await response.json()) as {
                id: number;
                has_signed_up?: boolean;
                connected_at?: Date;
                properties?: JSON;
                kakao_account?: { profile?: { nickname?: string; profile_image_url?: string } };
            };

            if (req.signupRequired) {
                const body = {
                    userId: data.id,
                    nickName: data.kakao_account?.profile?.nickname,
                    password: process.env.DEFAULT_PASSWORD,
                    profileImage: data.kakao_account?.profile?.profile_image_url,
                    host: 'kakao',
                };

                const newUser = new User(body);

                await newUser
                    .save()
                    .then(() => {
                        const bookmark = new Bookmark({ userId: req.targetId, groupList: { name: '기본 그룹' } });
                        bookmark.save();
                    })
                    .catch(() => res.json({ success: false, message: '회원가입 처리에 실패했습니다.' }));

                // 회원 정보
                const user = await User.findOne({ userId: req.targetId });

                if (user) {
                    user.generateToken((err?: Error | null, user?: any) => {
                        if (err) return res.status(400).send(err);
                        else {
                            res.cookie('auth', user.token, {
                                maxAge: 7 * 24 * 60 * 60 * 1000,
                                httpOnly: true, // 웹 서버에 의해서만 접근가능하게 함
                                secure: true, // https에서만 사용
                                sameSite: 'none', // Set-Cookie의 SameSite 속성에 대한 값: strict는 cors 비허용, lax는 링크를 따라갈때만 cors 허용
                                domain: '.green-maps.site',
                            })
                                .status(200)
                                .json({ success: true, keepLogin: true, user: user });
                        }
                    });
                } else {
                    res.json({ success: false, message: '회원가입 중 에러가 발생했습니다.' });
                }
            } else {
                const user = await User.findOne({ userId: req.targetId });

                if (user) {
                    user.generateToken((err?: Error | null, user?: any) => {
                        if (err) return res.status(400).send(err);
                        else {
                            res.cookie('auth', user.token, {
                                maxAge: 7 * 24 * 60 * 60 * 1000,
                                httpOnly: true, // 웹 서버에 의해서만 접근가능하게 함
                                secure: true, // https에서만 사용
                                sameSite: 'none', // Set-Cookie의 SameSite 속성에 대한 값: strict는 cors 비허용, lax는 링크를 따라갈때만 cors 허용
                                domain: '.green-maps.site',
                            })
                                .status(200)
                                .json({ success: true, keepLogin: true, user: user });
                        }
                    });
                } else {
                    res.json({ success: false, message: '사용자가 존재하지 않습니다.' });
                }
            }
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });

    // 로그아웃
    route.post('/kakao/logout', async (req: Request, res: Response) => {
        try {
            const response = await fetch(`https://kapi.kakao.com/v1/user/logout`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${req.cookies.kakaoAccessToken}`,
                },
            });

            const data = (await response.json()) as { id: number };

            if (response.ok === true) {
                res.clearCookie('kakaoAccessToken', { httpOnly: true, secure: true, sameSite: 'strict' }).json({
                    success: true,
                    message: `회원번호 ${data.id}이 로그아웃 되었습니다.`,
                });
            }
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ success: false, errorMessage: err.message });
            }
        }
    });
};
