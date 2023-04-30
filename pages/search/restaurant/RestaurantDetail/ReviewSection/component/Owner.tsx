import React from 'react';

export { Owner };

function Owner(props: { owner: string }) {
    return (
        <>
            <dt className="sr-only">작성자</dt>
            <dd className="txt-review-owner">{props.owner}</dd>
        </>
    );
}
