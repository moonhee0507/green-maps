import React, { useEffect, useState } from 'react';
import type { Bookmark } from '../../../../../server/models/User';
import { useAppDispatch } from '../../../../../renderer/store/hooks';
import { INCREASE_CHECKED, DECREASE_CHECKED } from '../../../../../renderer/_reducers/_slices/myListSlice';

export { List };

function List({ bookmarkList }: { bookmarkList: Bookmark[] }) {
    return (
        <div>
            {bookmarkList.length > 0 ? (
                bookmarkList.map((list) => {
                    return <ListItem key={Math.random()} list={list} />;
                })
            ) : (
                <div className="style-wrapper-no-review">
                    <div className="txt-no-review">😭</div>
                    <p>목록이 없어요.</p>
                </div>
            )}
        </div>
    );
}

function ListItem({ list }: { list: Bookmark }) {
    const dispatch = useAppDispatch();

    const { title, address, category } = list;
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        if (event.target.checked) {
            dispatch(INCREASE_CHECKED(1));
        } else {
            dispatch(DECREASE_CHECKED(1));
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
