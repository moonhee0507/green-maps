import React from 'react';
import { renderToString } from 'react-dom/server';
import store from '../../../renderer/store/index.js';
import { SET_CURRENT_LOCATION } from '../../../renderer/_reducers/_slices/mapSlice.js';
import getListInCurrentView from './getListInCurrentView';
import InfoWindow from './InfoWindow/InfoWindow.js';
import imgLocation from '/images/map-location.png';
import imgCert from '/images/map-cert-location.png';
import type { Lat, Lng, MongoLocation, MongoPolygon } from './types';
import type { Restaurant } from './../../../server/models/Restaurant';

const { kakao }: any = typeof window !== 'undefined' ? window : global;

let isLoggedIn = false;

let map: any;
let neLat: Lat;
let neLng: Lng;
let swLat: Lat;
let swLng: Lng;

let locPosition: kakao.maps.LatLng;

let centerCircle: kakao.maps.Circle;
let radiusCircle: kakao.maps.Circle;

const arrMarker: kakao.maps.Marker[] = [];
const arrInfowindow: kakao.maps.InfoWindow[] = [];

export function init(): Promise<kakao.maps.LatLng> {
    kakao.maps.load(function () {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
        const mapOption = {
            center: new kakao.maps.LatLng(37.5666805, 126.9784147), // 지도의 중심좌표 <- 서울시청
            level: 7, // 지도의 확대 레벨(1~14)
        };

        map = new kakao.maps.Map(mapContainer, mapOption); // 지도생성
    });

    return new Promise((resolve, reject) => {
        // HTML5의 geolocation으로 사용할 수 있는지 확인
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어오기
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude; // 위도
                const lng = position.coords.longitude; // 경도

                // 마커가 표시될 위치 = geolocation으로 얻어온 좌표
                locPosition = new kakao.maps.LatLng(lat, lng);

                // 지도 중심좌표를 접속위치로 변경
                map.setCenter(locPosition);
                store.dispatch({ type: 'mapSlice/SET_LOCATION_ACCESS', payload: true });
                store.dispatch(SET_CURRENT_LOCATION([lat, lng]));

                resolve(locPosition);
            });
        } else {
            locPosition = new kakao.maps.LatLng(37.5666805, 126.9784147);
            map.setLevel(5);
            store.dispatch({ type: 'mapSlice/SET_LOCATION_ACCESS', payload: false });
            store.dispatch(SET_CURRENT_LOCATION([37.5666805, 126.9784147]));
            resolve(locPosition);
        }

        addBoundChangeEvent();
    });
}

export function setCircle(radius = 500): void {
    // 현재 위치 표시
    centerCircle = new kakao.maps.Circle({
        map: map,
        center: locPosition,
        radius: 25,
        strokeWeight: 3,
        strokeColor: '#007EEA',
        strokeStyle: 'solid',
        fillColor: '#0000ff',
        fillOpacity: 1,
    });

    // 반경 500m 영역 표시
    radiusCircle = new kakao.maps.Circle({
        map: map,
        center: locPosition,
        radius: radius,
        strokeWeight: 2,
        strokeColor: '#7777ff',
        strokeStyle: 'solid',
        fillColor: '#0000ff',
        fillOpacity: 0.08,
    });

    centerCircle.setMap(map);
    radiusCircle.setMap(map);
}

export function clearCircle() {
    if (centerCircle) {
        centerCircle.setMap(null);
    }
    if (radiusCircle) {
        radiusCircle.setMap(null);
    }
}

function addBoundChangeEvent() {
    let timeoutId: number;
    kakao.maps.event.addListener(map, 'bounds_changed', function () {
        // 화면 이동 event가 발생하면 3초 후 fetch(=> 이동 후3초 안움직여야 그려진다)
        window.clearTimeout(timeoutId);

        timeoutId = window.setTimeout(async () => {
            const polygon = getCurrentView();
            const res = await getListInCurrentView(polygon);

            paintVeganRestaurantMarker(res);
        }, 3000);
    });
}

function getCurrentView(): MongoPolygon {
    neLat = map.getBounds().getNorthEast().getLat();
    neLng = map.getBounds().getNorthEast().getLng();
    swLat = map.getBounds().getSouthWest().getLat();
    swLng = map.getBounds().getSouthWest().getLng();

    return [
        [neLng, neLat],
        [swLng, neLat],
        [swLng, swLat],
        [neLng, swLat],
        [neLng, neLat],
    ];
}

async function paintVeganRestaurantMarker(restaurant: Restaurant[]) {
    restaurant.forEach((list: Restaurant) => {
        // 마커
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(list.location.coordinates[1], list.location.coordinates[0]), // 마커를 표시할 위치
            title: list.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀 표시
            image: new kakao.maps.MarkerImage(list.certified ? imgCert : imgLocation, new kakao.maps.Size(24, 35)), // 마커 이미지
        });

        arrMarker.push(marker);

        // 인포윈도우
        const infowindow = new kakao.maps.InfoWindow({ zIndex: 1, removable: true });
        const InfoWindowComponent = <InfoWindow restaurantInfo={list} isLoggedIn={isLoggedIn || false} />;
        infowindow.setContent(renderToString(InfoWindowComponent));

        arrInfowindow.push(infowindow);
    });

    addMarkerClickEvent(arrMarker, arrInfowindow);
}

export function addMarkerClickEvent(arrMarker: kakao.maps.Marker[], arrInfowindow: kakao.maps.InfoWindow[]) {
    for (let i = 0; i < arrMarker.length; i++) {
        kakao.maps.event.addListener(arrMarker[i], 'click', function () {
            removeAllInfowindow(arrInfowindow);
            arrInfowindow[i].open(map, arrMarker[i]);
            map.panTo(arrMarker[i].getPosition());
        });
    }
}

function removeAllInfowindow(arrInfowindow: kakao.maps.InfoWindow[]) {
    for (let i = 0; i < arrInfowindow.length; i++) {
        arrInfowindow[i].close();
    }
}

export function optimizeMapLevel(radius: number): void {
    switch (radius) {
        case 300:
            map.setLevel(5);
            break;

        case 500:
            map.setLevel(5);
            break;

        case 1000:
            map.setLevel(6);
            break;

        case 2000:
            map.setLevel(7);
            break;

        case 3000:
            map.setLevel(7);
            break;

        default:
            map.setLevel(5);
    }
}

export function moveToRegionInPage(coordsInPage: MongoLocation[]) {
    if (coordsInPage.length === 0) {
        return;
    }

    const convertCoords: kakao.maps.LatLng[] = [];

    for (let coord of coordsInPage) {
        const [lng, lat] = coord;

        if (lng !== 0 && lat !== 0) {
            convertCoords.push(new kakao.maps.LatLng(lat, lng));
        }
    }

    const bounds: kakao.maps.LatLngBounds = new kakao.maps.LatLngBounds();

    for (let convertCoord of convertCoords) {
        bounds.extend(convertCoord);
    }

    paintBounds(bounds);
}

function paintBounds(bounds: kakao.maps.LatLngBounds) {
    map.setBounds(bounds);
}

export function moveToCurrentLocation() {
    const [lat, lng] = store.getState().mapSlice.currentLocation;
    map.setCenter(new kakao.maps.LatLng(lat, lng));
}

export function checkLoginForInfoWindow(isLoggedInFromIndexPage: boolean) {
    isLoggedIn = isLoggedInFromIndexPage;
}
