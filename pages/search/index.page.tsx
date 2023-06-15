import React, { useEffect, useState } from 'react';
import { SearchBar } from './searchBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { ControlButton } from './ControlButton/ControlButton';
import { KakaoMap } from './KakaoMap';
import { ResultInRadius } from './ResultInRadius/ResultInRadius';
import { NavBar } from '../../components/navBar';
import useLocationAccess from './hook/useLocationAccess';
import appModalMode from '../../components/modal/appModalMode';
import { useAppDispatch } from '../../renderer/store/hooks';
import { CHECK_LOCATION_ACCESS_MODAL, StateToGeolocation } from '../../renderer/_reducers/_slices/mapSlice';
import { BackCurrentLocation } from '../../components/button/BackCurrentLocation';
import { useCheckLoginStatus } from '../../renderer/_hooks/useCheckLoginStatus';

export { Page };

function Page() {
    const dispatch = useAppDispatch();

    const isLoggedIn = useCheckLoginStatus();
    const hasLocationAccess: StateToGeolocation = useLocationAccess();

    useEffect(() => {
        if (hasLocationAccess === 'granted') {
            appModalMode(false);
            dispatch(CHECK_LOCATION_ACCESS_MODAL(false));
        } else if (hasLocationAccess === 'denied' || hasLocationAccess === 'prompt') {
            appModalMode(true);
            dispatch(CHECK_LOCATION_ACCESS_MODAL(true));
        }
    }, [hasLocationAccess]);

    return (
        <>
            <SearchBar />
            <MapView isLoggedIn={isLoggedIn} />
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </>
    );
}

function MapView({ isLoggedIn }: { isLoggedIn: boolean }) {
    return (
        <main className="main-map">
            <ControlButton />
            <KakaoMap isLoggedIn={isLoggedIn} />
            <BackCurrentLocation />
            <ResultInRadius />
        </main>
    );
}
