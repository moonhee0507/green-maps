import React, { useEffect, useState } from 'react';
import { SearchBar } from './searchBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { ControlButton } from './ControlButton/ControlButton';
import { KakaoMap } from './KakaoMap';
import { ResultInRadius } from './ResultInRadius/ResultInRadius';
import { NavBar } from '../../components/navBar';
import { API_URL } from '../../renderer/CONSTANT_URL';

export { Page };

function Page() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
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
            <MapView />
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </>
    );
}

function MapView() {
    return (
        <main className="main-map">
            <ControlButton />
            <KakaoMap />
            <ResultInRadius />
        </main>
    );
}
