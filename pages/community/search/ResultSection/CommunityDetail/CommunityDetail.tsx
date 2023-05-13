import React from 'react';
import { SelectBoxGroup } from './SelectBoxGroup/SelectBoxGroup';
import type { PostProps } from '../../../Community';

export { CommunityDetail };

function CommunityDetail(props: { postInfo: PostProps }) {
    const { total } = props.postInfo;

    return (
        <div className="result-community-detail">
            <p className="txt-total-search">
                <span>{total || 0}건</span>
            </p>
            <SelectBoxGroup />
        </div>
    );
}
