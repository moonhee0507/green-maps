import React, { useRef, useState } from 'react';
import { validatePassword } from '../../../components/validate/regex';

export { PasswordStage };

function PasswordStage({ move, setMove }: { move: number; setMove: React.Dispatch<React.SetStateAction<number>> }) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');

    const handlePrev = () => {
        setMove((prev) => prev + 100);
    };

    const handleNext = () => {
        const element = passwordInput.current;

        // 정규식 검사
        if (element !== null) {
            if (validatePassword(element.value) === true) {
                setMessage('');
                setMove((prev) => prev - 100);
            } else {
                setMessage('영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)하여 입력해주세요.');
            }
        }
    };

    return (
        <section className="signup-password-stage" style={move !== -300 ? { visibility: 'hidden' } : {}}>
            <h3 className="sr-only">비밀번호 입력</h3>
            <label htmlFor="signupPassword">비밀번호</label>
            <input
                type="password"
                id="signupPassword"
                ref={passwordInput}
                placeholder="영문, 숫자, 특수문자(!@#$%^&*-+_=?) 모두 조합(8자리 이상)"
                minLength={8}
                maxLength={32}
            />
            <em className="txt-signup-message">{message}</em>
            <div className="button-group-move">
                <button type="button" onClick={handlePrev} aria-label="이전 화면으로 이동">
                    닉네임
                </button>
                <button type="button" onClick={handleNext} aria-label="다음 화면으로 이동">
                    비밀번호 재입력
                </button>
            </div>
        </section>
    );
}
