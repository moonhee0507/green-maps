import React from 'react';
import { useAppSelector } from '../../../renderer/store/hooks';

export { CountMessage };

function CountMessage() {
    const currentSido = useAppSelector((state) => state.mapSlice.currentSido);
    const currentSigungu = useAppSelector((state) => state.mapSlice.currentSigungu);
    const resultInRadius = useAppSelector((state) => state.mapSlice.resultInRadius);

    return resultInRadius.length > 0 ? (
        <p className="txt-result-in-radius">
            내 위치({`${currentSido} ${currentSigungu}`})에 검색된 식당 <span>{resultInRadius.length}</span>개
        </p>
    ) : (
        <p className="txt-result-in-radius">
            결과가 없어요!😥
            <br />
            가장 가까운 식당 TOP 5
        </p>
    );
}
