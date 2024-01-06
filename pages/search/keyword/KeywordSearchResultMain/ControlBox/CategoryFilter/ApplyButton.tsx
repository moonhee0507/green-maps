import React from 'react';
import { useAppDispatch } from '../../../../../../renderer/store/hooks.js';
import { ADD_SELECTED_CATEGORY } from '../../../../../../renderer/_reducers/_slices/mapSlice.js';

export { ApplyButton };

function ApplyButton() {
    const dispatch = useAppDispatch();

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
    };

    return (
        <button type="button" onClick={handleClick} className="button-apply-filter">
            적용
        </button>
    );
}
