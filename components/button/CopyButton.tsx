import React from 'react';
import imgCopy from '/images/icon-copy.svg';

export { CopyButton };

function CopyButton() {
    return (
        <button>
            <img src={imgCopy} alt="주소 복사 아이콘" className="img-copy" />
            <span style={{ fontSize: '13px' }}>복사</span>
        </button>
    );
}
