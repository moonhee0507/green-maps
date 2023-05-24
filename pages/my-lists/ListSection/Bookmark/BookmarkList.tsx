import React, { useEffect, useState } from 'react';
import { GroupNameList } from './GroupNameList';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { ADD_GROUP_MODAL } from '../../../../renderer/_reducers/_slices/myListSlice';
import type { Bookmark } from '../../../../server/models/User';
import type { GroupList } from '../../../../server/models/Bookmark';

export { BookmarkList };

function BookmarkList({ lists, groupList }: { lists: Bookmark[]; groupList: GroupList[] | null }) {
    const [registerOrder, setRegisterOrder] = useState<GroupList[] | null>(null);
    const [nameOrder, setNameOrder] = useState<GroupList[] | null>(null);

    useEffect(() => {
        if (groupList !== null) {
            setRegisterOrder(groupList);
            setNameOrder([...groupList].sort((a, b) => a.name.localeCompare(b.name, 'en')));
        }
    }, [groupList]);

    const sort = useAppSelector((state) => state.myListSlice.groupNameOrder);
    const dispatch = useAppDispatch();

    function handleAddGroup() {
        const app = document.querySelector('.app');
        app?.classList.add('modal-mode');

        dispatch(ADD_GROUP_MODAL(true));
    }

    return groupList !== null ? (
        <>
            <ul className="ul-groupname">
                {sort === '등록순'
                    ? registerOrder?.map((groupInfo) => {
                          return <GroupNameList key={Math.random()} groupInfo={groupInfo} lists={lists} />;
                      })
                    : nameOrder?.map((groupInfo) => {
                          return <GroupNameList key={Math.random()} groupInfo={groupInfo} lists={lists} />;
                      })}
            </ul>
            <button type="button" className="button-new-group" onClick={handleAddGroup}>
                새 그룹 추가
            </button>
        </>
    ) : (
        <div className="style-wrapper-no-review">
            <div className="txt-no-review">🚀</div>
            <p>로딩중</p>
        </div>
    );
}
