import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { ADD_SELECTED_CATEGORY } from '../../../../renderer/_reducers/_slices/mapSlice';
import { CloseButton } from './CloseButton';
import { SubmitButton } from './SubmitButton';
import CATEGORIES from '../../../../components/image/CATEGORY';

export { CategoryFilterModal };

function CategoryFilterModal() {
    const dispatch = useAppDispatch();

    const [show, setShow] = useState(false);
    const categoryFilterModalOn = useAppSelector((state) => state.mapSlice.categoryFilterModalOn);

    const [categoryList, _] = useState<string[]>(() => {
        const tempList = Object.keys(CATEGORIES).filter((key) => key !== '기타'); // [일식, ... ]

        dispatch(ADD_SELECTED_CATEGORY([...tempList].sort()));

        return [...tempList].sort(); // 체크박스 렌더링용
    });

    useEffect(() => {
        if (categoryFilterModalOn === true) setShow(true);
        else setShow(false);
    }, [categoryFilterModalOn]);

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
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>업종 필터</h4>
            <form>
                <div className="container-button-all-in-modal">
                    <button type="button" onClick={handleUncheck} className="button-all-category">
                        전체 해제
                    </button>
                    <button type="reset" className="button-all-category">
                        전체 선택
                    </button>
                </div>
                <div className="wrapper-checkbox-category">
                    {categoryList.map((name, i) => {
                        return <CategoryItem key={Math.random()} name={name} index={i} ref={checkboxRefs.current[i]} />;
                    })}
                </div>
                <SubmitButton />
            </form>
            <CloseButton />
        </article>
    );
}

// 검색결과에서 재사용
export const CategoryItem = React.forwardRef<HTMLInputElement, { name: string; index: number }>(function CategoryItem(
    { name, index }: { name: string; index: number },
    ref: React.ForwardedRef<HTMLInputElement>
) {
    const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
    const [isChecked, setIsChecked] = useState(true);

    console.log('selectedCategory', selectedCategory)

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        // 카테고리 선택 완료한 경우 체크상태 기억
        if (selectedCategory === '*') {
            setIsChecked(true);
        } else {
            setIsChecked(selectedCategory.includes(name));
        }
    }, [selectedCategory]);

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                id={`checkboxCategory-${index}`}
                className="checkbox-category-filter"
                value={name}
                ref={ref}
            />
            <label htmlFor={`checkboxCategory-${index}`}>{name}</label>
        </div>
    );
});
