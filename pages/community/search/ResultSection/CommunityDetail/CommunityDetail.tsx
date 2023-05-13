import React from 'react';
import type { PostProps } from '../../../Community';
import { SelectBoxGroup } from './SelectBoxGroup/SelectBoxGroup';

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
