import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../renderer/store/hooks';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import { Form } from './Form/Form';
import { CloseButton } from './CloseButton';
import type { Like, UserInfo } from '../../../../server/models/User';

export { DeleteMultiLike };

function DeleteMultiLike({ userInfo }: { userInfo: UserInfo | null }) {
    const [show, setShow] = useState(false);
    const [likeList, setLikeList] = useState<Like[]>([]);

    const deleteLikeListModelOn = useAppSelector((state) => state.myListSlice.deleteLikeListModalOn);

    useEffect(() => {
        if (deleteLikeListModelOn) setShow(true);
        else setShow(false);
    }, [deleteLikeListModelOn]);

    useEffect(() => {
        if (userInfo !== null) {
            getLikeList().then((data) => {
                if (data.success) {
                    setLikeList(data.likeList);
                }
            });
        }
    }, [userInfo]);

    async function getLikeList() {
        const res = await fetch(`${API_URL}/users/like`, {
            credentials: 'include',
            method: 'GET',
        });
        const data = (await res.json()) as { success: boolean; likeList: Like[] };

        return data;
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>목록 삭제</h4>
            <Form likeList={likeList} />
            <CloseButton />
        </article>
    );
}
