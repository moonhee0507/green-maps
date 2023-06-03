import React from 'react';
import { useAppSelector } from '../../../renderer/store/hooks';

export { CountMessage };

function CountMessage() {
    const resultInRadius = useAppSelector((state) => state.mapSlice.resultInRadius);

    return (
        <p className="txt-result-in-radius">
            검색된 식당 <span>{resultInRadius.length}</span>개
        </p>
    );
}
