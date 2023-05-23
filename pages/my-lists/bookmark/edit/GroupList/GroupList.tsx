import React from 'react';
import type { Bookmark } from '../../../../../server/models/User';
import imgEdit from '/images/icon-edit.svg';
import imgDelete from '/images/icon-plus.svg';

export { GroupList };

function GroupList({ lists }: { lists: Bookmark[] }) {
    const arrGroupName = [...new Set(lists.map((list) => list.groupName))];

    return (
        <ul>
            {arrGroupName.map((groupName) => {
                const listHasGroupName = lists.filter((list) => list.groupName === groupName);

                return <GroupListItem key={Math.random()} groupName={groupName} lists={listHasGroupName} />;
            })}
        </ul>
    );
}

function GroupListItem({ groupName, lists }: { groupName: string; lists: Bookmark[] }) {
    return (
        <li className="li-bookmarkgroup reuse">
            <div className="style-wrapper-groupname">
                <GroupInfo groupName={groupName} lists={lists} />
                {groupName !== '기본 그룹' && <ButtonGroup />}
            </div>
        </li>
    );
}

function GroupInfo({ groupName, lists }: { groupName: string; lists: Bookmark[] }) {
    return (
        <div className="style-wrapper-groupname-info">
            <div className="container-groupicon">
                <img src={lists[0].groupIcon} alt="" />
            </div>
            <div>
                <p className="txt-groupname">{groupName}</p>
                <p className="txt-restaurant-count">
                    개수 <span className="num-restaurant-count">{lists.length}</span>
                </p>
            </div>
        </div>
    );
}

function ButtonGroup() {
    return (
        <div>
            <button className="button-edit-group" type="button" aria-label="그룹명 수정 버튼">
                <img src={imgEdit} alt="수정 아이콘" />
            </button>
            <button className="button-delete-group" type="button" aria-label="그룹 삭제 버튼">
                <img src={imgDelete} alt="삭제 아이콘" />
            </button>
        </div>
    );
}
