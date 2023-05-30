import React from 'react';
import { navigate } from 'vite-plugin-ssr/client/router';

export { ReviewButton };

function ReviewButton({ restaurantId, isLoggedIn }: { restaurantId: string; isLoggedIn: boolean }) {
    function handleClick() {
        if (isLoggedIn) {
            navigate(`/search/${restaurantId}/review/`);
        } else {
            if (confirm('로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?')) {
                navigate('/login');
            }
        }
    }

    return (
        <div className="style-container-write-review">
            <button type="button" onClick={handleClick} className="styled-button">
                리뷰 작성하기
            </button>
        </div>
    );
}
