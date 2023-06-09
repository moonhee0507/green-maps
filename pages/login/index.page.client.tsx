import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { LoginMain } from './LoginMain/LoginMain';
import { API_URL } from '../../renderer/CONSTANT_URL';
import { navigate } from 'vite-plugin-ssr/client/router';

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
            <TopBar title={'로그인'} />
            <LoginMain />
        </>
    );
}
