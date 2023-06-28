import React from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { SignupMain } from './SignupMain/SignupMain';
import { useCheckLoginStatus } from '../../renderer/_hooks/useCheckLoginStatus';

export const documentProps = {
    title: '회원가입 | Green Maps',
    description: '그린맵 회원가입 페이지',
};

export { Page };

function Page() {
    useCheckLoginStatus();

    return (
        <>
            <TopBar title="회원가입" />
            <SignupMain />
        </>
    );
}
