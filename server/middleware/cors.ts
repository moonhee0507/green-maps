import { Response, NextFunction } from 'express';

const cors = (req: any, res: Response, next: NextFunction) => {
    res.set({
        'Access-Control-Allow-Origin': 'https://green-maps-git-preview-moonhee0507.vercel.app',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers':
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        'Access-Control-Allow-Credentials': true,
    });

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    next();
};

export default cors;
