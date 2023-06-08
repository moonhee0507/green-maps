import React from 'react';
import { useAppDispatch } from '../../renderer/store/hooks';
import { moveToCurrentLocation } from '../../pages/search/kakaoApi';
import { SHOW_LIST_IN_REGION_MODAL } from '../../renderer/_reducers/_slices/mapSlice';

export { BackCurrentLocation };

function BackCurrentLocation() {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        moveToCurrentLocation();
        // 지역탐색 결과 모달 끄기
        dispatch(SHOW_LIST_IN_REGION_MODAL(false));
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="button-move-to-my"
            title="내 위치로"
            aria-label="내 위치로 이동 버튼"
        />
    );
}
