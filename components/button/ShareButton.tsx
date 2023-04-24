import React from 'react';
import imgShare from '/images/icon-share.svg';

export { ShareButton };

function ShareButton() {
    return (
        <button className="button-share" onClick={() => console.log('공유하기')} type="button">
            <img src={imgShare} alt="공유하기 이미지" className="img-share" />
            <span className="txt-share">공유하기</span>
        </button>
    );
}
