import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../renderer/store/hooks';
import { SET_GROUP_NAME } from '../../../../renderer/_reducers/_slices/myListSlice';

export { GroupNameInput };

function GroupNameInput() {
    const dispatch = useAppDispatch();
    const groupName = useAppSelector((state) => state.myListSlice.groupName);
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        if (groupName === '') {
            setInputValue('');
        }
    }, [groupName]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
        dispatch(SET_GROUP_NAME(event.target.value));
    }
    return (
        <>
            <label htmlFor="groupName" className="sr-only">
                그룹명
            </label>
            <input
                type="text"
                id="groupName"
                placeholder="그룹명을 입력해 주세요."
                maxLength={20}
                minLength={1}
                onChange={handleChange}
                value={inputValue}
            />
        </>
    );
}
