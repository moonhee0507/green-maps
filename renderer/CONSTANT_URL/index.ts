export const API_URL = 'http://localhost:5000/api';
export const IMG_URL =
    typeof window !== 'undefined' &&
    `https://${import.meta.env.VITE_AWS_S3_BUCKET}.s3.${import.meta.env.VITE_AWS_DEFAULT_REGION}.amazonaws.com`;
