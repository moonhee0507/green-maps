import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { SIGNING_UP } from '../../../renderer/_reducers/_slices/signupSlice';
import { validateId } from '../../../components/validate/regex';
import { API_URL } from '../../../renderer/CONSTANT_URL';

export { IdStage };

function IdStage({ move, setMove }: { move: number; setMove: React.Dispatch<React.SetStateAction<number>> }) {
    const dispatch = useAppDispatch();

    const idInput = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');

    const handlePrev = () => {
        setMove((prev) => prev + 100);
        dispatch(SIGNING_UP(false));
    };

    const handleNext = () => {
        const element = idInput.current;

        // 정규식 검사
        if (element !== null) {
            if (validateId(element.value) === true) {
                checkDuplicate(element.value);
            } else {
                setMessage('영문, 숫자 20자 이내의 아이디를 입력해주세요.');
            }
        }
    };

    // 중복검사
    async function checkDuplicate(id: string) {
        const res = await fetch(`${API_URL}/users/check-userId?userId=${id}`);
        const data = (await res.json()) as { duplicated: boolean; errorMessage?: string };

        if (data.duplicated === false) {
            setMessage('');
            setMove((prev) => prev - 100);
        } else {
            setMessage('이미 존재하는 아이디입니다.');
        }
    }

    return (
        <section className="signup-id-stage" style={move !== -100 ? { visibility: 'hidden' } : {}}>
            <h3 className="sr-only">아이디 입력</h3>
            <label htmlFor="signupId">아이디</label>
            <input
                type="text"
                id="signupId"
                placeholder="영문, 숫자 6~20자 이내"
                ref={idInput}
                minLength={6}
                maxLength={20}
            />
            <em className="txt-signup-message">{message}</em>
            <div className="button-group-move">
                <button type="button" onClick={handlePrev} aria-label="이전 화면으로 이동">
                    첫 화면
                </button>
                <button type="button" onClick={handleNext} aria-label="다음 화면으로 이동">
                    닉네임
                </button>
            </div>
        </section>
    );
}
