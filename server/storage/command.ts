import { GetBucketAclCommand, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import auth from './config.js';

type AWSCredential = {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
};

/**
 * Key는 'client/test.jpg' 형식
 */
type FileParams = {
    Bucket: string;
    Key: string;
};

export const getImage = async (credential: AWSCredential, params: FileParams) => {
    try {
        const { accessKeyId, secretAccessKey, region } = credential;
        const s3Client = auth(accessKeyId, secretAccessKey, region);

        // 버킷에서 객체를 가져옴
        const data = await s3Client.send(
            new GetObjectCommand({
                Bucket: params.Bucket,
                Key: params.Key,
            })
        );

        console.log(`data: ${data}`);

        // ReadableStream을 문자열(바이너리)로 변환
        const src = await data.Body?.transformToString();
        if (src !== undefined) {
            return JSON.parse(src);
        } else throw new Error('스토리지에서 이미지를 가져오는데 실패했습니다.');
    } catch (err) {
        console.error(err);
    }
};

export async function getSignedImageUrl(credential: AWSCredential, data: { name: string }) {
    const { accessKeyId, secretAccessKey, region } = credential;
    const s3Client = auth(accessKeyId, secretAccessKey, region);

    const params = { Bucket: process.env.AWS_S3_BUCKET, Key: data.name };
    const command = new PutObjectCommand(params);
    const url = await getSignedUrl(s3Client, command, {
        expiresIn: 60 * 60,
    });

    return url;
}
