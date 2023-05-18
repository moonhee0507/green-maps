import fetch from 'node-fetch';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';
import { API_URL } from '../../API_URL/api';

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const { restaurantId } = pageContext.routeParams;
    const { token } = pageContext;

    const resRestaurantInfo = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
        headers: {
            'Cache-Control': 'max-age=31536000',
        },
    });
    const restaurantInfo = await resRestaurantInfo.json();

    const resReview = await fetch(`${API_URL}/reviews/${restaurantId}`);
    const reviews = await resReview.json();

    const pageProps = { restaurantInfo, reviews };

    return {
        pageContext: {
            pageProps,
        },
    };
}

function prerender() {
    return [{ url: '/search/@restaurantId' }];
}
