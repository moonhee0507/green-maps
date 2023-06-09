import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { SignupMain } from './SignupMain/SignupMain';
import { navigate } from 'vite-plugin-ssr/client/router';
import type { PageContext } from '../../renderer/types';
import { API_URL } from '../../renderer/CONSTANT_URL';

export { Page };

function Page() {
    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/users`); // 로그인된 경우 리디렉션
            const data = await res.json();

            if (data.success) {
                alert('접근할 수 없는 페이지입니다.');
                navigate('/search');
            }
        })();
    }, []);

    return (
        <>
            <TopBar title="회원가입" />
            <SignupMain />
        </>
    );
}
