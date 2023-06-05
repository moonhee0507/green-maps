import MapManager from './MapManager';

export default function addMarkerClickEvent(arrMarker: kakao.maps.Marker[], arrInfowindow: kakao.maps.InfoWindow[]) {
    const map = MapManager.getMapManager().getMap();

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
