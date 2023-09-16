import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../renderer/store/hooks';
import {
    EDIT_DELETE_NOTIFY_MODAL,
    SAME_USER_OWNER,
    SET_ACCESS_TARGET,
} from '../../../../renderer/_reducers/_slices/postSlice';
import appModalMode from '../../../../components/modal/appModalMode';
import type { UserInfo } from '../../../../server/models/User';
import { Post } from '../../../../server/models/Post';

export { MoreButton };

function MoreButton({ userInfo, postInfo }: { userInfo: UserInfo | null; postInfo: Post }) {
    const dispatch = useAppDispatch();

    const moreButtonRef = useRef<HTMLButtonElement>(null);
    const [userUid, setUserUid] = useState("");
    const [posterUid, setPosterUid] = useState("");

    useEffect(() => {
        if (userInfo !== null) setUserUid(userInfo._id);
        else setUserUid("");

        if (typeof postInfo.owner.user_id === "object") {
            setPosterUid(postInfo.owner.user_id._id);
        } else {
            setPosterUid("");
        }
    }, [userInfo, postInfo]);

    function handleClick() {
        appModalMode(true);

        dispatch(EDIT_DELETE_NOTIFY_MODAL(true));
        dispatch(SAME_USER_OWNER(userUid === posterUid));
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
