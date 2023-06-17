import React, { useCallback, useEffect } from 'react';
import imgHeart from '/images/icon-heart.svg';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../renderer/CONSTANT_URL';
import { navigate } from 'vite-plugin-ssr/client/router';
import { useAppSelector } from '../../renderer/store/hooks';

export { LikeButton };

function LikeButton({ restaurantId, isLoggedIn }: { restaurantId: string; isLoggedIn: boolean }) {
    const dispatch = useDispatch();

    const hasLikeList = useCallback(async () => {
        if (isLoggedIn) {
            const res = await fetch(`${API_URL}/users/`, {
                credentials: 'include',
                method: 'GET',
            });
            const data = await res.json();

            return data.user.likeList.some((v: { _id: string; registeredAt: string }) => {
                return restaurantId === v._id;
            });
        }
    }, [restaurantId, isLoggedIn]);

    const delLike = useCallback(async () => {
        const res = await fetch(`${API_URL}/users/like/${restaurantId}`, {
            credentials: 'include',
            method: 'DELETE',
        });

        if (res.ok) {
            dispatch({
                type: 'buttonSlice/HAS_LIKE_LIST',
                ON: false,
            });
        } else console.error('좋아요 취소에 실패했습니다.');
    }, [restaurantId, isLoggedIn]);

    useEffect(() => {
        hasLikeList().then((bool) => {
            dispatch({
                type: 'buttonSlice/HAS_LIKE_LIST',
                ON: bool,
            });
        });
    }, [hasLikeList, isLoggedIn]);

    function handleClick() {
        if (isLoggedIn) {
            hasLikeList().then((bool) => {
                return bool ? delLike() : addLike();
            });
        } else {
            if (confirm('로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?')) {
                navigate('/login');
            }
        }
    }

    async function addLike() {
        try {
            const res = await fetch(`${API_URL}/users/like`, {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: restaurantId }),
            });

            if (res.ok) {
                dispatch({
                    type: 'buttonSlice/HAS_LIKE_LIST',
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
                className={useAppSelector((state) => {
                    return state.buttonSlice.like.ON ? 'img-like on' : 'img-like';
                })}
            />
            <span className="txt-like">좋아요</span>
        </button>
    );
}
