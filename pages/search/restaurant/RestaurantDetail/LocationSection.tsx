import React, { useEffect } from 'react';
import type { Restaurant } from '../../../../server/models/Restaurant';

export { LocationSection };

function LocationSection(props: { restaurantInfo: Restaurant }) {
    useEffect(() => {
        const { kakao }: any = window;

        const [lng, lat] = props.restaurantInfo.location.coordinates;
        const mapContainer = document.getElementById('miniMap');
        const mapOption = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 3,
        };

        const map = new kakao.maps.Map(mapContainer, mapOption);

        var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(lat, lng),
        });

        marker.setMap(map);
    }, []);

    return <div id="miniMap" />;
}
