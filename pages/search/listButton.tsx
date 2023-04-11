import React from 'react';
import { count } from './kakaoMapAPI';

export default function ListButton() {
    // TODO: 검색된 식당 개수 보여주기
    return (
        <button className="button-count" type="button">
            검색된 식당 <span>{count}</span>개
        </button>
    );
}
