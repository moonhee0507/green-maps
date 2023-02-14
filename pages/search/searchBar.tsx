import React from 'react';

export { SearchBar };

function SearchBar() {
    return (
        <>
            <div className="search-bar">
                <form>
                    <label htmlFor="searchItem" className="sr-only">
                        식당 검색하기
                    </label>
                    <input type="text" id="searchItem" />
                </form>
            </div>
            <button type="button">검색</button>
        </>
    );
}
