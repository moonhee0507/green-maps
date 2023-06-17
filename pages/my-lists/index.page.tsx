import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { NavBar } from '../../components/navBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { API_URL } from '../../renderer/CONSTANT_URL';
import { useCheckLoginStatus } from '../../renderer/_hooks/useCheckLoginStatus';
import LoadingMain from '../../components/Loading/LoadingMain';
import type { GroupList } from '../../server/models/Bookmark';

export const documentProps = {
    title: '내 목록 | Green Maps',
    description: '북마크, 좋아요 표시한 채식 식당 목록',
};

const MyListMain = React.lazy(() => import('./MyListMain'));

export function Page() {
    const [isLoggedIn, info] = useCheckLoginStatus();

    const [groupList, setGroupList] = useState<GroupList[] | null>(null);

    useEffect(() => {
        if (info) {
            try {
                (async () => {
                    const res = await fetch(`${API_URL}/bookmark/${info?.userId}`);
                    const data = await res.json();

                    setGroupList(data.groupList);
                })();
            } catch (err) {
                console.error(err);
            }
        }
    }, [info]);

    return isLoggedIn && info ? (
        <>
            <TopBar title="내 식당 목록" />
            <React.Suspense fallback={<LoadingMain />}>
                <MyListMain userInfo={info} groupList={groupList} />
            </React.Suspense>
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup userInfo={info} />
        </>
    ) : (
        <LoadingMain />
    );
}
