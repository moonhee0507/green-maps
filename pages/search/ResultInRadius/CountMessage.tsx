import React from 'react';
import { useAppSelector } from '../../../renderer/store/hooks';

export { CountMessage };

function CountMessage() {
    const resultInRadius = useAppSelector((state) => state.mapSlice.resultInRadius);

    return resultInRadius.length > 0 ? (
        <p className="txt-result-in-radius">
            검색된 식당 <span>{resultInRadius.length}</span>개
        </p>
    ) : (
        <p className="txt-result-in-radius">가장 가까운 식당 TOP 3</p>
    );
}
