import { Router, Request, Response } from 'express';
import fetch from 'node-fetch';
import Restaurant from '../../models/Restaurant';

const route = Router();

export default (app: Router) => {
    app.use('/bookmark', route);

    route.post('/add', async (req: Request, res: Response) => {
        try {
            // TODO: 북마크 추가기능(참고하기: https://stackoverflow.com/questions/30491468/how-to-insert-a-document-with-a-referenced-document-in-mongodb)
            // const find = {}
            // let populate = { path: 'Restaurant' };
            // let query = Restaurant.find(find).populate(populate);

            res.status(200).json({ success: true });
        } catch (err: any) {
            res.json({ success: false, errorMessage: err.message });
        }
    });
};
