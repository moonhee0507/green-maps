import React from 'react';
import { ListItem } from './ListItem';
import type { Like } from '../../../../../server/models/User';
import type { Restaurant } from '../../../../../server/models/Restaurant';

export { List };

function List({ likeList }: { likeList: Like[] }) {
    return (
        <div>
            {likeList.length > 0 ? (
                likeList.map((list) => {
                    return <ListItem key={Math.random()} list={list._id as Restaurant} />;
                })
            ) : (
                <div className="style-wrapper-no-review">
                    <div className="txt-no-review">😭</div>
                    <p>목록이 없어요.</p>
                </div>
            )}
        </div>
    );
}
