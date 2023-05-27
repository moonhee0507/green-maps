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
        try {
            if (content !== null && content.length > 0) {
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
                    window.location.reload();
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <button type="button" onClick={handleClick} disabled={content !== null && content.length > 0 ? false : true}>
            등록
        </button>
    );
}
