import { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import s3Client from './config.js';

export const getImage = async (params: { Bucket: string; Key: string }) => {
    try {
        // 버킷에서 객체를 가져옴
        const data = await s3Client.send(
            new GetObjectCommand({
                Bucket: params.Bucket,
                Key: params.Key,
            })
        );

        console.log(`data: ${data}`);

        // ReadableStream을 문자열로 변환
        return await data.Body?.transformToString();
    } catch (err) {
        console.error(err);
    }
};

// TODO: file signedUrl 가져오기
export async function getSignedImageUrl(data: { name: string }) {
    const params = { Bucket: process.env.AWS_S3_BUCKET, Key: data.name };
    const command = new PutObjectCommand(params);
    const url = await getSignedUrl(s3Client, command, {
        expiresIn: 60 * 60,
    });

    return url;
}
