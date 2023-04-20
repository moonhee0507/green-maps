import User from '../models/User.js';

const auth = (req: any, res: any, next: any) => {
    let token = req.cookies.x_auth;

    User.findByToken(token, (err: Error | null, user?: any) => {
        if (err) throw err;
        if (!user) return res.json({ isAuthenticated: false, error: true });

        req.token = token;
        req.user = user;

        next();
    });
};

export default auth;
