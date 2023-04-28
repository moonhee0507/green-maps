import { S3Client } from '@aws-sdk/client-s3';

const auth = (accessKeyId: string, secretAccessKey: string, region: string) => {
    return new S3Client({
        credentials: {
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
        },
        region: region,
    });
};

export default auth;
