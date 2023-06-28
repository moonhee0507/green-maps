import React from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { LoginMain } from './LoginMain/LoginMain';
import { useCheckLoginStatus } from '../../renderer/_hooks/useCheckLoginStatus';

export const documentProps = {
    title: '로그인 | Green Maps',
    description: '채식 식당 지도 서비스 로그인',
};

export { Page };

function Page() {
    useCheckLoginStatus();

    return (
        <>
            <TopBar title={'로그인'} />
            <LoginMain />
        </>
    );
}
