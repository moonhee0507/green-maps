import React from 'react';
import MapManager from './MapManager';
import addMarkerClickEvent from './addMarkerClickEvent';
import { renderToString } from 'react-dom/server';
import InfoWindow from './InfoWindow';
import imgLocation from '/images/map-location.png';
import imgCert from '/images/map-cert-location.png';
import type { Restaurant } from '../../../server/models/Restaurant';

const arrMarker: kakao.maps.Marker[] = [];
const arrInfowindow: kakao.maps.InfoWindow[] = [];

export default async function paintVeganRestaurantMarker(restaurant: Restaurant[]) {
    const map = MapManager.getMapManager();

    restaurant.forEach((list, i) => {
        // 마커
        const marker = new kakao.maps.Marker({
            map: map.getMap(),
            position: new kakao.maps.LatLng(list.location.coordinates[1], list.location.coordinates[0]), // 마커를 표시할 위치
            title: list.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀 표시
            image: new kakao.maps.MarkerImage(list.certified ? imgCert : imgLocation, new kakao.maps.Size(24, 35)), // 마커 이미지
        });

        arrMarker.push(marker);

        // 인포윈도우
        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1, removable: true });
        const InfoWindowComponent = <InfoWindow restaurantInfo={list} />;
        infowindow.setContent(renderToString(InfoWindowComponent));

        arrInfowindow.push(infowindow);
    });

    addMarkerClickEvent(arrMarker, arrInfowindow);
}
