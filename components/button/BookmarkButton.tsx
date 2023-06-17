import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../renderer/store/hooks';
import { navigate } from 'vite-plugin-ssr/client/router';
import { API_URL } from '../../renderer/CONSTANT_URL';
import imgBookmark from '/images/icon-bookmark.svg';

export { BookmarkButton };

function BookmarkButton({ restaurantId, isLoggedIn }: { restaurantId: string; isLoggedIn: boolean }) {
    const dispatch = useDispatch();

    const hasBookmarkList = useCallback(async () => {
        if (isLoggedIn) {
            const res = await fetch(`${API_URL}/users/`, {
                credentials: 'include',
                method: 'GET',
            });
            const data = await res.json();

            return data.user.bookmarkList.some((v: { _id: string; registeredAt: string }) => {
                return restaurantId === v._id;
            });
        }
    }, [restaurantId, isLoggedIn]);

    const delBookmark = useCallback(async () => {
        if (isLoggedIn) {
            const res = await fetch(`${API_URL}/users/bookmark/${restaurantId}`, {
                credentials: 'include',
                method: 'DELETE',
            });

            if (res.ok) {
                dispatch({
                    type: 'buttonSlice/HAS_BOOKMARK_LIST',
                    ON: false,
                });
            } else console.error('북마크 취소에 실패했습니다.');
        }
    }, [restaurantId, isLoggedIn]);

    useEffect(() => {
        hasBookmarkList().then((bool) => {
            dispatch({
                type: 'buttonSlice/HAS_BOOKMARK_LIST',
                ON: bool,
            });
        });
    }, [hasBookmarkList, isLoggedIn]);

    function handleClick() {
        if (isLoggedIn) {
            hasBookmarkList().then((bool) => {
                return bool ? delBookmark() : addBookmark();
            });
        } else {
            if (confirm('로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?')) {
                navigate('/login');
            }
        }
    }

    async function addBookmark() {
        try {
            const res = await fetch(`${API_URL}/users/bookmark`, {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: restaurantId }),
            });

            if (res.ok) {
                dispatch({
                    type: 'buttonSlice/HAS_BOOKMARK_LIST',
                    ON: true,
                });
            } else throw new Error();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <button className="button-bookmark" onClick={handleClick} type="button">
            <img
                src={imgBookmark}
                alt="북마크 이미지"
                className={useAppSelector((state) => {
                    return state.buttonSlice.bookmark.ON ? 'img-bookmark on' : 'img-bookmark';
                })}
            />
            <span className="txt-bookmark">북마크</span>
        </button>
    );
}
