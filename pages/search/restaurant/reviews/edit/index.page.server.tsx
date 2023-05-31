import fetch from 'node-fetch';
import { API_URL } from '../../../../API_URL/api';
import type { PageContext } from '../../../../../renderer/types';
import type { Review } from '../../../../../server/models/Review';

type Params = {
    restaurantId: string;
    reviewId: string;
};

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext: PageContext) {
    const { reviewId } = pageContext.routeParams as Params;

    const res = await fetch(`${API_URL}/reviews/${reviewId}`);
    const data = (await res.json()) as { success: boolean; review: Review };

    if (data.success) {
        return {
            pageContext: {
                review: data.review,
            },
        };
    }
}

function prerender() {
    return [{ url: '/search/@restaurantId/reviews/@reviewId/edit' }];
}
