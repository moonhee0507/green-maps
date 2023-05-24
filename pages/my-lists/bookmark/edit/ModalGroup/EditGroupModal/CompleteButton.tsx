import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../../../renderer/store/hooks';
import { API_URL } from '../../../../../API_URL/api';
import { navigate } from 'vite-plugin-ssr/client/router';
import type { UserInfo } from '../../../../../../server/models/User';
import type { GroupList } from '../../../../../../server/models/Bookmark';

export { CompleteButton };

function CompleteButton({ userInfo, groupList }: { userInfo: UserInfo | null; groupList: GroupList[] | null }) {
    const [attr, setAttr] = useState({ disabled: true });
    const groupName = useAppSelector((state) => state.myListSlice.groupName);
    const groupIcon = useAppSelector((state) => state.myListSlice.selectedIcon);
    const targetGroupName = useAppSelector((state) => state.myListSlice.targetGroup);

    useEffect(() => {
        if (groupName !== null) {
            if (groupName.length !== 0) setAttr({ disabled: false });
            else setAttr({ disabled: true });
        } else {
            setAttr({ disabled: true });
        }
    }, [groupName]);

    async function handleClick() {
        if (userInfo !== null && groupList !== null) {
            const { userId } = userInfo;
            const groupId = groupList.filter((list) => list.name === targetGroupName)[0]._id;

            const res = await fetch(`${API_URL}/bookmark/update`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: userId, groupId: groupId, name: groupName, groupIcon: groupIcon }),
            });

            const data = await res.json();
            console.log(data);

            if (data.success === true) {
                window.location.reload();
            } else {
                alert('다시 시도해주세요.');
            }
        } else {
            alert('로그아웃 되었습니다.\n다시 로그인해주세요.');
            navigate('/login');
        }
    }
    return (
        <button type="button" className="button-groupname-complete" {...attr} onClick={handleClick}>
            완료
        </button>
    );
}
