import React from 'react';
import { SelectBoxGroup } from './SelectBoxGroup/SelectBoxGroup';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../renderer/store';

export { CommunityDetail };

function CommunityDetail() {
    const total = useSelector((state: RootState) => state.postSlice.post.TOTAL);

    return (
        <div className="result-community-detail">
            <p className="txt-total-search">
                <span>{total || 0}건</span>
            </p>
            <SelectBoxGroup />
        </div>
    );
}
