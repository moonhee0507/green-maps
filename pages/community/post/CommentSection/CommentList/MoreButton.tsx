import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../../renderer/store/hooks';
import {
    EDIT_DELETE_NOTIFY_MODAL,
    SAME_USER_OWNER,
    SET_ACCESS_TARGET,
    SET_COMMENT_ID,
    SET_POST_ID,
} from '../../../../../renderer/_reducers/_slices/postSlice';
import type { UserInfo } from '../../../../../server/models/User';
import type { CommentInPost } from '../../../../../server/models/Post';

export { MoreButton };

function MoreButton({
    userInfo,
    postId,
    comment,
}: {
    userInfo: UserInfo | null;
    postId: string;
    comment: CommentInPost;
}) {
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
        dispatch(SET_ACCESS_TARGET('comment'));
        dispatch(SET_POST_ID(postId));
        dispatch(SET_COMMENT_ID(comment._id));
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
