import React from 'react';
import { ControlButton } from './ControlButton/ControlButton';
import { KakaoMap } from './KakaoMap';
import { BackCurrentLocation } from '../../components/button/BackCurrentLocation';
import { ResultInRadius } from './ResultInRadius/ResultInRadius';

export default function MapView({ isLoggedIn }: { isLoggedIn: boolean }) {
    return (
        <main className="main-map">
            <ControlButton />
            <KakaoMap isLoggedIn={isLoggedIn} />
            <BackCurrentLocation />
            <ResultInRadius />
        </main>
    );
}
