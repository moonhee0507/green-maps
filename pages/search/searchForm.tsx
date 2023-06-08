import React, { ChangeEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../renderer/store/hooks';
import { navigate } from 'vite-plugin-ssr/client/router';

export { SearchForm };

function SearchForm() {
    const inputElement = useRef<HTMLInputElement>(null);
    const [keyword, setKeyword] = useState('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }

    return (
        <>
            <div className="search-bar">
                <div>
                    <label htmlFor="searchRestaurant" className="sr-only">
                        식당 검색하기
                    </label>
                    <input type="search" id="searchRestaurant" onChange={handleChange} ref={inputElement} />
                </div>
            </div>
            <SearchButton keyword={keyword} />
        </>
    );
}

function SearchButton({ keyword }: { keyword: string }) {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        // dispatch(SET_MAP_MODE('검색 모드'));
        if (keyword.length === 0) {
            alert('검색어를 입력해주세요.');
        } else {
            dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: 1 });
            navigate(`/search/keyword/${keyword}`);
        }
    };

    return (
        <button type="button" onClick={handleClick}>
            검색
        </button>
    );
}
