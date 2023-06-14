import React, { useEffect } from 'react';
import type { Restaurant } from '../../../../server/models/Restaurant';
import { CopyButton } from '../../../../components/button/CopyButton';

export { LocationSection };

function LocationSection({ restaurantInfo }: { restaurantInfo: Restaurant | null }) {
    useEffect(() => {
        if (restaurantInfo !== null) {
            const { kakao }: any = window;

            const [lng, lat] = restaurantInfo.location.coordinates;
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
        }
    }, []);

    return (
        <section className="section-location">
            <h4 className="sr-only">위치</h4>
            <div className="style-wrapper-location-address">
                <span>{restaurantInfo !== null ? restaurantInfo.address : ''} </span>
                <CopyButton address={restaurantInfo !== null ? restaurantInfo.address : ''} />
            </div>
            <div id="miniMap" />
        </section>
    );
}
