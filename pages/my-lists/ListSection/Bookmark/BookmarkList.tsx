import React from 'react';
import { GroupNameList } from './GroupNameList';
import type { Bookmark } from '../../../../server/models/User';

export { BookmarkList };

function BookmarkList({ lists }: { lists: Bookmark[] }) {
    const arrGroupName = [...new Set(lists.map((list) => list.groupName))];

    return lists && lists.length > 0 ? (
        <>
            <ul className="ul-groupname">
                {arrGroupName.map((groupName) => {
                    // groupName과 그에 해당하는 Bookmark 전달
                    const listHasGroupName = lists.filter((list) => list.groupName === groupName);
                    return <GroupNameList key={Math.random()} groupName={groupName} lists={listHasGroupName} />;
                })}
            </ul>
            <button type="button" className="button-new-group">
                새 그룹 추가
            </button>
        </>
    ) : (
        <div className="style-wrapper-no-review">
            <div className="txt-no-review">😭</div>
            <p>목록이 없어요.</p>
        </div>
    );
}
