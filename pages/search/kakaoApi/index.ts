import type { Restaurant } from './../../../server/models/Restaurant';
import imgLocation from '/images/map-location.png';
import imgCert from '/images/map-cert-location.png';
import store from '../../../renderer/store/index.js';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import getListInCurrentView from './getListInCurrentView';
import { KakaoLocation, Latitude, LocPosition, Location, Longitude, MongoLocation, Polygon } from './types';

const { kakao }: any = window;

let map: any;
let neLat: Latitude;
let neLng: Longitude;
let swLat: Latitude;
let swLng: Longitude;

let locPosition: LocPosition;

let centerCircle: any;
let radiusCircle: any;

export function init(): Promise<LocPosition> {
    return new Promise((resolve, reject) => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
        const mapOption = {
            center: new kakao.maps.LatLng(37.5666805, 126.9784147), // 지도의 중심좌표 <- 서울시청
            level: 7, // 지도의 확대 레벨(1~14)
        };

        map = new kakao.maps.Map(mapContainer, mapOption); // 지도생성

        // HTML5의 geolocation으로 사용할 수 있는지 확인
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어오기
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude; // 위도
                const lon = position.coords.longitude; // 경도

                // 마커가 표시될 위치 = geolocation으로 얻어온 좌표
                locPosition = new kakao.maps.LatLng(lat, lon);

                // 지도 중심좌표를 접속위치로 변경
                map.setCenter(locPosition);
                store.dispatch({ type: 'mapSlice/SET_LOCATION_ACCESS', payload: true });

                resolve(locPosition);
            });
        } else {
            locPosition = new kakao.maps.LatLng(37.5666805, 126.9784147);
            map.setLevel(5);
            store.dispatch({ type: 'mapSlice/SET_LOCATION_ACCESS', payload: false });
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
    kakao.maps.event.addListener(map, 'bounds_changed', function () {
        const polygon = getCurrentView();

        getListInCurrentView(polygon).then((res) => {
            paintVeganRestaurantMarker(res);

            store.dispatch({
                type: 'mapSlice/CHANGED_CENTER',
                COUNT: res.length,
            });
        });
    });
}

function getCurrentView(): Polygon {
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
    restaurant.forEach((list) => {
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(list.location.coordinates[1], list.location.coordinates[0]), // 마커를 표시할 위치
            title: list.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀 표시
            image: new kakao.maps.MarkerImage(list.certified ? imgCert : imgLocation, new kakao.maps.Size(24, 35)), // 마커 이미지
        });

        // 마커에 클릭이벤트를 등록
        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명을 표출할 인포윈도우
            const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

            // 마커를 클릭하면 장소명이 인포윈도우에 표출
            infowindow.setContent(
                '<div style="padding:5px;font-size:12px;">' +
                    `<a href="/search/${list._id}">${list.title}</a>` +
                    '</div>'
            );
            infowindow.open(map, marker);

            // 마커를 화면의 중앙으로 이동
            map.panTo(marker.getPosition());
        });
    });
}

function addMarkerClickEvent() {}

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
