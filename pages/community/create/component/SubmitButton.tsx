import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../renderer/_reducers/rootReducer';

export { SubmitButton };

function SubmitButton() {
    const dispatch = useDispatch();

    const subject = useSelector((state: RootState) => state.postSlice.SUBJECT);
    const owner = useSelector((state: RootState) => state.postSlice.NICKNAME);
    const title = useSelector((state: RootState) => state.postSlice.TITLE);
    const content = useSelector((state: RootState) => state.postSlice.CONTENT);

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
                console.log('info가 없습니다. 로그인 하세요.');
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

            const res = await fetch(`http://localhost:5000/api/posts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            const data = await res.json();

            console.log(data);
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
