import React, { useCallback, useEffect } from 'react';
import imgHeart from '/images/icon-heart.svg';
import store from '../../renderer/store';
import { useSelector } from 'react-redux';

export { LikeButton };

function LikeButton(props: { restaurantId: string }) {
    const hasLikeList = useCallback(async () => {
        const res = await fetch(`http://localhost:5000/api/users/`);
        const data = await res.json();

        return data.user.likeList.some((v: { _id: string; registeredAt: string }) => props.restaurantId === v._id);
    }, [props.restaurantId]);

    const delLike = useCallback(async () => {
        const res = await fetch(`http://localhost:5000/api/users/like/${props.restaurantId}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            store.dispatch({
                type: 'HAS_LIKE_LIST',
                ON: false,
            });
        } else throw new Error();
    }, [props.restaurantId]);

    useEffect(() => {
        hasLikeList().then((bool) => {
            store.dispatch({
                type: 'HAS_LIKE_LIST',
                ON: bool,
            });
        });
    }, [hasLikeList]);

    function handleClick() {
        hasLikeList().then((bool) => {
            return bool ? delLike() : addLike();
        });
    }

    async function addLike() {
        try {
            const res = await fetch(`http://localhost:5000/api/users/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: props.restaurantId, registeredAt: new Date().toLocaleDateString('ko-kr') }),
            });

            if (res.ok) {
                store.dispatch({
                    type: 'HAS_LIKE_LIST',
                    ON: true,
                });
            } else throw new Error();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <button className="button-like" onClick={handleClick} type="button">
            <img
                src={imgHeart}
                alt="좋아요 이미지"
                className={useSelector((state: any) => {
                    return state.like.ON ? 'img-like on' : 'img-like';
                })}
            />
            <span className="txt-like">좋아요</span>
        </button>
    );
}
