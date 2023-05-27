import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { EDIT_DELETE_NOTIFY_MODAL } from '../../../../../renderer/_reducers/_slices/postSlice';
import { API_URL } from '../../../../API_URL/api';
import { navigate } from 'vite-plugin-ssr/client/router';

export { EditDeleteNotifyModal };

function EditDeleteNotifyModal() {
    const dispatch = useAppDispatch();

    const [attr, setAttr] = useState({ hidden: true });
    const editDeleteNotifyModalOn = useAppSelector((state) => state.postSlice.editDeleteNotifyModalOn);
    const sameUserOwner = useAppSelector((state) => state.postSlice.sameUserOwner);

    useEffect(() => {
        if (editDeleteNotifyModalOn === true) setAttr({ hidden: false });
        else setAttr({ hidden: true });
    }, [editDeleteNotifyModalOn]);

    function handleClick() {
        // 각 처리
        close();
    }

    function close() {
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');

        dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    }

    return (
        <article className="modal-edit-delete-notify" {...attr}>
            <h4 className="sr-only">수정, 삭제, 신고용 모달</h4>
            <ul>
                {sameUserOwner ? (
                    <>
                        <EDIT />
                        <DELETE />
                    </>
                ) : (
                    <li onClick={handleClick}> 🚨 신고하기</li>
                )}
            </ul>
        </article>
    );
}

function EDIT() {
    const dispatch = useAppDispatch();
    const postId = useAppSelector((state) => state.postSlice.postId);

    function handleClick() {
        navigate(`/community/edit/${postId}`);

        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');
        dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    }

    return <li onClick={handleClick}>🩹 수정하기</li>;
}

function DELETE() {
    const dispatch = useAppDispatch();
    const postId = useAppSelector((state) => state.postSlice.postId);

    async function handleClick() {
        try {
            const res = await fetch(`${API_URL}/posts/${postId}`, {
                method: 'DELETE',
            });

            const data = await res.json();

            if (data.success) {
                navigate('/community');
            } else {
                alert('다시 시도해주세요.');
            }
        } catch (err) {
            console.error(err);
        } finally {
            const app = document.querySelector('.app');
            app?.classList.remove('modal-mode');
            dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
        }
    }
    return <li onClick={handleClick}>🗑️ 삭제하기</li>;
}
