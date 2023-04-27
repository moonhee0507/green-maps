import fetch from 'node-fetch';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

export { onBeforeRender };
export { prerender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    const { restaurantId } = pageContext.routeParams;
    try {
        const resRestaurantInfo = await fetch(`http://localhost:5000/api/restaurants/${restaurantId}`, {
            headers: {
                'Cache-Control': 'max-age=31536000',
            },
        });
        const restaurantInfo = await resRestaurantInfo.json();

        const resReview = await fetch(`http://localhost:5000/api/reviews/${restaurantId}`);
        const reviews = await resReview.json();

        const pageProps = { restaurantInfo, reviews };

        return {
            pageContext: {
                pageProps,
            },
        };
    } catch (err) {
        console.error(err);
    }
}

function prerender() {
    return [{ url: '/search/@restaurantId' }];
}
