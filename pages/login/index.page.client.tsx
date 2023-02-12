import React, { ChangeEvent } from 'react';

export { Page };

function Page() {
    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const userId = (document.getElementById('userId') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        const body = {
            userId: userId,
            password: password,
        };
        try {
            const res = await fetch(`http://localhost:3000/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (data.success) {
                alert('로그인에 성공했습니다');
            } else {
                alert('로그인에 실패했습니다');
                console.log(data.errorMessage);
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
            <h1>로그인</h1>
            <form onSubmit={submit}>
                <label htmlFor="userId">아이디</label>
                <input id="userId" type="text" onChange={handleChange} />

                <label htmlFor="password">비밀번호</label>
                <input id="password" type="password" onChange={handleChange} />

                <button type="submit">로그인</button>
            </form>
        </>
    );
}
