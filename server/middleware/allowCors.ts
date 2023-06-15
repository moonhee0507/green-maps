import { NextFunction, Request, Response } from 'express';

const allowCors = async (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', 'https://www.green-maps.site');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Cookie, Cache-Control'
    );
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // console.log('req.header', req.headers);
    // console.log('res.header', res.getHeaders());

    next();
};

export default allowCors;
