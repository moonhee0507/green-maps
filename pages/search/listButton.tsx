import React from 'react';
import store from '../../renderer/store';
import { useSelector } from 'react-redux';

export default function ListButton() {
    const count = useSelector(() => store.getState().map.COUNT);

    return (
        <button className="button-count" type="button">
            검색된 식당 <span>{count}</span>개
        </button>
    );
}
