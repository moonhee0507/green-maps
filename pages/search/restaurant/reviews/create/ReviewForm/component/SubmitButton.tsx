import React, { useState } from 'react';
import { useAppSelector } from '../../../../../../../renderer/store/hooks';
import { RandomFileName, SelectedImage } from './PictureSection';
import { API_URL } from '../../../../../../../renderer/CONSTANT_URL';
import { PhotoInReview } from '../../../../../../../server/models/Review';
import store from '../../../../../../../renderer/store';
import uploadImageToStorage from '../../../../../../../components/image/uploadImageToStorage';
import type { UserInfo } from '../../../../../../../server/models/User';

type SelectedImages = Array<SelectedImage>;
type RandomFileNames = Array<RandomFileName>;

export { SubmitButton };

function SubmitButton({
    restaurantId,
    reviewId,
    userInfo,
}: {
    restaurantId: string;
    reviewId?: string;
    userInfo: UserInfo | null;
}) {
    const [editPage] = useState(window.location.pathname.includes('/edit'));

    const content = useAppSelector((state) => state.reviewSlice.CONTENT);
    // const { userId } = userInfo as UserInfo;
    const randomFileNames: RandomFileNames = useAppSelector((state) => state.reviewSlice.image.RANDOM_NAME);

    async function handleSubmit() {
        let photo: PhotoInReview = [];

        const selectedImages: SelectedImages = store.getState().reviewSlice.image.FILE_INFO;

        if (selectedImages.length > 0) {
            // 새로운 이미지로 바꾸는 경우
            if (!selectedImages[0][0].includes('https://')) {
                await uploadImageToStorage(selectedImages, randomFileNames);

                const temp = [];
                for (let i = 0; i < selectedImages.length; i++) {
                    temp.push({ src: `client/${randomFileNames[i]}`, pick: true });
                }

                photo = temp;
                // 이미지 교체 안하는 경우
            } else if (selectedImages[0][0].includes('https://')) {
                const temp = [];
                for (let selectedImage of selectedImages) {
                    temp.push({ src: 'client/' + selectedImage[0].split('client/').at(-1), pick: true });
                }

                photo = temp;
            }
        }

        let body;

        if (!editPage) {
            body = {
                owner: userInfo ? userInfo.userId : '',
                restaurant: restaurantId,
                photo: photo,
                content: content,
            };
        } else {
            body = {
                restaurant: restaurantId,
                photo: photo,
                content: content,
            };
        }

        try {
            const res = await fetch(`${API_URL}/reviews/${editPage ? reviewId + '/edit' : ''}`, {
                credentials: 'include',
                method: editPage ? 'PATCH' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (data.success === true) {
                alert('리뷰가 등록되었습니다.');
            } else {
                alert('리뷰 등록에 실패했습니다.\n다시 시도해주세요.');
            }
        } catch (e) {
            console.error(e);
        } finally {
            window.history.back();
        }
    }

    return (
        <>
            <button type="button" onClick={handleSubmit} className="styled-button review">
                {editPage ? '수정 완료' : '작성 완료'}
            </button>
        </>
    );
}
