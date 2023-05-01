import React from 'react';

export { CommunityDetail };

function CommunityDetail() {
    return (
        <div className="container-newpost-selectbox">
            <p className="txt-postinfo">
                새글 <span>555</span>/860,192
            </p>
            <div className="wrapper-subject">
                <label htmlFor="select-subject">말머리 선택</label>
                <select name="subjects" id="select-subject">
                    <option value="">-- 전체 --</option>
                    <option value="🥑채식얘기">🥑채식얘기</option>
                    <option value="⚽운동얘기">⚽운동얘기</option>
                </select>
            </div>
        </div>
    );
}
