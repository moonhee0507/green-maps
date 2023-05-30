import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { EditImageButton } from './EditImageButton';
import { DeleteImageButton } from './DeleteImageButton';
import imgClose from '/images/icon-plus.svg';
import { PROFILE_IMAGE_MODAL } from '../../../../renderer/_reducers/_slices/profileSlice';

export { EditProfileImageModal };

function EditProfileImageModal() {
    const profileImageModalOn = useAppSelector((state) => state.profileSlice.profileImageModalOn);
    const [show, setShow] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (profileImageModalOn === true) setShow(true);
        else setShow(false);
    }, [profileImageModalOn]);

    function handleClose() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(PROFILE_IMAGE_MODAL(false));
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>프로필 사진</h4>
            <div className="container-button">
                <EditImageButton />
                <DeleteImageButton />
            </div>
            <button type="button" className="button-close" onClick={handleClose}>
                <img src={imgClose} alt="X 아이콘" className="img-close" />
            </button>
        </article>
    );
}
