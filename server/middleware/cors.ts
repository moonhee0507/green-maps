import { Response, NextFunction } from 'express';

const cors = (req: any, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', 'https://green-maps-git-preview-moonhee0507.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    console.log(req.headers);
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        console.log('프리플라잇');
        return;
    }

    next();
};

export default cors;
