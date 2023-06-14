import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { LOGGING_IN } from '../../../renderer/_reducers/_slices/loginSlice';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import { navigate } from 'vite-plugin-ssr/client/router';

export { PasswordStage };

function PasswordStage({ setMove }: { setMove: React.Dispatch<React.SetStateAction<number>> }) {
    const dispatch = useAppDispatch();

    const [password, setPassword] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handlePrev = () => {
        setMove((prev) => prev + 100);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleClick = () => {
        // 톱바의 뒤로가기 보여줘도 됨
        dispatch(LOGGING_IN(false));

        // 로그인 통신
        login();
    };

    async function login() {
        try {
            const userId = document.getElementById('loginId') as HTMLInputElement;

            const body = {
                userId: userId.value,
                password: password,
                keepLogin: isChecked,
            };

            const res = await fetch(`${API_URL}/users/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                mode: 'no-cors',
            });

            const data = await res.json();

            if (data.success) {
                navigate('/search');
            } else {
                alert('로그인에 실패했습니다');
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <section className="login-password-stage">
            <h3 className="sr-only">비밀번호 입력</h3>

            <label htmlFor="loginPassword">비밀번호</label>
            <input type="password" id="loginPassword" onChange={handlePasswordChange} />

            <label htmlFor="loginPersist">로그인 유지</label>
            <input type="checkbox" id="loginPersist" onChange={handleCheckChange} />

            <div className="button-group-move">
                <button type="button" onClick={handlePrev} aria-label="이전 화면으로 이동">
                    아이디
                </button>
                <button type="button" onClick={handleClick} aria-label="다음 화면으로 이동">
                    로그인
                </button>
            </div>
        </section>
    );
}
