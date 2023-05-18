import React, { ChangeEvent } from 'react';

export function PasswordInput() {
    function handleChange(event: ChangeEvent<{ value: string }>): string {
        return event.currentTarget.value;
    }

    return (
        <>
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" onChange={handleChange} />
        </>
    );
}
