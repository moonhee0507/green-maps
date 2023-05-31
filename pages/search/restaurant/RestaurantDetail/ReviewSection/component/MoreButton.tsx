import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../../renderer/store/hooks';
import {
    EDIT_DELETE_NOTIFY_MODAL,
    SAME_USER_OWNER,
    SET_RESTAURANT_ID,
    SET_REVIEW_ID,
} from '../../../../../../renderer/_reducers/_slices/reviewSlice';
import type { UserInfo } from '../../../../../../server/models/User';

export { MoreButton };

function MoreButton({
    userInfo,
    owner,
    reviewId,
    restaurantId,
}: {
    userInfo: UserInfo | null;
    owner: string;
    reviewId: string;
    restaurantId: string;
}) {
    const dispatch = useAppDispatch();

    const [user, setUser] = useState<UserInfo | null>(null);

    useEffect(() => {
        if (userInfo) setUser(userInfo);
    }, [userInfo]);

    const handleClick = () => {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');

        // 수정 삭제 신고 모달
        dispatch(EDIT_DELETE_NOTIFY_MODAL(true));
        dispatch(SAME_USER_OWNER(user?.userId === owner));
        dispatch(SET_REVIEW_ID(reviewId));
        dispatch(SET_RESTAURANT_ID(restaurantId));
    };

    return <button className="button-more reviewitem" aria-label="더보기 버튼" onClick={handleClick} />;
}
