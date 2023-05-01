import React, { ChangeEvent, useState } from 'react';

export { SearchForm };

function SearchForm() {
    const [clickedButton, setClickedButton] = useState<boolean>(false);

    function handleChange(event: ChangeEvent<{ value: string }>) {
        return event.target.value;
    }

    function handleClick() {
        clickedButton ? setClickedButton(false) : setClickedButton(true);
    }

    return (
        <>
            <div className="search-bar">
                <div>
                    {clickedButton ? (
                        <div>
                            <label htmlFor="searchItem" className="sr-only">
                                게시글 검색하기
                            </label>
                            <input type="text" id="searchItem" onChange={handleChange} />
                        </div>
                    ) : (
                        <h2 className="top-title">게시판</h2>
                    )}
                </div>
            </div>
            <button type="button" onClick={handleClick}>
                검색
            </button>
        </>
    );
}
