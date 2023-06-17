import React from 'react';
import { useAppSelector } from '../../renderer/store/hooks';

export { ButtonGoBack };

function ButtonGoBack() {
    const isLoggingIn = useAppSelector((state) => state.loginSlice.isLoggingIn); // 로그인 중에는 톱바의 뒤로가기 비활성화
    const isSigningUp = useAppSelector((state) => state.signupSlice.isSigningUp);

    function goBack() {
        if (window.location.pathname.includes('/community/search/')) {
            window.location.href = '/community';
        } else {
            window.history.back();
        }
    }

    return (
        <button
            className="button-back"
            onClick={goBack}
            aria-label="뒤로가기"
            style={isLoggingIn || isSigningUp ? { visibility: 'hidden' } : {}}
        />
    );
}
