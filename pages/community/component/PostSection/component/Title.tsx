import React from 'react';

export { Title };

function Title(props: { title: string }) {
    return (
        <>
            <dt className="sr-only">제목</dt>
            <dd className="txt-postitem-title">{props.title}</dd>
        </>
    );
}
