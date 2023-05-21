import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { LoginMain } from './LoginMain/LoginMain';
import type { PageContext } from '../../renderer/types';

export { Page };

function Page(pageContext: PageContext) {
    const { isLoggedIn } = pageContext.user;

    useEffect(() => {
        if (isLoggedIn === true) {
            alert('홈 화면으로 이동합니다.');
            window.location.href = '/';
        }
    }, []);

    return (
        <>
            <TopBar title={'로그인'} />
            <LoginMain />
        </>
    );
}
