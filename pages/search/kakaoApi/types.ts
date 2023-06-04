type Latitude = number;
type Longitude = number;

type KakaoLocation = [Latitude, Longitude];
type MongoLocation = [Longitude, Latitude];

type Location = KakaoLocation | MongoLocation;
type Polygon = Location[];

type LocPosition = {
    getLng(): Longitude;
    getLat(): Latitude;
};

export { Latitude, Longitude, KakaoLocation, MongoLocation, Location, Polygon, LocPosition };
