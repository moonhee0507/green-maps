import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import imgHeart from '/images/icon-heart.svg';

export { PostLikeButton };

function PostLikeButton(props: { postId: string; like: Array<{ user: string }> | undefined }) {
    const { postId, like } = props;
    const [userId, setUserId] = useState<string | null>(null);
    const [likeCount, setLikeCount] = useState<number>(like ? like.length : 0);
    const [buttonOn, setButtonOn] = useState<boolean>(false);

    useEffect(() => {
        getUserId()
            .then((userId) => {
                setUserId(userId);
            })
            .catch((err) => console.error(err));

        async function getUserId() {
            const res = await fetch(`${API_URL}/users`);
            const data = await res.json();

            return data.user.userId;
        }
    }, []);

    useEffect(() => {
        if (like) {
            setButtonOn(like.some((userInfo) => userInfo.user === userId));
        }
    }, [userId]);

    function handleClick() {
        buttonOn ? delLike() : addLike();
        setButtonOn(buttonOn ? false : true);
    }

    async function addLike() {
        const res = await fetch(`${API_URL}/posts/${postId}/like`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: userId }),
        });

        if (res.ok) setLikeCount(likeCount + 1);
        else throw new Error();
    }

    async function delLike() {
        const res = await fetch(`${API_URL}/posts/${postId}/like`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: userId }),
        });

        if (res.ok) setLikeCount(likeCount - 1);
        else throw new Error();
    }

    return (
        <button className="button-like" type="button" onClick={handleClick} style={{ margin: '0 auto' }}>
            <img src={imgHeart} alt="좋아요 이미지" className={`img-like review ${buttonOn ? 'on' : ''}`} />
            <span style={{ minWidth: '20px' }}>{likeCount}</span>
        </button>
    );
}
