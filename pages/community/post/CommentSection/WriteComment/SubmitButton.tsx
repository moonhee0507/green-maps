import React from 'react';
import { API_URL } from '../../../../../renderer/CONSTANT_URL';

export { SubmitButton };

function SubmitButton(props: { postId: string; content: string | null }) {
    const { postId, content } = props;

    async function getUserId() {
        const res = await fetch(`${API_URL}/users/`, {
            credentials: 'include',
            method: 'GET',
        });
        const data = await res.json();

        return data;
    }

    function handleClick() {
        getUserId().then((data) => {
            if (data.success === true) {
                submit(data.user.nickName);
            } else {
                if (confirm('로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?')) {
                    window.location.href = `/login`;
                }
            }
        });
    }

    async function submit(nickName: string) {
        try {
            if (content !== null && content.length > 0) {
                const body = {
                    owner: nickName,
                    content: content,
                };

                const res = await fetch(`${API_URL}/posts/${postId}/comment`, {
                    credentials: 'include',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });

                const data = await res.json();

                if (data.success === true) {
                    window.location.reload();
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={content !== null && content.length > 0 ? false : true}
            aria-label="댓글 등록 버튼"
        />
    );
}
