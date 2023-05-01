import React from 'react';

export { ButtonGroup };

function ButtonGroup() {
    return (
        <div className="container-button-create-refresh">
            <a href="/community/create" className="link-create">
                글쓰기
            </a>
            <button type="button" className="button-refresh" onClick={() => location.reload()}>
                새로고침
            </button>
        </div>
    );
}
