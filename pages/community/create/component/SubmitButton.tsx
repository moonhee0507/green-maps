import React, { useCallback, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { RootState } from '../../../../renderer/store.js';

export { SubmitButton };

function SubmitButton() {
    const dispatch = useDispatch();

    const subject = useSelector((state: RootState) => state.postSlice.SUBJECT);
    const owner = useSelector((state: RootState) => state.postSlice.NICKNAME);
    const title = useSelector((state: RootState) => state.postSlice.TITLE);
    // const content = useSelector((state: RootState) => state.postSlice.CONTENT);

    const store = useStore<any>();

    const getUserInfo = useCallback(async () => {
        const res = await fetch(`http://localhost:5000/api/users/`);
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
                content: store.getState().postSlice.CONTENT,
            };

            const res = await fetch(`http://localhost:5000/api/posts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            const data = await res.json();

            console.log(data);

            switch (data.success) {
                case true:
                    dispatch({ type: 'postSlice/SUBJECT_STATE', SUBJECT: '' });
                    alert('게시글이 등록되었습니다.');
                    history.back();
                    break;
                case false:
                    alert('글쓰기 등록에 실패했습니다.');
                    break;
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <button type="button" onClick={handleSubmit}>
            등록
        </button>
    );
}
