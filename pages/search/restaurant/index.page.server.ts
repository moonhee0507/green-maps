import fetch from 'node-fetch';
import { API_URL } from '../../../renderer/CONSTANT_URL';
import type { PageContext } from '../../../renderer/types';
import type { Restaurant } from '../../../server/models/Restaurant';

type Params = {
    restaurantId: string;
};

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
    const { restaurantId } = pageContext.routeParams as Params;
    console.log('레스토랑 pageContext', pageContext);
    console.log('pageContext.routeParams', pageContext.routeParams);

    const { user } = pageContext;

    const res = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
        headers: {
            'Cache-Control': 'max-age=31536000',
        },
    });
    const data = (await res.json()) as { success: boolean; restaurantInfo: Restaurant; totalReview: number };

    if (data.success) {
        return {
            pageContext: {
                restaurantInfo: data.restaurantInfo,
                user: user,
            },
        };
    } else {
        return {
            pageContext: {
                restaurantInfo: {},
                user: user,
            },
        };
    }
}
