import React, { useCallback, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { useAppSelector } from '../../../../renderer/store/hooks';
import { API_URL } from '../../../CONSTANT_URL';
import { EDIT_MODE } from '../../../../renderer/_reducers/_slices/postSlice';

export { SubmitButton };

function SubmitButton() {
    const dispatch = useDispatch();

    const editMode = useAppSelector((state) => state.postSlice.editMode);

    const postId = useAppSelector((state) => state.postSlice.postId);
    const subject = useAppSelector((state) => state.postSlice.SUBJECT);
    const owner = useAppSelector((state) => state.postSlice.NICKNAME);
    const title = useAppSelector((state) => state.postSlice.TITLE);
    const content = useAppSelector((state) => state.postSlice.CONTENT);

    const getUserInfo = useCallback(async () => {
        const res = await fetch(`${API_URL}/users/`);
        const data = await res.json();

        return data.user;
    }, []);

    useEffect(() => {
        getUserInfo().then((info) => {
            if (info) {
                dispatch({ type: 'postSlice/OWNER_STATE', NICKNAME: info.nickName });
            } else {
                console.log('사용자 정보가 없습니다. 로그인 하세요.');
            }
        });
    }, [getUserInfo]);

    async function handleSubmit() {
        try {
            const body = {
                subject: subject,
                owner: owner,
                title: title,
                content: content,
            };

            const res = await fetch(`${API_URL}/posts/${editMode ? postId : ''}`, {
                method: editMode ? 'PATCH' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            const data = await res.json();

            console.log(data);

            if (data.success) {
                alert('게시글이 등록되었습니다.');
            } else {
                alert('다시 시도해주세요.');
            }
        } catch (err) {
            console.error(err);
        } finally {
            dispatch({ type: 'postSlice/SUBJECT_STATE', SUBJECT: '' });
            dispatch(EDIT_MODE(false));
            history.back();
        }
    }

    return (
        <button type="button" onClick={handleSubmit}>
            등록
        </button>
    );
}
