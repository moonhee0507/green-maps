import { Router, Request, Response } from 'express';
import getSubjectAggregate from '../../../middleware/getSubjectAggregate.js';

const route = Router();

export default (app: Router) => {
    app.use('/subjects', route);

    route.get('/:subjectName', getSubjectAggregate, async (req: Request, res: Response) => {
        res.json(res.locals.postAggregate);
    });
};
