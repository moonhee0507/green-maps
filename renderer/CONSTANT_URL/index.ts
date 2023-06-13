export const API_URL = 'http://localhost:2848/api/v1';
export const IMG_URL =
    typeof window !== 'undefined' &&
    `https://${import.meta.env.VITE_AWS_S3_BUCKET}.s3.${import.meta.env.VITE_AWS_DEFAULT_REGION}.amazonaws.com`;

export const COPYRIGHT_URL = 'https://www.flaticon.com/kr/icons';
