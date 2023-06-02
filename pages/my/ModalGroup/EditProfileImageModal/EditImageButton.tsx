import React, { useRef } from 'react';
import { useAppDispatch } from '../../../../renderer/store/hooks';
import { PROFILE_IMAGE_MODAL } from '../../../../renderer/_reducers/_slices/profileSlice';
import randomizeFileName from '../../../../components/image/randomizeFileName';
import { API_URL } from '../../../../renderer/CONSTANT_URL';

export { EditImageButton };

function EditImageButton() {
    const dispatch = useAppDispatch();

    const fileInput = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInput.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (target.files !== null) {
            const file = target.files[0];
            const fileName = randomizeFileName() + '.' + file.type.replace('image/', '');

            // 스토리지에 이미지 업로드
            uploadImageToStorage(file, fileName);
        }
    };

    async function uploadImageToStorage(file: File, fileName: string) {
        try {
            const body = {
                name: `client/${fileName}`,
                type: file.type,
            };

            const resUrl = await fetch(`${API_URL}/images/client`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await resUrl.json();
            const signedUrl = data.signedUrl;

            const res = await fetch(signedUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': file.type,
                },
                body: file,
            });

            if (res.ok) {
                await submitProfileImage(fileName);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function submitProfileImage(fileName: string) {
        try {
            await fetch(`${API_URL}/users/edit/profile`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ profileImage: `client/${fileName}` }),
            });
        } catch (err) {
            console.error(err);
        } finally {
            dispatch(PROFILE_IMAGE_MODAL(false));
            window.location.reload();
        }
    }

    return (
        <>
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                ref={fileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
            <button type="button" className="button-groupname-order on" onClick={handleClick}>
                변경
            </button>
        </>
    );
}
