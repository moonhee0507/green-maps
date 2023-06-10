import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import { EDIT_DELETE_NOTIFY_MODAL, SET_EDIT_COMMENT_MODE } from '../../../../../renderer/_reducers/_slices/postSlice';
import { API_URL } from '../../../../../renderer/CONSTANT_URL';
import { navigate } from 'vite-plugin-ssr/client/router';
import appModalMode from '../../../../../components/modal/appModalMode';

export { EditDeleteNotifyModal };

function EditDeleteNotifyModal() {
    const [show, setShow] = useState(false);
    const editDeleteNotifyModalOn = useAppSelector((state) => state.postSlice.editDeleteNotifyModalOn);
    const sameUserOwner = useAppSelector((state) => state.postSlice.sameUserOwner);

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
    const postId = useAppSelector((state) => state.postSlice.postId);
    const commentId = useAppSelector((state) => state.postSlice.commentId);
    const accessTarget = useAppSelector((state) => state.postSlice.accessTarget);

    function handleClick() {
        if (accessTarget === 'post') {
            navigate(`/community/edit/${postId}`);

            appModalMode(false);
            dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
        } else if (accessTarget === 'comment') {
            dispatch(SET_EDIT_COMMENT_MODE(true));
            appModalMode(false);
            dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
        }
    }

    return <li onClick={handleClick}>🩹 수정하기</li>;
}

function DELETE() {
    const dispatch = useAppDispatch();
    const postId = useAppSelector((state) => state.postSlice.postId);
    const commentId = useAppSelector((state) => state.postSlice.commentId);
    const accessTarget = useAppSelector((state) => state.postSlice.accessTarget);

    async function handleClick() {
        if (accessTarget === 'post') {
            deletePost();
        } else if (accessTarget === 'comment') {
            deleteComment();
        }
    }

    async function deletePost() {
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
            appModalMode(false);
            dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
        }
    }

    async function deleteComment() {
        try {
            const res = await fetch(`${API_URL}/comments/${commentId}?postId=${postId}`, {
                method: 'DELETE',
            });

            const data = await res.json();

            if (data.success) {
                window.location.reload();
            } else {
                alert('다시 시도해주세요.');
            }
        } catch (err) {
            console.error(err);
        } finally {
            appModalMode(false);
            dispatch(EDIT_DELETE_NOTIFY_MODAL(false));
        }
    }
    return <li onClick={handleClick}>🗑️ 삭제하기</li>;
}
