import React from 'react';

export { Date };

function Date(props: { registeredAt: string }) {
    return (
        <>
            <dt className="sr-only">작성일자</dt>
            <dd className="txt-review-date">{props.registeredAt}</dd>
        </>
    );
}
