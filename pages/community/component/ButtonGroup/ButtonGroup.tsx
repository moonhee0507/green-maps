import React from 'react';
import { navigate } from 'vite-plugin-ssr/client/router';

export { ButtonGroup };

function ButtonGroup({ isLoggedIn }: { isLoggedIn: boolean }) {
    function goToWrite() {
        if (isLoggedIn) {
            navigate(`/community/create`);
        } else {
            if (confirm('로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?')) {
                navigate('/login');
            }
        }
    }

    return (
        <div className="container-button-create-refresh">
            <button type="button" className="link-create" onClick={goToWrite}>
                글쓰기
            </button>
            <button type="button" className="button-refresh" onClick={() => location.reload()}>
                새로고침
            </button>
        </div>
    );
}
