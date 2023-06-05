import store from '../../../renderer/store';
import MapManager from './MapManager';
import getListInCurrentView from './getListInCurrentView';
import paintVeganRestaurantMarker from './paintVeganRestaurantMarker';

export default function addBoundChangeEvent() {
    const mapManager = MapManager.getMapManager();

    kakao.maps.event.addListener(mapManager.getMap(), 'bounds_changed', function () {
        const polygon = mapManager.getCurrentView();

        getListInCurrentView(polygon).then((res) => {
            paintVeganRestaurantMarker(res);

            store.dispatch({
                type: 'mapSlice/CHANGED_CENTER',
                COUNT: res.length,
            });
        });
    });
}
