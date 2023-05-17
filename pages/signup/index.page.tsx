import React, { ChangeEvent } from 'react';
import { TopBar } from '../../components/topBar/topBar';

export { Page };

function Page() {
    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const userId = (document.getElementById('userId') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const password2 = (document.getElementById('password2') as HTMLInputElement).value;
        const nickName = (document.getElementById('nickName') as HTMLInputElement).value;

        const body = {
            userId: userId,
            password: password,
            nickName: nickName,
        };
        try {
            if (password !== password2) {
                return alert('비밀번호가 일치하지 않습니다');
            } else {
                const res = await fetch(`http://localhost:5000/api/users/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });

                const data = await res.json();

                if (data.success) {
                    alert('회원가입에 성공했습니다');
                } else {
                    alert('회원가입에 실패했습니다');
                    console.log(data.errorMessage);
                }
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
            <TopBar title="회원가입" />
            <main className="wrapper-signup-content">
                <form onSubmit={submit}>
                    <label htmlFor="userId">아이디</label>
                    <input id="userId" type="text" onChange={handleChange} />

                    <label htmlFor="password">비밀번호</label>
                    <input id="password" type="password" onChange={handleChange} />

                    <label htmlFor="password2">비밀번호 확인</label>
                    <input id="password2" type="password" onChange={handleChange} />

                    <label htmlFor="nickName">닉네임</label>
                    <input id="nickName" type="text" onChange={handleChange} />

                    <button type="submit">가입하기</button>
                </form>
            </main>
        </>
    );
}
