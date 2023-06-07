import React from 'react';
import {
    ADD_SELECTED_CATEGORY,
    CATEGORY_FILTER_MODAL,
    SHOW_LIST_IN_REGION_MODAL,
} from '../../../../renderer/_reducers/_slices/mapSlice';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';

export function SubmitButton() {
    const dispatch = useAppDispatch();

    const mapMode = useAppSelector((state) => state.mapSlice.mapMode);

    const handleClick = () => {
        // 체크한 업종에 대한 필터 진행.
        // 체크한 업종 리스트
        const checkedNode = Array.from(
            document.querySelectorAll('.checkbox-category-filter') as NodeList
        ) as HTMLInputElement[];

        const totalCategoryCount: number = checkedNode.length; // 13
        const checkedCategoryName: string[] = checkedNode
            .filter((node) => node.checked === true)
            .map((node) => node.value);

        if (checkedCategoryName.length === 0) {
            alert('업종을 선택해주세요.');
            return;
        }

        if (totalCategoryCount === checkedCategoryName.length) {
            // 전체 카테고리
            dispatch(ADD_SELECTED_CATEGORY('*'));
        } else {
            // 스토어에 저장하고 루트 데이터에서 이 상태를 구독하게 만들기
            dispatch(ADD_SELECTED_CATEGORY(checkedCategoryName));
        }

        // 지역탐색 모드이면 지역탐색 결과에 대한 필터 진행
        if (mapMode === '지역탐색 모드') {
            // 업종 필터 모달 끄기
            dispatch(CATEGORY_FILTER_MODAL(false));

            // show 지역리스트 모달 켜기
            dispatch(SHOW_LIST_IN_REGION_MODAL(true));
        } else if (mapMode === '반경탐색 모드') {
            // 업종 필터 모달 끄기
            dispatch(CATEGORY_FILTER_MODAL(false));

            // 스와이프에서 보여주기
        }

        // 검색 모드이면 ...?
    };

    return (
        <button type="button" onClick={handleClick}>
            적용하기
        </button>
    );
}
