import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../renderer/store/hooks';

/**
 * /search 업종필터 버튼, /search/keyword에서 사용
 */

const CategoryItem = React.forwardRef<HTMLInputElement, { name: string; index: number }>(function CategoryItem(
    { name, index }: { name: string; index: number },
    ref: React.ForwardedRef<HTMLInputElement>
) {
    const selectedCategory = useAppSelector((state) => state.mapSlice.selectedCategory);
    const [isChecked, setIsChecked] = useState(selectedCategory.includes(name) || selectedCategory === '*');

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
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

export default CategoryItem;
