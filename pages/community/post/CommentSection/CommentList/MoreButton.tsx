import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../../renderer/store/hooks';
import { EDIT_DELETE_NOTIFY_MODAL, SAME_USER_OWNER } from '../../../../../renderer/_reducers/_slices/postSlice';
import type { UserInfo } from '../../../../../server/models/User';
import type { CommentInPost } from '../../../../../server/models/Post';

export { MoreButton };

function MoreButton({ userInfo, comment }: { userInfo: UserInfo | null; comment: CommentInPost }) {
    const dispatch = useAppDispatch();

    const moreButtonRef = useRef<HTMLButtonElement>(null);
    const [user, setUser] = useState<UserInfo | null>(null);

    useEffect(() => {
        if (userInfo !== null) setUser(userInfo);
    }, [userInfo]);

    function handleClick() {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');

        dispatch(EDIT_DELETE_NOTIFY_MODAL(true));
        dispatch(SAME_USER_OWNER(user?.nickName === comment.owner));
    }

    return (
        <button
            type="button"
            aria-label="더보기 버튼"
            className="button-more commentitem"
            onClick={handleClick}
            ref={moreButtonRef}
        />
    );
}
