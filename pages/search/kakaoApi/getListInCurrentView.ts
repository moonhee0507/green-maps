import { API_URL } from '../../../renderer/CONSTANT_URL';
import { Restaurant } from '../../../server/models/Restaurant';
import { MongoPolygon } from './types';

export default async function getListInCurrentView(polygon: MongoPolygon): Promise<Restaurant[]> {
    const res = await fetch(`${API_URL}/map/current-view`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type',
        },
        mode: 'no-cors',
        body: JSON.stringify(polygon),
    });

    const data = await res.json();

    return data;
}
