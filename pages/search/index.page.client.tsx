import React, { useEffect } from 'react';

const { kakao }: any = window;
export { Page };

function Page() {
    useEffect(() => {
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };

        const map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

        // HTML5의 geolocation으로 사용할 수 있는지 확인
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어오기
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude; // 위도
                const lon = position.coords.longitude; // 경도

                // 마커가 표시될 위치 = geolocation으로 얻어온 좌표
                const locPosition = new kakao.maps.LatLng(lat, lon);
                // 인포윈도우에 표시될 내용
                const message = '<div style="padding: 5px;">me</div>';

                // 마커와 인포윈도우 표시
                displayMarker(locPosition, message);
            });
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을 경우 설정
            const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
            const message = 'geolocation을 사용할수 없어요..';

            displayMarker(locPosition, message);
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수
        function displayMarker(locPosition: any, message: string) {
            // 마커 생성
            const marker = new kakao.maps.Marker({
                map: map,
                position: locPosition,
            });

            // 인포윈도우에 표시할 내용
            const iwContent = message;
            const iwRemoveable = true;

            // 인포윈도우 생성
            const infowindow = new kakao.maps.InfoWindow({
                content: iwContent,
                removable: iwRemoveable,
            });

            // 인포윈도우를 마커위에 표시
            infowindow.open(map, marker);

            // 지도 중심좌표를 접속위치로 변경
            map.setCenter(locPosition);
        }
    }, []);

    return (
        <>
            <div id="map"></div>
        </>
    );
}
