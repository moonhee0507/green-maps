import React, { ChangeEvent } from 'react';

export function ConfirmPasswordInput() {
    function handleChange(event: ChangeEvent<{ value: string }>): string {
        return event.currentTarget.value;
    }

    return (
        <>
            <label htmlFor="password2">비밀번호 확인</label>
            <input id="password2" type="password" onChange={handleChange} />
        </>
    );
}
