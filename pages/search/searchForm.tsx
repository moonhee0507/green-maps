import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useAppDispatch } from '../../renderer/store/hooks';

export { SearchForm };

function SearchForm() {
    const dispatch = useAppDispatch();
    const [keyword, setKeyword] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    }

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            submitSearchForm();
        }
    }

    const submitSearchForm = () => {
        if (keyword.length === 0) {
            alert('검색어를 입력해주세요.');
        } else {
            dispatch({ type: 'paginationSlice/CURRENT_PAGE', currentPage: 1 });
            window.location.href = `/search/keyword/${keyword}`;
        }
    }

    return (
        <>
            <div className="search-bar">
                <div>
                    <label htmlFor="searchRestaurant" className="sr-only">
                        식당 검색하기
                    </label>
                    <input
                        type="search"
                        id="searchRestaurant"
                        onChange={handleChange}
                        value={keyword}
                        onKeyDown={handleEnter}
                    />
                </div>
            </div>
            <SearchButton submitForm={submitSearchForm} />
        </>
    );
}

function SearchButton({ submitForm }: { submitForm: () => void }) {
    return (
        <button type="button" onClick={submitForm} aria-label="식당 검색 버튼">
            🔍
        </button>
    );
}
