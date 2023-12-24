import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../../../../renderer/store/hooks';
import { ADD_SELECTED_CATEGORY } from '../../../../../../renderer/_reducers/_slices/mapSlice';
import { userCategory } from '../../../../ModalGroup/CategoryFilterModal/CategoryFilterModal';
import { ApplyButton } from './ApplyButton';
import { CheckAllButton, UncheckAllButton } from '../../../../../../components/button/CheckboxHandlerButton';
import CategoryItem from '../../../../../../components/checkbox/CategoryItem';

export { CategoryFilter };

function CategoryFilter() {
    const dispatch = useAppDispatch();
    const checkboxRefs = useRef<Array<React.RefObject<HTMLInputElement>>>([]);

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
        <div className="container-filter">
            <em className="txt-filter-name">업종</em>
            <div>
                <form>
                    <ApplyButton />
                    <div className="container-button-all">
                        <UncheckAllButton handler={() => handleAllCheckbox({ on: false })} />
                        <CheckAllButton handler={() => handleAllCheckbox({ on: true })} />
                    </div>
                    <div className="wrapper-checkbox-category reuse-in-result">
                        {userCategory.map((name, i) => {
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
