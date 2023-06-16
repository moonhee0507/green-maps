import React from 'react';
import imgLoading from '/images/spinner.gif';

// app에 다는 로딩

export default function Loading() {
    return (
        <img
            src={imgLoading}
            alt="좌표 생성 로딩"
            style={{ width: '50px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            id="__LOADING__"
        />
    );
}
