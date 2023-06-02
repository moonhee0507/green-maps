import React, { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { PASS_CURRENT_PASSWORD } from '../../../../renderer/_reducers/_slices/profileSlice';
import { API_URL } from '../../../CONSTANT_URL';

export { CurrentPassword };

function CurrentPassword() {
    const dispatch = useAppDispatch();

    const userId = useAppSelector((state) => state.profileSlice.userId);
    const inputElement = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        setValue(target.value);
    };

    const handleClick = async () => {
        const res = await fetch(`${API_URL}/users/check-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: value }),
        });

        const data = await res.json();

        console.log(data);
        if (data.success) {
            dispatch(PASS_CURRENT_PASSWORD(true));
        } else {
            dispatch(PASS_CURRENT_PASSWORD(false));
        }
    };

    return (
        <>
            <form onSubmit={(event: React.FormEvent) => event.preventDefault()} className="form-current-password">
                <p className="txt-notice">그린맵 계정의 현재 비밀번호를 확인해주세요.</p>
                <label htmlFor="readOnlyUserId" className="sr-only">
                    아이디
                </label>
                <input
                    type="text"
                    id="readOnlyUserId"
                    readOnly={true}
                    defaultValue={userId}
                    className="input-userid-in-profile"
                />
                <label htmlFor="prevPassword" className="sr-only">
                    현재 비밀번호
                </label>
                <input type="password" id="prevPassword" onChange={handleChange} ref={inputElement} value={value} />
            </form>
            <button type="button" onClick={handleClick} className="styled-button thin">
                완료
            </button>
        </>
    );
}
