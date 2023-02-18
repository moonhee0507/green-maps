import React, { ChangeEvent } from 'react';
import { displaySearchResult } from './kakaoMapAPI';

export { SearchForm };

function SearchForm() {
    function handleChange(event: ChangeEvent<{ value: string }>) {
        return event.target.value;
    }

    function searchRest() {
        const keyword = (document.getElementById('searchItem') as HTMLInputElement).value;

        displaySearchResult(keyword);
    }

    return (
        <>
            <div className="search-bar">
                <div>
                    <label htmlFor="searchItem" className="sr-only">
                        식당 검색하기
                    </label>
                    <input type="text" id="searchItem" onChange={handleChange} autoFocus />
                </div>
            </div>
            <button type="button" onClick={searchRest}>
                검색
            </button>
        </>
    );
}
