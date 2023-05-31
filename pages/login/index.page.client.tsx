import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { LoginMain } from './LoginMain/LoginMain';
import { API_URL } from '../API_URL/api';

export { Page };

function Page() {
    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/users`);
            const data = await res.json();

            if (data.success) {
                alert('홈 화면으로 이동합니다.');
                window.location.href = '/';
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
