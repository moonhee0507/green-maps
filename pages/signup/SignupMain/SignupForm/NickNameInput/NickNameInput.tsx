import React, { ChangeEvent } from 'react';

export function NickNameInput() {
    function handleChange(event: ChangeEvent<{ value: string }>): string {
        return event.currentTarget.value;
    }

    return (
        <>
            <label htmlFor="nickName">닉네임</label>
            <input id="nickName" type="text" onChange={handleChange} />
        </>
    );
}
