import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../renderer/_reducers/rootReducer';

export { Pagination };

function Pagination(props: { count: number; perPage: number }) {
    const dispatch = useDispatch();

    const { count, perPage } = props;
    const pageCount = Math.ceil(count / perPage);

    const pageNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    const currentPage = useSelector((state: RootState) => state.paginationSlice.currentPage);

    function handlePrev() {
        dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: currentPage - 1 });
    }

    function handleNext() {
        dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: currentPage + 1 });
    }

    return (
        <nav className="wrapper-pagination">
            <ul>
                <li>
                    <button type="button" disabled={currentPage === 1 ? true : false} onClick={handlePrev}>
                        이전 페이지
                    </button>
                </li>
                <li>
                    <ol className="container-pagination">
                        {pageNumbers.map((number) => {
                            return <PageNumber key={number} number={number} />;
                        })}
                    </ol>
                </li>
                <li>
                    <button
                        type="button"
                        disabled={currentPage === pageNumbers.pop() ? true : false}
                        onClick={handleNext}
                    >
                        다음 페이지
                    </button>
                </li>
            </ul>
        </nav>
    );
}

function PageNumber(props: { number: number }) {
    const dispatch = useDispatch();

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
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
