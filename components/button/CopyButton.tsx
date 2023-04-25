import React from 'react';
import imgCopy from '/images/icon-copy.svg';

export { CopyButton };

function CopyButton(props: { address: string }) {
    const copy = () => {
        window.navigator.clipboard.writeText(props.address);
        alert('복사되었습니다.');
    };
    return (
        <button type="button" onClick={copy}>
            <img src={imgCopy} alt="주소 복사 아이콘" className="img-copy" />
            <span style={{ fontSize: '13px' }}>복사</span>
        </button>
    );
}
