import React from 'react';
import { API_URL } from '../../../API_URL/api';
import { PROFILE_IMAGE_MODAL } from '../../../../renderer/_reducers/_slices/profileSlice';
import { useAppDispatch } from '../../../../renderer/store/hooks';

export { DeleteImageButton };

function DeleteImageButton() {
    const dispatch = useAppDispatch();

    const handleClick = async () => {
        try {
            await fetch(`${API_URL}/users/edit/profile`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ profileImage: '' }),
            });
        } catch (err) {
            console.error(err);
        } finally {
            dispatch(PROFILE_IMAGE_MODAL(false));
            window.location.reload();
        }
    };

    return (
        <button type="button" className="button-groupname-order on" onClick={handleClick}>
            삭제
        </button>
    );
}