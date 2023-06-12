import { Request, Response } from 'express';

const allowCors = (fn: Function) => async (req: Request, res: Response) => {
    res.set({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': 'https://green-maps-git-preview-moonhee0507.vercel.app',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        'Access-Control-Allow-Headers':
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    });

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    return await fn(req, res);
};

const handler = (req: Request, res: Response) => {
    const d = new Date();
    res.end(d.toString());
};

export default allowCors(handler);
