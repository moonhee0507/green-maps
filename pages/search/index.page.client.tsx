import React, { useEffect } from 'react';
import { SearchBar } from './searchBar';
import { init } from './kakaoMapAPI.js';
import ListButton from './listButton';
import { NavBar } from '../../components/navBar';
import type { PageContext } from '../../renderer/types';

export { Page };

function Page(pageContext: PageContext) {
    const { isLoggedIn } = pageContext.user;

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <SearchBar />
            <div id="map"></div>
            <ListButton />
            <NavBar isLoggedIn={isLoggedIn} />
        </>
    );
}
