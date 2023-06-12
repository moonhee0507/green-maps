import { renderPage } from 'vite-plugin-ssr';
import { Request, Response } from 'express';

/**
 * 서버리스 함수: 하드웨어 설정 없이 온디맨드 방식으로 코드 실행
 */
const allowCors = (fn: Function) => async (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', 'https://green-maps-git-preview-moonhee0507.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    return await fn(req, res);
};

async function handler(req: Request, res: Response) {
    const { url } = req;
    console.log('Request to url:', url);

    const pageContextInit = { url };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) {
        res.statusCode = 200;
        res.end();
        return;
    }

    const { body, statusCode, contentType } = httpResponse;
    res.statusCode = statusCode;
    res.setHeader('content-type', contentType);
    res.end(body);
}

export default allowCors(handler);
