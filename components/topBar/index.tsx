import React from 'react';
import { SearchBar } from '../../pages/search/searchBar';
import arrow from '/icon-arrow.svg';

export { TopBar };
//TODO: 동적으로 바꾸려면...?
function TopBar() {
    function goBack() {
        window.history.back();
    }

    return (
        <div className="top-bar">
            <button className="button-back" onClick={goBack}>
                <img src={arrow} alt="뒤로가기" />
            </button>
            <SearchBar />
            {/* {window.location.pathname === '/search' && <SearchBar />} */}
        </div>
    );
}
