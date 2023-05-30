import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { EDIT_NICKNAME } from '../../../../renderer/_reducers/_slices/profileSlice';

export { NickNameForm };

function NickNameForm() {
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState<string>('');
    const prevNickName = useAppSelector((state) => state.profileSlice.prevNickName);

    useEffect(() => {
        setInputValue(prevNickName);
    }, [prevNickName]);

    const handleChange = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        setInputValue(target.value);
        dispatch(EDIT_NICKNAME(target.value));
    };

    return (
        <form
            className="form-edit-nickName"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
            }}
        >
            <p className="num-count-nickName">
                <span>{inputValue.length}</span>/<span>17</span>
            </p>
            <label htmlFor="editNickNameInput" className="sr-only">
                닉네임
            </label>
            <input
                type="text"
                id="editNickNameInput"
                onChange={handleChange}
                value={inputValue}
                minLength={1}
                maxLength={17}
            />
        </form>
    );
}
