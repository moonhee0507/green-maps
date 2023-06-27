import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../renderer/store/hooks';
import { API_URL } from '../../../../renderer/CONSTANT_URL';

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
    const reviewId = useAppSelector((state) => state.reviewSlice.reviewId);
    const restaurantId = useAppSelector((state) => state.reviewSlice.restaurantId);

    function handleClick() {
        window.location.href = `/search/${restaurantId}/reviews/${reviewId}/edit`;
    }

    return <li onClick={handleClick}>🩹 수정하기</li>;
}

function DELETE() {
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
                window.location.href = `/search/${restaurantId}`;
            } else {
                alert('다시 시도해주세요.');
            }
        } catch (err) {
            console.error(err);
        }
    }
    return <li onClick={handleClick}>🗑️ 삭제하기</li>;
}
