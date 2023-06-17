import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../renderer/store/hooks';
import { API_URL } from '../../../../renderer/CONSTANT_URL';
import { navigate } from 'vite-plugin-ssr/client/router';
import type { UserInfo } from '../../../../server/models/User';

export { CompleteButton };

function CompleteButton({ userInfo }: { userInfo: UserInfo | null }) {
    const [show, setShow] = useState({ disabled: true });
    const groupName = useAppSelector((state) => state.myListSlice.groupName);
    const groupIcon = useAppSelector((state) => state.myListSlice.selectedIcon);

    useEffect(() => {
        if (groupName !== null) {
            if (groupName.length !== 0) setShow({ disabled: false });
            else setShow({ disabled: true });
        } else {
            setShow({ disabled: true });
        }
    }, [groupName]);

    async function handleClick() {
        if (userInfo !== null) {
            const { userId } = userInfo;

            const res = await fetch(`${API_URL}/bookmark/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: userId, name: groupName, groupIcon: groupIcon }),
            });

            const data = await res.json();

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
        <button type="button" className={`button-groupname-complete ${show ? 'on' : ''}`} onClick={handleClick}>
            완료
        </button>
    );
}
