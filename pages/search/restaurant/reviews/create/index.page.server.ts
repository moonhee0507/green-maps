import fetch from 'node-fetch';
import { API_URL } from '../../../../API_URL/api';
import type { PageContext } from '../../../../../renderer/types';
import type { Restaurant } from '../../../../../server/models/Restaurant';

type Params = {
    restaurantId: string;
};

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext: PageContext) {
    const { restaurantId } = pageContext.routeParams as Params;

    const res = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
        headers: {
            'Cache-Control': 'max-age=31536000',
        },
    });

    const data = (await res.json()) as { success: boolean; restaurantInfo: Restaurant };

    if (data.success) {
        return {
            pageContext: {
                restaurantInfo: data.restaurantInfo,
            },
        };
    } else {
        return {
            pageContext: {
                restaurantInfo: {},
            },
        };
    }
}

function prerender() {
    return [{ url: '/search/@restaurantId/reviews/create' }];
}
