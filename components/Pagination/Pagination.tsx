import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../renderer/store/hooks';

export { Pagination };

function Pagination({ count, perPage }: { count: number; perPage: number }) {
    const dispatch = useDispatch();

    const pageCount = Math.ceil(count / perPage);

    const pageNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);

    function handlePrev() {
        dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: currentPage - 1 });
    }

    function handleNext() {
        dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: currentPage + 1 });
    }

    return (
        <nav
            className="wrapper-pagination"
            style={window.location.pathname === '/search' ? { paddingBottom: '0' } : {}}
        >
            <ul>
                <li>
                    <button
                        type="button"
                        aria-label="이전 페이지 버튼"
                        className="button-prev-page"
                        disabled={currentPage === 1 ? true : false}
                        onClick={handlePrev}
                    />
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
                        aria-label="다음 페이지 버튼"
                        className="button-next-page"
                        disabled={currentPage === pageNumbers.pop() ? true : false}
                        onClick={handleNext}
                    />
                </li>
            </ul>
        </nav>
    );
}

function PageNumber({ number }: { number: number }) {
    const dispatch = useDispatch();

    const currentPage = useAppSelector((state) => state.paginationSlice.currentPage);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: Number(event.currentTarget.value) });
    }

    return (
        <li
            hidden={
                number <= Math.ceil(currentPage / 5) * 5 && number >= Math.ceil(currentPage / 5) * 5 - 4 ? false : true
            }
        >
            <button
                className={`button-page ${number === currentPage ? 'on' : ''}`}
                type="button"
                onClick={handleClick}
                value={number}
            >
                {number}
            </button>
        </li>
    );
}
