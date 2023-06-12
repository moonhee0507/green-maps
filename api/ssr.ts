import { renderPage } from 'vite-plugin-ssr';
import { Request, Response } from 'express';

/**
 * 서버리스 함수: 하드웨어 설정 없이 온디맨드 방식으로 코드 실행
 */
export default async function handler(req: Request, res: Response) {
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
    res.setHeader('Content-Type', contentType);

    res.end(body);
}
