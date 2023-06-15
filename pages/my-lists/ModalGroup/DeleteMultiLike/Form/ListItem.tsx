import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../renderer/store/hooks';
import {
    DECREASE_CHECKED,
    DELETE_RESTAURANT_LIST,
    INCREASE_CHECKED,
    PUSH_RESTAURANT_LIST,
} from '../../../../../renderer/_reducers/_slices/myListSlice';
import type { Restaurant } from '../../../../../server/models/Restaurant';

export { ListItem };

function ListItem({ list }: { list: Restaurant }) {
    const dispatch = useAppDispatch();

    const { _id, title, address, category } = list;
    const [isChecked, setIsChecked] = useState(false);
    const restaurantToDelete = useAppSelector((state) => state.myListSlice.restaurantToMove);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);

        if (event.target.checked) {
            dispatch(INCREASE_CHECKED(1));
            dispatch(PUSH_RESTAURANT_LIST([...restaurantToDelete, _id]));
        } else {
            dispatch(DECREASE_CHECKED(1));
            const newArray = [...restaurantToDelete];
            const index = newArray.indexOf(_id);
            newArray.splice(index, 1);
            dispatch(DELETE_RESTAURANT_LIST(newArray));
        }
    };

    return (
        <label className="label-bookmarklist">
            <input
                type="checkbox"
                className="checkbox-bookmarklist"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div className="wrapper-bookmarklist-edit">
                <dl>
                    <dl className="container-title-category">
                        <dt className="sr-only">식당 이름</dt>
                        <dd className="txt-title">{title}</dd>
                        <dt className="sr-only">업종</dt>
                        <dd className="txt-category">{category}</dd>
                    </dl>
                    <dl>
                        <dt className="sr-only">주소</dt>
                        <dd className="txt-address">{address}</dd>
                    </dl>
                </dl>
            </div>
        </label>
    );
}
