import React from 'react';
import { LikeListItem } from './LikeListItem';
import type { Like } from '../../../../server/models/User';

export { LikeList };

function LikeList({ lists }: { lists: Like[] }) {
    console.log(lists);
    return lists && lists.length > 0 ? (
        <ul>
            {lists.map((list) => {
                return <LikeListItem key={Math.random()} list={list} />;
            })}
        </ul>
    ) : (
        <div className="style-wrapper-no-review">
            <div className="txt-no-review">😭</div>
            <p>목록이 없어요.</p>
        </div>
    );
}
