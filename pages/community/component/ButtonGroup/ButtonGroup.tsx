import React from 'react';

export { ButtonGroup };

function ButtonGroup({ isLoggedIn }: { isLoggedIn: boolean }) {
    function goToWrite() {
        if (isLoggedIn) {
            window.location.href = `/community/create`;
        } else {
            if (confirm('로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?')) {
                window.location.href = `/login`;
            }
        }
    }

    return (
        <button type="button" className="link-create" onClick={goToWrite}>
            글쓰기
        </button>
    );
}
