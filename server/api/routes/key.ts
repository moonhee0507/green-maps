import { Router, Request, Response } from 'express';
import Key from '../../models/Key.js';

const route = Router();

export default (app: Router) => {
    app.use('/key', route);

    // presigned URL 생성
    route.post('/rsa', async (req: Request, res: Response) => {
        try {
            const key = await Key.findById('648a50478bf2405e07c4a6c3');
            res.status(200).json({ success: true, private: key?.rsaPrivate, public: key?.rsaPublic });
        } catch (err) {
            return res.json({
                success: false,
                message: '키를 찾을 수 없습니다.',
            });
        }
    });
};
