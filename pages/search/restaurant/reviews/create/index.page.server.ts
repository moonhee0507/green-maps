import fetch from 'node-fetch';
import type { PageContext } from '../../../../../renderer/types';
import type { Restaurant } from '../../../../../server/models/Restaurant';

type Params = {
    restaurantId: string;
};

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContext) {
    const { restaurantId } = pageContext.routeParams as Params;

    const res = await fetch(
        `${
            process.env.NODE_ENV === 'production' ? 'https://api.green-maps.site/v1' : 'https://localhost:5000/v1'
        }/restaurants/${restaurantId}`,
        {
            headers: {
                'Cache-Control': 'max-age=31536000',
            },
        }
    );

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
