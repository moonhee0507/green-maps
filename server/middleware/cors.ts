import { Response, NextFunction } from 'express';

const cors = (req: any, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', 'https://green-maps-git-preview-moonhee0507.vercel.app');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
};

export default cors;
