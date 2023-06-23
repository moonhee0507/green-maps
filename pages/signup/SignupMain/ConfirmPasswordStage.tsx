import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { SIGNING_UP } from '../../../renderer/_reducers/_slices/signupSlice';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import { navigate } from 'vite-plugin-ssr/client/router';

export { ConfirmPasswordStage };

function ConfirmPasswordStage({
    move,
    setMove,
}: {
    move: number;
    setMove: React.Dispatch<React.SetStateAction<number>>;
}) {
    const dispatch = useAppDispatch();

    const confirmPassword = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');

    const handlePrev = () => {
        setMove((prev) => prev + 100);
    };

    const handleClick = () => {
        const password = (document.getElementById('signupPassword') as HTMLInputElement).value;

        // 비밀번호와 같은지 확인
        const element = confirmPassword.current;
        if (element !== null) {
            if (element.value === password) {
                setMessage('');

                // 톱바 뒤로가기 보여주기
                dispatch(SIGNING_UP(false));
                // 회원가입 통신
                signup();
            } else {
                setMessage('비밀번호가 일치하지 않습니다.');
            }
        }
    };

    async function signup() {
        try {
            const userId = (document.getElementById('signupId') as HTMLInputElement).value;
            const password = (document.getElementById('signupPassword') as HTMLInputElement).value;
            const nickName = (document.getElementById('signupNickName') as HTMLInputElement).value;

            const body = {
                userId: userId,
                password: password,
                nickName: nickName,
            };

            const res = await fetch(`${API_URL}/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (data.success) {
                alert('🎉 회원가입에 성공했습니다');
                navigate('/login');
            } else {
                alert('회원가입에 실패했습니다');
                console.error(data.errorMessage);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <section className="signup-confirm-password-stage" style={move !== -400 ? { visibility: 'hidden' } : {}}>
            <h3 className="sr-only">비밀번호 재입력</h3>
            <label htmlFor="signupConfirmPassword">비밀번호 재입력</label>
            <input
                type="password"
                id="signupConfirmPassword"
                ref={confirmPassword}
                placeholder="비밀번호 재입력"
                minLength={8}
                maxLength={32}
                aria-describedby="desc-signup-confirm-password"
            />
            <em className="txt-signup-message" id="desc-signup-confirm-password">
                {message}
            </em>
            <div className="button-group-move">
                <button type="button" onClick={handlePrev} aria-label="이전 화면으로 이동">
                    비밀번호
                </button>
                <button type="button" onClick={handleClick} aria-label="다음 화면으로 이동">
                    완료
                </button>
            </div>
        </section>
    );
}
