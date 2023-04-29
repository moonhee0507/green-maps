import { Router, Request, Response } from 'express';
import Storage from '../../storage.js';

const route = Router();

export default (app: Router) => {
    app.use('/images', route);

    // presigned URL 생성
    route.post('/client', async (req: Request, res: Response) => {
        try {
            const { name } = req.body;

            const accessKeyId = process.env.AWS_ACCESS_KEY_ID!;
            const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!;
            const region = process.env.AWS_DEFAULT_REGION!;
            const bucket = process.env.AWS_S3_BUCKET!;

            const storage = Storage.getStorage(accessKeyId, secretAccessKey, region, bucket);
            await storage.getBucketAcl();
            const signedUrl = await storage.getSignedImageUrl({ name: name });

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
