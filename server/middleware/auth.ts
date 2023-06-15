import { Response, NextFunction } from 'express';
import User from '../models/User.js';

const auth = (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.auth;
    console.log('auth 미들웨어에 있는 토큰(DB에서 찾는 기준) ', token);

    User.findByToken(token, (err: Error | null, user?: any) => {
        if (err) {
            return res.json({ isAuthenticated: false, errorMessage: err.message });
        } else if (!user) return res.json({ isAuthenticated: false, errorMessage: '🚨 2해당 유저가 없습니다.' });

        req.token = token;
        req.user = user;

        next();
    });
};

export default auth;
