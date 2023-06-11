import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../renderer/store/hooks';
import { API_URL } from '../../../../../../renderer/CONSTANT_URL';
import { navigate } from 'vite-plugin-ssr/client/router';
import type { UserInfo } from '../../../../../../server/models/User';
import type { GroupList } from '../../../../../../server/models/Bookmark';
import { COMPARE_ICON } from '../../../../../../renderer/_reducers/_slices/myListSlice';

export { CompleteButton };

function CompleteButton({ userInfo, groupList }: { userInfo: UserInfo | null; groupList: GroupList[] | null }) {
    const [show, setShow] = useState({ disabled: true });
    const groupName = useAppSelector((state) => state.myListSlice.groupName);
    const groupIcon = useAppSelector((state) => state.myListSlice.selectedIcon);
    const targetGroupName = useAppSelector((state) => state.myListSlice.targetGroup);
    const compareIcon = useAppSelector((state) => state.myListSlice.sameIcon);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (groupList !== null) {
            const originIcon = groupList.filter((list) => list.name === targetGroupName)[0].groupIcon;
            dispatch(COMPARE_ICON(originIcon === groupIcon));
        }
    }, [groupIcon]);

    useEffect(() => {
        if ((groupName !== null && groupName !== '' && groupName !== targetGroupName) || compareIcon === false) {
            setShow({ disabled: false });
        } else {
            setShow({ disabled: true });
        }
    }, [groupName, compareIcon, targetGroupName, compareIcon]);

    async function handleClick() {
        if (userInfo !== null && groupList !== null) {
            const arrGroupName = groupList.map((group) => group.name);

            if (arrGroupName.includes(groupName || targetGroupName)) {
                alert('중복된 그룹명은 사용할 수 없습니다.');
            } else {
                const { userId } = userInfo;
                const groupId = groupList.filter((list) => list.name === targetGroupName)[0]._id;

                const res = await fetch(`${API_URL}/bookmark/update`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userId,
                        groupId: groupId,
                        name: groupName || targetGroupName,
                        groupIcon: groupIcon,
                    }),
                });

                const data = await res.json();

                if (data.success === true) {
                    window.location.reload();
                } else {
                    alert('다시 시도해주세요.');
                }
            }
        } else {
            alert('로그아웃 되었습니다.\n다시 로그인해주세요.');
            navigate('/login');
        }
    }
    return (
        <button type="button" className={`button-groupname-complete ${show ? 'on' : ''}`} onClick={handleClick}>
            완료
        </button>
    );
}
