import React, { useEffect } from 'react';
import { SearchBar } from './searchBar';
import { init } from './kakaoMapAPI.js';
import ListButton from './listButton';

export { Page };

function Page() {
    // useSelector((state: any) => state.map.PAINT) === true 면 그리고
    // false면 그리지 마라
    // caches.open('식당').then((cache) => {
    //     cache.add('http://localhost:5000/api/restaurants/all').then(() => {
    //         console.log('캐시 저장');
    //     });
    // });
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
