type Lng = number;
type Lat = number;
type MongoLocation = [Lng, Lat];
type KakaoLocation = [Lat, Lng];

type MongoPolygon = MongoLocation[];

export { Lng, Lat, MongoLocation, KakaoLocation, MongoPolygon };
