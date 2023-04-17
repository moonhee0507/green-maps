import React, { useEffect } from 'react';
import { SearchBar } from './searchBar';
import { init } from './kakaoMapAPI.js';
import ListButton from './listButton';

export { Page };

function Page() {
    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <SearchBar />
            <div id="map"></div>
            <ListButton />
        </>
    );
}
