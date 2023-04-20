import { Router, Request, Response } from 'express';
import User from '../../models/User.js';

const route = Router();

export default (app: Router) => {
    app.use('/users', route);

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
                        res.cookie('x_auth', user.token).status(200).json({ success: true });
                    }
                });
            }
        });
    });
};
