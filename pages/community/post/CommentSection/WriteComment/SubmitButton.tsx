import React from 'react';
import { API_URL } from '../../../../../renderer/CONSTANT_URL';
import type { UserInfo } from '../../../../../server/models/User';

export { SubmitButton };

function SubmitButton({ postId, content }: { postId: string; content: string | null }) {
    const handleClick = async () => {
        const res = await fetch(`${API_URL}/users/`, {
            credentials: 'include',
            method: 'GET',
        });
        const data = (await res.json()) as {
            success: boolean;
            message?: string;
            errorMessage?: string;
            user?: UserInfo;
        };

        if (data.success && data.user) {
            submit(data.user._id);
        } else {
            if (confirm('로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?')) {
                window.location.href = `/login`;
            }
        }
    };

    async function submit(user_id: string) {
        try {
            if (content !== null && content.length > 0) {
                const body = {
                    user_id: user_id,
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
