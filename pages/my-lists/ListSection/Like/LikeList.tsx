import React from 'react';
import { ListItem } from '../../bookmark/BookmarkListMain/BookmarkList/BookmarkList';
import type { Like } from '../../../../server/models/User';

export { LikeList };

function LikeList({ lists }: { lists: Like[] }) {
    return lists && lists.length > 0 ? (
        <ul>
            {lists.map((list) => {
                return <ListItem key={Math.random()} list={list} />;
            })}
        </ul>
    ) : (
        <div className="style-wrapper-no-review">
            <div className="txt-no-review">😭</div>
            <p>목록이 없어요.</p>
        </div>
    );
}
