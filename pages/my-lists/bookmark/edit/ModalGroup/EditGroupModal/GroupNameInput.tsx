import React, { useEffect, useState } from 'react';
import { SET_GROUP_NAME } from '../../../../../../renderer/_reducers/_slices/myListSlice';
import { useAppDispatch, useAppSelector } from '../../../../../../renderer/store/hooks';

export { GroupNameInput };

function GroupNameInput() {
    const dispatch = useAppDispatch();
    const initialName = useAppSelector((state) => state.myListSlice.targetGroup);
    const groupName = useAppSelector((state) => state.myListSlice.groupName);
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        if (groupName === null) {
            setInputValue(initialName);
        }
        if (groupName === '') {
            setInputValue('');
        }
    }, [groupName, initialName]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
        dispatch(SET_GROUP_NAME(event.target.value));
    }
    return (
        <>
            <label htmlFor="groupNameForEdit" className="sr-only">
                그룹명
            </label>
            <input
                type="text"
                id="groupNameForEdit"
                placeholder="그룹명을 입력해 주세요."
                maxLength={20}
                minLength={1}
                onChange={handleChange}
                value={inputValue}
            />
        </>
    );
}
