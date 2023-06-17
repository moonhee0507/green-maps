import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { EDIT_DELETE_NOTIFY_MODAL } from '../../../../renderer/_reducers/_slices/reviewSlice';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import { navigate } from 'vite-plugin-ssr/client/router';

export { EditDeleteNotifyModal };

function EditDeleteNotifyModal() {
    const [show, setShow] = useState(false);
    const editDeleteNotifyModalOn = useAppSelector((state) => state.reviewSlice.editDeleteNotifyModalOn);
    const sameUserOwner = useAppSelector((state) => state.reviewSlice.sameUserOwner);

    useEffect(() => {
        if (editDeleteNotifyModalOn === true) setShow(true);
        else setShow(false);
    }, [editDeleteNotifyModalOn]);

    return (
        <article className={`modal-edit-delete-notify ${show ? 'on' : ''}`}>
            <h4 className="sr-only">수정, 삭제, 신고용 모달</h4>
            <ul>
                {sameUserOwner ? (
                    <>
                        <EDIT />
                        <DELETE />
                    </>
                ) : (
                    <li> 🚨 신고하기</li>
                )}
            </ul>
        </article>
    );
}

function EDIT() {
    const dispatch = useAppDispatch();
    const reviewId = useAppSelector((state) => state.reviewSlice.reviewId);
    const restaurantId = useAppSelector((state) => state.reviewSlice.restaurantId);

    function handleClick() {
        navigate(`/search/${restaurantId}/reviews/${reviewId}/edit`);
        const app = document.querySelector('.app');
        app?.classList.remove('modal-mode');
        dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    }

    return <li onClick={handleClick}>🩹 수정하기</li>;
}

function DELETE() {
    const dispatch = useAppDispatch();
    const reviewId = useAppSelector((state) => state.reviewSlice.reviewId);
    const restaurantId = useAppSelector((state) => state.reviewSlice.restaurantId);

    async function handleClick() {
        try {
            const res = await fetch(`${API_URL}/reviews/${reviewId}`, {
                credentials: 'include',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ restaurantId: restaurantId }),
            });
            const data = await res.json();
            if (data.success) {
                navigate(`/search/${restaurantId}`);
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
