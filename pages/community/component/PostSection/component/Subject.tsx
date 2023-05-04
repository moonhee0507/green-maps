import React from 'react';

export { Subject };

function Subject(props: { subject: string }) {
    return (
        <>
            <dt className="sr-only">말머리</dt>
            <dd>{props.subject}</dd>
        </>
    );
}
