import React, { useRef, useState } from 'react';

export { SearchForm };

function SearchForm() {
    const [showInput, setShowInput] = useState<boolean>(false);

    const inputElement = useRef<HTMLInputElement>(null);

    function moveToPage(): void {
        if (inputElement.current !== null) {
            const keyword = inputElement.current.value;
            if (keyword.length > 0) {
                const url = `/community/search/${keyword}`;
                // navigate(url, { keepScrollPosition: true });
                window.location.href = url;
            } else {
                window.alert('검색어를 입력해주세요.');
            }
        }
    }

    return (
        <>
            <div className="search-bar">
                <div>
                    {showInput ? (
                        <div>
                            <label htmlFor="searchItem" className="sr-only">
                                게시글 검색하기
                            </label>
                            <input type="search" id="searchItem" ref={inputElement} autoFocus />
                        </div>
                    ) : (
                        <h2 className="top-title">게시판</h2>
                    )}
                </div>
            </div>
            <button
                type="button"
                onClick={() => (showInput ? moveToPage() : setShowInput(true))}
                aria-label="식당 검색 버튼"
            >
                🔍
            </button>
        </>
    );
}
