import React from 'react';

export { SelectBox };

function SelectBox() {
    function handleChange() {
        console.log('셀렉트박스 내용 변경');
    }

    return (
        <div className="container-search-select">
            <label htmlFor="communitySearchSelect" className="sr-only">
                말머리 선택
            </label>
            <select name="subjects" id="communitySearchSelect" onChange={handleChange}>
                <option value="">전체 게시판</option>
                <option value="🥑채식얘기">🥑채식얘기</option>
                <option value="⚽운동얘기">⚽운동얘기</option>
            </select>
        </div>
    );
}
