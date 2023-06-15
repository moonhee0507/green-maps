import React, { useState } from 'react';
import { useAppDispatch } from '../../../renderer/store/hooks';
import { LOGGING_IN, SET_ID } from '../../../renderer/_reducers/_slices/loginSlice';

export { IdStage };

function IdStage({ setMove }: { setMove: React.Dispatch<React.SetStateAction<number>> }) {
    const dispatch = useAppDispatch();
    const [id, setId] = useState('');

    const handlePrev = () => {
        setMove((prev) => prev + 100);
        dispatch(LOGGING_IN(false));
    };

    const handleNext = () => {
        setMove((prev) => prev - 100);
        dispatch(SET_ID(id));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    };

    return (
        <section className="login-id-stage">
            <h3 className="sr-only">아이디 입력</h3>
            <label htmlFor="loginId">아이디</label>
            <input type="text" id="loginId" onChange={handleChange} />
            <div className="button-group-move">
                <button type="button" onClick={handlePrev} aria-label="이전 화면으로 이동">
                    첫 화면
                </button>
                <button type="button" onClick={handleNext} aria-label="다음 화면으로 이동">
                    비밀번호
                </button>
            </div>
        </section>
    );
}
