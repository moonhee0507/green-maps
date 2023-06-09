import React, { useRef, useState } from 'react';
import { validateNickName } from '../../../components/validate/regex';
import { API_URL } from '../../../renderer/CONSTANT_URL';

export { NickNameStage };

function NickNameStage({ move, setMove }: { move: number; setMove: React.Dispatch<React.SetStateAction<number>> }) {
    const nickNameInput = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');

    const handlePrev = () => {
        setMove((prev) => prev + 100);
    };

    const handleNext = () => {
        const element = nickNameInput.current;

        // 정규식 검사
        if (element !== null) {
            if (validateNickName(element.value) === true) {
                checkDuplicate(element.value);
            } else {
                setMessage('영문, 숫자, 한글 17자 이내의 닉네임을 입력해주세요.');
            }
        }
    };

    // 중복검사
    async function checkDuplicate(nickname: string) {
        const res = await fetch(`${API_URL}/users/check-nickname?nickname=${nickname}`);
        const data = (await res.json()) as { duplicated: boolean; errorMessage?: string };

        if (data.duplicated === false) {
            setMessage('');
            setMove((prev) => prev - 100);
        } else {
            setMessage('이미 존재하는 닉네임입니다.');
        }
    }

    return (
        <section className="signup-nickname-stage" style={move !== -200 ? { visibility: 'hidden' } : {}}>
            <h3 className="sr-only">닉네임 입력</h3>
            <label htmlFor="signupNickName">닉네임</label>
            <input
                type="text"
                id="signupNickName"
                ref={nickNameInput}
                placeholder="영문, 숫자, 한글 17자 이내"
                minLength={1}
                maxLength={17}
            />
            <em className="txt-signup-message">{message}</em>
            <div className="button-group-move">
                <button type="button" onClick={handlePrev} aria-label="이전 화면으로 이동">
                    아이디
                </button>
                <button type="button" onClick={handleNext} aria-label="다음 화면으로 이동">
                    비밀번호
                </button>
            </div>
        </section>
    );
}
