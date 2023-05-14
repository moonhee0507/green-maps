import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { navigate } from 'vite-plugin-ssr/client/router';
import { RootState } from '../../../../../renderer/store';

export { SearchInput };

function SearchInput() {
    const keyword = useSelector((state: RootState) => state.postSlice.KEYWORD);
    const inputElement = useRef<HTMLInputElement>(null);

    function handleSubmit() {
        const url = `/community/search/${inputElement.current?.value}`;
        navigate(url, { keepScrollPosition: true });
    }

    return (
        <div className="container-search-input">
            <label htmlFor="communitySearchResult" className="sr-only">
                게시글 검색하기
            </label>
            <input type="search" id="communitySearchResult" ref={inputElement} defaultValue={keyword} />
            <button onClick={handleSubmit}>검색</button>
        </div>
    );
}
