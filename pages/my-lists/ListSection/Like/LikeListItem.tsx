import React from 'react';
import type { Like } from '../../../../server/models/User';

export { LikeListItem };

function LikeListItem({ list }: { list: Like }) {
    const { _id } = list;

    return (
        <li>
            <a href={`/search/${_id}`}>_id로 식당 찾아야됨</a>
        </li>
    );
}
