import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RandomFileName, SelectedImage } from './PictureSection';
import type { RootState } from '../../../../../../renderer/store.js';

type SelectedImages = Array<SelectedImage>;
type RandomFileNames = Array<RandomFileName>;

export { SubmitButton };

function SubmitButton(props: { restaurantId: string }) {
    const dispatch = useDispatch();
    const selectedImages: SelectedImages = useSelector((state: RootState) => state.reviewSlice.image.FILE_INFO);
    const content = useSelector((state: RootState) => state.reviewSlice.CONTENT);
    const userId = useSelector((state: RootState) => state.reviewSlice.ID);
    const randomFileNames: RandomFileNames = useSelector((state: RootState) => state.reviewSlice.image.RANDOM_NAME);

    async function handleSubmit() {
        let photo: Array<{ src: string; pick: boolean } | null> = [];
        if (selectedImages) {
            await uploadImageToStorage(selectedImages, randomFileNames);

            const temp = [];
            for (let i = 0; i < selectedImages.length; i++) {
                temp.push({ src: `client/${randomFileNames[i]}`, pick: true });
            }

            photo = temp;
        }

        const data = {
            owner: userId,
            restaurant: props.restaurantId,
            photo: photo,
            content: content,
        };

        try {
            await fetch(`http://localhost:5000/api/reviews/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        } catch (e) {
            console.error(e);
        }
    }

    async function uploadImageToStorage(selectedImages: Array<SelectedImage>, randomFileNames: Array<RandomFileName>) {
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
                    const resUrl = await fetch(`http://localhost:5000/api/images/client`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body),
                    });

                    /**
                     * {success: true, signedUrl: 'https://버킷네임.s3.지역.amazon…c0be46ae2&X-Amz-SignedHeaders=host&x-id=PutObject'}
                     */
                    const data = await resUrl.json();
                    const signedUrl = data.signedUrl;

                    // 가져온 url로 PUT 요청 보내기
                    /**
                     * Response 객체{ body: (...), bodyUser: boolean, headers: { ok: boolean, redirected: boolean, status: number, url: signedUrl } }
                     */
                    await fetch(signedUrl, {
                        method: 'PUT',
                        body: file,
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': file.type,
                        },
                    });
                } catch (err) {
                    console.error(err);
                }
            }
        } else throw Error('이미지 네이밍 처리에 오류가 발생했습니다.');
    }

    const userInfo = useCallback(async () => {
        const res = await fetch(`http://localhost:5000/api/users/`);
        const data = await res.json();

        return data;
    }, [props.restaurantId]);

    useEffect(() => {
        userInfo().then((data) => dispatch({ type: 'reviewSlice/OWNER_STATE', ID: data.user.userId }));
    }, [userInfo]);

    return (
        <>
            <button
                type="button"
                onClick={handleSubmit}
                style={{ width: '100%', marginTop: '10px', backgroundColor: 'lightgreen' }}
            >
                작성 완료
            </button>
        </>
    );
}