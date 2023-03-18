import React, { useEffect } from 'react';
import { SearchBar } from './searchBar';
import { init, paintMarker } from './kakaoMapAPI.js';
import type { Restaurant } from '../../server/models/Restaurant';

export { Page };

function Page() {
    useEffect(() => {
        // TODO: 페이지 최초 진입 시 한번만 저장되게 하기

        init();
        (async () => {
            const res = await fetch(`http://localhost:5000/api/restaurants`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'public, max-age=31536000',
                },
            });

            const data = await res.json();
            const total = data.total;
            const limit = 3;

            for (let page = 1; page <= Math.ceil(total / limit); page++) {
                const res = await fetch(`http://localhost:5000/api/restaurants/?page=${page}&limit=${limit}`, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'max-age=31536000',
                    },
                });

                const data = await res.json();
                const lists = data.lists;
                lists.forEach((list: Restaurant) => {
                    paintMarker(list);
                });
            }
        })();
    }, []);

    return (
        <>
            <SearchBar />
            <div id="map"></div>
        </>
    );
}
