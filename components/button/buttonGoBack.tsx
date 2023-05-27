import React from 'react';
import imgArrow from '/images/icon-arrow.svg';

export { ButtonGoBack };

function ButtonGoBack() {
    function goBack() {
        window.history.back();
    }

    return (
        <button className="button-back" onClick={goBack}>
            <img src={imgArrow} alt="뒤로가기" />
        </button>
    );
}
