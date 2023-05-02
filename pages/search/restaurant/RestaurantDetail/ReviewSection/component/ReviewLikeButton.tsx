import React, { useEffect, useState } from 'react';
import imgHeart from '/images/icon-heart.svg';

export { ReviewLikeButton };

function ReviewLikeButton(props: { reviewId: string; like: Array<{ user: string }> | undefined }) {
    const { reviewId, like } = props;
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
            const res = await fetch(`http://localhost:5000/api/users/`);
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
        const res = await fetch(`http://localhost:5000/api/reviews/${reviewId}/like`, {
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
        const res = await fetch(`http://localhost:5000/api/reviews/${reviewId}/like`, {
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
            <dd className="num-like-count">
                <button className="button-review-like" type="button" onClick={handleClick}>
                    <img src={imgHeart} alt="아이콘" className={`img-like review ${buttonOn ? 'on' : ''}`} />
                </button>
                <span aria-label="좋아요 개수">{likeCount}</span>
            </dd>
        </>
    );
}
