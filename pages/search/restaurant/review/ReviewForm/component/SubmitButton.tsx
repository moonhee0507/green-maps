import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import store from '../../../../../../renderer/store';

export { SubmitButton };

function SubmitButton(props: { restaurantId: string }) {
    const photo = useSelector((state: any) => state.reviewForm.INFO);
    const content = useSelector((state: any) => state.reviewForm.CONTENT);
    const userId = useSelector((state: any) => state.reviewForm.ID);

    const fileName = useSelector((state: any) => state.reviewForm.NAME);

    async function handleSubmit() {
        await uploadImageToStorage();

        const data = {
            owner: userId,
            restaurant: props.restaurantId,
            photo: [{ src: `client/${fileName}`, pick: true }],
            content: content,
            registeredAt: new Date().toLocaleDateString('ko-kr'),
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

    async function uploadImageToStorage() {
        /**
         * 스토어에 저장되어 있는 ObjectURL을 File 객체로 변환
         */
        const file = await fetch(photo.ObjectURL)
            .then((res) => res.blob())
            .then((blob) => new File([blob], `${fileName.NAME}`, { type: `${blob.type}` }));

        const body = {
            name: `client/${fileName}`,
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

            console.log('signedUrl', signedUrl);

            // 가져온 url로 PUT 요청 보내기
            const resUpload = await fetch(signedUrl, {
                method: 'PUT',
                body: file,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': file.type,
                },
            });

            /**
             * @resUpload: Response 객체{ body: (...), bodyUser: boolean, headers: { ok: boolean, redirected: boolean, status: number, url: signedUrl } }
             */
            console.log('resUpload', resUpload);

            return resUpload.url;
        } catch (err) {
            console.error(err);
        }
    }

    const userInfo = useCallback(async () => {
        const res = await fetch(`http://localhost:5000/api/users/`);
        const data = await res.json();

        return data;
    }, [props.restaurantId]);

    useEffect(() => {
        userInfo().then((data) => store.dispatch({ type: 'OWNER_STATE', ID: data.user.userId }));
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
