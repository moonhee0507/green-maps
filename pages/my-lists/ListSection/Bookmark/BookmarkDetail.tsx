import React from 'react';
import type { Bookmark } from '../../../../server/models/User';

export { BookmarkDetail };

function BookmarkDetail({ lists }: { lists: Bookmark[] }) {
    const arrGroupName = [...new Set(lists.map((list) => list.groupName))];

    return (
        <div className="style-wrapper-bookmark-detail">
            <div className="wrapper-groupcount-orderbox">
                <p className="txt-bookmarkgroup">
                    그룹 <span>{arrGroupName.length}</span>
                </p>
                <div className="container-order-bookmarkgroup">
                    <button type="button" className="button-order-bookmarkgroup">
                        등록순
                    </button>
                </div>
            </div>
            <button type="button" className="button-edit-bookmarkgroup">
                편집하기
            </button>
        </div>
    );
}
