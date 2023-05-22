import React, { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../renderer/store/hooks';
import { SHOW } from '../../../renderer/_reducers/_slices/myListSlice';
import type { UserInfo } from '../../../server/models/User';

export function Menu({ userInfo }: { userInfo: UserInfo | null }) {
    const { bookmarkList, likeList } = userInfo as UserInfo;
    const clicked = useAppSelector((state) => state.myListSlice.clicked);

    const dispatch = useAppDispatch();

    function handleClick(event: MouseEvent<HTMLLIElement>) {
        const innerTxt = event.currentTarget.lastElementChild?.innerHTML;

        if (typeof innerTxt === 'string') {
            dispatch(SHOW(innerTxt));
        }
    }

    return (
        <ul className="ul-summary-bookmark">
            <li onClick={handleClick} className={`list-summary-bookmark ${clicked === '북마크' ? 'on' : ''}`}>
                <p>{userInfo && bookmarkList ? bookmarkList.length : 0}</p>
                <p>북마크</p>
            </li>
            <li onClick={handleClick} className={`list-summary-bookmark ${clicked === '좋아요' ? 'on' : ''}`}>
                <p>{userInfo && likeList ? likeList.length : 0}</p>
                <p>좋아요</p>
            </li>
        </ul>
    );
}
