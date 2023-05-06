import React, { useEffect, useState } from 'react';

export { SubmitButton };

function SubmitButton(props: { postId: string; content: string | null }) {
    const { postId, content } = props;
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        getUserId()
            .then((userId) => setUserId(userId))
            .catch((err) => console.error(err));

        async function getUserId() {
            const res = await fetch(`http://localhost:5000/api/users/`);
            const data = await res.json();

            return data.user.nickName;
        }
    }, []);

    async function handleClick() {
        const body = {
            owner: userId,
            content: content,
        };

        const res = await fetch(`http://localhost:5000/api/posts/${postId}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await res.json();

        if (data.success === true) {
            alert('댓글이 등록되었습니다.');
            window.location.reload();
        } else {
            alert('에러가 발생했습니다.');
        }
    }

    return (
        <button type="button" onClick={handleClick}>
            등록
        </button>
    );
}
