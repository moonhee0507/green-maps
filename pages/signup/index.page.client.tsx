import React, { ChangeEvent, useEffect } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { API_URL } from '../API_URL/api';
import { SignupMain } from './SignupMain/SignupMain';

export { Page };

function Page() {
    // 로그인 유저는 홈화면으로 리디렉션
    useEffect(() => {
        checkTokenInBrowser().then((data) => {
            if (data.success === true) {
                alert('로그인 사용자는 접근할 수 없습니다. \n홈 화면으로 돌아갑니다.');
                window.location.href = '/';
            }
        });
        async function checkTokenInBrowser() {
            try {
                const res = await fetch(`${API_URL}/users`);
                const data = await res.json();
                return data; // { success: boolean, user: UserInfo }
            } catch (err) {
                console.error(err);
            }
        }
    }, []);

    return (
        <>
            <TopBar title="회원가입" />
            <SignupMain />
        </>
    );
}
