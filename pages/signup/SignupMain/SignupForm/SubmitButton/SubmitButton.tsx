import React from 'react';
import { API_URL } from '../../../../../renderer/CONSTANT_URL';

export function SubmitButton() {
    async function submit() {
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
                const res = await fetch(`${API_URL}/users/signup`, {
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
                    console.error(data.errorMessage);
                }
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <button type="button" onClick={submit}>
            가입하기
        </button>
    );
}
