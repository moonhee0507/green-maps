import React from 'react';
import { useDispatch } from 'react-redux';

export { Pagination };

function Pagination(props: { count: number; perPage: number }) {
    const { count, perPage } = props;
    const pageCount = Math.ceil(count / perPage);

    const pageNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="wrapper-pagination">
            <ul>
                <li>
                    <button type="button">이전 페이지</button>
                </li>
                <li>
                    <ol className="container-pagination">
                        {pageNumbers.map((number) => {
                            return <PageNumber key={number} number={number} />;
                        })}
                    </ol>
                </li>
                <li>
                    <button type="button">다음 페이지</button>
                </li>
            </ul>
        </nav>
    );
}

function PageNumber(props: { number: number }) {
    const dispatch = useDispatch();

    function handleClick(event: any) {
        dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: Number(event.currentTarget.value) });
    }

    return (
        <li className="button-page">
            <button type="button" onClick={handleClick} value={props.number}>
                {props.number}
            </button>
        </li>
    );
}
