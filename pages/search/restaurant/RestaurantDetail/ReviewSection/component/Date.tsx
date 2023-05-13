import React from 'react';
import { isSameDay } from '../../../../../../components/Date';

export { Date };

function Date(props: { registeredAt: string }) {
    const { registeredAt } = props;

    const date = isSameDay(registeredAt)
        ? `${registeredAt.split('. ').at(-1)?.split(':')[0]}:${registeredAt.split('. ').at(-1)?.split(':')[1]}`
        : registeredAt.slice(0, 13);

    return (
        <>
            <dt className="sr-only">작성일자</dt>
            <dd className="txt-review-date">{date}</dd>
        </>
    );
}
