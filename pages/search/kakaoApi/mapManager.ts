class MapManager {
    private static instance: MapManager;
    private map: kakao.maps.Map;
    private currentLocation: kakao.maps.LatLng;
    private coreCircle: kakao.maps.Circle | null;
    private radiusCircle: kakao.maps.Circle | null;

    private constructor() {
        const mapContainer = document.getElementById('map') as HTMLElement;
        this.currentLocation = new kakao.maps.LatLng(37.5666805, 126.9784147);
        this.coreCircle = null;
        this.radiusCircle = null;

        const mapOption = {
            center: this.currentLocation,
            level: 7,
        };

        this.map = new kakao.maps.Map(mapContainer, mapOption);
    }

    public static getMapManager() {
        if (!MapManager.instance) {
            MapManager.instance = new MapManager();
        }

        return MapManager.instance;
    }

    public getMap(): kakao.maps.Map {
        return this.map;
    }

    public getCurrentLocation() {
        return this.currentLocation;
    }

    public changeCenter() {
        return new Promise<void>((resolve) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    this.currentLocation = new kakao.maps.LatLng(lat, lon);

                    this.map.setCenter(this.currentLocation);
                    this.setCircle();
                    resolve();
                });
            } else {
                this.map.setCenter(this.currentLocation);
                this.setCircle();
                resolve();
            }
        });
    }

    public optimizeMapLevel(radius = 500) {
        switch (radius) {
            case 300:
                this.map.setLevel(5);
                break;

            case 500:
                this.map.setLevel(5);
                break;

            case 1000:
                this.map.setLevel(6);
                break;

            case 2000:
                this.map.setLevel(7);
                break;

            case 3000:
                this.map.setLevel(7);
                break;

            default:
                this.map.setLevel(5);
        }
    }

    public setCircle(radius = 500) {
        if (this.map && this.currentLocation) {
            this.coreCircle = new kakao.maps.Circle({
                map: this.map,
                center: this.currentLocation,
                radius: 25,
                strokeWeight: 3,
                strokeColor: '#007EEA',
                strokeStyle: 'solid',
                fillColor: '#0000ff',
                fillOpacity: 1,
                zIndex: 3333,
            });

            this.radiusCircle = new kakao.maps.Circle({
                map: this.map,
                center: this.currentLocation,
                radius: radius,
                strokeWeight: 2,
                strokeColor: '#7777ff',
                strokeStyle: 'solid',
                fillColor: '#0000ff',
                fillOpacity: 0.08,
                zIndex: 3333,
            });

            this.coreCircle.setMap(this.map);
            this.radiusCircle.setMap(this.map);
        }
    }

    public clearCircle() {
        if (this.coreCircle) {
            this.coreCircle.setMap(null);
        }
        if (this.radiusCircle) {
            this.radiusCircle.setMap(null);
        }
    }

    public getCurrentView(): Array<[number, number]> {
        const neLat = this.map.getBounds().getNorthEast().getLat();
        const neLng = this.map.getBounds().getNorthEast().getLng();
        const swLat = this.map.getBounds().getSouthWest().getLat();
        const swLng = this.map.getBounds().getSouthWest().getLng();

        return [
            [neLng, neLat],
            [swLng, neLat],
            [swLng, swLat],
            [neLng, swLat],
            [neLng, neLat],
        ];
    }
}

export default MapManager;
