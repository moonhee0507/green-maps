import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../renderer/store';

export default function ListButton() {
    const count = useSelector((state: RootState) => state.mapSlice.COUNT);

    return (
        <button className="button-count" type="button">
            검색된 식당 <span>{count}</span>개
        </button>
    );
}
