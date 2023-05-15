import { Response, NextFunction } from 'express';
import User from '../models/User.js';

const auth = (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.auth;
    console.log('auth 영역');
    console.log(token);
    User.findByToken(token, (err: Error | null, user?: any) => {
        if (err) throw err;
        if (!user) return res.json({ isAuthenticated: false, error: true });

        req.token = token;
        req.user = user;

        next();
    });
};

export default auth;
