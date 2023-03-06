import { Router, Request, Response } from 'express';
import User from '../../models/User.js';

const route = Router();

export default (app: Router) => {
    app.use('/users', route);

    // signup
    route.post('/signup', (req: Request, res: Response) => {
        const user = new User(req.body);

        user.save((err: any, userInfo: any) => {
            if (err) return res.json({ success: false, errorMessage: err.message });
            return res.status(200).json({ success: true });
        });
    });

    // login
    route.post('/login', (req: Request, res: Response) => {
        User.findOne({ userId: req.body.userId }, (err: Error, user: any) => {
            if (!user) {
                return res.json({ success: false, errorMessage: '해당 유저가 존재하지 않습니다' });
            } else {
                user.comparePassword(req.body.password, (err: Error, same: any) => {
                    if (!same) {
                        return res.json({ success: false, errorMessage: '비밀번호가 일치하지 않습니다' });
                    } else {
                        user.generateToken((err: Error, user: any) => {
                            if (err) return res.status(400).send(err);
                            else {
                                res.cookie('x_auth', user.token).status(200).json({ success: true });
                            }
                        });
                    }
                });
            }
        });
    });
};
