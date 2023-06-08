import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../../../renderer/store/hooks';
import CATEGORIES from '../../../../../../components/image/CATEGORY';
import { ADD_SELECTED_CATEGORY } from '../../../../../../renderer/_reducers/_slices/mapSlice';
import { CategoryItem } from '../../../../ModalGroup/CategoryFilterModal/CategoryFilterModal';
import { ApplyButton } from './ApplyButton';

export { CategoryFilter };

function CategoryFilter() {
    const dispatch = useAppDispatch();

    const [categoryList, _] = useState<string[]>(() => {
        const tempList = Object.keys(CATEGORIES).filter((key) => key !== '기타'); // [일식, ... ]

        dispatch(ADD_SELECTED_CATEGORY([...tempList].sort()));

        return [...tempList].sort(); // 체크박스 렌더링용
    });

    const checkboxRefs = useRef<Array<React.RefObject<HTMLInputElement>>>([]);

    useEffect(() => {
        // current에 배열을 할당(ref 배열)
        checkboxRefs.current = Array(categoryList.length)
            .fill(null)
            .map(() => React.createRef<HTMLInputElement>());
    }, [categoryList]);

    const handleUncheck = () => {
        // current 배열을 순회하면서 check 끔
        checkboxRefs.current.map((ref) => {
            if (ref.current !== null) {
                ref.current.checked = false;
            }
        });
    };

    return (
        <div className="container-filter">
            <em className="txt-filter-name">업종</em>
            <div>
                <form>
                    <ApplyButton />
                    <div className="container-button-all">
                        <button type="button" onClick={handleUncheck}>
                            전체 해제
                        </button>
                        <button type="reset">전체 선택</button>
                    </div>
                    <div className="wrapper-checkbox-category reuse-in-result">
                        {categoryList.map((name, i) => {
                            return (
                                <CategoryItem key={Math.random()} name={name} index={i} ref={checkboxRefs.current[i]} />
                            );
                        })}
                    </div>
                </form>
            </div>
        </div>
    );
}
