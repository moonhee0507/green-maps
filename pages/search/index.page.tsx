import React, { useEffect, useState } from 'react';
import { SearchBar } from './searchBar';
import { ModalGroup } from './ModalGroup/ModalGroup';
import { NavBar } from '../../components/navBar';
import useLocationAccess from './hook/useLocationAccess';
import appModalMode from '../../components/modal/appModalMode';
import { useAppDispatch } from '../../renderer/store/hooks';
import { CHECK_LOCATION_ACCESS_MODAL, StateToGeolocation } from '../../renderer/_reducers/_slices/mapSlice';
import { useCheckLoginStatus } from '../../renderer/_hooks/useCheckLoginStatus';
import LoadingMain from '../../components/Loading/LoadingMain';

export const documentProps = {
    title: '채식 식당 지도 | Green Maps',
    description: '채식 식당 지도 페이지',
};

const MapView = React.lazy(() => import('./MapView'));

export { Page };

function Page() {
    const dispatch = useAppDispatch();

    const [hasWindow, setHasWindow] = useState(false);
    const [isLoggedIn, _] = useCheckLoginStatus();
    const hasLocationAccess: StateToGeolocation = useLocationAccess();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true);
        } else setHasWindow(false);
    }, []);

    useEffect(() => {
        if (hasWindow === true) {
            if (hasLocationAccess === 'granted') {
                appModalMode(false);
                dispatch(CHECK_LOCATION_ACCESS_MODAL(false));
            } else if (hasLocationAccess === 'denied' || hasLocationAccess === 'prompt') {
                appModalMode(true);
                dispatch(CHECK_LOCATION_ACCESS_MODAL(true));
            }
        }
    }, [hasWindow, hasLocationAccess]);

    return hasWindow ? (
        <React.Suspense fallback={<LoadingMain />}>
            <SearchBar />
            <MapView isLoggedIn={isLoggedIn} />
            <NavBar isLoggedIn={isLoggedIn} />
            <ModalGroup />
        </React.Suspense>
    ) : (
        <LoadingMain />
    );
}
