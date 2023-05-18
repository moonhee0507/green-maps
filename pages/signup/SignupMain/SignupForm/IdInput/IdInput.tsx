import React, { ChangeEvent } from 'react';

export { IdInput };

function IdInput() {
    function handleChange(event: ChangeEvent<{ value: string }>): string {
        return event.currentTarget.value;
    }

    return (
        <>
            <label htmlFor="userId">아이디</label>
            <input id="userId" type="text" onChange={handleChange} />
        </>
    );
}
