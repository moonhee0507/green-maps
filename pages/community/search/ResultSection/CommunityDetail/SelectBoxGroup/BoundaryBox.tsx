import React from 'react';

export { BoundaryBox };

function BoundaryBox() {
    return (
        <select name="" id="">
            <option value="tc">제목+내용</option>
            <option value="t">제목</option>
            <option value="c">내용</option>
            <option value="n">글작성자</option>
        </select>
    );
}
