import React, { useEffect, useState } from 'react';
import { Bookmark, UserInfo } from '../../../../server/models/User';
import { useAppSelector } from '../../../../renderer/store/hooks';
import { GroupNameList } from './GroupNameList';
import { CloseButton } from './CloseButton';
import { API_URL } from '../../../API_URL/api';
import type { GroupList } from '../../../../server/models/Bookmark';

export { WhereToCopyModal };

function WhereToCopyModal({ userInfo }: { userInfo: UserInfo | null }) {
    const copyModalOn = useAppSelector((state) => state.myListSlice.copyModalOn);
    const targetGroup = useAppSelector((state) => state.myListSlice.targetGroup);

    const [show, setShow] = useState(false);
    const [groupList, setGroupList] = useState<GroupList[]>([]);
    const [bookmarkList, setBookmarkList] = useState<Bookmark[]>([]);

    useEffect(() => {
        if (copyModalOn === true) setShow(true);
        else setShow(false);
    }, [copyModalOn]);

    useEffect(() => {
        if (userInfo !== null) {
            getBookmarkGroupList(userInfo.userId).then((data) => {
                if (data.success) {
                    setGroupList(data.groupList);
                }
            });

            setBookmarkList(userInfo.bookmarkList);
        }
    }, []);

    async function getBookmarkGroupList(userId: string) {
        const res = await fetch(`${API_URL}/bookmark/${userId}`);
        const data = await res.json();

        return data;
    }

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>복사할 그룹 선택</h4>
            <ul className="ul-groupname">
                {groupList
                    .filter((groupInfo) => groupInfo.name !== targetGroup) // 현재 그룹 제외
                    .map((groupInfo) => {
                        return (
                            <GroupNameList
                                key={Math.random()}
                                groupInfo={groupInfo}
                                lists={bookmarkList}
                                userInfo={userInfo}
                            />
                        );
                    })}
            </ul>
            <CloseButton />
        </article>
    );
}
