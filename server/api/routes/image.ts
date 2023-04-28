import { Router, Request, Response } from 'express';
import { getSignedImageUrl } from '../../storage/command.js';

const route = Router();

export default (app: Router) => {
    app.use('/images', route);

    // presigned URL 생성
    route.post('/client', async (req: Request, res: Response) => {
        try {
            const { name, type } = req.body;

            const fileParams = {
                name: name,
                type: type,
            };

            const credential = {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
                region: process.env.AWS_DEFAULT_REGION || '',
            };
            const signedUrl = await getSignedImageUrl(credential, fileParams);

            console.log('signedUrl', signedUrl);

            return res.status(200).json({
                success: true,
                signedUrl: signedUrl,
            });
        } catch (err) {
            return res.json({
                success: false,
                message: err,
            });
        }
    });
};
