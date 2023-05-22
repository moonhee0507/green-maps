import React from 'react';

export function GroupDetail({ count }: { count: number }) {
    return (
        <div className="style-wrapper-bookmark-detail">
            <div className="wrapper-groupcount-orderbox">
                <p className="txt-bookmarkgroup">
                    전체 <span>{count}</span>
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
