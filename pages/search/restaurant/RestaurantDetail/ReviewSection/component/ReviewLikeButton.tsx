import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../../../../renderer/CONSTANT_URL';
import imgHeart from '/images/icon-heart.svg';

export { ReviewLikeButton };

function ReviewLikeButton(props: { reviewId: string; like: Array<{ user: string }> | undefined }) {
    const { reviewId, like } = props;
    const [userId, setUserId] = useState<string | null>(null);
    const [likeCount, setLikeCount] = useState<number>(like ? like.length : 0);
    const [buttonOn, setButtonOn] = useState<boolean>(false);

    useEffect(() => {
        getUserId();
        async function getUserId() {
            try {
                const res = await fetch(`${API_URL}/users`);
                const data = await res.json();

                if (data.success) {
                    setUserId(data.user.userId);
                } else {
                    setUserId(null);
                }
            } catch (err) {
                console.error(err);
            }
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
        const res = await fetch(`${API_URL}/reviews/${reviewId}/like`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: userId }),
        });

        if (res.ok) {
            setLikeCount(likeCount + 1);
        } else throw new Error();
    }

    async function delLike() {
        const res = await fetch(`${API_URL}/reviews/${reviewId}/like`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: userId }),
        });

        if (res.ok) {
            setLikeCount(likeCount - 1);
        } else throw new Error();
    }

    return (
        <>
            <dt className="sr-only">좋아요</dt>
            <dd className="container-button-txt">
                <button className="button-review-like" type="button" onClick={handleClick}>
                    <img src={imgHeart} alt="좋아요 이미지" className={`img-like review ${buttonOn ? 'on' : ''}`} />
                </button>
                <span aria-label="좋아요 개수">{likeCount}</span>
            </dd>
        </>
    );
}
