import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../renderer/store';

export { SearchForm };

function SearchForm() {
    const [showInput, setShowInput] = useState<boolean>(false);

    const keyword = useSelector((state: RootState) => state.postSlice.KEYWORD);

    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<{ value: string }>) {
        dispatch({ type: 'postSlice/SEARCH', KEYWORD: event.target.value });
    }

    async function searchPost() {
        if (keyword !== '') {
            try {
                /**
                 * !기존 라우터에서 수정하기
                 */
                const res = await fetch(
                    `http://localhost:5000/api/posts?keyword=${keyword}&boundary=${boundary}&orderby=${orderBy}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                const data = res.json();

                return data;
            } catch (err) {
                console.error(err);
            }
        } else {
            alert('검색어를 입력해주세요.');
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
                            <input type="text" id="searchItem" onChange={handleChange} />
                        </div>
                    ) : (
                        <h2 className="top-title">게시판</h2>
                    )}
                </div>
            </div>
            <button type="button" onClick={() => (showInput ? searchPost() : setShowInput(true))}>
                검색
            </button>
        </>
    );
}
