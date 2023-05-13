import React from 'react';

export { SearchInput };

function SearchInput(props: { keyword: string }) {
    const { keyword } = props;

    function handleChange() {
        console.log('검색인풋 내용 변경');
    }

    return (
        <div className="container-search-input">
            <label htmlFor="communitySearchResult" className="sr-only">
                게시글 검색하기
            </label>
            <input type="search" id="communitySearchResult" onChange={handleChange} defaultValue={keyword} />
            <button className="">검색</button>
        </div>
    );
}
