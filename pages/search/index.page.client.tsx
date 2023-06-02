import React, { useEffect, useState } from 'react';
import { SearchBar } from './searchBar';
import ListButton from './listButton';
import { NavBar } from '../../components/navBar';
import { init } from './kakaoMapAPI.js';
import { API_URL } from '../CONSTANT_URL';

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
            <KakaoMap />
            <ListButton />
            <NavBar isLoggedIn={isLoggedIn} />
        </>
    );
}

function KakaoMap() {
    useEffect(() => {
        init();
    }, []);

    return <div id="map" />;
}
