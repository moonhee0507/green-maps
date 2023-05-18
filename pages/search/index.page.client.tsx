import React, { useEffect, useState } from 'react';
import { SearchBar } from './searchBar';
import { init } from './kakaoMapAPI.js';
import ListButton from './listButton';
import { NavBar } from '../../components/navBar';
import { API_URL } from '../API_URL/api';

export { Page };

function Page() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        init();

        (async () => {
            const res = await fetch(`${API_URL}/users/`);
            const data = await res.json();

            if (data.success === true) setIsLoggedIn(true);
            else setIsLoggedIn(false);
        })();
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
