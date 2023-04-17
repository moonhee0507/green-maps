import React from 'react';
import arrow from '/images/icon-arrow.svg';

export { ButtonGoBack };

function ButtonGoBack() {
    function goBack() {
        window.history.back();
    }

    return (
        <button className="button-back" onClick={goBack}>
            <img src={arrow} alt="뒤로가기" />
        </button>
    );
}
