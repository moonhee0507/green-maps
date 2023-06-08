import React from 'react';

export { ButtonGoBack };

function ButtonGoBack() {
    function goBack() {
        window.history.back();
    }

    return <button className="button-back" onClick={goBack} aria-label="뒤로가기" />;
}
