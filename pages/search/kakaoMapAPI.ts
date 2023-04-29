import type { Restaurant } from '../../server/models/Restaurant';
import iconLocation from '/images/icon-location.svg';
import iconAuth from '/images/icon-auth.svg';
import store from '../../renderer/store.js';

const { kakao }: any = window;

let map: any;
let neLat: number;
let neLng: number;
let swLat: number;
let swLng: number;

type Location = Array<number>;
type Polygon = Array<Location>;

export function init() {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
        center: new kakao.maps.LatLng(37.5666805, 126.9784147), // 지도의 중심좌표 <- 서울시청
        level: 3, // 지도의 확대 레벨
    };

    map = new kakao.maps.Map(mapContainer, mapOption); // 지도생성

    // HTML5의 geolocation으로 사용할 수 있는지 확인
    if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어오기
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도

            // 마커가 표시될 위치 = geolocation으로 얻어온 좌표
            const locPosition = new kakao.maps.LatLng(lat, lon);

            // 지도 중심좌표를 접속위치로 변경
            map.setCenter(locPosition);
        });
    } else console.log('❌ 현재 위치를 표시할 수 없습니다');

    kakao.maps.event.addListener(map, 'bounds_changed', function () {
        neLat = map.getBounds().getNorthEast().getLat();
        neLng = map.getBounds().getNorthEast().getLng();
        swLat = map.getBounds().getSouthWest().getLat();
        swLng = map.getBounds().getSouthWest().getLng();

        getLists([
            [neLng, neLat],
            [swLng, neLat],
            [swLng, swLat],
            [neLng, swLat],
            [neLng, neLat],
        ]).then((res) => {
            paintMarker(res);

            store.dispatch({
                type: 'mapSlice/CHANGED_CENTER',
                COUNT: res.length,
            });
        });
    });
}

export async function getLists(polygon: Polygon) {
    const data = await fetch(`http://localhost:5000/api/map/currentlist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(polygon),
    });

    const res = await data.json();
    return res;
}

export async function paintMarker(restaurant: Array<Restaurant>) {
    restaurant.forEach((list) => {
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(list.location.coordinates[1], list.location.coordinates[0]), // 마커를 표시할 위치
            title: list.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀 표시
            image: new kakao.maps.MarkerImage(list.certified ? iconAuth : iconLocation, new kakao.maps.Size(24, 35)), // 마커 이미지
        });

        // 마커에 클릭이벤트를 등록
        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명을 표출할 인포윈도우
            const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

            // 마커를 클릭하면 장소명이 인포윈도우에 표출
            infowindow.setContent(
                '<div style="padding:5px;font-size:12px;">' +
                    `<a href="/search/${list._id.replaceAll(/ObjectId\('|'\)/g, '')}">${list.title}</a>` +
                    '</div>'
            );
            infowindow.open(map, marker);
        });
    });
}

export function displaySearchResult(keyword: string) {
    // 장소 검색 객체 생성
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색
    ps.keywordSearch(keyword, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수
    function placesSearchCB(data: any, status: any, pagination: any) {
        if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가
            const bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
                displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정
            map.setBounds(bounds);
        }
    }

    // 지도에 마커를 표시하는 함수
    function displayMarker(place: any) {
        // 마커를 생성하고 지도에 표시
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 클릭이벤트를 등록
        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명을 표출할 인포윈도우
            const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

            // 마커를 클릭하면 장소명이 인포윈도우에 표출
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
    }
}
