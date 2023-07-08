import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../renderer/store/hooks';
import {
    EDIT_DELETE_NOTIFY_MODAL,
    SET_POST_ID,
    SAME_USER_OWNER,
    SET_ACCESS_TARGET,
} from '../../../../renderer/_reducers/_slices/postSlice';
import appModalMode from '../../../../components/modal/appModalMode';
import type { UserInfo } from '../../../../server/models/User';

export { MoreButton };

function MoreButton({ userInfo, owner, postId }: { userInfo: UserInfo | null; owner: string; postId: string }) {
    const dispatch = useAppDispatch();

    const moreButtonRef = useRef<HTMLButtonElement>(null);
    const [user, setUser] = useState<UserInfo | null>(null);
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        if (userInfo !== null) setUser(userInfo);
        if (typeof owner === 'string') {
            setNickname(owner);
        }
    }, [userInfo]);

    function handleClick() {
        appModalMode(true);

        dispatch(EDIT_DELETE_NOTIFY_MODAL(true));
        dispatch(SAME_USER_OWNER(user?.nickName === nickname));
        dispatch(SET_POST_ID(postId));
        dispatch(SET_ACCESS_TARGET('post'));
    }

    return (
        <button
            type="button"
            aria-label="더보기 버튼"
            className="button-more postitem"
            onClick={handleClick}
            ref={moreButtonRef}
        />
    );
}
