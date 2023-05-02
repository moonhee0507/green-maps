import React from 'react';

export { SubmitButton };

function SubmitButton() {
    function handleSubmit() {}

    return (
        <button type="submit" onSubmit={handleSubmit}>
            등록
        </button>
    );
}
