import React, { useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { SignupMain } from './SignupMain/SignupMain';
import { API_URL } from '../../renderer/CONSTANT_URL';

export const documentProps = {
    title: '회원가입 | Green Maps',
    description: '그린맵 회원가입 페이지',
};

export { Page };

function Page() {
    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_URL}/users`); // 로그인된 경우 리디렉션
            const data = await res.json();

            if (data.success) {
                alert('접근할 수 없는 페이지입니다.');
                window.location.href = '/search';
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
