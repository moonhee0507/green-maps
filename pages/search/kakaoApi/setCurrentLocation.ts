import store from '../../../renderer/store';

export default function setCurrentLocation(): void {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            store.dispatch({ type: 'mapSlice/SET_CURRENT_LOCATION', payload: [lat, lng] });
        });
    }
}
