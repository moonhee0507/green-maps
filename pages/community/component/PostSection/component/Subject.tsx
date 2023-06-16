import React from 'react';

export { Subject };

function Subject(props: { subject: string }) {
    return (
        <>
            <dt className="sr-only">말머리</dt>
            <dd className="txt-subject-in-community">{props.subject}</dd>
        </>
    );
}
