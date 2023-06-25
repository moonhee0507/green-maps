import {
    RandomFileName,
    SelectedImage,
} from '../../pages/search/restaurant/reviews/create/ReviewForm/component/PictureSection';

/**
 * @SelectedImage
 * [0]: ObjectURL
 * [1]: file.type
 */

export default async function uploadImageToStorage(
    selectedImages: Array<SelectedImage>,
    randomFileNames: Array<RandomFileName>
) {
    if (selectedImages.length === randomFileNames.length) {
        for (let i = 0; i < selectedImages.length; i++) {
            /**
             * 스토어에 저장되어 있는 ObjectURL을 File 객체로 변환
             */
            const file = await fetch(selectedImages[i][0])
                .then((res) => res.blob())
                .then((blob) => new File([blob], `${randomFileNames[i]}`, { type: `${blob.type}` }));

            const body = {
                name: `client/${randomFileNames[i]}`,
                type: file.type,
            };

            try {
                // signed url 얻어오기
                const resUrl = await fetch(
                    `${
                        process.env.NODE_ENV === 'production'
                            ? 'https://api.green-maps.site/v1'
                            : 'https://localhost:5000/v1'
                    }/images/client`,
                    {
                        credentials: 'include',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body),
                    }
                );

                /**
                 * @data {success: true, signedUrl: 'https://버킷네임.s3.지역.amazon…c0be46ae2&X-Amz-SignedHeaders=host&x-id=PutObject'}
                 */
                const data = await resUrl.json();
                const signedUrl = data.signedUrl;

                // 가져온 url로 PUT 요청 보내기
                /**
                 * Response 객체{ body: (...), bodyUser: boolean, headers: { ok: boolean, redirected: boolean, status: number, url: signedUrl } }
                 */
                await fetch(signedUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': file.type,
                    },
                    body: file,
                });
            } catch (err) {
                console.error(err);
            }
        }
    } else throw Error('이미지 네이밍 처리에 오류가 발생했습니다.');
}
