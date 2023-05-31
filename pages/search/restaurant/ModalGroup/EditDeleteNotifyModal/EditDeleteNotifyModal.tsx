import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
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
        // const app = document.querySelector('.app');
        // app?.classList.remove('modal-mode');
        // dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
    }

    return <li onClick={handleClick}>🩹 수정하기</li>;
}

function DELETE() {
    const dispatch = useAppDispatch();
    // const postId = useAppSelector((state) => state.postSlice.postId);

    async function handleClick() {
        // try {
        //     const res = await fetch(`${API_URL}/posts/${postId}`, {
        //         method: 'DELETE',
        //     });
        //     const data = await res.json();
        //     if (data.success) {
        //         navigate('/community');
        //     } else {
        //         alert('다시 시도해주세요.');
        //     }
        // } catch (err) {
        //     console.error(err);
        // } finally {
        //     const app = document.querySelector('.app');
        //     app?.classList.remove('modal-mode');
        //     dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
        // }
    }
    return <li onClick={handleClick}>🗑️ 삭제하기</li>;
}
