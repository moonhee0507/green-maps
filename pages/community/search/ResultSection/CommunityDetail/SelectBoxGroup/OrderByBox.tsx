import React from 'react';

export { OrderByBox };

function OrderByBox() {
    return (
        <select name="" id="">
            <option value="latest">최신순</option>
            <option value="accuracy">정확도</option>
            <option value="comment">댓글</option>
        </select>
    );
}
