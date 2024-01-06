import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { ADD_SELECTED_CATEGORY } from '../../../../renderer/_reducers/_slices/mapSlice';
import { CloseButton } from './CloseButton';
import { SubmitButton } from './SubmitButton';
import { CheckAllButton, UncheckAllButton } from '../../../../components/button/CheckboxHandlerButton';
import CATEGORIES from '../../../../components/image/CATEGORY';
import CategoryItem from '../../../../components/checkbox/CategoryItem';

export { CategoryFilterModal };

export const userCategory = Object.keys(CATEGORIES)
    .filter((key) => key !== '기타')
    .sort();

function CategoryFilterModal() {
    const dispatch = useAppDispatch();
    const checkboxRefs = useRef<Array<React.RefObject<HTMLInputElement>>>([]);

    const [show, setShow] = useState(false);
    const categoryFilterModalOn = useAppSelector((state) => state.mapSlice.categoryFilterModalOn);

    useEffect(() => {
        if (categoryFilterModalOn === true) setShow(true);
        else setShow(false);
    }, [categoryFilterModalOn]);

    useEffect(() => {
        dispatch(ADD_SELECTED_CATEGORY('*'));

        checkboxRefs.current = Array(userCategory.length)
            .fill(null)
            .map(() => React.createRef<HTMLInputElement>());
    }, []);

    const handleAllCheckbox = ({ on }: { on: boolean }) => {
        if (on) {
            checkboxRefs.current.map((ref) => {
                if (ref.current) {
                    ref.current.checked = true;
                }
            });
        } else {
            checkboxRefs.current.map((ref) => {
                if (ref.current) {
                    ref.current.checked = false;
                }
            });
        }
    };

    return (
        <article className={`modal-group-item ${show ? 'on' : ''}`}>
            <h4>업종 필터</h4>
            <form>
                <div className="container-button-all-in-modal">
                    <UncheckAllButton
                        handler={() => handleAllCheckbox({ on: false })}
                        className="button-all-category"
                    />
                    <CheckAllButton handler={() => handleAllCheckbox({ on: true })} className="button-all-category" />
                </div>
                <div className="wrapper-checkbox-category">
                    {userCategory.map((name, i) => {
                        return <CategoryItem key={Math.random()} name={name} index={i} ref={checkboxRefs.current[i]} />;
                    })}
                </div>
                <SubmitButton />
            </form>
            <CloseButton />
        </article>
    );
}
