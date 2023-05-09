import React, { useCallback, useEffect } from 'react';
import imgBookmark from '/images/icon-bookmark.svg';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../renderer/store.js';

export { BookmarkButton };

function BookmarkButton(props: { restaurantId: string }) {
    const dispatch = useDispatch();
    const hasBookmarkList = useCallback(async () => {
        const res = await fetch(`http://localhost:5000/api/users/`);
        const data = await res.json();

        return data.user.bookmarkList.some((v: { _id: string; registeredAt: string }) => props.restaurantId === v._id);
    }, [props.restaurantId]);

    const delBookmark = useCallback(async () => {
        const res = await fetch(`http://localhost:5000/api/users/bookmark/${props.restaurantId}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            dispatch({
                type: 'buttonSlice/HAS_BOOKMARK_LIST',
                ON: false,
            });
        } else throw new Error();
    }, [props.restaurantId]);

    useEffect(() => {
        hasBookmarkList().then((bool) => {
            dispatch({
                type: 'buttonSlice/HAS_BOOKMARK_LIST',
                ON: bool,
            });
        });
    }, [hasBookmarkList]);

    function handleClick() {
        hasBookmarkList().then((bool) => {
            return bool ? delBookmark() : addBookmark();
        });
    }

    async function addBookmark() {
        try {
            const res = await fetch(`http://localhost:5000/api/users/bookmark`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: props.restaurantId }),
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
                className={useSelector((state: RootState) => {
                    return state.buttonSlice.bookmark.ON ? 'img-bookmark on' : 'img-bookmark';
                })}
            />
            <span className="txt-bookmark">북마크</span>
        </button>
    );
}
