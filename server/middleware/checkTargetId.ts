import { Response, NextFunction } from 'express';
import User from '../models/User.js';
import fetch from 'node-fetch';

const checkTargetId = async (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.kakaoAccessToken;

    const response = await fetch(`https://kapi.kakao.com/v1/user/access_token_info`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = (await response.json()) as { id: number; expires_in: number; app_id: number };
    if (Object.hasOwn(data, 'id')) {
        const user = await User.findOne({ userId: data.id });

        if (!user) {
            req.signupRequired = true;
        } else {
            req.signupRequired = false;
        }

        req.targetId = data.id;
        next();
    } else {
        res.json({ success: false, message: '토큰 정보를 확인할 수 없습니다.' });
    }
};

export default checkTargetId;
