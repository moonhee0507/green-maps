import { Router, Request, Response } from 'express';
import { getSubjectPostsAggregate } from '../../../middleware/postSort.js';

const route = Router();

export default (app: Router) => {
    app.use('/subjects', route);

    route.get('/:subjectName', getSubjectPostsAggregate, async (req: Request, res: Response) => {
        res.json(res.locals.postAggregate);
    });
};
