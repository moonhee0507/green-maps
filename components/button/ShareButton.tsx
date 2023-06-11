import React from 'react';
import imgShare from '/images/icon-share.svg';

export { ShareButton };

function ShareButton() {
    const handleClick = () => {
        alert('준비 중인 서비스입니다.');
    };

    return (
        <button className="button-share" onClick={handleClick} type="button">
            <img src={imgShare} alt="공유하기 이미지" className="img-share" />
            <span className="txt-share">공유하기</span>
        </button>
    );
}
