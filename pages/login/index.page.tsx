import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { LoginMain } from './LoginMain/LoginMain';
import { navigate } from 'vite-plugin-ssr/client/router';
import { PageContext } from '../../renderer/types';

export { Page };

function Page(pageContext: PageContext) {
    useEffect(() => {
        if (pageContext.user.isLoggedIn) {
            alert('접근할 수 없는 페이지입니다.');
            navigate('/search');
        }
    }, []);

    return (
        <>
            <TopBar title={'로그인'} />
            <LoginMain />
        </>
    );
}
