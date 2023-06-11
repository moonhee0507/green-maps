import fetch from 'node-fetch';
import { API_URL } from '../../renderer/CONSTANT_URL';
import type { PageContext } from '../../renderer/types';
import type { Review } from '../../server/models/Review';

export async function onBeforeRender(pageContext: PageContext) {
    const { user } = pageContext;

    const res = await fetch(`${API_URL}/reviews/my?owner=${typeof user !== 'undefined' ? user.info?.userId : null}`);

    if (res.ok) {
        const data = (await res.json()) as { success: boolean; reviews: Review[] };

        return {
            pageContext: {
                user: user,
                reviews: data.reviews,
            },
        };
    }
}
