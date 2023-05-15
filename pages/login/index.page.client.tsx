import React, { ChangeEvent, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';

export { Page };

function Page() {
    const [checked, setChecked] = useState<boolean>(false);

    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const userId = (document.getElementById('userId') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const keepLogin = checked;

        const body = {
            userId: userId,
            password: password,
            keepLogin: keepLogin,
        };

        try {
            const res = await fetch(`http://localhost:5000/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (data.success) {
                alert('로그인에 성공했습니다');

                const userObj = {
                    host: data.user.host,
                    nickName: data.user.nickName,
                    role: data.user.role,
                    userId: data.user.userId,
                };

                window.localStorage.setItem('gu', JSON.stringify(userObj));
                window.history.go(-1); // 뒤로 가기
            } else {
                alert('로그인에 실패했습니다');
            }
        } catch (err) {
            console.error(err);
        }
    }

    function handleChange(event: ChangeEvent<{ value: string }>): string {
        return event.currentTarget.value;
    }

    return (
        <>
            <TopBar title={'로그인'} />
            <main className="wrapper-login-content">
                <form onSubmit={submit}>
                    <label htmlFor="userId">아이디</label>
                    <input id="userId" type="text" onChange={handleChange} />

                    <br />

                    <label htmlFor="password">비밀번호</label>
                    <input id="password" type="password" onChange={handleChange} />

                    <br />

                    <label htmlFor="keepLogin">로그인 유지하기</label>
                    <input
                        type="checkbox"
                        id="keepLogin"
                        value="keepLogin"
                        onClick={() => (checked ? setChecked(false) : setChecked(true))}
                    />

                    <br />

                    <button type="submit">로그인</button>
                </form>
            </main>
        </>
    );
}
