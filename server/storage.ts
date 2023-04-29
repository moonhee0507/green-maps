import { S3Client, PutObjectCommand, GetBucketAclCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

class Storage {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
    bucket: string;

    private static instance: Storage;

    public s3Client: S3Client;

    private constructor(accessKeyId: string, secretAccessKey: string, region: string, bucket: string) {
        this.accessKeyId = accessKeyId;
        this.secretAccessKey = secretAccessKey;
        this.region = region;
        this.bucket = bucket;

        this.s3Client = new S3Client({
            credentials: {
                accessKeyId: this.accessKeyId,
                secretAccessKey: this.secretAccessKey,
            },
            region: this.region,
        });
    }

    public static getStorage(accessKeyId: string, secretAccessKey: string, region: string, bucket: string) {
        if (!Storage.instance) {
            Storage.instance = new Storage(accessKeyId, secretAccessKey, region, bucket);
        }

        return Storage.instance;
    }

    public async getBucketAcl() {
        try {
            const input = {
                Bucket: this.bucket,
            };
            const command = new GetBucketAclCommand(input);
            const res = await this.s3Client.send(command);

            return res.Grants;
        } catch (err) {
            console.error(err);
        }
    }

    public async getSignedImageUrl(params: { name: string }) {
        try {
            const command = new PutObjectCommand({
                Bucket: this.bucket,
                Key: params.name,
            });
            const url = await getSignedUrl(this.s3Client, command, {
                expiresIn: 60 * 60,
            });

            return url;
        } catch (err) {
            console.error(err);
        }
    }
}

export default Storage;
